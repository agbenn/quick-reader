import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full' 
  },
  {
    path: 'search',
    loadChildren: './search/search.module#searchPageModule'
  },
  {
    path: 'newsReader',
    loadChildren: './news-reader/news-reader.module#NewsReaderPageModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
