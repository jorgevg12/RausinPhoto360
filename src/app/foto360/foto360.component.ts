import { Component, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import { PanoViewer } from '@egjs/view360';
import { PICS } from './pics';
import { Pic } from './pic'
declare var AOS;
@Component({
  selector: 'isi-foto360',
  templateUrl: './foto360.component.html',
  styleUrls: ['./foto360.component.scss']
})
export class Foto360Component implements AfterViewInit {

  @ViewChild('myPanoViewer') myPanoViewer;

  pics: Pic[] = PICS;
  selectedPic: Pic;
  intialPic: Pic =  PICS[0];
  _pano: PanoViewer;
  descripcion = PICS[0].description;
  overgray = 'overgray';
  clicdrag = 'clicdrag';
  
  

  constructor(){

  }
  
  ngAfterViewInit() {

    this._pano = new PanoViewer(
      this.myPanoViewer.nativeElement,
      {
        image: this.intialPic.imagen,
        useZoom: false,
      
        });
    //this.onSelect(this.intialPic);
  }

  onSelect(pic: any){
    if(this.intialPic.imagen != pic.imagen){
    this._pano.setImage(pic.imagen);
    this.intialPic = pic;
    this.descripcion = pic.description;
    }
    
  }

  @HostListener('window:resize', ['$event'])
    onresize(event){
        this._pano.updateViewportDimensions();
        
    }

  onClick(){
    this.overgray = 'opacidad0o';
    this.clicdrag = 'opacidad0c';
  }
    
}
