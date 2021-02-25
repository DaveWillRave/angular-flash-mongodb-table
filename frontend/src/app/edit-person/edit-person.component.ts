import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})

export class EditPersonComponent implements OnInit {
  id;
  formGo: FormGroup;
  personData;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.peopleService.fetchPeopleById(this.id);

    this.formGo = new FormGroup({
      _id: new FormControl(this.personData.id),
      name: new FormControl(this.personData.name),
      gender: new FormControl(this.personData.gender.id),
      age: new FormControl(this.personData.age),
      addressline1: new FormControl(this.personData.address.addressline1),
      addressline2: new FormControl(this.personData.address.addressline2),
      eircode: new FormControl(this.personData.address.eircode),
    });
  }

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
