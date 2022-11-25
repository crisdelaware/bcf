import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { CatalogoComponent } from '../components/catalogo/catalogo.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { CotizarComponent } from '../components/cotizar/cotizar.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'catalogo',
        component: CatalogoComponent
      },
      {
        path: 'cotizar',
        component: CotizarComponent
      },
      {
        path: 'contacto',
        component: ContactoComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
