import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss'],
})
export class CotizarComponent  {

  costoTotal: any;
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      panel_type: ['', Validators.required],
      cantidad: ['', Validators.required],
      instalacion: ['', Validators.required]
    });
  }

  cotizar() {
      this.costoTotal = (this.form.value.panel_type*this.form.value.cantidad)+Number(this.form.value.instalacion)
      console.log(this.costoTotal);
    }

  }
