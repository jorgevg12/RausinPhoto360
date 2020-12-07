import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { Foto360Module } from './foto360/foto360.module';
import { TourVirtualModule } from './tourvirtual/tourvirtual.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header360Module } from './header360/header360.module';
import { UploaderModule } from './uploader/uploader.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'uploader', loadChildren: () => import ('./uploader/uploader.module').then(m => m.UploaderModule)},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'}),
    NavbarModule,
    FooterModule,
    Foto360Module,
    Header360Module,
    TourVirtualModule,
    UploaderModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
