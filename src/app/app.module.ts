import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

///////////////////// rutas
import { APP_ROUTER } from './app.routes';
////////////////// Modulos
import { PagesModule } from './pages/pages.module';
////// Tenporal
import { FormsModule } from '@angular/forms';


//// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
