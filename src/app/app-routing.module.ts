import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShopAreaComponent } from './components/shop-area/shop-area.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    {path: '', component: ShopAreaComponent},
    {path: 'produtlist', component: ProductListComponent},
    {path: 'products', component: ProductComponent},
    {path: 'updateProduct/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
