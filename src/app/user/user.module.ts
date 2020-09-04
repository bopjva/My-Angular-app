import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [CreateComponent, SearchComponent, EditComponent, DeleteComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
