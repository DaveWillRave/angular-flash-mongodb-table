import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-person-data-form',
  templateUrl: './person-data-form.component.html',
  styleUrls: ['./person-data-form.component.css']
})

export class PersonDataFormComponent implements OnInit {
  name = '';
  age = '';
  addressline1 = '';
  addressline2 = '';
  eircode = '';
  gender = '';
  id;

  @Input()  buttonText;
  @Input() currentName = '';
  @Input() currentAge = '';
  // @Input() currentHouse = '';
  @Input() currentEircode = '';
  @Input() currentGender = '';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter<any>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.name = this.currentName;
    this.age = this.currentAge;
    this.eircode = this.currentEircode;
    this.gender = this.currentGender;
  }

  // making a json formatted in the desired manner
  onButtonClicked(): void {
    const person = {
      _id: this.id,
      address: {
        _id: this.id,
        addressline1: this.addressline1,
        addressline2: this.addressline2,
        eircode: this.eircode,
      },
      name: this.name,
      age: this.age,
      gender: this.gender
    };

    this.onSubmit.emit(person);
  }
}


