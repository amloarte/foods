import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reality',
    pathMatch: 'full'
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'subcategoria',
    loadChildren: () => import('./pages/subcategorias/subcategorias.module').then( m => m.SubcategoriasPageModule)
  },
  {
    path: 'subcategorias',
    loadChildren: () => import('./pages/subcategorias/subcategorias.module').then( m => m.SubcategoriasPageModule)
  },
  {
    path: 'subcategorias',
    loadChildren: () => import('./pages/subcategorias/subcategorias.module').then( m => m.SubcategoriasPageModule)
  },
  {
    path: 'subcategoria/:id',
    loadChildren: () => import('./pages/subcategorias/subcategorias.module').then( m => m.SubcategoriasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'alimento',
    loadChildren: () => import('./pages/alimento/alimento.module').then( m => m.AlimentoPageModule)
  },
  {
    path: 'alimento/:id',
    loadChildren: () => import('./pages/alimento/alimento.module').then( m => m.AlimentoPageModule)
  },
  {
    path: 'registo',
    loadChildren: () => import('./pages/registo/registo.module').then( m => m.RegistoPageModule)
  },
  {
    path: 'reality',
    loadChildren: () => import('./pages/reality/reality.module').then( m => m.RealityPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
