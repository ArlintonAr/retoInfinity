import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  public email: string = ""
  public password: string = ""
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  // Método para redireccionar a la página de agregar clientes
  redirectToClientesPage() {
    this.router.navigate(['clients']);
  }

  login(): void {
    console.log(this.email)
    this.loginService.loginPost(this.email, this.password)
    .subscribe((response:any) => {
      console.log(response)
      if(response.token){
        localStorage.setItem('token',response.token)
        this.redirectToClientesPage()
      }
    })
      }

  }
