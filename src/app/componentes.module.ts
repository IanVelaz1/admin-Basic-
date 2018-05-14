import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core"; 


///////////////////admin-components//////////////////
import {IndexComponent} from './components/admin/index/index.component';
import {NavbarsComponent} from './components/admin/navbars/navbars.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {AgregarProductoComponent} from './components/admin/productos/agregar-producto/agregar-producto.component';
import {ListaProductosComponent} from './components/admin/productos/lista-productos/lista-productos.component';
import {LoginComponent} from './components/admin/login/login.component';
import {RefreshCreateProduct} from './components/admin/productos/agregar-producto/refresh-create-product';
import {NavegacionComponent} from './components/admin/navegacion/navegacion.component';
import {AgregarElementoComponent} from './components/admin/navegacion/agregar-elemento/agregar-elemento.component';
import {VerObjetoNavegacionComponent} from './components/admin/navegacion/ver-objeto-navegacion/ver-objeto-navegacion.component';
import {PaginasComponent} from './components/admin/paginas/paginas.component';
import {AgregarPaginaComponent} from './components/admin/paginas/agregar-pagina/agregar-pagina.component';
import {VerPaginaComponent} from './components/admin/paginas/ver-pagina/ver-pagina.component';
import {ConfigComponent} from './components/admin/config/config.component';
///////////////////admin-components//////////////////

/////////////////services-admin/////////////////////
import {AdminLoginService} from './services/admin-login.service';
import {guardAdmin} from './guards/guards-admin-service';
import {SubirFotosService} from './services/uploadPhotos/subir-fotos.service';
import {CrearProductoRefreshService} from './services/refresh-crear-prod/crear-producto-refresh.service';
import {NavbarService} from './services/navbar-crear/navbar.service';
import {PaginasService} from './services/paginas/paginas.service';
/////////////////services-admin/////////////////////


////////////////components-front///////////////////
import {IndexComponentFront} from './components/front-end/index/index.component'
import {NavbarFrontComponent} from './components/front-end/navbar-front/navbar-front.component'
import {CarouselComponent} from './components/front-end/carousel/carousel.component';
import {PaginaComponent} from './components/front-end/pagina/pagina.component';
import {AboutComponent} from './components/front-end/about/about.component';
import {ContactoComponent} from './components/front-end/contacto/contacto.component';
////////////////components-front///////////////////


export const routesComponents=[
 IndexComponent,
 NavbarsComponent,
 DashboardComponent,
 AgregarProductoComponent,
 ListaProductosComponent,
 LoginComponent,
 RefreshCreateProduct,
 NavegacionComponent,
 AgregarElementoComponent,
 IndexComponentFront,
 NavbarFrontComponent,
 VerObjetoNavegacionComponent,
 PaginasComponent,
 AgregarPaginaComponent,
 VerPaginaComponent,
 ConfigComponent,
 CarouselComponent,
 PaginaComponent,
 AboutComponent,
 ContactoComponent
];

export const serviceComponents=[
AdminLoginService,
guardAdmin,
SubirFotosService,
CrearProductoRefreshService,
NavbarService,
PaginasService
]

const appRoutes:Routes=[
  /////////////rutas-admin/////////////
 {path:'admin/login',component:LoginComponent},
 {path:'admin/inicio',component:IndexComponent,canActivate:[guardAdmin]},
 {path:'admin/productos/agregar',component:AgregarProductoComponent,canActivate:[guardAdmin]},
 {path:'admin/productos',component:ListaProductosComponent,canActivate:[guardAdmin]},
 {path:'admin/refresh/productos',component:RefreshCreateProduct,canActivate:[guardAdmin]},
 {path:'admin/interfaz/navegacion',component:NavegacionComponent,canActivate:[guardAdmin]},
 {path:'admin/interfaz/navegacion/agregar',component:AgregarElementoComponent,canActivate:[guardAdmin]},
 {path:'admin/interfaz/navegacion/ver/:id',component:VerObjetoNavegacionComponent,canActivate:[guardAdmin]},
 {path:'admin/paginas',component:PaginasComponent,canActivate:[guardAdmin]},
 {path:'admin/paginas/agregar',component:AgregarPaginaComponent,canActivate:[guardAdmin]},
 {path:'admin/paginas/ver/:id',component:VerPaginaComponent,canActivate:[guardAdmin]},
 {path:'admin/config',component:ConfigComponent,canActivate:[guardAdmin]},
 /////////////rutas-admin/////////////

////////////rutas-front/////////////
 {path:'',component:IndexComponentFront},
 {path:'index/:id',component:PaginaComponent},
 {path:'contacto',component:ContactoComponent},
 {path:'acerca',component:AboutComponent}
////////////rutas-front/////////////

];

export const Routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
