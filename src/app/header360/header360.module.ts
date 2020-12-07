import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header360Component } from './header360.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: 'foto360', component: Header360Component }])
    ],
    declarations: [Header360Component],
    exports: [Header360Component],

})
export class Header360Module {}