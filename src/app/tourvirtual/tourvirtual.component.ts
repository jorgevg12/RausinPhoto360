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
    if(tour == 'infantas') window.open('https://view.ricohtours.com/aaf1ba0f-8631-49d9-8fda-3ace90065eb9');
    if(tour == 'lemos') window.open('https://view.ricohtours.com/38271dfd-3917-4100-953b-6f427ebd08c7');
}

}