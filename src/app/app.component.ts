import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';  // Import here [web:74][web:75]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit
 {
  constructor(private meta: Meta, private title: Title) {}  // Dependency injection [web:77]
  ngOnInit(): void {
    this.title.setTitle('Steel Scoring Dies India | Precision Makers');
  this.meta.updateTag({ 
      name: 'description', 
      content: 'Custom scoring dies for precision packaging & sheet metal in India. High-quality steel rotary tools from Sivakasi makers. Fast turnaround, ISO certified. Get your free quote today!' 
    });  
  }



  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // const schema = {
    //   "@type": "Product",
    //   "name": "Rotary Scoring Dies Sivakasi",
    //   "description": "Precision rotary scoring dies for cardboard packaging India"
    // };
    // const script = document.createElement('script');
    // script.type = 'application/ld+json';
    // script.text = JSON.stringify(schema);
    // document.head.appendChild(script);//Add 'implements AfterViewInit' to the class.
    
  }

}
