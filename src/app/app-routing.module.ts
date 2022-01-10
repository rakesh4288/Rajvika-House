import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './shared-router-guards/can-De-Activate.guards';

const mainPageRouting: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'rajvika-directives',
    loadChildren: () => import('./my-directives/my-directives.modules').then(myNgDirectives => myNgDirectives.MyDirectivesModules)
  },
  {
    path:'angular-new-features',
    loadChildren: () => import('./new-features/new-features.module').then(newFeature => newFeature.NewFeaturesModule)
  },
  { 
    path:'UI-interview-one',
    loadChildren: () => import('./UI-interview-one/UI-interview-one.module').then(m => m.UI_Interview_One_Module) 
  },
  {
    path:'rajvika-dom',
    loadChildren: ()=> import('./shadow-dom/shadow-dom.module').then(ss=>ss.ShadowDomModule)
  },
  {
    path:'rajvika-communication',
    loadChildren: ()=> import('./communication/communication.module').then(cc => cc.CommunicationModule)
  },
  {
    path:'view-child-decorator',
    loadChildren:()=> import('./view-child/view-child.module').then(vv=> vv.ViewChildModule)
  },
  {
    path:'rajvika-pipes',
    loadChildren: ()=> import('./pipes/pipes.modules').then(pi=> pi.PipesModules)
  },
  {
    path:'rajvika-router',
    loadChildren:()=> import('./angular-router/angular-router.module').then(papa=> papa.AngularRouterModule),
    canDeactivate:[CanDeactivateGuard]
  },
  {
    path:'rajvika-forms',
    loadChildren: ()=> import('./forms-tutorial/raka-forms.module').then(raka => raka.RajvikaFormsModules)
  },
  {
    path:'rajvika-binding',
    loadChildren: ()=> import('./angular-binding/angular-binding.module').then(mm=> mm.AngularBindingModule)
  },
  {
    path:'angular-services',
    loadChildren:()=> import('./angular-service/angular-service.module').then(u=> u.AngularServiceModule)
  },
  {
    path:'employee-crud',
    loadChildren: ()=> import('./employee-crud/emp-crud.modules').then(crud=>crud.EmployeeCRUDModules)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  declarations:[
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(mainPageRouting)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }