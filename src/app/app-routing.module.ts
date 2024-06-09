import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'esfera',
    loadChildren: () => import('./pages/figures/esfera/esfera.module').then( m => m.EsferaPageModule)
  },
  {
    path: 'example-esfera',
    loadChildren: () => import('./pages/examples/esfera/esfera.module').then( m => m.EsferaPageModule)
  },
  {
    path: 'exercise-esfera',
    loadChildren: () => import('./pages/exercises/esfera/esfera.module').then( m => m.EsferaPageModule)
  },
  {
    path: 'cono',
    loadChildren: () => import('./pages/figures/cono/cono.module').then( m => m.ConoPageModule)
  },
  {
    path: 'example-cono',
    loadChildren: () => import('./pages/examples/cono/cono.module').then( m => m.ConoPageModule)
  },
  {
    path: 'exercise-cono',
    loadChildren: () => import('./pages/exercises/cono/cono.module').then( m => m.ConoPageModule)
  },
  {
    path: 'cubo',
    loadChildren: () => import('./pages/figures/cubo/cubo.module').then( m => m.CuboPageModule)
  },
  {
    path: 'example-cubo',
    loadChildren: () => import('./pages/examples/cubo/cubo.module').then( m => m.CuboPageModule)
  },
  {
    path: 'exercise-cubo',
    loadChildren: () => import('./pages/exercises/cubo/cubo.module').then( m => m.CuboPageModule)
  },
  {
    path: 'piramide-triangular',
    loadChildren: () => import('./pages/figures/piramide-triangular/piramide-triangular.module').then( m => m.PiramideTriangularPageModule)
  },
  {
    path: 'example-piramide-triangular',
    loadChildren: () => import('./pages/examples/piramide-triangular/piramide-triangular.module').then( m => m.PiramideTriangularPageModule)
  },
  {
    path: 'exercise-piramide-triangular',
    loadChildren: () => import('./pages/exercises/piramide-triangular/piramide-triangular.module').then( m => m.PiramideTriangularPageModule)
  },
  {
    path: 'piramide-cuadrangular',
    loadChildren: () => import('./pages/figures/piramide-cuadrangular/piramide-cuadrangular.module').then( m => m.PiramideCuadrangularPageModule)
  },
  {
    path: 'example-piramide-cuadrangular',
    loadChildren: () => import('./pages/examples/piramide-cuadrangular/piramide-cuadrangular.module').then( m => m.PiramideCuadrangularPageModule)
  },
  {
    path: 'exercise-piramide-cuadrangular',
    loadChildren: () => import('./pages/exercises/piramide-cuadrangular/piramide-cuadrangular.module').then( m => m.PiramideCuadrangularPageModule)
  },
  {
    path: 'piramide-pentagonal',
    loadChildren: () => import('./pages/figures/piramide-pentagonal/piramide-pentagonal.module').then( m => m.PiramidePentagonalPageModule)
  },
  {
    path: 'example-piramide-pentagonal',
    loadChildren: () => import('./pages/examples/piramide-pentagonal/piramide-pentagonal.module').then( m => m.PiramidePentagonalPageModule)
  },
  {
    path: 'exercise-piramide-pentagonal',
    loadChildren: () => import('./pages/exercises/piramide-pentagonal/piramide-pentagonal.module').then( m => m.PiramidePentagonalPageModule)
  },
  {
    path: 'piramide-hexagonal',
    loadChildren: () => import('./pages/figures/piramide-hexagonal/piramide-hexagonal.module').then( m => m.PiramideHexagonalPageModule)
  },
  {
    path: 'example-piramide-hexagonal',
    loadChildren: () => import('./pages/examples/piramide-hexagonal/piramide-hexagonal.module').then( m => m.PiramideHexagonalPageModule)
  },
  {
    path: 'exercise-piramide-hexagonal',
    loadChildren: () => import('./pages/exercises/piramide-hexagonal/piramide-hexagonal.module').then( m => m.PiramideHexagonalPageModule)
  },
  {
    path: 'piramide-heptagonal',
    loadChildren: () => import('./pages/figures/piramide-heptagonal/piramide-heptagonal.module').then( m => m.PiramideHeptagonalPageModule)
  },
  {
    path: 'example-piramide-heptagonal',
    loadChildren: () => import('./pages/examples/piramide-heptagonal/piramide-heptagonal.module').then( m => m.PiramideHeptagonalPageModule)
  },
  {
    path: 'exercise-piramide-heptagonal',
    loadChildren: () => import('./pages/exercises/piramide-heptagonal/piramide-heptagonal.module').then( m => m.PiramideHeptagonalPageModule)
  },
  {
    path: 'piramide-octagonal',
    loadChildren: () => import('./pages/figures/piramide-octagonal/piramide-octagonal.module').then( m => m.PiramideOctagonalPageModule)
  },
  {
    path: 'example-piramide-octagonal',
    loadChildren: () => import('./pages/examples/piramide-octagonal/piramide-octagonal.module').then( m => m.PiramideOctagonalPageModule)
  },
  {
    path: 'exercise-piramide-octagonal',
    loadChildren: () => import('./pages/exercises/piramide-octagonal/piramide-octagonal.module').then( m => m.PiramideOctagonalPageModule)
  },
  {
    path: 'piramide-eneagonal',
    loadChildren: () => import('./pages/figures/piramide-eneagonal/piramide-eneagonal.module').then( m => m.PiramideEneagonalPageModule)
  },
  {
    path: 'example-piramide-eneagonal',
    loadChildren: () => import('./pages/examples/piramide-eneagonal/piramide-eneagonal.module').then( m => m.PiramideEneagonalPageModule)
  },
  {
    path: 'exercise-piramide-eneagonal',
    loadChildren: () => import('./pages/exercises/piramide-eneagonal/piramide-eneagonal.module').then( m => m.PiramideEneagonalPageModule)
  },
  {
    path: 'piramide-decagonal',
    loadChildren: () => import('./pages/figures/piramide-decagonal/piramide-decagonal.module').then( m => m.PiramideDecagonalPageModule)
  },
  {
    path: 'example-piramide-decagonal',
    loadChildren: () => import('./pages/examples/piramide-decagonal/piramide-decagonal.module').then( m => m.PiramideDecagonalPageModule)
  },
  {
    path: 'exercise-piramide-decagonal',
    loadChildren: () => import('./pages/exercises/piramide-decagonal/piramide-decagonal.module').then( m => m.PiramideDecagonalPageModule)
  },
  {
    path: 'cilindro',
    loadChildren: () => import('./pages/figures/cilindro/cilindro.module').then( m => m.CilindroPageModule)
  },
  {
    path: 'example-cilindro',
    loadChildren: () => import('./pages/examples/cilindro/cilindro.module').then( m => m.CilindroPageModule)
  },
  {
    path: 'exercise-cilindro',
    loadChildren: () => import('./pages/exercises/cilindro/cilindro.module').then( m => m.CilindroPageModule)
  },
  {
    path: 'prisma-triangular',
    loadChildren: () => import('./pages/figures/prisma-triangular/prisma-triangular.module').then( m => m.PrismaTriangularPageModule)
  },
  {
    path: 'example-prisma-triangular',
    loadChildren: () => import('./pages/examples/prisma-triangular/prisma-triangular.module').then( m => m.PrismaTriangularPageModule)
  },
  {
    path: 'exercise-prisma-triangular',
    loadChildren: () => import('./pages/exercises/prisma-triangular/prisma-triangular.module').then( m => m.PrismaTriangularPageModule)
  },
  {
    path: 'prisma-cuadrangular',
    loadChildren: () => import('./pages/figures/prisma-cuadrangular/prisma-cuadrangular.module').then( m => m.PrismaCuadrangularPageModule)
  },
  {
    path: 'example-prisma-cuadrangular',
    loadChildren: () => import('./pages/examples/prisma-cuadrangular/prisma-cuadrangular.module').then( m => m.PrismaCuadrangularPageModule)
  },
  {
    path: 'exercise-prisma-cuadrangular',
    loadChildren: () => import('./pages/exercises/prisma-cuadrangular/prisma-cuadrangular.module').then( m => m.PrismaCuadrangularPageModule)
  },
  {
    path: 'prisma-pentagonal',
    loadChildren: () => import('./pages/figures/prisma-pentagonal/prisma-pentagonal.module').then( m => m.PrismaPentagonalPageModule)
  },
  {
    path: 'example-prisma-pentagonal',
    loadChildren: () => import('./pages/examples/prisma-pentagonal/prisma-pentagonal.module').then( m => m.PrismaPentagonalPageModule)
  },
  {
    path: 'exercise-prisma-pentagonal',
    loadChildren: () => import('./pages/exercises/prisma-pentagonal/prisma-pentagonal.module').then( m => m.PrismaPentagonalPageModule)
  },
  {
    path: 'prisma-hexagonal',
    loadChildren: () => import('./pages/figures/prisma-hexagonal/prisma-hexagonal.module').then( m => m.PrismaHexagonalPageModule)
  },
  {
    path: 'example-prisma-hexagonal',
    loadChildren: () => import('./pages/examples/prisma-hexagonal/prisma-hexagonal.module').then( m => m.PrismaHexagonalPageModule)
  },
  {
    path: 'exercise-prisma-hexagonal',
    loadChildren: () => import('./pages/exercises/prisma-hexagonal/prisma-hexagonal.module').then( m => m.PrismaHexagonalPageModule)
  },
  {
    path: 'prisma-heptagonal',
    loadChildren: () => import('./pages/figures/prisma-heptagonal/prisma-heptagonal.module').then( m => m.PrismaHeptagonalPageModule)
  },
  {
    path: 'example-prisma-heptagonal',
    loadChildren: () => import('./pages/examples/prisma-heptagonal/prisma-heptagonal.module').then( m => m.PrismaHeptagonalPageModule)
  },
  {
    path: 'exercise-prisma-heptagonal',
    loadChildren: () => import('./pages/exercises/prisma-heptagonal/prisma-heptagonal.module').then( m => m.PrismaHeptagonalPageModule)
  },
  {
    path: 'prisma-octagonal',
    loadChildren: () => import('./pages/figures/prisma-octagonal/prisma-octagonal.module').then( m => m.PrismaOctagonalPageModule)
  },
  {
    path: 'example-prisma-octagonal',
    loadChildren: () => import('./pages/examples/prisma-octagonal/prisma-octagonal.module').then( m => m.PrismaOctagonalPageModule)
  },
  {
    path: 'exercise-prisma-octagonal',
    loadChildren: () => import('./pages/exercises/prisma-octagonal/prisma-octagonal.module').then( m => m.PrismaOctagonalPageModule)
  },
  {
    path: 'prisma-eneagonal',
    loadChildren: () => import('./pages/figures/prisma-eneagonal/prisma-eneagonal.module').then( m => m.PrismaEneagonalPageModule)
  },
  {
    path: 'example-prisma-eneagonal',
    loadChildren: () => import('./pages/examples/prisma-eneagonal/prisma-eneagonal.module').then( m => m.PrismaEneagonalPageModule)
  },
  {
    path: 'exercise-prisma-eneagonal',
    loadChildren: () => import('./pages/exercises/prisma-eneagonal/prisma-eneagonal.module').then( m => m.PrismaEneagonalPageModule)
  },
  {
    path: 'prisma-decagonal',
    loadChildren: () => import('./pages/figures/prisma-decagonal/prisma-decagonal.module').then( m => m.PrismaDecagonalPageModule)
  },
  {
    path: 'example-prisma-decagonal',
    loadChildren: () => import('./pages/examples/prisma-decagonal/prisma-decagonal.module').then( m => m.PrismaDecagonalPageModule)
  },
  {
    path: 'exercise-prisma-decagonal',
    loadChildren: () => import('./pages/exercises/prisma-decagonal/prisma-decagonal.module').then( m => m.PrismaDecagonalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
