import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormControl } from '@angular/forms';

// const
import { GENDERS } from './constants/gender.constant';
import { JOB_TYPES } from './constants/job-type.constant';
// services
import { AddService } from './add.service';
// interfaces
import { UserInterface } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  public editable = true;
  public user: UserInterface;

  public genders = GENDERS;
  public jobTypes = JOB_TYPES;
  public form: FormGroup;

  private id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private addService: AddService) {
  }

  public ngOnInit(): void {
    this._buildForm();

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = +params.get('id');
      this.editable = !this.id;
      // tslint:disable-next-line: no-unused-expression
      this.id && this._getUser();
      this._toggleForm();
    });

    this._formUpdateValue();
  }

  public getErrorMessage(controll: FormControl): string {
    return controll.hasError('required') ? 'You must enter a value'
      : controll.hasError('email') ? 'Not a valid email' : '';
  }

  public clear(): void {
    this.form.reset();
  }

  public submit(): void {
    this._validete();
    if (this.form.valid) {
      this.user
        ? this._updateUser()
        : this._addUser();
    }
  }

  public edit(): void {
    this.editable = true;
    this._toggleForm();
  }

  public delete(): void {
    this.addService.deleteUser(this.id)
      .subscribe({
        next: (deleted) => {
          if (deleted) {
            this.user = null;
            this.form.reset();
            this.router.navigate(['/user/add']);
          }
        }
      });
  }

  private _addUser(): void {
    this.addService.addUser(this.form.value).subscribe({
      next: (user) => {
        this._updateData(user);
      }
    });
  }

  private _updateUser(): void {
    this.addService.updateUser(this.form.value).subscribe({
      next: (user) => {
        this._updateData(user);
      }
    });
  }

  _updateData(user: UserInterface) {
    if (user) {
      this.user = user;
      this.editable = false;
      this._formUpdateValue();
      this._toggleForm();
    }
  }

  private _getUser(): void {
    this.addService.getUser(this.id).subscribe({
      next: (user) => {
        if (user) {
          this.user = user;
          this.editable = false;
          this._formUpdateValue();
          this._toggleForm();
        }
      }
    });
  }

  private _buildForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      gender: new FormControl(null),
      sameDate: new FormControl(new Date()),
      email: new FormControl('', [Validators.required, Validators.email]),
      lookingForJob: new FormControl(true),
      jobType: new FormControl('inOffice'),
    });
  }

  private _validete(): void {
    Object.values(this.form.controls)
      .forEach((e) => e.markAsTouched());
  }

  private _toggleForm(): void {
    this.form[this.editable ? 'enable' : 'disable']();
  }

  private _formUpdateValue(): void {
    if (this.user) {
      this.form.patchValue(this.user);
    }
  }

}
