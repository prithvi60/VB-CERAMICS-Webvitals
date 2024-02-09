import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-in-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
})
export class ErrorComponent {
  screenHeight: number;
  screenWidth: number;
  constructor() {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event', `{ passive: true }`])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    // console.log(this.screenHeight, this.screenWidth);
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  public customOptions: OwlOptions = {
    items: 7,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      650: {
        items: 3,
      },
      850: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1250: {
        items: 7,
      },
    },
  };

  public customOptions2: OwlOptions = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    dots: false,
    // margin:0,
    autoplayHoverPause: true,
    nav: true,
    // stagePadding: 0,
    navText: [
      "<img src='https://ik.imagekit.io/webibee/VBRC/images/arrow_cc.svg' width='40px' height='20px' alt='leftArrow1'>",
      "<img src='https://ik.imagekit.io/webibee/VBRC/images/arrow_c.svg' width='40px' height='20px' alt='leftArrow2'>",
    ],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1050: {
        items: 3,
      },
    },
  };
  private worker!: Worker;
  ngOnInit(): void {
    AOS.init({
      debounceDelay: 500, // the delay on debounce used while resizing window (advanced)
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }
  @HostListener('window:scroll', ['$event', `{ passive: true }`])
  currentImageIndex15 = 0;
  images = [
    'https://ik.imagekit.io/webibee/VBRC/images/double_arrow_.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/double_arrow.svg',
  ];
  imagesNav = [
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ];

  changeImage15() {
    this.currentImageIndex15 =
      (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }

  ourGroups(param: any) {
    if (param == 'vbcc') {
      window.location.href = 'https://vbccinstruments.com';
    } else {
      window.location.href = 'https://www.hitechceramics.in/';
    }
  }

  socials(param: any) {
    if (param == 'youtube') {
      window.location.href =
        'https://www.youtube.com/@drviswabaskaranvbceramics4394';
    } else if (param == 'linkedIn') {
      window.location.href =
        'https://www.linkedin.com/company/dr.vb-ceramics-research-centre/';
    } else {
      window.location.href = 'paste a facebook URL here';
    }
  }
}
