import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
  HostListener,
  Renderer2,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, transition, style, animate } from '@angular/animations';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { orgLD } from 'src/organsation';
// import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-in-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  screenHeight: number;
  screenWidth: number;
  html: SafeHtml;
  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
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
    this.html = this.getSafeHTML(orgLD);
    this.addScriptToHead(this.html);
    this.title.setTitle(
      'Research Center for Students in Chennai | VBCC Research'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Discover a hub of knowledge and exploration at a prestigious research center in Chennai. Dive into research opportunities crafted for students at our renowned center.',
    });
      // Update or add a custom meta tag for the primary keyword
      this.meta.updateTag({
        name: 'keyword',
        content: 'research center',
      });

      // Update or add a custom meta tag for the secondary keyword
      this.meta.updateTag({
        name: 'secondary-keyword',
        content: 'research center in chennai , research center for students',
      });
  //   if (isPlatformBrowser(this.platformId)) {
  //     // Code that interacts with window object
  //   AOS.init({
  //     debounceDelay: 500, // the delay on debounce used while resizing window (advanced)
  //     once: false, // whether animation should happen only once - while scrolling down
  //     mirror: true, // whether elements should animate out while scrolling past them
  //   });
  // }

  }
  getSafeHTML(jsonLD: { [key: string]: any }): SafeHtml {
    const json = jsonLD ? JSON.stringify(jsonLD, null, 2) : '';
    // escape / to prevent script tag in JSON
    const html = `<script type="application/ld+json">${json.replace(
      /<\/script>/g,
      '<\\/script>'
    )}</script>`;
    // console.log('test json', json, html);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  private addScriptToHead(scriptHtml: SafeHtml) {
    const scriptElement = this.renderer.createElement('script');
    scriptElement.innerHTML = scriptHtml.toString();
    this.renderer.appendChild(document.head, scriptElement);
  }
  @ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;
  isVisible = false;

  @HostListener('window:scroll', ['$event', `{ passive: true }`])
  onViewportScroll(event: any): void {
    this.boxElements.forEach((boxElement) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            boxElement.nativeElement.style.animation = 'none'; // Disable the animation
            void boxElement.nativeElement.offsetWidth; // Trigger a reflow
            boxElement.nativeElement.style.animation = null; // Re-enable the animation
          }
        });
      });
      observer.observe(boxElement.nativeElement);
    });
  }
  currentImageIndex = 0;
  currentImageIndex2 = 0;
  currentImageIndex3 = 0;
  currentImageIndex4 = 0;
  currentImageIndex5 = 0;
  currentImageIndex6 = 0;
  currentImageIndex9 = 0;
  currentImageIndex10 = 0;
  currentImageIndex11 = 0;
  currentImageIndex12 = 0;
  currentImageIndex13 = 0;
  currentImageIndex14 = 0;
  currentImageIndex15 = 0;
  images = [
    'https://ik.imagekit.io/webibee/VBRC/images/double_arrow_.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/double_arrow.svg',
  ];
  imagesNav = [
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ];
  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
  changeImage2() {
    this.currentImageIndex2 =
      (this.currentImageIndex2 + 1) % this.images.length;
  }
  changeImage3() {
    this.currentImageIndex3 =
      (this.currentImageIndex3 + 1) % this.images.length;
  }
  changeImage4() {
    this.currentImageIndex4 =
      (this.currentImageIndex4 + 1) % this.images.length;
  }
  changeImage5() {
    this.currentImageIndex5 =
      (this.currentImageIndex5 + 1) % this.images.length;
  }
  changeImage6() {
    this.currentImageIndex6 =
      (this.currentImageIndex6 + 1) % this.images.length;
  }
  changeImage9() {
    this.currentImageIndex9 =
      (this.currentImageIndex9 + 1) % this.images.length;
  }
  changeImage10() {
    this.currentImageIndex10 =
      (this.currentImageIndex10 + 1) % this.images.length;
  }
  changeImage11() {
    this.currentImageIndex11 =
      (this.currentImageIndex11 + 1) % this.images.length;
  }
  changeImage12() {
    this.currentImageIndex12 =
      (this.currentImageIndex12 + 1) % this.images.length;
  }
  changeImage13() {
    this.currentImageIndex13 =
      (this.currentImageIndex13 + 1) % this.images.length;
  }
  changeImage14() {
    this.currentImageIndex14 =
      (this.currentImageIndex14 + 1) % this.images.length;
  }
  changeImage15() {
    this.currentImageIndex15 =
      (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }

  arrowimages = [
    'https://ik.imagekit.io/webibee/VBRC/images/arrow_cc.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/Vectorb.svg',
  ];

  currentImageIndex7 = 0;
  changeImage7() {
    this.currentImageIndex7 =
      (this.currentImageIndex7 + 1) % this.arrowimages.length;
  }
  changeImage7b() {
    this.currentImageIndex7 =
      (this.currentImageIndex7 - 1) % this.arrowimages.length;
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

  arrowimages2 = [
    'https://ik.imagekit.io/webibee/VBRC/images/arrow_c.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/Vectorbr.svg',
  ];

  currentImageIndex8 = 0;
  changeImage8() {
    this.currentImageIndex8 =
      (this.currentImageIndex8 + 1) % this.arrowimages2.length;
  }
  changeImage8b() {
    this.currentImageIndex8 =
      (this.currentImageIndex8 - 1) % this.arrowimages2.length;
  }
}
