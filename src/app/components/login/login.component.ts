import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users/users.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: string = "Login";
  isShow: boolean;
  email: string = "";
  password: string = "";
  verifyFormData: FormGroup;
  returnClient: boolean = false;

  constructor(
    public usersService: UsersService,
    public fb: FormBuilder,
  ) {
    this.verifyFormData = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {
    this.isShow = false;
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }

  getToVerifyClient() {
    return this.usersService.getUsers().subscribe((user) => {
      this.verifyFormData = this.fb.group({
        email: [user.email],
        password: [user.password]
      })
      if(user[0].email === this.email && user[0].password === this.password) {
        this.returnClient = true;

      } else {
        this.returnClient = false;
      }
      this.email = "";
      this.password = "";

      return this.returnClient;
    })
  }
}
