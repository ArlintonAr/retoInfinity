import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'clients-table',
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.css'
})
export class ClientsTableComponent  implements OnInit{

  public clients:Client[]=[]
  constructor(private clientsService:ClientsService){

  }
  ngOnInit(): void {
    this.listClients()
  }





  listClients():void{
    this.clientsService.getClients()
    .subscribe((data)=>{
      this.clients=data.clients
      console.log(this.clients)
    })

  }

}
