import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'listagem',
    loadChildren: './listagem/listagem.module#ListagemPageModule'
  },
  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
