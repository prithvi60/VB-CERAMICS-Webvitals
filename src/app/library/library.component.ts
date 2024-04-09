import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  currentImageIndex15 = 0;
  imagesNav = [
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ];
  changeImage15() {
    this.currentImageIndex15 =
      (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }

  isChildRoute = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title,
    private meta: Meta
  ) {}
  public childActive: any;

  ngOnInit() {
    //this.router.navigate(['library'])
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.childActive = !!this.route.firstChild;
    //   console.log(this.childActive);
    // });
    this.title.setTitle(
      'Research Blogs & Articles Latest Insights and Updates | VBCC Research'
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore a world of expertise with Research Blogs & Articles. Stay informed on the latest trends/insights, technology and industry advancements.',
    });
    // Update or add a custom meta tag for the primary keyword
    this.meta.updateTag({
      name: 'keyword',
      content: 'research blogs & articles',
    });
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
      img1: 'https://ik.imagekit.io/webibee/VBRC/service3-sec-1.png',
      content: 'Scanning Electron Microscope (SEM)',
      topic:'Raw Material',
      library_id:2,
      routing : "Scanning-Electron-Microscope",
      alt : "Scanning Electron Microscope"

    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article2.webp',
      topic: 'Raw Material',
      content: 'Agate and It’s Importance',

      library_id: 2,
      routing: 'agate-importance',
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article3.webp',
      topic: 'Raw Material',
      content: 'Graphite’s Impact in Industries',
      library_id: 3,
      routing : "agate-importance-1",
      alt : "Agate"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article3.webp',
      topic:'Raw Material',
      content: "Graphite’s Impact in Industries",
      library_id:4,
      routing : 'graphite-impact-in-industries',
      alt : "Graphite’s Impact"

    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article4.webp',
      topic: 'Thermal Testing ',
      content: 'Thermal Dynamics with Precision (Dilatometer)',

      library_id:5,
      routing : "thermal-dynamic-with-precision",
      alt : "Thermal Dynamics"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/glovebox.webp',
      topic: 'Material Preparation',
      content: 'Glove Boxes for Scientific Advancement',

      library_id:6,
      routing : 'glove-boxes-for-scientific-advancement',
      alt : "'Glove Boxes"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article6.webp',
      topic: 'Heat treatment facility',
      content: 'Working Principle of Hot Air Oven',

      library_id:7,
      routing : "working-principle-of-hot-air-oven",
      alt : "Hot Air Oven"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article1.webp',
      content: 'Quartz - Interesting Facts',
      topic:'Raw Material',
      library_id:8,
      routing : "quartz-interesting-facts",
      alt : "Quartz"
    },
  ];
}
