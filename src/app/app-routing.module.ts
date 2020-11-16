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
  {
    path: 'reader-selector',
    loadChildren:'./reader-selection/reader-selection.module#ReaderSelectionPageModule'
  },
  {
    path: 'content-reader',
    loadChildren: './content-reader/content-reader.module#ContentReaderPageModule'
  },
  {
    path: 'retention-quiz',
    loadChildren: './retention-quiz/retention-quiz.module#RetentionQuizPageModule'
  },
  {
    path: 'flash-reader',
    loadChildren: './flashreader/flashreader.module#FlashreaderPageModule'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
