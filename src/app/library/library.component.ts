import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{
  currentImageIndex15 = 0;
  imagesNav=[
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ]
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }

  isChildRoute = false;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location,private title: Title, private meta: Meta) {}
  public childActive : any;

  ngOnInit() {
    //this.router.navigate(['library'])
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.childActive = !!this.route.firstChild;
    //   console.log(this.childActive);
    // });
    this.title.setTitle(
      'Ceramics Blogs & Articles Latest Insights and Updates | VBCC Research'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore a world of expertise with Ceramics Blogs & Articles. Stay informed on the latest trends and insights in ceramic technology and industry advancements.',
    });
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

  library = [
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/service1-sec-1.png',
      content: 'X-Ray Powder Diffraction (XRD) Instrumentation & its Mechanism ',
      topic:'Raw Material',
      library_id:1,
      routing : "X-Ray-Diffraction",
      alt : "X-Ray Powder Diffraction"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article2.webp',
      topic:'Raw Material',
      content: 'Agate and It’s Importance',
      library_id:2,
      routing : "agate-importance",
      alt : "Agate"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article3.webp',
      topic:'Raw Material',
      content: "Graphite’s Impact in Industries",
      library_id:3,
      routing : 'graphite-impact-in-industries',
      alt : "Graphite’s Impact"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article4.webp',
      topic:'Thermal Testing ',
      content: 'Thermal Dynamics with Precision (Dilatometer)',
      library_id:4,
      routing : "thermal-dynamic-with-precision",
      alt : "Thermal Dynamics"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/glovebox.webp',
      topic:'Material Preparation',
      content: 'Glove Boxes for Scientific Advancement',
      library_id:5,
      routing : 'glove-boxes-for-scientific-advancement',
      alt : "'Glove Boxes"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article6.webp',
      topic:'Heat treatment facility',
      content: 'Working Principle of Hot Air Oven',
      library_id:6,
      routing : "working-principle-of-hot-air-oven",
      alt : "Hot Air Oven"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article1.webp',
      content: 'Quartz - Interesting Facts',
      topic:'Raw Material',
      library_id:7,
      routing : "quartz-interesting-facts",
      alt : "Quartz"
    },

  ];
}
