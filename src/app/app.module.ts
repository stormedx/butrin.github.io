import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorSwatchComponent } from './color-swatch/color-swatch.component';
import { CopiedMessageComponent } from './copied-message/copied-message.component';
import { ModalService } from './modal-content/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    ColorSwatchComponent,
    CopiedMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
