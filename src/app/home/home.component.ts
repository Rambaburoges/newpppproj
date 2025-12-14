import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
private dynamicHtml : SafeHtml='';

constructor (private sanitizer: DomSanitizer) {
  let someHtml = 
`<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Privacy Policy - [Your Site Name]</title>
</head>
<body>
    <h1>Privacy Policy</h1>
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
  
}




}
