import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourVirtualComponent } from './tourvirtual.component'
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: 'tour', component: TourVirtualComponent }])
    ],
    declarations: [TourVirtualComponent],
    exports: [TourVirtualComponent],
})
export class TourVirtualModule {}