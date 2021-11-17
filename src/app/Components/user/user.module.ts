import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from '../user-login/user-auth.guard';


const routes:Routes=[
  {path:'', redirectTo:'/User/Myprofile', pathMatch:'full'},
  {path:'Myprofile', component: UserProfileComponent, canActivate:[UserAuthGuard]},
  {path:'Editprofile', component: EditUserProfileComponent, canActivate:[UserAuthGuard]}
];
@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
