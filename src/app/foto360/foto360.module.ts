import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Foto360Component } from './foto360.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
    ],
    declarations: [Foto360Component],
    exports: [Foto360Component],

})
export class Foto360Module {}