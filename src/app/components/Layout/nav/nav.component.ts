import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  active:boolean = false;

  user:any;

  constructor(private cookies: CookieService) { }

  ngOnInit(): void {

    if(!this.cookies.get("usuarioSesion")){
      location.pathname = "";
    }else{
      this.user = JSON.parse(this.cookies.get("usuarioSesion"));
      console.log(this.user);
      console.log(this.user.id_usuario);
  }

    
  }

  cerrarSesion(){
    this.cookies.delete("usuarioSesion");
    location.pathname = "";
  }
  
  toggleOptions():void { this.active= !this.active }
}
