import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AccountModule } from "./account/account.module";
import { QuestionsModule } from "./questions/questions.module";
import { HomeComponent } from './home/home.component';
import { QuestionsIndexComponent } from './questions-index/questions-index.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

var myroutes: Routes = [
  { path: "home/index", component: HomeComponent },
  { path: "home/login", component: LoginComponent },
  { path: "home/register", component: RegisterComponent },
  { path: "questions/index", component: QuestionsIndexComponent },
  { path: "questions/new", component: QuestionsNewComponent },
  { path: "questions/view", component: QuestionsViewComponent },
];
var myroutes2 = RouterModule.forRoot(myroutes);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, AccountModule, 
    QuestionsModule, myroutes2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
