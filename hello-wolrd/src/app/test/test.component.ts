import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  public name = "SK";
  public name1 = "Aman"

  greetUSER() {
    return "welcome" + this.name;
  }
  public hasError = false;
  // public hasError = true;

  public ColHighlight = 'orange';
  public greeting = " ";

  public headingStyle = {
    color: 'blue',
    fontStyle: 'italics',
    fontSize: '32px'
  }

  OnClick(event: any) {
    console.log(event);
    this.greeting = "Radhe Radhe";
    this.greeting = event.type;
  }
}
