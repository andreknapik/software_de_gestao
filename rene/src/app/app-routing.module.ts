import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotacoesComponent } from './pages/anotacoes/anotacoes.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DesempenhoComponent } from './pages/desempenho/desempenho.component';
import { LoginComponent } from './pages/login/login.component';
import { ProspeccaoComponent } from './pages/prospeccao/prospeccao.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { TesteComponent } from './pages/teste/teste.component';

const routes: Routes = [
  {  path: '', component: LoginComponent },
  {  path: 'dashboard', component: DashboardComponent  },
  {  path: 'teste', component: TesteComponent  },
  {  path: 'desempenho', component: DesempenhoComponent},
  {  path: 'prospeccao', component: ProspeccaoComponent},
  {  path: 'compras', component: ComprasComponent},
  {  path: 'tarefas', component: TarefasComponent},
  {  path: 'anotacoes', component: AnotacoesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
