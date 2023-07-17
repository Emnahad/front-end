import { ElementRef } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imageSrc = 'assets/images/Logo.png';
  iconPath = 'assets/images/user.png';
  iconPath2 = 'assets/images/Ho.png';
  

  constructor(private elementRef: ElementRef, private router: Router) { }


  // ngAfterViewInit() {
  //   this.router.events.subscribe((event: Event) => {
  //     if (event instanceof NavigationEnd) {
  //       const url = event.urlAfterRedirects.split('#')[1]; // Get the section ID from the URL
  //       if (url) {
  //         const element = this.elementRef.nativeElement.querySelector(`#${url}`);
  //         console.log(url);
  //         if (element) {
  //           element.scrollIntoView({ behavior: 'smooth' }); // Scroll to the element
  //         }
  //       } 
  //     }
  //   });
  // }
}
  


