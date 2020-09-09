import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateComponent } from '../user/create/create.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchResultsComponent } from './search-results/search-results/search-results.component';
import { ResultsComponent } from './search-results/results/results/results.component';

@NgModule({
  declarations: [CreateComponent, SearchComponent, EditComponent, DeleteComponent, ResultsComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
