import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'isd-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 companyAbout = [{
  id:1 ,
  data :"Indian tool and die makers in Sivakasi specialize in manufacturing precision cutting dies for the fireworks, printing, and packaging industries, leveraging the region's established manufacturing hub status."
},
{
  id:2 ,
  data :"Sivakasi, Tamil Nadu, hosts numerous firms producing steel rule dies, rotary dies, and laser dies for box blanks, labels, and matchbox components, supporting high-volume production with custom designs."
},
{
  id:3 ,
  data :"Companies emphasize CAD/CAM fabrication, quality steel blades, and quick turnaround for local packaging demands ."
}
]


trackByUserId(index: number, user: any): number {
  return user.id; // Return a unique identifier
}
}
