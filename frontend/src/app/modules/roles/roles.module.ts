import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { CreateRolesComponent } from './create-roles/create-roles.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { DeleteRolesComponent } from './delete-roles/delete-roles.component';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "src/app/_metronic/shared/shared.module";
import { CrudModule } from "../crud/crud.module";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";


@NgModule({
  declarations: [
    RolesComponent,
    CreateRolesComponent,
    EditRolesComponent,
    ListRolesComponent,
    DeleteRolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    NgbPaginationModule,
    InlineSVGModule,
    SharedModule,
    CrudModule,
    SweetAlert2Module
]
})
export class RolesModule { }
