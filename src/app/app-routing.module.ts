import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DressComponent } from './components/dress/dress.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { JacketComponent } from './components/jacket/jacket.component';
import { CoatComponent } from './components/coat/coat.component';


const routes: Routes = [
  {path:'products',component: ProductsComponent},
  {path:'checkout',component: CheckoutComponent},
  { path: 'dress', component: DressComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'jacket', component: JacketComponent },
  { path: 'coat', component: CoatComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirection par défaut
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
