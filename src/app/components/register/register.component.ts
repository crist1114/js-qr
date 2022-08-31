import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username:string;
  password:string;
  correo:string;
  name:string;

  constructor(private registroService: RegisterService) { }

  ngOnInit(): void {

  }

  registrar(){

    let user = {
      username: this.username,
      password: this.password,
      email: this.correo,
      name: this.name,
    }
    // console.log(user)
    this.registroService.registrar(user).subscribe(data => {
      
      console.log(data);
      location.pathname = '';

    }, err => {
      
      alert('Ha ocurrido un error');
     });

  }

}
