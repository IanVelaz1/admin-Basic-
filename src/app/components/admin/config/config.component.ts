import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from '../../../services/admin-login.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private httpAdmin:AdminLoginService) { }

  ngOnInit() {
    this.recuperarAdmin();
  }

  notMatch:boolean;
  notMatchOld:boolean;

  objetoAdmin={
    _id:"",
    oldPassword:"",
    adminPassword:"",
    password:"",
    newPasswordRep:""
  }

  admin;

  recuperarAdmin(){
     this.httpAdmin.getAdmin().subscribe(admin=>{
      console.log('====================================');
      console.log(admin);
      console.log('====================================');
      this.admin=admin;
      this.objetoAdmin.adminPassword=this.admin.password;
      this.objetoAdmin._id=this.admin._id;
    });
  }


  
  editarAdmin(){
    if(this.objetoAdmin.password==this.objetoAdmin.newPasswordRep){

     this.httpAdmin.editarAdmin(this.objetoAdmin).subscribe(admin=>{
      console.log('====================================');
      console.log(admin);
      console.log('====================================');
     });
    }else{
      this.notMatch=true;
    }


  }

}
