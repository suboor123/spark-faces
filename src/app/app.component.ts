import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "Welcome";
  path : string = "assets/home.jpg";
  username: string = "Scott";

  login()
  {
    console.log("login called");
    console.log(this.username);
  }
}
