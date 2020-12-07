import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})
export class NavbarModule {}
