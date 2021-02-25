// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { ActivatedRoute, Router} from '@angular/router';
// import { PeopleService } from '../people.service';
// import { FormGroup, FormControl } from '@angular/forms';
//
// @Component({
//   selector: 'app-person-data-form',
//   templateUrl: './person-data-form.component.html',
//   styleUrls: ['./person-data-form.component.css']
// })
//
// export class PersonDataFormComponent implements OnInit {
//   // initialising an empty array for data
//   personData;
//   id;
//   formG: FormGroup;
//   @Output() onSubmit = new EventEmitter<any>();
//
//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private peopleService: PeopleService
//   ) {}
//
//   ngOnInit(): void {
//     this.id = this.route.snapshot.paramMap.get('id');
//     // console.log(this.id);
//
//     this.peopleService.fetchPeopleById(this.id)
//       .subscribe( personData  => {
//         this.personData  = personData ;
//         this.personData  = this.personData[0];
//         console.log(this.personData);
//
//
//         this.formG = new FormGroup({
//           _id: new FormControl(this.personData.id),
//           name: new FormControl(this.personData.name),
//           gender: new FormControl(this.personData.gender.id),
//           age: new FormControl(this.personData.age),
//           addressline1: new FormControl(this.personData.address.addressline1),
//           addressline2: new FormControl(this.personData.address.addressline2),
//           eircode: new FormControl(this.personData.address.eircode),
//         });
//       });
//   }
//
//   // making a json formatted in the desired manner
//   onButtonClicked(person): void {
//     console.log(this.personData);
//     const updateperson = {
//       _id: this.personData.id,
//       address: {
//         _id: this.personData.address.id,
//         addressline1: person.addressline1,
//         addressline2: person.addressline2,
//         eircode: person.eircode,
//       },
//       name: person.name,
//       age: person.age,
//       gender: this.personData.gender
//     };
//     console.log(person);
//     this.onSubmit.emit(updateperson);
//   }
//
// }
//
//
