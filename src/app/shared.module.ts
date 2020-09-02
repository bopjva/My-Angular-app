import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import { homeReducer } from './store/home.reducer';
import { appReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,
    HttpClientModule,
    
  ],
})
export class SharedModule {}
