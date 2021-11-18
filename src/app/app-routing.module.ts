import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

const routes: Routes = [ //First-match wins
  {path:'', redirectTo:'/Home', pathMatch:'full'}, //Default path
  {path:'Home', component: HomeComponent},
  {path:'Products', component: ProductsComponent},
  {path:'Products/:pID', component:ProductDetailsComponent},
  {path:'Createproduct', component:CreateProductComponent},
  {path: 'Order', component: OrderMasterComponent},
  {path: 'Login', component:UserLoginComponent},
  {
    path: 'User', 
    loadChildren: () => import('src/app/Components/user/user.module')
                        .then(m => m.UserModule)
  },

  {path:"**", component: NotFoundComponent} //Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
