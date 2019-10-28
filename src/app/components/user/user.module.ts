import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './add/user-add.component';
import { AddButtonComponent } from './add/add-button/add-button.component';
import { FilterUserComponent } from './user-list/filter-user/filter-user.component';

import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
    AddButtonComponent,
    FilterUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  entryComponents: [
    UserAddComponent,
    UserListComponent
  ]
})
export class UserModule { }
