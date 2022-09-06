import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-u',
    loadChildren: () => import('./ingreso-u/ingreso-u.module').then( m => m.IngresoUPageModule)
  },
  {
    path: 'registro-u',
    loadChildren: () => import('./registro-u/registro-u.module').then( m => m.RegistroUPageModule)
  },
  {
    path: 'registro-p',
    loadChildren: () => import('./registro-p/registro-p.module').then( m => m.RegistroPPageModule)
  },
  {
    path: 'registro-gen',
    loadChildren: () => import('./registro-gen/registro-gen.module').then( m => m.RegistroGenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
