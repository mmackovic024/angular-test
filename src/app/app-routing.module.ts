import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { MissionComponent } from './components/mission/mission.component';

const routes: Routes = [
  { path: '', component: DataComponent },
  { path: 'mission/:id', component: MissionComponent },
  { path: '**', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
