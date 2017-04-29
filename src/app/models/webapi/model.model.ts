/**
 * This file is generated by the SwaggerTSGenerator.
 * Do not edit.
*/
/* tslint:disable */

import { Validators, FormControl, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { minValueValidator, maxValueValidator, enumValidator } from './validators';
import { BaseModel } from './base-model';

import { hairColor } from './enums';
import { SubModel } from './sub-model.model';

export interface IModel {
    name: string;
    email?: string;
    age: number;
    balance?: number;
    dob?: Date;
    hairColor?: hairColor;
    integers?: Array<number>;
    doubles?: Array<number>;
    subModels?: Array<SubModel>;
}

export class Model extends BaseModel implements IModel {
    name: string;
    email: string;
    age: number;
    balance: number;
    dob: Date;
    hairColor: hairColor;
    integers: Array<number>;
    doubles: Array<number>;
    subModels: Array<SubModel>;

    /** 
     * constructor
     * @param values Can be used to set a webapi response to this newly constructed model   
    */
    constructor(values?: any) {
        super();
        this.integers = new Array<number>();
        this.doubles = new Array<number>();
        this.subModels = new Array<SubModel>();
        if (values) {
            this.setValues(values);
        }
    }

    /** 
     * set the values.
     * @param values Can be used to set a webapi response to this newly constructed model
    */
    setValues(values: any): void {
        if (values) {
            this.name = values.name;
            this.email = values.email;
            this.age = values.age;
            this.balance = values.balance;
            this.dob = values.dob;
            this.hairColor = values.hairColor;
            this.fillModelArray<number>(this, 'integers', values.integers);
            this.fillModelArray<number>(this, 'doubles', values.doubles);
            this.fillModelArray<SubModel>(this, 'subModels', values.subModels, SubModel);
        }
    }

    protected getFormGroup(): FormGroup {
        if (!this._formGroup) {
            this._formGroup = new FormGroup({
                name: new FormControl(this.name, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[A-Z]+$'), ]),
                email: new FormControl(this.email),
                age: new FormControl(this.age, [Validators.required, maxValueValidator(120), ]),
                balance: new FormControl(this.balance, [minValueValidator(-100), maxValueValidator(200), ]),
                dob: new FormControl(this.dob),
                hairColor: new FormControl(this.hairColor, [enumValidator(hairColor), ]),
                integers: new FormArray([]),
                doubles: new FormArray([]),
                subModels: new FormArray([]),
            });
            // generate FormArray control elements
            this.fillFormArray<number>('integers', this.integers);
            // generate FormArray control elements
            this.fillFormArray<number>('doubles', this.doubles);
            // generate FormArray control elements
            this.fillFormArray<SubModel>('subModels', this.subModels, SubModel);
        }
        return this._formGroup;
    }

    setFormGroupValues() {
        if (this._formGroup) {
            this._formGroup.controls['name'].setValue(this.name);
            this._formGroup.controls['email'].setValue(this.email);
            this._formGroup.controls['age'].setValue(this.age);
            this._formGroup.controls['balance'].setValue(this.balance);
            this._formGroup.controls['dob'].setValue(this.dob);
            this._formGroup.controls['hairColor'].setValue(this.hairColor);
            this.fillModelArray<number>(this, 'integers', this.integers);
            this.fillModelArray<number>(this, 'doubles', this.doubles);
            this.fillModelArray<SubModel>(this, 'subModels', this.subModels, SubModel);
        }
    }
}