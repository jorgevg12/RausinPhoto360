import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component'
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: 'uploader', component: UploaderComponent }])
    ],
    declarations: [UploaderComponent],
    exports: [UploaderComponent],
})
export class UploaderModule {}