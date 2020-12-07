import { Component, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { PanoViewer } from "@egjs/view360";
import * as AOS from 'aos'
@Component({
    selector:'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    
})
export class HomeComponent implements AfterViewInit{
    
    @ViewChild('myPanoViewer1') myPanoViewer1;

    _pano1: PanoViewer;
    
    
    ngAfterViewInit() {
        AOS.init()
        this._pano1 = new PanoViewer(
            this.myPanoViewer1.nativeElement,
            {
                image: 'assets/images/Rocosa.jpg',
                useZoom: false,
                gyroMode: "none",
                yaw: -180,
                touchDirection: 1,

            }
        )
        
           //autorotation
           let degrees = setInterval(() => {
            
            degrees = degrees + 0.2;
            
            if (degrees === 179.8){
                degrees = -180;
            }
            this._pano1.lookAt({yaw: degrees}, 0);
            
            
        }, 60);
 
    }
    @HostListener('window:resize', ['$event'])
    onresize(event){
        this._pano1.updateViewportDimensions();
        
    }
}
