import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { codeqr } from 'src/app/interfaces/codeqr.interface';
import { ResultsService } from '../../service/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
   usuSesion:any
   user:string
   listaCodeQr: codeqr[]=[];
  constructor(private cookies: CookieService, private resultsService: ResultsService) { }

  ngOnInit(): void {
      this.usuSesion = this.cookies.get("usuarioSesion");
      let usuSes = JSON.parse(this.usuSesion);
      //console.log(typeof this.usuSesion)
      //console.log(this.usuSesion.toUpperCase())
      console.log("*******")
      console.log(usuSes)
      //console.log(typeof usuSes)
      //console.log(usuSes.id_usuario)

      let idUser={
        user: usuSes.id_usuario
      };

      this.resultsService.getHistory(idUser).subscribe(data =>{
        this.listaCodeQr = data.codes;
        console.log(this.listaCodeQr)
      },
      err =>{
        console.log(err)
      }
      );
  }
}