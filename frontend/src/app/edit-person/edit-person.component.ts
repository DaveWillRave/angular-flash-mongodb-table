import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})

export class EditPersonComponent implements OnInit {
  id: string;
  personData;
  editForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.peopleService.fetchPeopleById(this.id)
      .subscribe( personData  => {
        this.personData = personData;
        this.personData = this.personData[0];
        console.log(this.personData);
        console.log('The id expected is : ' + this.personData.id);

        this.editForm = new FormGroup({
          _id: new FormControl(this.personData.id, Validators.required),
          name: new FormControl(this.personData.name, Validators.compose([
            Validators.required,
            Validators.pattern('[\\w\\-\\s\\/]+'),
          ])),
          gender: new FormControl(this.personData.gender, Validators.required),
          age: new FormControl(this.personData.age, Validators.compose([
            Validators.required,
            this.agevalid
          ])),
          addressline1: new FormControl(this.personData.address.addressline1, Validators.required),
          addressline2: new FormControl(this.personData.address.addressline2, Validators.compose([
            Validators.maxLength(20),
            Validators.required])),
          eircode: new FormControl(this.personData.address.eircode, Validators.compose([
            Validators.maxLength(6)
          ]))
        });
      });
  }

  agevalid(control: FormControl) {
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

  onSubmit(person): void {
    console.log(this.personData);
    const updateperson = {
      _id: this.personData.id,
      address: {
        _id: this.personData.address.id,
        addressline1: person.addressline1,
        addressline2: person.addressline2,
        eircode: person.eircode,
      },
      name: person.name,
      age: person.age,
      gender: person.gender
    };


    if (confirm(`Are you sure you want to submit these changes to the database?`)) {
      this.peopleService.editPeople(updateperson)
        .subscribe(() => {
          this.router.navigateByUrl(`/table`);
        });
      console.log(`Edit was saved to the database.`);
    } else {
      console.log(`Edit was not saved to the database.`);
    }

  }
}
