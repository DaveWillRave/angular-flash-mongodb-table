import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PeopleService } from '../people.service';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent implements OnInit {
  // initialising an empty array for data
  personData;
  id;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {

    this.form = new FormGroup({
          // id: new FormControl('', Validators.required),
          name: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('[\\w\\-\\s\\/]+'),
          ])),
          gender: new FormControl('', Validators.required),
          age: new FormControl('', Validators.compose([
            Validators.required,
            this.agevalid
          ])),
          addressline1: new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(20),
          ])),
          addressline2: new FormControl('', Validators.compose([
            Validators.maxLength(20),
            Validators.required,
          ])),
          eircode: new FormControl('', Validators.compose([
            Validators.maxLength(6)
          ])),
    });
  }

  // tslint:disable-next-line:typedef
  agevalid(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const age = parseInt(control.value, 10);
    const minAge = 18;
    const maxAge = 150;
    if (age >= minAge && age <= maxAge){
      return null;
    } else {
      return { age: {
            min: minAge,
            max: maxAge,
          }};
    }
  }

  // making a json formatted in the desired manner
  onSubmit(person): void {
    console.log(this.personData);
    const updateperson = {
      _id: null,
      address: {
        _id: null,
        addressline1: person.addressline1,
        addressline2: person.addressline2,
        eircode: person.eircode,
      },
      name: person.name,
      age: person.age,
      gender: person.gender
    };
    console.log(person);
    this.peopleService.addPeople(updateperson)
      .subscribe(() => {
        this.router.navigateByUrl('/table');
      });

  }

}
