import { Component } from '@angular/core';

@Component({
        selector: 'isi-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss'],
})

export class FooterComponent {

        public onClick(elementId: string): void{
                var element = document.getElementById(elementId)
                if(element){
                    if (elementId != 'home') element.scrollIntoView({behavior:'smooth'});
                    else { 
                        window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                        });
                    }
                }
            }
        onSelect(id: string){
                switch (id) {
                        case 'salalemos':
                                window.open('http://rausinphoto360.com/SalaCarlos%20Lemos');
                                break;
                        case 'mail':
                                window.location.href = "mailto:mail@example.org";
                        case 'fb':
                                window.open('https://facebook.com');
                        default:
                                break;
                }

        }

}