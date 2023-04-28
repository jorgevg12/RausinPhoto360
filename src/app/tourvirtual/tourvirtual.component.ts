import { Component } from '@angular/core';
import { TOURS } from './tours';
import { Tour } from './tour';
import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';

@Component({
    selector: 'tour-virtual-sel',
    templateUrl: './tourvirtual.component.html',
    styleUrls: ['./tourvirtual.component.scss'],
})
export class TourVirtualComponent {

tours: Tour[] = TOURS;

onSelect(tour){
    if(tour == 'arganzuelas') window.open('https://vt.plushglobalmedia.com/tour/TT17KVHE81');
    if(tour == 'lemos') window.open('https://vt.plushglobalmedia.com/tour/TT17KL14LZ');
}

}