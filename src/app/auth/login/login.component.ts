import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  hayError: boolean = false

  constructor( private fb: FormBuilder  ,private authService: AuthService, private router: Router ) { }

  ngOnInit() {}


  miFormulario = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  login() {
    this.authService.signInWithPassword(this.miFormulario.value)
      .subscribe(resp => {
        this.router.navigate(['/dashboard'])
        // console.log('Respuesta', resp)
        // console.log(`Bienvenido ${this.miFormulario.value.email}`)
      }, ({ error  }: any) => {
        this.hayError = error.error.message
        console.log(this.hayError)
      })
      this.miFormulario.reset();
  }

}
