import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,ServicesComponent,AboutComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
private dynamicHtml : SafeHtml='';

constructor (private sanitizer: DomSanitizer ,@Inject(DOCUMENT) private document: Document,@Inject(PLATFORM_ID) private platformId: Object) {
  let someHtml = 
`<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Privacy Policy - [Indian Scoring Steel Dies Makers]</title>
</head>
<body>
    <h1>Privacy Policy For [Indian Scoring Steel Dies Makers]</h1>
    <p><strong>Effective Date:</strong> [Insert Date, e.g., December 13, 2025]</p>
    
    <h2>Introduction</h2>
    <p>[Your Site Name], hosted on Firebase Hosting by Google, operates the website at [your-site.web.app]. This policy explains data practices for visitors to our static site. It applies to all users globally. [web:1]</p>
    
    <h2>Information We Collect</h2>
    <p>No personal data is collected directly by our static site. Firebase Hosting may log non-personal info like IP addresses, browser type, device info, and visit timestamps for security and performance. If using Firebase Analytics, anonymized usage data (e.g., page views) is collected. No cookies, payment, health, or sensitive data is handled. [web:1][web:8]</p>
    
    <h2>How We Use and Share Data</h2>
    <p>Data is used solely for site operation, analytics, and abuse prevention. Logs are shared only with Google as the hosting provider and not with other third parties. Google processes data per their <a href="https://firebase.google.com/support/privacy">privacy rules</a>. Retention is as long as needed for these purposes, typically 30 days for logs. [web:9][web:6]</p>
    
    <h2>Your Rights and Choices</h2>
    <p>Users can opt out of Analytics via device settings or browser extensions. Under GDPR/DPDP/CCPA, contact us at [your-email@example.com] to access, delete, or restrict data. We respond within 30 days. No "Do Not Track" signals are honored as no tracking occurs. [web:1][web:8]</p>
    
    <h2>Security</h2>
    <p>Firebase provides industry-standard security like encryption and access controls. We do not send prohibited data (e.g., financial or health info) to Firebase. [web:1]</p>
    
    <h2>Changes and Contact</h2>
    <p>We may update this policy; check back periodically. Questions? Email [your-email@example.com]. [web:6]</p>
</body>
</html>`;
this.dynamicHtml = this.sanitizer.bypassSecurityTrustHtml(someHtml);

}
ngOnInit(): void {
  this.getLocation()
}

// Source - https://stackoverflow.com/a
// Posted by Malcor
// Retrieved 2026-01-06, License - CC BY-SA 4.0

getLocation(): void{

  if (isPlatformBrowser(this.platformId) && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.callApi(longitude, latitude);
      });
  } else {
     console.log("No support for geolocation")
  }
}

callApi(Longitude: number, Latitude: number){
  const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
  //Call API
  console.log(url);
  
}



}
