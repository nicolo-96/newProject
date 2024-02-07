import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgramminComponent } from './programmin/programmin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramminComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule
  ],
  exports: [
    ProgramminComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
