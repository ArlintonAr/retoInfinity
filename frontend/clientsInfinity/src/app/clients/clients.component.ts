import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';
import { Client } from './interfaces/client';
import { ClientPost } from './interfaces/clientsPost';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  public token:string=""

  public id: number = 0
  public name: string = ""
  public lastName: string = ""
  public email: string = ""
  public phoneNumber: number = 0
  public address: string = ""



  constructor(
    private serviceClient: ClientsService


  ) {

  }


  addClient() {
    const newClient: ClientPost = {
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      address: this.address,
      phoneNumber: this.phoneNumber
    }
    this.serviceClient.postClients(newClient)
    .subscribe(client => {
        console.log(newClient)
        console.log(client)
      })
  }

  generateToken() {
    this.serviceClient.generateToken()
    .subscribe(
      (response: any) => {
        this.token = response.value;
        console.log(this.token)
      }
    )
  }
}

