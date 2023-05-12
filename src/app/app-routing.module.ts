import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [            /* criado sistema de rotas para outras páginas */
  {
    path:'',
    component: HomeComponent        /* caminho página home */
  },
  {
    path:'content/:id',             /* quando criamos a propriedade id é necessario inserir aqui tambem */
    component: ContentComponent     /* caminho página do contéudo */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
