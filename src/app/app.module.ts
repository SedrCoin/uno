import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SchemeComponent } from './components/scheme/scheme.component';
import { CardComponent } from './components/scheme/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddPlayerModalComponent } from './components/add-player-modal/add-player-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SchemeComponent,
		CardComponent,
		AddPlayerModalComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
