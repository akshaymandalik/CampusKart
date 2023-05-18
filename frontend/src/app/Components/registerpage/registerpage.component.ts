import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@viit.ac.in$'
            ),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', [Validators.required]],
        address: ['', [Validators.required]],
      },
      {
        validators: PasswordsMatchValidator('password', 'confirmPassword'),
      }
    );

    this.activatedRoute.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'];
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get address() {
    return this.registerForm.get('address');
  }

  get fc() {
    return this.registerForm.controls;
  }

  onsubmit() {
    this.isSubmitted = true;
    console.log(this.address);

    if (this.registerForm.invalid) {
      console.log('form invalid');
      return;
    }

    const user: IUserRegister = {
      name: this.fc.name?.value || '',
      email: this.fc.email?.value || '',
      password: this.fc.password?.value || '',
      confirmPassword: this.fc.confirmPassword?.value || '',
      address: this.fc.address?.value || '',
    };

    this.userService.register(user).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
