import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  email: string = "test@gmail.com";
  password: string = "test123";
  message: string;

  constructor()
  {
    console.log("constructor of login");
  }

  onLoginClick()
  {
    if (this.email == "admin@gmail.com" && this.password == "manager")
    {
      this.message = "Successful Login";
    }
    else
    {
      this.message = "Invalid Login";
    }
  }
}


