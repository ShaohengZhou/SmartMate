import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ContactPage } from '../contact/contact.page';
import { ListPage } from '../list/list.page';
import { NewHomePage } from '../newHome/newHome.page';
import { AuthGuardService } from '../../services/auth-route-guard';



const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
     },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage,
        canActivate: [AuthGuardService]
      },
      {
        path: 'list',
        outlet: 'list',
        component: ListPage,
        canActivate: [AuthGuardService]
      },
      {
        path: 'newHome',
        outlet: 'newHome',
        component: NewHomePage,
        canActivate: [AuthGuardService]
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
