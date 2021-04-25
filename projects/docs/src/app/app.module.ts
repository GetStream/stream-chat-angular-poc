import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { MessageListDocsComponent } from './message-list-docs/message-list-docs.component';
import { StreamChatAngularModule } from 'projects/stream-chat-angular/src/public-api';
import {MatRippleModule} from '@angular/material/core';

const routes: Routes = [
  { path: 'message-list-docs', component: MessageListDocsComponent },
  { path: 'second-component', component: SecondComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MessageListDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatListModule,
    MatRippleModule,
    StreamChatAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
