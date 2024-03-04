import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-library-one',
  templateUrl: './library-one.component.html',
  styleUrls: ['./library-one.component.css']
})

export class LibraryOneComponent {


  currentImageIndex15 = 0;
  imagesNav=[
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ]
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private title: Title, private meta: Meta) {}
  contentParams : any;
  id : any;
  heading : any
  img : any
  subHeading : any
  subHeading2 : any
  subHeading3 : any
  subHeading4 : any
  subHeading5 : any
  subHeading6 : any
  desc : any
  desc1 : any
  desc2 : any
  desc3 : any
  desc4 : any
  desc5 : any
  desc6 : any
  summary:any
  point1:any
  point2:any
  point3:any
  point4:any
  point5:any
  point6:any
  point7:any
  point8:any
  point9:any
  point11:any
  point12:any
  point13:any
  point14:any
  mainHeader:any
  headTitle:any
  metaDesc : any
  alt : any

  ngDoCheck(){
    this.contentParams = this.activatedRoute.snapshot.params['routing'];
    // console.log(this.contentParams);
    this.filterMethod();
  }

  ngOnInit(): void {
    this.contentParams = this.activatedRoute.snapshot.params['routing'];
    // console.log(this.contentParams)
    this.filterMethod();
    this.title.setTitle(
      this.headTitle
    );
    this.meta.updateTag({
      name: 'description',
      content:
        this.metaDesc,
    });
  }

  filterMethod(){
    const filteredData = this.content.filter((x)=>x.routing == this.contentParams);
    console.log(filteredData);
    
    this.id = filteredData[0].id;
    this.heading = filteredData[0].heading;
    this.mainHeader=filteredData[0].mainHeader;
    this.headTitle=filteredData[0].headTitle;
    this.metaDesc=filteredData[0].metaDesc;
    this.img = filteredData[0].img;
    this.alt = filteredData[0].alt;
    this.subHeading = filteredData[0].subHeading;
    this.subHeading2 = filteredData[0].subHeading2;
    this.subHeading3 = filteredData[0].subHeading3;
    this.subHeading4 = filteredData[0].subHeading4;
    this.subHeading5 = filteredData[0].subHeading5;
    this.subHeading6 = filteredData[0].subHeading6;
    this.desc1 = filteredData[0].desc1;
    this.desc2 = filteredData[0].desc2;
    this.desc3 = filteredData[0].desc3;
    this.desc4 = filteredData[0].desc4;
    this.desc5 = filteredData[0].desc5;
    this.desc6 = filteredData[0].desc6;
    this.point1 = filteredData[0].point1;
    this.point2 = filteredData[0].point2;
    this.point3 = filteredData[0].point3;
    this.point4 = filteredData[0].point4;
    this.point5 = filteredData[0].point5;
    this.point6 = filteredData[0].point6;
    this.point7 = filteredData[0].point7;
    this.point8 = filteredData[0].point8;
    this.point9 = filteredData[0].point9;
    this.point11 = filteredData[0].point11;
    this.point12 = filteredData[0].point12;
    this.point13 = filteredData[0].point13;
    this.point14 = filteredData[0].point14;
    this.summary = filteredData[0].summary;
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
  content = [
    {
      id : 1,
      routing : "X-Ray-Diffraction",
      mainHeader: "A Comprehensive Guide on X-Ray Powder Diffraction (XRD) Instrumentation & its Mechanism | VBCC Research",
      headTitle: "X-Ray Diffraction (XRD) Equipment with Powder Diffraction",
      metaDesc : "Discover X-ray Powder Diffraction in this comprehensive guide. Learn about XRD applications, principles, and versatile X ray diffractometer types.",
      heading: 'Quartz - Interesting Facts',
      img: 'https://ik.imagekit.io/webibee/VBRC/service1-sec-1.png',
      alt: "X-Ray Diffraction",
      subHeading : "",
      desc1:"",
      point1:`
      <h3>A Comprehensive Guide on X-Ray Powder Diffraction (XRD) Instrumentation & its Mechanism</h3>
      <p>X-ray diffraction (XRD) is a powerful analytical technique used in materials science, chemistry, geology, and various other scientific disciplines. This technique provides valuable insights into the crystallographic structure of materials. It allows researchers to understand their composition, phase purity, and even the presence of defects. Let’s understand the mechanisms of XRD instrumentation, and explore its components, principles, and applications.</p>
  `,
      point2:`
      <h3>Basics of X-Ray Diffraction:</h3>
      <div><h4>X-Ray Source:</h4> When the high-energy electrons are bombarded on a metal target either copper or cobalt, an X-ray is emitted from a sealed X-ray tube.  The resulting X-rays have a wavelength on the order of angstroms, making them suitable for diffraction experiments.</div>
      `,
      point3:`
      <div><h4>Monochromator:</h4> The X-ray beam produced by the source is polychromatic, containing a range of wavelengths. A monochromator isolates specific wavelengths from the range of wavelengths. Single crystals or diffraction gratings are used to select a narrow range of X-ray wavelengths.</div>
      <br/>
      <div><h4>Sample Holder: </h4> The sample holder is a flat plate or a rotating cylinder to hold a sample of finely ground powder for XRD analysis. The sample holder is used to evenly disperse the powder to ensure a representative and homogeneous sample.</div>
      `,
      point4:`
      <div><h4>Goniometer: </h4>The goniometer is a critical component that allows precise control of the orientation of the sample concerning the incident X-ray beam. It facilitates the measurement of diffraction angles, crucial for determining crystallographic information.</div>
      <br/>
      <div><h4>Detector: </h4> The detector captures the diffracted X-rays, converting them into electrical signals. Modern detectors, such as scintillation or semiconductor detectors, offer high sensitivity and resolution.</div>
      `,
      point5:`
      <h3>X-ray Powder Diffraction with HPAD Detector</h3>
      <p>MiniFlex XRD system delivers speed and sensitivity through innovative technology advances, including the HyPix-400 MF 2D hybrid pixel array detector (HPAD) together with an available 600 W X-ray source and new 8-position automatic sample changer.</p>
      `,
      point6:`
      <h3>Principles of XRD:</h3>
      <p>Bragg's Law was formulated by Sir William Bragg and his son Lawrence Bragg in 1913. XRD is based on the principles of Bragg's Law. It describes the relationship between the angle of incidence, wavelength of X-rays, and crystal lattice spacing in X-ray diffraction (XRD). The law is expressed as 2d sin θ = nλ, where 'd' is the crystal lattice spacing, 'θ' is the angle of incidence, 'n' is an integer representing the diffraction order, where 'λ' represents X-ray wavelength.</p>
      <p>The diffraction pattern obtained from a sample provides information about the crystal lattice and allows for the determination of key parameters such as lattice constants, crystal symmetry, and phase identification.</p>`,
      point7:`
      <h3>XRD Applications:</h3>
      <div> <h4>Phase Identification:</h4>
      XRD is used for discerning distinct phases within a sample, as each crystalline phase exhibits a distinctive diffraction pattern. This characteristic allows researchers to analyze complex materials and ascertain their composition by identifying the unique fingerprints reflected in the diffraction patterns.</div>
      <br/>
      <div> <h4>Quantitative Analysis:</h4>
      The intensity of diffracted peaks determines the relative amounts of different phases within a sample.</div>
      <br/>
      <div> <h4>Crystal Structure Determination:</h4>
      By analysing the positions and intensities of diffraction peaks, researchers can unveil the three-dimensional arrangement of atoms within a crystal lattice.</div>
      <br/>
      <div> <h4>Stress and Strain Analysis:</h4>
      XRD is used to analyse the stress and strain within a crystalline material. It provides insights into its mechanical properties.</div>
      `,
      point8:`
      <h3>Examples of XRD usage:</h3>
      <p>X-ray diffraction (XRD) finds practical applications in various fields.</p>
      <ul>
          <li>In materials science, it helps to determine crystal structures and aids the study of polymers, metals, and ceramics. </li>
          <li>In pharmaceuticals, XRD identifies drug compositions. It helps to ensure the purity and stability of pharmaceutical products by verifying their crystalline structure. It is used in quality control in industries such as electronics and construction.</li>
          <li>Geological applications involve analyzing minerals in rocks and soil samples as different minerals exhibit unique diffraction patterns. It is used to identify phases in rocks.</li>
          <li>In archaeology, it assists in dating artifacts by examining crystalline structures. </li>
          <li>In nanotechnology, XRD is used to characterize nanomaterials. It provides valuable information about particle size, crystallinity, and phase composition.</li>
      </ul>
      `,
      point9:`
      <h3>Types of X-Ray Diffractometers:</h3>
      <p>Each type of X-ray Powder Diffraction instrument caters to specific industry needs to provide precise analytical capabilities for a range of applications. The choice depends on factors such as the nature of the sample, required resolution, portability, and the specific goals of the analysis. Let us see a few types of XRD:</p>
      <ul>
          <li>Benchtop X-ray Diffractometers are used for academic research, small laboratories, and routine analysis in industries like pharmaceuticals and materials science. </li>
          <li>Floor-Standing X-ray Diffractometers are used in materials science, pharmaceuticals, geology, and quality control in manufacturing.</li>
          <li>Portable X-ray Diffractometers are best for geological exploration, field studies, and on-site quality control in industries like mining and construction.</li>
          <li>Synchrotron-based X-ray Diffractometers help in advanced research in materials science, pharmaceuticals, and any field requiring high-intensity, tunable X-ray beams.</li>
          <li>Texture and Residual Stress X-ray Diffractometers for use in metallurgy, aerospace, automotive, and any field concerned with understanding material properties and structural integrity.</li>
      </ul>
      `,
      point11:`
      <h3>Conclusion:</h3>
      <p>X-ray powder Diffraction instrument is a versatile and indispensable tool in scientific research and industry due to its ability to detect the characteristics of crystalline.
      <br/>
      <br/>
      VBCC Research is a prominent ceramic Equipment and Instrument manufacturer in India. They address the research and quality control needs in Glass, Ceramics, Nano Science, and Material Science. They provide a centralized hub for students, researchers, and engineers.
      <br/>
      <br/>
      VBCC offers year-round access to a spectrum of experimental facilities and their services include comprehensive testing of mechanical, physical, chemical, and thermal properties from raw materials to final products. The facility supports synthesis and fabrication from laboratory to industrial scale, ensuring quality through final testing and characterizations. VBCC offers a wide range of X-ray diffractometers at affordable rates. Connect with us to know more. </p>
     `,
      summary:""
    },
    {
      id : 2,
      routing : "Scanning-Electron-Microscope",
      mainHeader: "The applications and practical utility of Scanning Electron Microscope",
      headTitle: "The applications and practical utility of Scanning Electron Microscope | VBCC Research",
      metaDesc : "Explore diverse applications & utility of Scanning Electron Microscope (SEM) for researchers and students, from materials science to nanotechnology. Discover its benefits now.",
      heading: 'Scanning Electron Microscope',
      img: 'https://ik.imagekit.io/webibee/VBRC/service3-sec-1.png',
      alt: "Scanning Electron Microscope",
      subHeading : "The applications and practical utility of Scanning Electron Microscope",
      desc1:"A Scanning Electron Microscope (SEM) is a powerful instrument used for imaging the surface of materials at very high magnifications. It uses electrons and has a higher resolution as it uses a focused beam of electrons to create detailed, three-dimensional images of the specimen.",
      point1:`
      <h3>How does a Scanning Electron Microscope work?</h3>
      <ul>
          <li>SEMs use an electron gun to produce a stream of high-energy electrons.</li>
          <li>Electromagnetic lenses are responsible for directing and managing the electron beam's focus.</li>
          <li>The sample is placed in a vacuum chamber to ensure that the electrons can travel freely without encountering air molecules.</li>
          <li>Scanning coils move the focused electron beam in a scanning pattern across the surface of the specimen.</li>
          <li>Different detectors capture various signals generated by the interaction of the electron beam with the specimen. The most common signals include secondary electrons, backscattered electrons, and characteristic X-rays.</li>
          <li>The signals create detailed images of the specimen's surface, providing information about its topography and composition. The images are black and white, and the SEM is known for its high depth of field and three-dimensional appearance.</li>
      </ul>
  `,
      point2:`
      <h3>What are the applications of Scanning Electron microscopes?</h3>
      <div><h4>Materials Science:</h4> SEM is used to study the microstructure of materials, including metals, ceramics, and polymers. It helps identify features like grain boundaries, phase distribution, and the arrangement of particles, providing insights into the material's properties. It is crucial to investigate the causes of material failures. By examining fracture surfaces and defects at a microscopic level, researchers can determine the root causes of structural failures in materials.</div>
      `,
      point3:`
      <div>Nanotechnology:</h4> TSEM characterizes nanoparticles and nanostructures. It allows researchers to visualize and analyse the morphology and distribution of nanoscale materials.</div>
      <br/>
      <div>Biology and Life Sciences:</h4> TSEM provides detailed images of biological specimens at a high resolution. It is used for the study of cell surfaces, tissues, and biological structures. It provides information on surface topography.
      It is used to examine microorganisms such as bacteria, viruses, and fungi to understand their morphology, surface characteristics, and interactions with host cells.
      </div>
      `,
      point4:`
      <div>Geology and Earth Sciences:</h4>SEM is used to study minerals and rocks at a microscale, helping geologists understand mineral composition, crystal structure, and the formation processes of geological samples. It is also used to examine fossils and study the structure and preservation of ancient organisms.</div>
      <br/>
      <div>Semiconductor Industry:</h4>SEM is used for quality control and inspection of semiconductor devices and integrated circuits. It helps identify defects, measure dimensions, and ensure the manufacturing precision of microelectronics components.</div>
      `,
      point5:`
      <h3>Archaeology and Cultural Heritage:</h3>
      <p>SEM is used to study the surface of archaeological artifacts to help archaeologists understand the manufacturing techniques, corrosion processes, and material composition of ancient objects.</p>
      `,
      point6:`
      <h3>Forensic Science:</h3>
      <p>SEM is utilized in forensic investigations to examine trace evidence such as hair, fibres, and gunshot residues. It provides detailed information that can be crucial in criminal investigations.</p>`,
      point7:`
      <h3>Material Coating and Surface Modification:</h3>
      <p>
      SEM can inspect and analyse the thickness, uniformity, and adhesion of coatings on various materials. Researchers use SEM to study the effects of surface treatments and modifications on materials, such as the application of thin films or coatings.</p>
      `,
      point8:`
      <h3>How is SEM beneficial for researchers and students?</h3>
      <p>For researchers, SEMs offer high-resolution imaging, aiding in materials characterization, nanotechnology studies, and interdisciplinary research. They play a crucial role in failure analysis and surface modification studies, contributing to advancements in various scientific fields. </p>
      <p>For students, SEMs provide a hands-on learning experience, enabling them to visualize microstructures, engage in research projects, and develop problem-solving skills. Exposure to SEMs prepares students for careers in research, academia, and industries related to materials, nanotechnology, and biology, fostering a cross-disciplinary approach to scientific exploration.
      </p>
      `,
      point9:`
      <h3>What are the various types of Scanning Electron Microscopes?</h3>
      <ul>
          <li>Conventional SEM is used for imaging the surface morphology of specimens. </li>
          <li>Environmental SEM (ESEM) allows for the imaging of specimens in their natural or hydrated state, eliminating the need for extensive sample preparation. </li>
          <li>Low Vacuum SEM is designed to operate at lower vacuum levels. It allows the imaging of non-conductive specimens without extensive sample coating. It is suitable for materials with poor conductivity.</li>
          <li>Field Emission SEM (FESEM) is a field-emission electron source. It produces a highly focused electron beam for enhanced resolution. It is useful for imaging nanoscale features and is commonly used in advanced materials research.</li>
      </ul>
      `,
      point11:`
      <p>The choice of SEM depends on the specific requirements of the research or application.
      </p>
     `,
      summary:"VBCC Research nurtures top-tier research in ceramics and various materials-related fields within the country. VBCC Research has state-of-the-art facilities and is supported by a dedicated team of experts. They offer Benchtop Scanning Electron Microscope (SEM). It is a compact and versatile instrument featuring intuitive touch-panel operation and new screens. Its standard configuration includes a low vacuum mode, with the option to install Energy Dispersive X-ray Spectroscopy (EDS) for multifunctionality. The SEM offers easy-to-understand controls, touch panels for intuitive operation, and standard features like high and low vacuum modes. It ensures quick response with images displayed within 3 minutes of startup, facilitating efficient research and maintenance. Connect with us to know more."
    },
    {
      id : 2,
      routing : "quartz-interesting-facts",
      mainHeader: "Fascinating Facts about Quartz & Abundance of Quartz Minerals ",
      headTitle: "Fascinating Facts about Quartz & Abundance of Quartz Minerals | VBCC Research",
      metaDesc : "Explore the abundance and diversity of quartz minerals with intriguing facts. Unveil the fascinating world of quartz and its remarkable properties.",
      heading: 'Quartz - Interesting Facts',
      img: 'https://ik.imagekit.io/webibee/VBRC/images/article1.webp',
      alt: "quartz",
      subHeading : "Unveiling the Enigmatic Beauty : Exploring Fascinating Facts about Quartz",
      desc1:"Quartz, a gem of the Earth's treasury, is a mineral that has captivated humans for centuries with its mesmerizing appearance, diverse forms, and intriguing properties. Let's embark on a journey to discover some lesser-known and enthralling facts about this extraordinary mineral.",
      point1:`
      <h3>Abundance in Diversity :</h3>
       <p> Quartz reigns as one of the most abundant minerals on the planet, composing a significant portion of the Earth's crust. Its diverse forms and breath taking colours, ranging from the transparent purity of rock crystal to the soothing lavender shades of amethyst, showcase nature's artistic flair.</p>`,
      point2:`
      <h3>Etymology of Elegance :</h3> 
      <p> The word 'quartz' derives from the German term 'quarz,' which originated from the Slavic word 'tvrdy,' meaning 'hard.' This etymological journey perfectly captures quartz's defining attribute – its exceptional hardness, a quality that ranks it at number 7 on the Mohs scale of mineral hardness.</p>`,
      point3:`
      <h3>Ancient Crystal Marvels :</h3> 
      <p> Quartz crystals are ancient marvels that have witnessed the passage of time. These crystals form deep within the Earth's crust, developing over millions of years through a process of slow and precise growth. Each crystal tells a geological story that spans epochs.</p>`,
      point4:`
      <h3>Piezoelectric Power :</h3> 
      <p> Quartz's unique property of piezoelectricity is a phenomenon where mechanical pressure applied to the crystal generates an electric charge, and vice versa. This remarkable quality has found applications in various fields, from igniting sparks in cigarette lighters to the sensitive microbalances in scientific instruments.</p>`,
      point5:`
      <h3>Time's Everlasting Guardian :</h3>
       <p> Modern technology owes a debt of gratitude to quartz for revolutionizing timekeeping. The advent of quartz watches in the 1960s transformed horology. These watches utilize the consistent vibrations of a quartz crystal to maintain unwavering accuracy in tracking time, rendering them as reliable guardians of moments.</p>`,
      point6:`<h3>Vibrant Guardians of Serenity :</h3> 
      <p> Quartz varieties like amethyst and clear quartz have been revered for their metaphysical attributes since ancient times. Amethyst is often associated with tranquillity and spiritual clarity, while clear quartz is believed to amplify energy and facilitate meditation.</p>`,
      point7:`
      <h3>Crystalline Healers :</h3> 
      <p> Crystal healing enthusiasts place quartz crystals on the body to promote holistic well-being. While scientific backing is limited, proponents believe that quartz's energy can stimulate healing and balance in the body and mind.</p>`,
      point8:`
      <h3>Earth's Geological Chronicler :</h3> 
      <p> Quartz holds the Earth's geothermal history within its crystalline structure. By studying quartz deposits, geologists can unravel the mysteries of the planet's past temperatures, pressures, and geological events.</p>`,
      point9:`
      <h3>Elemental Silicon Symphony :</h3> 
      <p> Quartz's composition involves silicon and oxygen atoms arranged in a symphony of molecular harmony. Silicon, a vital component of quartz, plays a pivotal role in modern electronics, serving as the foundation of semiconductors powering our digital world.</p>`,
      point11:`
      <h3>Lapidary Artistry :</h3> 
      <p>Artisans around the world treasure quartz's captivating colours and patterns. They transform raw quartz into exquisite jewellery, sculptures, and ornamental pieces through the art of lapidary, allowing the mineral's innate beauty to shine.</p>`,
      summary:"In conclusion, quartz is more than just a mineral; it's a testament to the Earth's artistic ingenuity and geological marvels. From its captivating forms and hues to its influential role in technology and ancient beliefs, quartz beckons us to delve deeper into its enchanting realm and appreciate the intricate wonders it holds."
    },
    {
      id : 3,
      routing : 'graphite-impact-in-industries',
      mainHeader: "Graphite: Catalyst for Industrial Metallurgy & Industries ",
      headTitle: "Graphite: Catalyst for Industrial Metallurgy & Industries | VBCC Research",
      metaDesc : "Discover the power of graphite in industrial metallurgy. Enhance efficiency and performance across various industries with this versatile catalyst.",
      heading: "Graphite’s Impact in Industries",
      img: 'https://ik.imagekit.io/webibee/VBRC/images/article3.webp',
      alt: "Graphite",
      subHeading : "Graphite : A Catalyst for Transformation Across Varied Industries",
      desc1:"Graphite, an unassuming yet highly potent form of carbon, emerges as a mineral that has dynamically reformed multiple industries through its remarkable attributes and diverse applications. From its pivotal contributions to technological advancements to its role in energy storage and beyond, graphite wields a profound and pervasive influence. Let's embark on a journey into the realm of graphite, uncovering how it shapes and propels innovation across a spectrum of sectors.",
      point1:`
      <h3> Industrial Metallurgy : </h3> 
      <p> Graphite's elevated melting point,  utstanding thermal conductivity, and resistance to chemical reactions render it an indispensable asset in metallurgical processes. Its utility as a crucible material for melting and casting metals such as steel, iron, and non-ferrous alloys bolsters essential manufacturing procedures. Its capacity to endure extreme temperatures assures the efficacy and excellence of these pivotal production processes.</p>`,
      point2:`
      <h3> Batteries and Energy Storage :</h3> 
      <p> The ascent of electric vehicles and renewable energy sources has thrust graphite into the spotlight. Graphite occupies a pivotal role in lithium-ion batteries, functioning as the anode material that harbors and dispenses energy during charging and discharging cycles. Its capability to intercalate lithium ions facilitates efficient energy storage, contributing significantly to the sustainable energy transition.</p>`,
      point3:`
      <h3> Mechanical and Industrial Applications :</h3> 
      <p> Graphite's self-lubricating qualities and low friction characteristics designate it as an optimal material for mechanical functions. It is instrumental in crafting lubricants, greases, and coatings that mitigate wear and friction in machinery, thereby amplifying efficiency and prolonging equipment longevity.</p>`,
      point4:`
      <h3> Electronics and Semiconductors :</h3> 
      <p> Graphite's exceptional electrical conductivity and adept thermal management attributes emerge as pivotal assets in the electronics sector. It is harnessed in the fabrication of heat sinks, electrical components, and as a substrate for semiconductor devices. Its efficacy in dispersing heat proficiently ensures the apt functionality and durability of electronic apparatus.</p>`,
      point5:`
      <h3> Aerospace and Defence :</h3> 
      <p> Graphite's lightweight yet robust nature positions it as a prized resource in aerospace and defence applications. It assumes a role in aircraft components, rocket nozzles, and structural materials. Graphite composites provide the requisite strength while minimizing overall weight, a crucial factor in optimizing aerospace technologies.</p>`,
      point6:`
      <h3> Refractories and Foundry Industry :</h3> 
      <p> Graphite's resistance to elevated temperatures and chemical erosion proves to be a boon in refractory contexts. It is employed to line furnaces, kilns, and crucibles, assuring the containment of intense heat and corrosive agents. Graphite's stability plays a pivotal role in preserving the integrity of vital industrial procedures.</p>`,
      point7:`
      <h3> Lubricants and Lubrication Technology :</h3> 
      <p> Graphite's innate lubricating traits have steered its integration into diverse lubricant formulations. Its utilization spans from automotive engines to heavy machinery. Lubricants infused with graphite curtail friction, stave off wear, and augment the efficiency of mobile components.</p>`,
      point8:`
      <h3> Nuclear Reactors and Energy Generation :</h3> 
      <p> Graphite's aptitude to endure high temperatures and radiation exposure confers a noteworthy role in nuclear reactors. It assumes the mantle of a moderator, facilitating the deceleration of neutrons and thus enabling nuclear fission. Additionally, graphite finds purpose in the creation of fuel elements and components for specific reactor variants.</p>`,
      point9:`
      <h3> Green Technologies and Sustainability :</h3> 
      <p> Graphite's participation in energy storage, lightweight materials, and streamlined manufacturing procedures underscores its significance in fostering greener technologies. Its involvement in renewable energy storage and lightweight materials for transportation aids in curbing carbon footprints and fostering sustainability.</p>`,
      point11:`
      <h3>Emerging Frontiers of Innovation :</h3> 
      <p> Graphene, a single layer of carbon atoms arranged in a hexagonal framework, originates from graphite and harbours substantial potential across domains such as electronics, materials science, and medical applications. Its remarkable attributes, encompassing elevated electrical conductivity and mechanical robustness, unveil portals to ground breaking innovations that remain largely untapped.</p>`,
      summary:"In conclusion, graphite's adaptability and remarkable attributes have propelled it across a multifaceted tapestry of industries, functioning as a catalyst for advancement and innovation. From powering electric vehicles to augmenting aerospace technologies and empowering efficient manufacturing, graphite's imprint continues to shape contemporary society, while its latent potential extends further into territories ripe for exploration and discovery."
    },
    { 
      id : 4,
      routing : "thermal-dynamic-with-precision",
      mainHeader: "Precision Dilatometer: Thermal Expansion Measurement Device",
      headTitle: "Precision Dilatometer: Thermal Expansion Measurement Device  | VBCC Research",
      metaDesc : "Discover precise thermal expansion measurement with our dilatometer thermal dynamics device. Accurate insights for diverse materials.",
      heading: 'Thermal Dynamics with Precision (Dilatometer)',
      img: 'https://ik.imagekit.io/webibee/VBRC/images/article4.webp',
      alt: "Precision Dilatometer",
      subHeading : "Dilatometer : Thermal Dynamics with Exquisite Precision",
      desc1:"Within the complex realm of material science and thermal investigation, the dilatometer assumes a paramount role, serving as a conduit to comprehend how substances respond to alterations in temperature. This intricately designed instrument stands as a cornerstone of research, affording scientists and engineers a unique vantage point to explore the thermal properties and conduct of materials. Let's embark on an enlightening journey, unravelling the significance, operational mechanics, and diverse applications of the dilatometer.",
      subHeading2 :"Deciphering Thermal Expansion :",
      desc2:"Central to its purpose, the dilatometer orchestrates the measurement of a material's thermal expansion or contraction amidst shifts in temperature. This phenomenon, recognized as thermal expansion, constitutes the reason behind phenomena like the elongation and contraction of bridges with temperature fluctuations or the discernible warmth felt when holding a sun-exposed metal ruler. The dilatometer deftly captures and quantifies these nuanced dimensional adjustments, rendering an invaluable comprehension of how materials react to thermal stimuli.",
      subHeading3 :"Essential Components and Operational Symphony :",
      desc3:"The anatomy of a conventional dilatometer comprises a receptacle for the sample material and a reference entity that remains steadfast amid temperature oscillations. As the thermal landscape transforms, the dilatometer meticulously gauges alterations in the length or volume of both the sample and reference components. This meticulously amassed data subsequently undergoes meticulous analysis, unearthing details like the coefficient of thermal expansion, phase transitions, and other thermal attributes inherent to the material under scrutiny.",
      subHeading4 :"Vast Canvas of Application:",
      desc4:"The domain of dilatometers traverses a panoramic spectrum of industries and research domains :",
      subHeading5 :"Progressive Pinnacle and Innovation",
      desc5:"Dilatometers continue their evolutionary journey, spurred by technological strides that usher in augmented precision, heightened accuracy, and the capability to scrutinize an expanded array of materials. Automated data compilation and advanced analytical tools further refine the insights harvested from dilatometry endeavours.",
      point1:`
      <h3>Materials Science :</h3> 
      <p> Dilatometers constitute an invaluable tool in materials exploration, fostering the formulation of innovative materials boasting specific thermal traits. They serve as custodians of data concerning the comportment of diverse materials, orchestrating informed judgments concerning material choice in engineering endeavours.`,
      point2:`
      <h3>Metallurgy : </h3> 
      <p> In the metallurgical arena, dilatometers bestow a nuanced understanding of how metals respond to processes of heat treatment. This insight is pivotal in tailoring the characteristics of metals utilized in manufacturing, ensuring the coveted attributes of hardness and dimensional stability.</p>`,
      point3:`
      <h3>Ceramics and Glass :</h3> 
      <p> The comportment of ceramics and glass materials within the ambit of fluctuating temperatures holds significant sway. Dilatometers yield pivotal data regarding their coefficients of thermal expansion, a facet influencing their deployment in a spectrum spanning from culinary utensils to aerospace constituents.</p>`,
      point4:`
      <h3>Pharmaceutical Domain :</h3> 
      <p> Dilatometry finds a foothold in pharmaceutical research, casting light upon the thermal attributes of drug compounds and formulations. This intelligence can influence the stability and potency of medications.</p>`,
      point5:`
      <h3>Geological Expedition :</h3> 
      <p> The geologic vista witnesses the utilization of dilatometry to fathom the expansiveness and contraction of rocks and minerals under diverse temperature circumstances. This comprehension sheds light on geological phenomena and the comportment of substances within Earth's lithic envelope.</p>`,
      point6:`
      <h3>Infrastructure and Construction :</h3> 
      <p> Dilatometers play a pivotal role in comprehending the behaviour of construction materials such as concrete and asphalt under varying temperature conditions. This knowledge underpins design considerations and assures the longevity of infrastructural edifices.</p>`,
      point7:`
      <h3>Realm of Research and Development :</h3>
       <p> Within the precincts of research and development, dilatometers guide the characterization of novel materials, ushering in the creation of products boasting targeted thermal attributes tailored for assorted industries.</p>`,
      summary:"In summation, the dilatometer stands as a testament to the intricate choreography between temperature and matter. Its meticulous measurements and exhaustive comprehension of thermal expansion empower industries, researchers, and engineers to traverse the expanse of informed decision-making, innovate with finesse, and unlock the latent potential of materials in a milieu punctuated by the fluctuations of temperature.",

    },
    {
      id : 5,
      routing : 'glove-boxes-for-scientific-advancement',
      mainHeader: "Glove Boxes for Scientific Advancement",
      headTitle: "Glove Boxes for Scientific Advancement | VBCC Research",
      metaDesc : "Elevate your research with glove boxes tailored for scientific excellence. Explore our solutions for precision and advancement.",
      heading: 'Glove Boxes for Scientific Advancement',
      img: 'https://ik.imagekit.io/webibee/VBRC/glovebox.webp',
      alt: "Glove Boxes for Scientific Advancement",
      subHeading :"Glove Box : Creating Controlled Environments for Scientific Advancement",
      desc1:"A crucial tool stands at the forefront of scientific exploration - the glove box. This innovative device empowers researchers to conduct experiments and handle materials in controlled environments, shielded from external contaminants. Let's delve into the world of glove boxes, understanding their significance, operation, and their indispensable role in various research endeavours.",
      subHeading2:"The Essence of Controlled Environments :",
      desc2:"Glove boxes, also known as controlled atmosphere or isolation chambers, are sealed enclosures designed to maintain specific conditions such as humidity, temperature, and gas composition. These controlled environments are essential when dealing with materials sensitive to air, moisture, or contaminants. In scientific research, maintaining the integrity of experiments and samples is paramount, and glove boxes offer the ideal solution.",
      subHeading3:"Components and Functionality :",
      desc3:"A typical glove box comprises a transparent chamber, often made of acrylic or glass, fitted with gloves that allow researchers to manipulate objects within the enclosure without compromising its controlled environment. The glove box is equipped with gas purification systems, airlocks, and various monitoring instruments to regulate and monitor conditions. Inert gases, such as nitrogen or argon, are often used to displace oxygen and moisture, creating an environment suitable for delicate processes.",
      subHeading4:"Applications Across Research Domains :",
      desc4:"Glove boxes find their applications in a wide range of research disciplines:",
      subHeading5:"Precision and Security in Exploration ",
      desc5:"Beyond conferring controlled environments, glove boxes assume the role of sentinels, ensuring not only the precision but also the safety of researchers. Especially when contending with perilous or toxic materials, these sealed habitats act as barriers, insulating researchers from potential health hazards. Moreover, these orchestrated surroundings amplify the precision and reproducibility of experiments, thereby contributing to the reliability of research outcomes.",
      subHeading6:"Upcoming Frontiers of Innovation ",
      desc6:" A vista of glove box technology encompasses automated frameworks, facilitating remote operation and real-time monitoring. These strides in innovation streamline research protocols and widen the spectrum of plausible applications of glove boxes within avant-garde research pursuits.In summation, glove boxes unfurl as custodians of precision and authenticity within research centers. These constructs craft sanctuaries where sensitive materials are manipulated, guaranteeing the exactitude of experiments and the security of researchers. With their irreplaceable status in multifarious research arenas, glove boxes continue to form the bedrock of scientific progression, presenting a poised stage for breakthroughs and revelations.",
      point1:`
      <h3>Chemistry and Material Science :</h3>
       <p> In the study of air-sensitive compounds, catalysts, and delicate materials, glove boxes prevent reactions with oxygen and moisture. Researchers can perform synthesis, purification, and characterization processes with precision.</p>`,
      point2:`
      <h3>Nanotechnology :</h3>
      <p> Glove boxes play a vital role in nanomaterial research, where even slight contamination can alter results. They provide an environment free from airborne particles, ensuring accurate manipulation and analysis of nanoparticles.</p>`,
      point3:`
      <h3>Pharmaceutical Research :</h3>
      <p> When working with sensitive drug compounds or sterile preparations, glove boxes prevent contamination and maintain a sterile environment, ensuring the accuracy of pharmaceutical research.</p>`,
      point4:`
      <h3>Battery and Energy Research :</h3>
      <p> Glove boxes are used in the development and testing of energy storage devices like batteries and fuel cells. They prevent interactions with moisture and oxygen, allowing researchers to analyze electrochemical processes accurately.</p>`,
      point5:`
      <h3>Biotechnology :</h3>
      <p> In cell culture work, where sterility is crucial, glove boxes help maintain a contaminant-free environment. They enable researchers to handle biological samples, tissues, and cell cultures without risking contamination.</p>`,
      point6:`
      <h3>Advanced Materials Development :</h3>
      <p> Glove boxes aid in the production and manipulation of advanced materials like superconductors, semiconductors, and optoelectronic devices, where the presence of contaminants can hinder performance.</p>`,
      summary:"In summation, glove boxes unfurl as custodians of precision and authenticity within research centers. These constructs craft sanctuaries where sensitive materials are manipulated, guaranteeing the exactitude of experiments and the security of researchers. With their irreplaceable status in multifarious research arenas, glove boxes continue to form the bedrock of scientific progression, presenting a poised stage for breakthroughs and revelations.",
    },
    {
      id : 6,
      routing : "working-principle-of-hot-air-oven",
      mainHeader: "Working Principle of Hot Air Oven",
      headTitle: "Working Principle of Hot Air Oven  | VBCC Research",
      metaDesc : "Discover the inner workings of hot air ovens, their principles, and applications. Learn how hot air ovens function for optimal performance and efficiency.",
      heading: 'Working Principle of Hot Air Oven',
      img: 'https://ik.imagekit.io/webibee/VBRC/images/article4.webp',
      alt: "Working Principle of Hot Air Oven",
      desc1:"The hot air oven, an essential apparatus in laboratories, industries, and research facilities, operates on a fundamental principle that facilitates uniform heating and sterilization of various materials. This versatile tool finds applications in diverse fields, including microbiology, material testing, and food industries. Let's delve into the core of its working principle, exploring how it achieves precise temperature control and its significance in modern-day applications.",
      subHeading2:"The Essence of Hot Air Oven :",
      desc2:"At its core, a hot air oven is designed to provide controlled heating through the circulation of hot air within an enclosed chamber. This uniform distribution of heat ensures that the items placed within the oven experience consistent temperature conditions. The oven's mechanism is based on the principles of convection, making it a reliable tool for drying, curing, and sterilizing purposes.",
      subHeading3:"Components and Mechanism :",
      desc3:"A hot air oven consists of several key components that work in harmony to achieve its functioning :",
      subHeading4:"Working Principle :",
      desc4:"The hot air oven operates on the principle of convection, where heat is transferred through the movement of air. The process can be summarized as follows:",
      subHeading5:"Applications in Various Sectors :",
      desc5:"The hot air oven's working principle finds applications in a wide range of industries :",
      point1:`
      <h3>Heating Element :</h3>
       <p> The oven is equipped with a heating element, usually electric coils or a heating coil, that generates heat when electrical energy is supplied.</p>`,
      point2:`
      <h3>Temperature Control System :</h3>
      <p> An integrated temperature control system, often equipped with a thermostat or digital controller, monitors and regulates the oven's internal temperature.</p>`,
      point3:`
      <h3>Fan :</h3>
      <p> The presence of a fan ensures efficient circulation of hot air throughout the chamber, promoting even heating.</p>`,
      point4:`
      <h3>Insulated Chamber :</h3>
      <p> The chamber is insulated to prevent heat loss and maintain a stable temperature.</p>`,
      point5:`
      <h3>Heating :</h3>
      <p> The heating element is activated, generating heat within the oven. The temperature control system maintains the desired set temperature.</p>`,
      point6:`
      <h3>Circulation :</h3>
      <p> The fan inside the oven begins to circulate the hot air throughout the chamber. As the air moves, it carries heat energy, creating a consistent temperature environment.</p>`,
      point7:`
      <h3>Uniform Heating :</h3>
      <p> Items placed within the oven are surrounded by the circulating hot air, resulting in uniform and thorough heating. This ensures that all parts of the materials or samples experience the same temperature conditions.</p>`,
      point8:`
      <h3>Precision :</h3>
      <p> The temperature control system continuously monitors the internal temperature and adjusts the heating element's output to maintain the set temperature accurately.</p>`,
      point9:`
      <h3>Microbiology and Research :</h3>
      <p> In laboratories, the hot air oven is used to sterilize equipment, glassware, and lab instruments. The uniform heating ensures the destruction of microorganisms.</p>`,
      point11:`
      <h3>Food Industry :</h3>
      <p> Hot air ovens are utilized for drying and dehydrating food products, preserving their quality, flavor, and nutritional value.</p>`,
      point12:`
      <h3>Material Testing :</h3>
      <p> Industries employ hot air ovens to determine the effects of heat on different materials, measuring properties like expansion, strength, and thermal stability.</p>`,
      point13:`
      <h3>Pharmaceuticals :</h3>
      <p> The oven is used for the drying and sterilization of pharmaceutical products, ensuring their safety and efficacy.</p>`,
      point14:`
      <h3>Electronics :</h3>
      <p> Hot air ovens aid in the drying and curing of electronic components, coatings, and adhesives.</p>`,
      summary:"In conclusion, the working principle of the hot air oven revolves around convection-based heating, which guarantees uniform temperature distribution for a variety of applications. Its role in laboratories, industries, and research centers underscores its significance in achieving precise, controlled heating and sterilization, contributing to advancements in science, technology, and various sectors.",
    },
    {
      id : 7,
      routing : "agate-importance-1",
      mainHeader: "Agate's Industrial Significance and Versatile Applications",
      headTitle: "Agate's Industrial Significance and Versatile Applications  | VBCC Research",
      metaDesc : "Explore the industrial significance of agate and its versatile applications. Learn how agate enhances various sectors with its unique properties.",
      heading: 'Agate and It’s Importance',
      img: 'https://ik.imagekit.io/webibee/VBRC/images/article2.webp',
      alt: "agate-importance",
      subHeading : 'Agate: Unveiling Its Industrial Significance and Versatile Applications',
      desc1:"Agate, a captivating gemstone valued for its colorful bands and distinct patterns, goes beyond just its visual charm to play a vital part in numerous industries. With its exceptional traits and adaptable features, agate has secured its place in various industrial applications, contributing to innovation and practicality in a range of sectors. Let's dive into the intriguing realm of agate and explore its significance in diverse industries.",
      point1:`
      <h3>Jewellery and Accessories :</h3> 
      <p>The captivating patterns and vibrant shades of agate have led to its desirability in the world of jewellery. When shaped into beads, cabochons, and pendants, agate takes on a central role in creating exquisite necklaces, earrings, and bracelets. The inherent beauty and versatile color palette provide endless design opportunities to cater to the preferences of discerning customers.</p>`,
      point2:`
      <h3>Lapidary Artistry :</h3> 
      <p>Skilled artisans and experts in lapidary work transform raw agate into intricate sculptures, carvings, and decorative pieces. The layers and patterns within agate serve as an inspiration for imaginative craftsmanship, yielding creations that are both visually captivating and culturally meaningful.</p>`,
      point3:`
      <h3>Interior Design and Décor :</h3> 
      <p>The mesmerizing patterns found in agate make it a favored choice for interior designers and decorators. Agate slices are converted into elegant tabletops, wall panels, and decorative accents. Incorporating agate into interior designs introduces an air of sophistication and a distinctive, nature-inspired aesthetic.</p>`,
      point4:`
      <h3>Semi-Precious Inlay :</h3> 
      <p>Agate is frequently employed as an inlay material, enhancing the appeal of furniture, flooring, and architectural elements. Its inherent patterns, when thoughtfully arranged, yield striking visual effects that contribute value to premium products and design concepts.</p>`,
      point5:`
      <h3>Artistic Expressions :</h3> 
      <p>The intricate bands and vibrant colors of agate find their way into artistic endeavors like paintings, sculptures, and mixed-media works. Serving as a wellspring of inspiration, agate's elegance sparks the creative imagination of artists, infusing their creations with the grace of the natural world.</p>`,
      point6:`
      <h3>Horology and Timekeeping :</h3> 
      <p>The durability and hardness of agate make it an optimal choice for crafting watch dials and decorative components in luxury timepieces. Its capacity to withstand wear and maintain its aesthetic allure renders it a favored material for horological craftsmanship.</p>`,
      point7:`
      <h3>Home Accessories :</h3> 
      <p>Agate is transformed into a range of home accessories, including coasters, candle holders, and decorative bowls. Its inherent patterns introduce a touch of refinement to everyday items, transforming them into functional pieces of artistry.</p>`,
      point8:`
      <h3>Specialized Craftsmanship :</h3> 
      <p>Agate finds a place in specialized craftsmanship techniques such as intarsia, involving the incorporation of segments from different materials to create intricate mosaics. Here, agate contributes to the formation of visually arresting and intricately detailed designs.</p>`,
      point9:`
      <h3>Healing and Metaphysical Products :</h3> 
      <p>Within holistic practices, agate is believed to possess healing properties. Its utilization in crafting metaphysical products such as crystal grids, meditation tools, and energy-enhancing items underscores its role within wellness-focused sectors.</p>`,
      point11:`
      <h3>Architectural Elements :</h3> 
      <p>Agate's entrancing appearance extends to architectural contexts. It is harnessed in premium interior and exterior designs, introducing an element of opulence to spaces through applications like wall panels, countertops, and decorative accents.</p>`,
      summary:"In summary, agate's flexibility and innate allure position it as an indispensable asset across diverse industries. From adorning jewelry to enriching interior aesthetics, agate's presence infuses elegance, individuality, and a connection to the natural world. Its significance in industrial contexts not only highlights its aesthetic magnetism but also underscores its pragmatic value as a substance that augments functionality, beauty, and ingenuity."
    }
  ];
}
