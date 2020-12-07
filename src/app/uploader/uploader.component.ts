import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';


@Component({
  selector: 'isi-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  fileToUpload: any ;
  endpoint = 'https://server.rausinphoto360.com/';
  localEndpoint = 'http://localhost:3000/';
  listTours;
  item;
  link;
  embed;
  linkbox = 'linkbox0';
  fileName;
  file;
  archivo = {
    name: '',
    encodedFile: null,
  };
  statusSubida; //data response
  statusDeSubida = 'statusDeSubida0'; //clase css

  fileChangeEvent(e: any){
    this.archivo.name = e.target.files[0].name;
    this.archivo.encodedFile = e.target.files[0];
    
}

   uploadFileToActivity(){
    
    var reader = new FileReader()
    reader.readAsDataURL(this.archivo.encodedFile); //codea a base64
    reader.onload = () => {
    this.archivo.encodedFile = reader.result;  
    this.postFile(); 

    };
  } 


    postFile() {
      this.statusSubida = 'Subiendo...';
      this.statusDeSubida = 'StatusDeSubida'; //Aplica la clase
      return this.http.post(this.endpoint, this.archivo).subscribe(
        data => { this.statusSubida = 'Subido con éxito'; console.log(JSON.stringify(data)); }, 
        error => {console.log(error)});
      
      
    }
  
  ngOnInit(): void {
  
    this.http.get(this.endpoint).subscribe(
      responseData => {this.listTours = responseData; console.log(responseData)},
      error => {console.log('error', error)});
    
  
  }
  
  linkGen(item){
    this.link = this.endpoint +'tours/' + item + '/' + item + '.html';
    this.linkbox = 'linkbox';
    console.log(this.link);
  }

  embedTour(item){
    var src = this.endpoint + item + '/' + item + '.html';
    this.embed= 'iframe style="width: xx; height: xx;" src="' + src + '"></iframe>';
    console.log("embed: ", this.embed);
  }

  deleteTour(item){


  }

  closeLink(){
  this.linkbox = 'linkbox0';  
  }
  

}
