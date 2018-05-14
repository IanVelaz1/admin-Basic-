import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from "../../../services/admin-login.service";
import {Admin} from '../../../interfaces/exportInterfaces';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   admin:Admin={
     nombre:"",
     email:"",
     password:""
   };

   objetoAdmin;

   success:boolean;

  constructor(private adminLogin:AdminLoginService,private router:Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.adminLogin.validarCuenta(this.admin).subscribe(admin=>{
       this.objetoAdmin=admin;
      
       if(this.objetoAdmin.success==false){
         this.success==false;
       }else if(this.objetoAdmin.success==true){
         this.adminLogin.storeUserData(this.objetoAdmin.token,this.objetoAdmin.admin);
         this.router.navigate(['/admin/inicio']);
         this.success=true;
       }
    });
  }

}
