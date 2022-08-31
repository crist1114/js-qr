import { Component, OnInit } from '@angular/core';
import { GenerateService } from '../../service/generate.service';
import { CookieService } from 'ngx-cookie-service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {


  url:string;
  user:any;
  img = 'https://www.ocu.org/-/media/ta/images/qr-code.png?rev=2e1cc496-40d9-4e21-a7fb-9e2c76d6a288&hash=AF7C881FCFD0CBDA00B860726B5E340B&mw=960';
  

  constructor(private generateService: GenerateService,private cookies: CookieService) { 
  }

  ngOnInit(): void {
    
  }

  generate(){
    let generate = {
      url: this.url,
      user:  JSON.parse(this.cookies.get("usuarioSesion")).id_usuario,
    }

    console.log(this.user)
    
    this.generateService.get_generar_qr(generate).subscribe(data =>{
      console.log(data);
      this.img = data.qr_code['url_code']
      console.log(this.img)
    },
    err =>{
      console.log(err)
    }
    )
  }

}
