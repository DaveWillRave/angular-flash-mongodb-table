import {OnInit, AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleService} from '../people.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

const USER_SCHEMA = {
  name: 'text',
  gender: 'text',
  house: 'text',
  age: 'number'
};


@Component(
  {
    selector: 'app-table',
    styleUrls: ['table.component.css'],
    templateUrl: 'table.component.html',
  })


export class TableComponent implements OnInit {

  tableDataSrc: any;
  tableCols: string[] = ['name', 'gender', 'address', 'age', '$$edit', '$$delete'];
  personData = [];


  constructor(
    private peopleService: PeopleService,
    private router: Router) {
  }

  // This get data method is now returning an observable and no longer an array
  // whenever get data observable produces and event the subscribe gets called
  // callback is called with person data that it got from api and will set person variables on table
  ngOnInit(): void {

    // this.tableDataSrc = new MatTableDataSource(this.tableData); << for arrays
    this.peopleService.fetchPeople()
      .subscribe(personData => this.personData = personData);
  }

// passing the the user id but were calling the data we're running through elements'
  onDeleteClicked(elementId: string, elementName: string): void {
    if (confirm(`Are you sure you want to delete ${elementName} from the database?`)) {
      this.peopleService.deletePeople(elementId)
        .subscribe(() => {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
            this.router.navigate(['/table']));
        });
      console.log(`${elementName} was saved to the database.`);
    } else {
      console.log(`${elementName} was not saved to the database.`);
    }

  }
}

