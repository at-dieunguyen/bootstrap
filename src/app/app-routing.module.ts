import { SpinnerComponent } from './spinner/spinner.component';
import { ProgressComponent } from './progress/progress.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';
import { BadgeComponent } from './badge/badge.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'badge',
    component: BadgeComponent
  },
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'spinner',
    component: SpinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
