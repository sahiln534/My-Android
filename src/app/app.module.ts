import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { sharedModule } from 'src/common/shared.module';
import { ComponentsModule } from 'src/components/components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    sharedModule,
    ComponentsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
