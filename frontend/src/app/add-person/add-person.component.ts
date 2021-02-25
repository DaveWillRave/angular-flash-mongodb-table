import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  name = '';
  age = '';
  address = '';
  eircode = '';
  gender = '';

  constructor(
    private router: Router,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(person): void {
    alert('Creating a new listing');
    this.peopleService.addPeople(person)
      .subscribe(() => {
        this.router.navigateByUrl('/table');
      });
  }

}
