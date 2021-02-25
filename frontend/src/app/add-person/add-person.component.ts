import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PeopleService } from '../people.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent implements OnInit {
  // initialising an empty array for data
  personData;
  id;
  formG: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.formG = new FormGroup({
          _id: new FormControl(),
          name: new FormControl(),
          gender: new FormControl(),
          age: new FormControl(),
          addressline1: new FormControl(),
          addressline2: new FormControl(),
          eircode: new FormControl(),
    });
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
