import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { NoContentComponent } from './components/no-content/no-content.component';
import { OutputComponent } from './components/output/output.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SenderComponent } from './components/sender/sender.component';
import { CommunicationService } from './services/communication.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { RoutingComponent } from './components/routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    SenderComponent,
    ReceiverComponent,
    NoContentComponent,
    InputOutputComponent,
    RoutingComponent
],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
