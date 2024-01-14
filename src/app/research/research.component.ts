import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit{
  currentImageIndex15 = 0;
  imagesNav=[
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ]
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }

  isChildRoute = false;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}
  public childActive : any;

  ngOnInit() {
    //this.router.navigate(['library'])
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.childActive = !!this.route.firstChild;
    //   console.log(this.childActive);
    // });
  }
  ourGroups(param : any){
    if(param == 'vbcc'){
      window.location.href = 'https://www.vbceramics.com/home.php'
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
 public research_papers: string = `Carbon nanotubes, nanorings, andnanospheres: Synthesis and fabrication viachemical vapor deposition—a review`;
  public research_papers1: string = `Ceramics International`;
  public research_papers2: string = `Mullitisation Behaviour of South Indian Clays`;
  public research_papers3: string = `Mullitisation Behaviour of Calcined Clay–Alumina Mixtures`;
  public research_papers4: string = `Effect of MgO, Y2O3 and Boehmite Additives on the Sintering Behaviour of Mullite Formed from Kaolinite-Reactive Alumina`;
  public research_papers5: string = `Mullite from Clay–Reactive Alumina for Insulating Substrate Application`;
  public research_papers6: string = `Influence of the intermixed inter facial layers on the thermal cycling behaviour of atmospheric plasma sprayed lanthanum zirconate based coatings`;
  public research_papers7: string = `Understanding the dry sliding wear behaviour of atmospheric plasma-sprayed rare earth oxide coatings`;
  public research_papers8: string = `Construction of Versatile Advanced Micro Processor based Controller for Spray Pyrolysis Unit and Study of Characterization of Nano Crystalline Tin Oxide (SnO2) ThinFilms`;
  public research_papers9: string = `Effect of chemical vapor deposition parameters on the diameter of multi-walled carbon nanotubes`;
  public research_papers10: string = `In situ synthesis of multi-walled carbon nanorings by catalytic chemical vapor deposition process`;
  public research_papers11: string = `Optimizing Chemical Vapor Deposition Parameters to Attain Minimum Diameter Carbon Nano Tubes by Response Surface Methodology`;
  public research_papers12: string = `Developing Empirical Relationship to Predict the Diameter of Multiwall Carbon Nano Tubes (MWCNTs) Synthesized by Chemical Vapor Deposition (CVD) Process. Manufacturing Technology Today`;
  public research_Projects: string = `Our centre is offering projects for B.E/M.E/M.Sc./M.Phil. students as well as for the research scholars to develop new methodologies to be adopted in the manufacture of more sophisticated equipment's and to promote research in the country in Materials Science and in particular in ceramics. VBCC Research is an Industrial partner with the following institutions which obtained combined projects.`;
  public research_project_ul1: string = `"Development of Reactive Thermal Plasma Reactor to Synthesis SiAlON and Silicon Nitride Based Ceramics from Fly Ash"`;
  public research_project_cnt1: string = `Dr. V. BALASUBRAMANIAN, M.E., Ph.D. (IITM).,Professor & Coordinator, Department of Manufacturing Engineering, Annamalai University, Annamalai nagar - 608 002, Tamil Nadu.`;
  public research_project_ul2: string = `"Pilot Studies on Microwave Conversion of Eggshell into Nanostructure Hydroxyapatite for Biomedical applications and to design and fabricate continuous flow microwave reactor for scaling up the process"`;
  public research_project_cnt2: string = `Dr. E. K. GIRIJA Assistant Professor, Department of Physics, Periyar University, Salem- 636 011, Tamil Nadu.`;
  public research_project_ul3: string = `"Automation of Nano hydroxyapatite production from eggshell waste using continuous flow microwave reactor suitable for industrial scale production for various biomedical and industrial applications"`;
  public research_project_cnt3: string = `Dr. E. K. GIRIJA Assistant Professor, Department of Physics, Periyar University, Salem- 636 011, Tamil Nadu. Dr. Vivekanand Kattimani, Professor, Department of Oral and Maxillofacial surgery, Department of Physics, Sibar Institute of Dental Sciences, Guntur -09 Andhra Pradesh.`;
  public research_project_ul4: string = `High energy density Batteries from M/S Omega Energy Systems`;
  public academic_activity: string = `VB Ceramics has jointly organized and supported more than 100 National / International Conferences so far. Few of them which have been recently held are mentioned below:`;
  public academic_activity_li1: string = `VBCC Research jointly Organized a TWO DAY UGC SPONSORED NATIONAL CONFERENCE ON NANOSCIENCE - A Multidisciplinary Approach on 10th & 11th FEBRUARY, 2016 at the Department of Electronics at the Mount Carmel College (Autonomous) Bengaluru.`;
  public academic_activity_li2: string = `VBCC Research jointly conducted a THIRD INTERNATIONAL WORKSHOP ON ADVANCED FUNCTIONAL NANOMATERIALS (TIWAN-2015) during 16th to 18th December, 2015 at Centre for Nanoscience & Technology, Anna University, Chennai.`;
  public academic_activity_li3: string = `VBCC Research jointly organized a Three Day International Conference on Advances in Materials, Manufacturing and Applications (AMMA 2015) during April 9th-11th April 2015 at the Department of Metallurgical and Materials Engineering, National Institute of Technology, Tiruchirappalli.`;

  library = [
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article1.webp',
      content: 'Quartz - Interesting Facts',
      topic:'Raw Material',
      library_id:1,
      routing : "quartz-interesting-facts"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article2.webp',
      topic:'Raw Material',
      content: 'Agate and It’s Importance',
      library_id:2,
      routing : "agate-importance"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article3.webp',
      topic:'Raw Material',
      content: "Graphite’s Impact in Industries",
      library_id:3,
      routing : 'graphite-impact-in-industries'
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article4.webp',
      topic:'Thermal Testing ',
      content: 'Thermal Dynamics with Precision (Dilatometer)',
      library_id:4,
      routing : "thermal-dynamic-with-precision"
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/glovebox.webp',
      topic:'Material Preparation',
      content: 'Glove Boxes for Scientific Advancement',
      library_id:5,
      routing : 'glove-boxes-for-scientific-advancement'
    },
    {
      img1: 'https://ik.imagekit.io/webibee/VBRC/images/article6.webp',
      topic:'Heat treatment facility',
      content: 'Working Principle of Hot Air Oven',
      library_id:6,
      routing : "working-principle-of-hot-air-oven"
    },

  ];
}
