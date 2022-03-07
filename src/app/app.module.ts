import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SpeakerComponent } from './speaker/speaker.component';

import { FormsModule } from '@angular/forms';
import { PowerToxPipe } from './power-tox.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import { HighlightDirective } from './highlight.directive';
import { SharedModule } from './shared/shared.module';
import { SpeakerDetailsComponent } from './speaker/speaker-details/speaker-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestModule } from './test/test.module';


@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    PowerToxPipe,
    StringConvertPipe,
    ArraySplicePipe,
    HighlightDirective,
    SpeakerDetailsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    TestModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
