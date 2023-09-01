import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from "./components/footer/footer.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NavbarComponent,
  ],
})
export class SharedModule { }
