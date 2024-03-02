import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { HeaderIconComponent } from './header/header-icon/header-icon.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, TopMenuComponent, HeaderMenuComponent, HeaderIconComponent, SubMenuComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    Title
  ],
  exports: [HeaderComponent, FooterComponent, TopMenuComponent, SubMenuComponent, LoaderComponent]
})
export class ShareModule { }
