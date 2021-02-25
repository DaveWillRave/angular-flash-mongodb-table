import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import { PersonDataFormComponent} from '../person-data-form/person-data-form.component';


@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})

export class EditPersonComponent implements OnInit {
  id;
  name = 'Hi';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.peopleService.fetchPeopleById(this.id);
  }

  onSubmit(person): void {
    if (confirm(`Are you sure you want to submit these changes to the database?`)) {
      this.peopleService.editPeople(person)
        .subscribe(() => {
          this.router.navigateByUrl(`/table`);
        });
      console.log(`Edit was saved to the database.`);
    } else {
      console.log(`Edit was not saved to the database.`);
    }

  }
}
