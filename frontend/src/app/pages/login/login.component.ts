import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token = '';
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  login(log: NgForm){
    this.authService.login(log.value)
  }

}
