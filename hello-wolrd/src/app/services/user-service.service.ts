import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  users() {
    return [
      {
        name: 'sameer', age: 19, email: 'sk@srtmail.com'
      },
      { name: 'Ram', age: 20, email: 'ram@srtmail.com' },
    ]
  }
}
