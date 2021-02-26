import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './people.service';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app-routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { AddPersonComponent } from './add-person/add-person.component';
import {  MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule} from '@angular/material/form-field';
import { EditPersonComponent } from './edit-person/edit-person.component';


/*
  This code will be applied to a class
 */

@NgModule({
  /*
  What directives components and pipes are available to my module
  */
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    TableLayoutComponent,
    AddPersonComponent,
    EditPersonComponent
  ],
  /*
  Importing all the directives and pipes needed
   */
  // entryComponents:[TableComponent],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  /*
    For a root module which will let angular know which components will be the
    starting point for the bootstrap. i.e Entry point for the code.
   */
  providers: [ PeopleService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
