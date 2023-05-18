import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {

  }
  registerUser(event) {

    event.preventDefault()
    const target = event.target
    const firstname = target.querySelector("#firstname").value;
    const lastname = target.querySelector("#lastname").value;
    const email = target.querySelector("#email").value;
    const password = target.querySelector("#password").value;
    const cpassword = target.querySelector("#cpassword").value;




  }

}


