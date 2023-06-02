import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './Pages/header-component/header-component.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductosComponent } from './Pages/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

