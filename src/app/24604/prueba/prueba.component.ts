import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaComponent {

}
