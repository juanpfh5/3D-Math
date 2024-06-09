import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { ExerciseComponent } from 'src/app/components/exercise/exercise.component';  

@NgModule({
    declarations: [ExerciseComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [ExerciseComponent]
})
export class SharedModule {}