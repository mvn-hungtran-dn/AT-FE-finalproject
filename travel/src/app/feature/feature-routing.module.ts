import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';

const routes: Routes = [
  { path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: 'site',
        loadChildren: './site/site.module#SiteModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})

export class FeatureRoutingModule {}
