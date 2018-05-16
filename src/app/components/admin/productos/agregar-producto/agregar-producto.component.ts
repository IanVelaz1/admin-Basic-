import { Component, OnInit } from '@angular/core';
import {SubirFotosService} from '../../../../services/uploadPhotos/subir-fotos.service';
import {DropzoneComponent,DropzoneDirective,DropzoneConfigInterface} from 'ngx-dropzone-wrapper';
import {DomSanitizer} from '@angular/platform-browser';
import {UploadEvent,UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
import { HttpHeaders } from '@angular/common/http';
import {CrearProductoRefreshService} from '../../../../services/refresh-crear-prod/crear-producto-refresh.service';
import {Router} from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  constructor(private imagenService:SubirFotosService,private sanitizer:DomSanitizer,private refreshService:CrearProductoRefreshService,private router:Router,private ref:ChangeDetectorRef){
    setInterval(()=>{
         this.ref.markForCheck();
    },500);

   }

  ngOnInit() {
    
    
  }

  public archivos:UploadFile[]=[];

  arrayImagenesProducto:any[]=[];
  objetoImagenSubida;
  

  

  public dropped(event:UploadEvent){
    this.archivos=event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
        //console.log(droppedFile.relativePath, file);
 
          
          // You could upload it like this:
          const formData = new FormData()
          formData.append('file', file, droppedFile.relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
              
    
            
          this.imagenService.subirFoto(formData).subscribe(img=>{
            this.objetoImagenSubida=img;
            if(this.objetoImagenSubida.success==true){
              this.arrayImagenesProducto.unshift(this.objetoImagenSubida.result)
              console.log(this.objetoImagenSubida);
              console.log(this.arrayImagenesProducto);              
            }
            
            
          });
 /*
          this..post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
 
        });
      }else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
  }

}

/*
objetoFotoRecuperadaId;
arrayFotosRecuperadasId:any[]=[];
imgSrcArr:any[]=[];
  buscarImagenes(array){
    this.arrayFotosRecuperadasId=[];
     for(let i=0;i<array.length;i++){
       this.imagenService.recuperarFotoById(array[i]).subscribe(fotos=>{
         this.objetoFotoRecuperadaId=fotos;
         this.arrayFotosRecuperadasId.push(this.objetoFotoRecuperadaId.imagen.img);
         console.log('====================================');
         console.log(this.arrayFotosRecuperadasId);
         console.log('====================================');
         this.convertirImagenes(this.arrayFotosRecuperadasId);
       });
      
     }
    
  }

  

  imgSrc;
  convertirImagenes(arr){
        for(let i=0;i<arr.length;i++){
          
          var b64encoded=new Uint8Array(arr[i].data.data);
        var blob=new Blob([b64encoded],{type:'image/jpeg'});
        var urlCreator=window.URL;
        var urlImg=urlCreator.createObjectURL(blob);
        this.imgSrc=this.sanitizer.bypassSecurityTrustUrl(urlImg);
        this.imgSrcArr.push(this.imgSrc);
        
        console.log('====================================');
        console.log(arr);
        console.log('====================================');
        }
     //localStorage.setItem('arrCrear',JSON.stringify(this.imgSrcArr));
    // location.reload();
      }
 
*/
public fileOver(event){
  console.log(event);
}

public fileLeave(event){
  console.log(event);
}

eliminarImagen(id){
  for(let i=0;i<this.arrayImagenesProducto.length;i++){
    if(this.arrayImagenesProducto[i].public_id==id){
      this.arrayImagenesProducto.splice(i,1);
      }
  }
  this.imagenService.eliminarImagen(id).subscribe(imagen=>{
    console.log(imagen);
    
  })
}

guardarProducto(){}


}
