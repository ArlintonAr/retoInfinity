import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';

import { FormsModule } from '@angular/forms';
import { TokensTableComponent } from './components/tokens-table/tokens-table.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientsTableComponent,
    TokensTableComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    ClientsComponent
  ]
})
export class ClientsModule { }
