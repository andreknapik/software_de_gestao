import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { TesteComponent } from './pages/teste/teste.component';
import { CardsComponent } from './components/cards/cards.component';
import { DesempenhoComponent } from './pages/desempenho/desempenho.component';
import { ProspeccaoComponent } from './pages/prospeccao/prospeccao.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { AnotacoesComponent } from './pages/anotacoes/anotacoes.component';
import { NovaLojaComponent } from './pages/nova-loja/nova-loja.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    TesteComponent,
    CardsComponent,
    DesempenhoComponent,
    ProspeccaoComponent,
    ComprasComponent,
    TarefasComponent,
    AnotacoesComponent,
    NovaLojaComponent,
    ConfiguracoesComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
