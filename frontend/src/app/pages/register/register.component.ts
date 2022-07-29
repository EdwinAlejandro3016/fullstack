import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    password: ''
  }
  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit(): void {
  }
  createUser(form: NgForm){
      this.usersService.create(form.value)
  }
}
