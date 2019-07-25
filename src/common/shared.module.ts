import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatSidenavModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatSidenavModule
    ]
})
export class sharedModule {

}