import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  {


  constructor( private router: Router ,private fb: FormBuilder, private authService: AuthService ) { }

  @Input('miFormulario')miFormulario = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  save() {
    this.authService.signupNewUser(this.miFormulario.value)
      .subscribe(resp => {
        console.log('Respuesta', resp)
        this.router.navigateByUrl('dashboard')
      });
      this.miFormulario.reset();
  }
}
