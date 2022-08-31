import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  contrasenia:string;

  constructor(private loginService: LoginService, private cookies: CookieService) { }

  ngOnInit(): void {
  }

  logear(){

    let user = {
      username: this.username,
      password: this.contrasenia,
    }

    this.loginService.login(user).subscribe(data =>{
      console.log(data);
      this.cookies.set("usuarioSesion", JSON.stringify(data.usuario));
      console.log(data.usuario)
      location.pathname = 'generate';
    },
    err =>{
      console.log(err)
    }
    )
  }

}
