import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'GroupMNG', loadChildren: './group-mng/group-mng.module#GroupMNGPageModule' },  { path: 'createGroup', loadChildren: './create-group/create-group.module#CreateGroupPageModule' },
  { path: 'inviteMember', loadChildren: './invite-member/invite-member.module#InviteMemberPageModule' },
  { path: 'joinGroup', loadChildren: './join-group/join-group.module#JoinGroupPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
