import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule {
  constructor(id: String,  firstName: String, lastName: String, phoneNumber: String,  email: String, position: String, image: String ,prefix?: String, homeNumber?: String) {
    this.id = id;
    this.firstName = firstName;
    this.email= email;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.position = position;
    this.image = image;
    this.prefix = prefix;
    this.homeNumber = homeNumber;
  }
  id: String;
  prefix?: String;
  firstName: String;
  lastName:String;
  phoneNumber: String;
  homeNumber?: String;
  email:String;
  position: String;
  image: String;


 }
