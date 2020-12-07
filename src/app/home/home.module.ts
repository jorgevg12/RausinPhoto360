import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from '../footer/footer.module';
import { NavbarModule } from '../navbar/navbar.module';
import { Foto360Module } from '../foto360/foto360.module';
import { Header360Module } from '../header360/header360.module';
import { TourVirtualModule } from '../tourvirtual/tourvirtual.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HomeComponent }]),
        NavbarModule,
        FooterModule,
        Foto360Module,
        Header360Module,
        TourVirtualModule,
      ],
    declarations: [HomeComponent],
})
export class HomeModule {}
