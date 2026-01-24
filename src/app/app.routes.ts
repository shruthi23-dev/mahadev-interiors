import { Routes } from '@angular/router';
export const routes: Routes = [

  /* INTRO PAGE */
  {
    path: '',
    loadComponent: () =>
      import('./pages/intro/intro.component')
        .then(m => m.IntroComponent)
  },

  /* HOME PAGE */
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },

  /* CUPBOARDS PAGE */
  {
    path: 'bedroom',
    loadComponent: () =>
      import('./pages/bedroom/bedroom.component')
        .then(m => m.BedroomComponent)
  },
  {
    path: 'pagekitchen',
    loadComponent: () =>
      import('./pages/pagekitchen/pagekitchen.component')
    .then(m => m.PageKitchenComponent)
},
{
  path:'pagedinning',
  loadComponent: () =>
    import('./pages/pagedinning/pagedinning.component')
  .then(m => m.PageDinningComponent)
},
{
  path:'pagelivingroom',
  loadComponent: () =>
   import('./pages/pagelivingroom/pagelivingroom.component')
  .then(m =>m.PagelivingroomComponent)
},
{
  path: 'ourworks',
  loadComponent: () =>
    import('./pages/ourworks/ourworks.component')
  .then(m =>m.OurworksComponent)
}

];
