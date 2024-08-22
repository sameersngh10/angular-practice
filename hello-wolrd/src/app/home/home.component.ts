import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any;
  constructor(private service: UserServiceService) {
    console.log("userservice :", service.users());

    //this.userlist=service.users();
  }

  public myId = "testId"
  // propertty is isDisabled
  public isDisabled = false;
  public myMail = "mailAdd";
  public isDisable = true;

  public SuccessClass = "text-success";

  public dangerClass = "text-danger";

  public SpecialClass = "text-special";

  public hasError = false;
  public isSpecial = true;

  public MessageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial

  }
}
