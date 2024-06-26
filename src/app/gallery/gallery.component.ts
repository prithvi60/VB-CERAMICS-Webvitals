import { Component, HostListener, SimpleChanges } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor(private title: Title, private meta: Meta){
  }
  showMenu1: boolean = false;
  box_2_content : string[] = ['Home','About Us','Services','Gallery','Contact Us'];
  box_3_content : string[] = ['Raw Materials','Material Processing','Characterization','Heat Treatment Facility']
  box_4_content : string[] = ['Contact Us','Help centre'];

  public customOptions_main: OwlOptions = {
    items: 1,
    loop:true,
    autoplay:true,
    margin: 20,
    autoplayTimeout: 4000,
    dots: false,
    autoplayHoverPause:true,
  };

  public customOptions1: OwlOptions = {
    items: 1,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    dots: false,
    autoplayHoverPause:true,
  };
  public customOptions1_left: OwlOptions = {
    items: 1,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    dots: false,
    autoplayHoverPause:true,
    rtl: true,
  };
  public customOptions: OwlOptions = {
    items: 5,
    loop:true,
    autoplay:true,
    autoplayTimeout: 400,
    dots: false,
    autoplayHoverPause:true,
    margin: 20,
    responsive: {
      0:{
        items: 2
      },
      400:{
        items: 2
      },
      600: {
        items: 3
      },
      800:{
        items: 3
      },
      1000:{
        items: 4
      },
      1200:{
        items: 5
      },

    }
  };

  public customOptions_left: OwlOptions = {
    items: 5,
    loop:true,
    rtl: true,
    autoplay:true,
    autoplayTimeout: 400,
    dots: false,
    autoplayHoverPause:true,
    margin: 20,
    responsive: {
      0:{
        items: 2
      },
      400:{
        items: 2
      },
      600: {
        items: 3
      },
      800:{
        items: 3
      },
      1000:{
        items: 4
      },
      1200:{
        items: 5
      }
    }
  };

  toggleMenu(): void {
    let menuBtn =
      document.querySelector(".menu-btn");
    if (!this.showMenu1) {
      menuBtn.classList.add("close");
      // Reset the menu state
      this.showMenu1 = true;
    } else {
      menuBtn.classList.remove("close");
      // Reset the menu state
      this.showMenu1 = false;
    }
  }

  ourGroups(param : any){
    if(param == 'vbcc'){
      window.location.href = 'https://vbccinstruments.com'
    } else {
      window.location.href = 'https://www.hitechceramics.in/'
    }
  }

  socials(param : any){
    if(param == 'youtube'){
      window.location.href = 'https://www.youtube.com/@drviswabaskaranvbceramics4394'
    } else if (param == 'linkedIn'){
      window.location.href = 'https://www.linkedin.com/company/dr.vb-ceramics-research-centre/'
    } else {
      window.location.href = 'paste a facebook URL here';
    }
  }

  imagesNav=[
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ];
  currentImageIndex15 = 0;
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }

  ngOnInit(): void {
    this.title.setTitle(
      'Explore Research Certifications & Accolades | VBCC Research'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Take your research career to new heights with VBCC Research. Explore a wide range of certifications & accolades to validate your expertise and achievements.',
    });
          // Update or add a custom meta tag for the primary keyword
          this.meta.updateTag({
            name: 'keyword',
            content: 'research certifications',
          });

          // Update or add a custom meta tag for the secondary keyword
          this.meta.updateTag({
            name: 'secondary-keyword',
            content: 'research accolades',
          });
  }
}
