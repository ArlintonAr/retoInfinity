import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Token } from '../../interfaces/token';

@Component({
  selector: 'tokens-table',
  templateUrl: './tokens-table.component.html',
  styleUrl: './tokens-table.component.css'
})
export class TokensTableComponent {


  public tokens:Token[]=[]

  constructor(private clientsService:ClientsService){

  }
  ngOnInit(): void {
    this.listClients()

  }


  listClients():void{
    this.clientsService.getTokens()
    .subscribe((data)=>{
      this.tokens=data.tokens
      console.log(this.tokens)
    })

  }


}
