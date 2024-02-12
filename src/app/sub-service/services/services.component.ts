import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private title: Title, private meta: Meta) {}
  headingParams: any;
  contentParams: any;
  id: any;
  mainHeader:any
  image_1: any;
  image_2: any;
  header: any;
  heading: any;
  titleHead: any;
  metaDesc: any;
  title_heading: any;
  students: any;
  industries: any;
  lists: any = [];
  description: any;
  top_para: any;
  bottom_para: any;
  table1_th: any;
  table1_th2: any;
  table1_td: any;
  table1_td2: any;
  table2_th: any;
  table2_th2: any;
  table2_td: any;
  table2_td2: any;
  table1_td3: any;
  table1_td4: any;
  table1_td5: any;
  table1_td6: any;
  table1_td7: any;
  table1_td8: any;
  table1_td9: any;
  table1_td10: any;
  para1: any;
  para2: any;
  para3: any;
  para4: any;
  showMenu1: boolean = false;

  ngOnInit(): void {
    this.filterMethod();
    this.title.setTitle(
      this.titleHead
    );
    this.meta.updateTag({
      name: 'description',
      content:
        this.metaDesc,
    });
  }
i
  ngDoCheck() {
    this.contentParams = this.activatedRoute.snapshot.params['routing'];
    this.filterMethod();
  }

  filterMethod() {
    this.headingParams = this.activatedRoute.snapshot.params['routing'];
    const filteredData = this.content.filter(
      (x) => x.routing == this.headingParams
    );
    this.image_1 = filteredData[0].image_1;
    this.image_2 = filteredData[0].image_2;
    this.mainHeader = filteredData[0].mainHeader;
    this.header = filteredData[0].header;
    this.heading = filteredData[0].heading;
    this.titleHead = filteredData[0].titleHead;
    this.metaDesc = filteredData[0].metaDesc;
    this.students = filteredData[0].students;
    this.industries = filteredData[0].industries;
    this.lists = filteredData[0].lists;
    this.description = filteredData[0].description;
    // this.top_para = filteredData[0].top_para;
    // this.bottom_para = filteredData[0].bottom_para
    this.table1_th = filteredData[0].table1_th;
    this.table1_th2 = filteredData[0].table1_th2;
    this.table1_td = filteredData[0].table1_td;
    this.table1_td2 = filteredData[0].table1_td2;
    this.table1_td3 = filteredData[0].table1_td3;
    this.table1_td4 = filteredData[0].table1_td4;
    this.table1_td5 = filteredData[0].table1_td5;
    this.table1_td6 = filteredData[0].table1_td6;
    this.table1_td7 = filteredData[0].table1_td7;
    this.table1_td8 = filteredData[0].table1_td8;
    this.table1_td9 = filteredData[0].table1_td9;
    this.table1_td10 = filteredData[0].table1_td10;
    this.table2_th = filteredData[0].table2_th;
    this.table2_th2 = filteredData[0].table2_th2;
    this.table2_td = filteredData[0].table2_td;
    this.table2_td2 = filteredData[0].table2_td2;
    this.para1 = filteredData[0].para1;
    this.para2 = filteredData[0].para2;
    this.para3 = filteredData[0].para3;
    this.para4 = filteredData[0].para4;
  }

  submitForm() {
    // // Construct the Gmail URL with mailto protocol
    // const gmailURL = `mailto:${this.recipientEmail}?subject=${encodeURIComponent(this.name)}&body=${encodeURIComponent(this.message)}`;

    // // Redirect to the Gmail URL to compose the email
    // window.location.href = gmailURL;

    // const emailSubject = `Contact Form Submission from ${this.name}`;
    // const emailBody = `Name: ${this.name}\nEmail: ${this.recipientEmail}\nMessage: ${this.message}`;
    // const mailtoLink = `mailto:example@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // window.location.href = mailtoLink;
    const { name, email, message } = this.formData;
    let description = `\nName : ${name}\nEmail: ${email}\nMessage: ${message}`;
    let mail = 'drVBCC@gmail.com';
    // You can construct the Gmail URL with the entered data and open it in a new tab.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${encodeURIComponent(
      `Message from ${name}`
    )}&body=${encodeURIComponent(description)}`;
    // window.open(gmailUrl, '_blank');
    window.location.href = gmailUrl;
    (document.getElementById('name') as any).value = '';
    (document.getElementById('email') as any).value = '';
    (document.getElementById('message') as any).value = '';
  }

  ourGroups(param: any) {
    if (param == 'vbcc') {
      window.location.href = 'https://www.vbceramics.com/home.php';
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

  content = [
    {
      id: 1,
      mainHeader: "X-Ray Diffraction (XRD) Equipment with Powder Diffraction",
      titleHead: 'A Comprehensive Guide on X-Ray Powder Diffraction (XRD) Instrumentation & its Mechanism | VBCC Research',
      metaDesc: "Discover X-ray Powder Diffraction in this comprehensive guide. Learn about XRD applications, principles, and versatile X ray diffractometer types.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service1-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service1-sec-2.png',
      header: 'Sophisticated Instruments',
      heading: 'X-Ray Diffraction (XRD)',
      description:
        'It is a non-destructive method for analysing matters ranging from liquids to crystals.',
      students: '₹750 - Students',
      industries: '₹1500 - Industries',
      para1: '',
      // para2: `
      //     <p>X-ray diffraction (XRD) is a non-destructive method for analyzing matters ranging from liquids to crystals. This characterization method provides statistical information on interlayer multiple orientations of carbon nanomaterials. The parameters examined by this technique are structural strain, diameter, chirality distribution, and impurities in CNMs.</p>
      //    <br>
      //     <h3>Benchtop X-ray Diffractometer for Phase Analysis</h3>
      //     <p>New sixth generation MiniFlex benchtop X-ray diffractometer is a multipurpose powder diffraction analytical instrument that can determine: crystalline phase identification (phase ID) and quantification, percent (%) crystallinity, crystallite size and strain, lattice parameter refinement, Rietveld refinement, and molecular structure. It is widely used in research, especially in material science and chemistry, as well as in industry for research and quality control. It is the newest addition to the MiniFlex series of benchtop X-ray diffraction analyzers from Rigaku, which began with the introduction of the original MiniFlex XRD system decades ago.</p>

      //    <br>
      //     <h3>X-ray Powder Diffraction with HPAD Detector</h3>
      //     <p>MiniFlex XRD system delivers speed and sensitivity through innovative technology advances, including the HyPix-400 MF 2D hybrid pixel array detector (HPAD) together with an available 600 W X-ray source and new 8-position automatic sample changer.</p>
      //     <br>
      //     <h3>Hybrid Pixel Array Detector (HPAD)</h3>
      //     <p>This new direct photon counting detector enables high-speed, low-noise data collection and may be operated in 0D and 1D modes for conventional XRD analysis and 2D mode for samples with coarse grain size and/or preferred orientation.</p>
      //     <br>
      //     <h3>XRD Accessories Enhance Your MiniFlex</h3>
      //     <p>A variety of X-ray tube anodes – along with a range of sample rotation and positioning accessories, together with a variety of temperature attachments – are offered to ensure that the MiniFlex X-ray diffraction (XRD) system is versatile enough to perform challenging qualitative and quantitative analyses of a broad range of samples, whether performing research or routine quality control. The new (Gen 6) MiniFlex X-ray diffractometer system embodies the Rigaku philosophy of “Leading with Innovation” by offering the world’s most advanced benchtop system for powder diffractometry.</p>
      //     <br>
      //     <h3   >Advanced Powder Diffraction Software</h3>
      //     <p>Each MiniFlex comes standard with the latest version of SmartLab Studio-II, Rigaku's full-function powder diffraction analysis package. The latest version offers important new functionality; including a fundamental parameter method (FP) for more accurate peak calculation, phase identification using the Crystallography Open Database (COD), and a wizard for ab inito crystal structure analysis.</p>


      // `,
      para2: `
          <h3>A Comprehensive Guide on X-Ray Powder Diffraction (XRD) Instrumentation & its Mechanism</h3>
          <p>X-ray diffraction (XRD) is a powerful analytical technique used in materials science, chemistry, geology, and various other scientific disciplines. This technique provides valuable insights into the crystallographic structure of materials. It allows researchers to understand their composition, phase purity, and even the presence of defects. Let’s understand the mechanisms of XRD instrumentation, and explore its components, principles, and applications.</p>
         <br>
          <h3>Basics of X-Ray Diffraction:</h3>
          <div><h4>X-Ray Source:</h4> When the high-energy electrons are bombarded on a metal target either copper or cobalt, an X-ray is emitted from a sealed X-ray tube.  The resulting X-rays have a wavelength on the order of angstroms, making them suitable for diffraction experiments.</div>
          <br/>
          <div><h4>Monochromator:</h4> The X-ray beam produced by the source is polychromatic, containing a range of wavelengths. A monochromator isolates specific wavelengths from the range of wavelengths. Single crystals or diffraction gratings are used to select a narrow range of X-ray wavelengths.</div>
          <br/>
          <div><h4>Sample Holder: </h4> The sample holder is a flat plate or a rotating cylinder to hold a sample of finely ground powder for XRD analysis. The sample holder is used to evenly disperse the powder to ensure a representative and homogeneous sample.</div>
          <br/>
          <div><h4>Goniometer: </h4>The goniometer is a critical component that allows precise control of the orientation of the sample concerning the incident X-ray beam. It facilitates the measurement of diffraction angles, crucial for determining crystallographic information.</div>
          <br/>
          <div><h4>Detector: </h4> The detector captures the diffracted X-rays, converting them into electrical signals. Modern detectors, such as scintillation or semiconductor detectors, offer high sensitivity and resolution.</div>
         <br>
          <h3>X-ray Powder Diffraction with HPAD Detector</h3>
          <p>MiniFlex XRD system delivers speed and sensitivity through innovative technology advances, including the HyPix-400 MF 2D hybrid pixel array detector (HPAD) together with an available 600 W X-ray source and new 8-position automatic sample changer.</p>
          <br>
          <h3>Principles of XRD:</h3>
          <p>Bragg's Law was formulated by Sir William Bragg and his son Lawrence Bragg in 1913. XRD is based on the principles of Bragg's Law. It describes the relationship between the angle of incidence, wavelength of X-rays, and crystal lattice spacing in X-ray diffraction (XRD). The law is expressed as 2d sin θ = nλ, where 'd' is the crystal lattice spacing, 'θ' is the angle of incidence, 'n' is an integer representing the diffraction order, where 'λ' represents X-ray wavelength.</p>
          <p>The diffraction pattern obtained from a sample provides information about the crystal lattice and allows for the determination of key parameters such as lattice constants, crystal symmetry, and phase identification.</p>
          <br>
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
          <br>
          <h3>Examples of XRD usage:</h3>
          <p>X-ray diffraction (XRD) finds practical applications in various fields.</p>
          <ul>
              <li>In materials science, it helps to determine crystal structures and aids the study of polymers, metals, and ceramics. </li>
              <li>In pharmaceuticals, XRD identifies drug compositions. It helps to ensure the purity and stability of pharmaceutical products by verifying their crystalline structure. It is used in quality control in industries such as electronics and construction.</li>
              <li>Geological applications involve analyzing minerals in rocks and soil samples as different minerals exhibit unique diffraction patterns. It is used to identify phases in rocks.</li>
              <li>In archaeology, it assists in dating artifacts by examining crystalline structures. </li>
              <li>In nanotechnology, XRD is used to characterize nanomaterials. It provides valuable information about particle size, crystallinity, and phase composition.</li>
          </ul>

          <h3>Types of X-Ray Diffractometers:</h3>
          <p>Each type of X-ray Powder Diffraction instrument caters to specific industry needs to provide precise analytical capabilities for a range of applications. The choice depends on factors such as the nature of the sample, required resolution, portability, and the specific goals of the analysis. Let us see a few types of XRD:</p>
          <ul>
              <li>Benchtop X-ray Diffractometers are used for academic research, small laboratories, and routine analysis in industries like pharmaceuticals and materials science. </li>
              <li>Floor-Standing X-ray Diffractometers are used in materials science, pharmaceuticals, geology, and quality control in manufacturing.</li>
              <li>Portable X-ray Diffractometers are best for geological exploration, field studies, and on-site quality control in industries like mining and construction.</li>
              <li>Synchrotron-based X-ray Diffractometers help in advanced research in materials science, pharmaceuticals, and any field requiring high-intensity, tunable X-ray beams.</li>
              <li>Texture and Residual Stress X-ray Diffractometers for use in metallurgy, aerospace, automotive, and any field concerned with understanding material properties and structural integrity.</li>
          </ul>

          <h3>Conclusion:</h3>
          <p>X-ray powder Diffraction instrument is a versatile and indispensable tool in scientific research and industry due to its ability to detect the characteristics of crystalline.
          <br/>
          <br/>
          VBCC Research is a prominent ceramic Equipment and Instrument manufacturer in India. They address the research and quality control needs in Glass, Ceramics, Nano Science, and Material Science. They provide a centralized hub for students, researchers, and engineers.
          <br/>
          <br/>
          VBCC offers year-round access to a spectrum of experimental facilities and their services include comprehensive testing of mechanical, physical, chemical, and thermal properties from raw materials to final products. The facility supports synthesis and fabrication from laboratory to industrial scale, ensuring quality through final testing and characterizations. VBCC offers a wide range of X-ray diffractometers at affordable rates. Connect with us to know more. </p>

      `,
      routing: 'x-ray-diffraction-xrd',
    },
    {
      id: 2,
      mainHeader: "X-Ray Fluorescence Equipment and XRF Analyzers",
      titleHead: 'X-Ray Fluorescence Equipment Reliable XRF Analyzer | VBCC Research',
      metaDesc: "Discover precise XRF analyzer solutions for accurate X-ray fluorescence results. Explore advanced X-ray fluorescence equipment designed for reliable analysis.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service2-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service2-sec-2.png',
      header: 'Sophisticated Instruments',
      heading: 'X-Ray Fluorescence (XRF)',
      description:
        'It is the emission of characteristic "secondary" (or fluorescent) X-rays from a material that has been excited by being bombarded with high-energy X-rays or gamma rays.',
      students: '₹1500 - Students',
      industries: '₹2000 - Industries',
      para1: '',
      para2: `
          <p>A non-destructive analytical technique revolutionizing material analysis by determining elemental compositions. Utilizing a primary X-ray source to excite a sample, XRF analyzers measure the emitted fluorescent X-rays, providing insights into a material's chemistry.</p>

          <br>
          <h3>Key Features:</h3>
          <ul>
              <li><h4 id="list-heading">Non-destructive Analysis: Requires minimal sample preparation, allowing subsequent measurements by other techniques if needed.</h4></li>
              <li><h4 id="list-heading">Maximum Sensitivity: Employs a thin window Ag anode X-ray tube for high sensitivity, ensuring accuracy with a 50 kV X-ray tube ideal for heavier elements.</h4></li>
              <li><h4 id="list-heading">Easy Communication: Equipped with USB and network connections for seamless integration with computer peripherals, facilitating extended use and application development.</h4></li>
              <li><h4 id="list-heading">Atmospheric Variations: Built-in sensors compensate for air-pressure and temperature variations, ensuring consistent results regardless of weather conditions.</h4></li>
              <li><h4 id="list-heading">Spillage Protection: Incorporates a spillage protection foil, easily replaceable by the operator in case of accidents.</h4></li>
          </ul>

          <br>
          <h3>Applications:</h3>
          <ul>
              <li><h4 id="list-heading">Mining and Minerals: Quantification of rocks, ores, and drill cores; standardless analysis for mineral quantification.</h4></li>
              <li><h4 id="list-heading">Metals: Coating inspection, positive material identification, elemental quantification of slags.</h4></li>
              <li><h4 id="list-heading">Petrochemicals: Sulfur quantification in fuels, compliant performance for ASTM D6481, ISO, and JIS test methods.</h4></li>
              <li><h4 id="list-heading">Food: Rapid quantification of nutrients, process control in food production, accurate quantification of milk powder.</h4></li>
              <li><h4 id="list-heading">Building Materials: On-site quality control of cement and clinker, screening of alternative fuels and raw materials.</h4></li>
              <li><h4 id="list-heading">Academia: Versatile instrument suitable for various sample types, ideal for education with pre-calibrated Academia solution.</h4></li>
              <li><h4 id="list-heading">Pharmaceuticals: Accelerated process development, FDA compliance with Enhanced Data Security software, efficient raw material inspection.</h4></li>
              <li><h4 id="list-heading">Environmental: In-field identification of contaminated soils, analysis of inorganic compounds on air filters, quick wastewater analysis.</h4></li>
              <li><h4 id="list-heading">Plastics and Polymers: RoHS-3 analysis, detailed analysis of heterogeneous samples, unique CRM solutions for polyethylene.</h4></li>
          </ul>

          <p>This concise overview encapsulates the versatility and efficiency of XRF in diverse industries, making it a transformative tool for elemental analysis.</p>


      `,
      para3: '',
      para4: '',
      lists: [],
      routing: 'x-ray-fluorescence-xrf',
    },
    {
      id: 3,
      mainHeader: "Scanning Electron Microscope",
      titleHead: 'Scanning Electron Microscope Services & Test | VBCC Research',
      metaDesc: "Discover precision in SEM imaging with our gold sputtering instrument. Our benchtop SEM with advanced features ensures accurate results in no time. Unlock the power of X-ray Diffraction (XRD). Explore our benchtop diffractometer for precise powder diffraction analysis test.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service3-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service3-sec-2.png',
      header: 'Sophisticated Instruments',
      heading: 'Scanning Electron Microscope (SEM)(3 Images)',
      description:
        'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image.',
      students: '₹1000 - Students',
      industries: '₹2000 - Industries',
      para1: '',
      para2: `
    <p>The Scanning Electron Microscope (SEM) is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The electrons interact with atoms in the sample, producing various signals that contain information about the surface topography and composition of the sample.</p>

    <h3>Equipment Features</h3>
    <p>Benchtop Scanning Electron Microscope. Intuitive operation is achieved via touch panel and new operation screens. The low vacuum mode is included in the standard configuration, and EDS can be installed, offering a truly multi-functional benchtop SEM</p>
        <h3>Compact benchtop SEM</h3>
        <ul>
        <li>Compact size of 325 mm (W) × 490 mm (D) × 430 mm (H)</li>
        <li>Sleek exterior design</li>
        <li>External appearance does not change even when EDS is installed</li>
        </ul>
        <h3>Intuitive operation</h3>
        <ul>
        <li>Designed with easy-to-understand controls and operation screens</li>
        <li>Touch panels are adopted to provide more intuitive operation</li>
        <li>A wealth of functions</li>
        <li>High and Low vacuum modes are standard</li>
        <li>Length measurement functions are also standard</li>
        <li>Tilt & rotation motor-driven holder can be installed (option)</li>
        <li>EDS (elemental analysis device) can be installed (option)</li>
        </ul>
        <h3>Quick response</h3>
        <ul>
        <li>Images can be displayed 3 minutes after the instrument is started</li>
        <li>One-touch switching between High vacuum and Low vacuum modes</li>
        <li>Easy maintenance with a one-piece grid</li>
        </ul>

    <br>

    <h3>Application JCM-6000Plus</h3>
    <br>
    <h4>Lithium Ion Battery Note</h4>
    <p>The applications for lithium ion batteries (LIB) cover a wide range, from power sources for personal computers and mobile devices to automobiles, and there is always a demand for even better performance and safety. To ensure the performance and quality of LIB, analysis and evaluation using high-performance assessment systems is necessary. This LIB note offers characteristic comparisons and application examples of lithium ion battery material assessment which satisfies such needs.</p>
    <br>
    <h4>High Angle Backscattered Electrons and Low Angle Backscattered Electrons</h4>
    <p>Backscattered electrons emitted from a sample can be captured at angles that are closer to the direction of incident electrons (high takeoff angle) or are farther from the incident electrons (low takeoff angle) by changing the position of the backscattered electron detector. The former is called high angle backscattered electrons, while the latter low angle backscattered electrons. Each provides different types of information.</p>
<br>
    <h4>Backscattered Electrons</h4>
    <p>When a beam of electrons is projected onto the surface of a solid sample, many of the incident electrons will be scattered inside of the sample, resulting in repeated collisions with the atomic core and electrons that compose the sample, until they lose their energy inside the sample.</p>

        `,
      routing: 'scanning-electron-microscope-sem',
    },
    {
      id: 4,
      mainHeader: " Scanning Electron Microscope (SEM- Gold Sputtering) Equipment",
      titleHead: 'High-Quality SEM Gold Sputtering Services | VBCC Research',
      metaDesc: "Discover precision in SEM imaging with our gold sputtering instrument. Our benchtop SEM with advanced features ensures accurate results in no time.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service4-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service4-sec-2.png',
      header: 'Sophisticated Instruments',
      heading: 'Scanning Electron Microscope (SEM- Gold Sputtering)(3 Images)',
      description:
        'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The process is done once it’s coated with ultra-thin electrically-conducting metal.',
      students: '₹1250 - Students',
      industries: '₹2500 - Industries',
      para1: '',
      para2: `
      <p>The Scanning Electron Microscope (SEM) is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The electrons interact with atoms in the sample, producing various signals that contain information about the surface topography and composition of the sample.</p>
  <br>
  <p>
  Sputter coating for SEM is the process of applying an ultra-thin coating of electrically-conducting metal – such as gold (Au).
  </p>
  <br>
      <h3>Equipment Features</h3>
      <p>Benchtop Scanning Electron Microscope. Intuitive operation is achieved via touch panel and new operation screens. The low vacuum mode is included in the standard configuration, and EDS can be installed, offering a truly multi-functional benchtop SEM</p>
          <h3 >Compact benchtop SEM</h3>
          <ul>
          <li>Compact size of 325 mm (W) × 490 mm (D) × 430 mm (H)</li>
          <li>Sleek exterior design</li>
          <li>External appearance does not change even when EDS is installed</li>
          </ul>
          <h3>Intuitive operation</h3>
          <ul>
          <li>Designed with easy-to-understand controls and operation screens</li>
          <li>Touch panels are adopted to provide more intuitive operation</li>
          <li>A wealth of functions</li>
          <li>High and Low vacuum modes are standard</li>
          <li>Length measurement functions are also standard</li>
          <li>Tilt & rotation motor-driven holder can be installed (option)</li>
          <li>EDS (elemental analysis device) can be installed (option)</li>
          </ul>
          <h3>Quick response</h3>
          <ul>
          <li>Images can be displayed 3 minutes after the instrument is started</li>
          <li>One-touch switching between High vacuum and Low vacuum modes</li>
          <li>Easy maintenance with a one-piece grid</li>
          </ul>

      <br>

      <h3>Application JCM-6000Plus</h3>
      <br>
      <h4>Lithium Ion Battery Note</h4>
      <p>The applications for lithium ion batteries (LIB) cover a wide range, from power sources for personal computers and mobile devices to automobiles, and there is always a demand for even better performance and safety. To ensure the performance and quality of LIB, analysis and evaluation using high-performance assessment systems is necessary. This LIB note offers characteristic comparisons and application examples of lithium ion battery material assessment which satisfies such needs.</p>
      <br>
      <h4>High Angle Backscattered Electrons and Low Angle Backscattered Electrons</h4>
      <p>Backscattered electrons emitted from a sample can be captured at angles that are closer to the direction of incident electrons (high takeoff angle) or are farther from the incident electrons (low takeoff angle) by changing the position of the backscattered electron detector. The former is called high angle backscattered electrons, while the latter low angle backscattered electrons. Each provides different types of information.</p>
  <br>
      <h4>Backscattered Electrons</h4>
      <p>When a beam of electrons is projected onto the surface of a solid sample, many of the incident electrons will be scattered inside of the sample, resulting in repeated collisions with the atomic core and electrons that compose the sample, until they lose their energy inside the sample.</p>

          `,
      para3: '',
      routing: 'scanning-electron-microscope-sem-gold-sputtering',
    },
    {
      id: 5,
      mainHeader: "Laser Particle Size Diffraction Analyzer",
      titleHead: 'Laser Particle Size Analyzer Test at Best Price for Students | VBCC Research',
      metaDesc: "Elevate your research with our advanced laser particle size analyzers for tests with unbeatable quality and affordability, tailored for student budgets.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service5-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service5-sec-2.png',
      header: 'Sophisticated Instruments',
      heading: 'Laser Particle Size Analyzer (PSA)',
      description:
        'It is used to measure the sizes of particles in a material. Particle size is calculated by measuring the angle of light scattered by the particles as they pass through a laser beam.',
      students: '₹1500 - Students',
      industries: '₹2000 - Industries',
      para1: '',
      para2: `
<p>
Laser diffraction measures particle size distributions by measuring the angular variation in intensity of light scattered as a laser beam passes through a dispersed particulate sample. Large particles scatter light at small angles relative to the laser beam and small particles scatter light at large angles.
</p>
          <br>
          <p>The HORIBA LA-960V2 Laser Scattering Particle Size Distribution Analyzer is a state-of-the-art instrument that employs laser diffraction to measure particle size distributions with exceptional precision. It utilizes the angular variation in light intensity scattered as a laser beam passes through a dispersed particulate sample. Large particles scatter light at small angles, while small particles scatter light at larger angles, allowing for accurate size determination.</p>

          <br>
          <h3>Advanced Detector Design:</h3>
          <p>The instrument features an advanced detector design where the number of detectors, angular range, and layout contribute to overall system performance.</p>

          <br>
          <h3>Superior Instrument-to-Instrument Precision:</h3>
          <p>Designed for consistency, the LA-960V2 ensures the same user experience irrespective of the manufacture date, operator skill, or geographic location. It achieves unmatched instrument agreement without the need for correlation.</p>

          <br>
          <h3>Automatic Laser Alignment in Seconds:</h3>
          <p>With computer-controlled laser alignment, the LA-960V2 ensures perfect measurements. The innovative alignment process takes only a few seconds, streamlining the measurement procedure.</p>

          <br>
          <h3>Guaranteed Accuracy and Precision:</h3>
          <p>The LA-960V2 is a refined particle size analyzer capable of accurately measuring NIST-traceable size standards within 0.6% of specification. It fully complies with ISO 13320 recommendations for materials on the D10, D50, and D90.</p>

          <!-- Other content follows with similar formatting -->

          <br>
          <h3>LY-9610 Imaging Unit:</h3>
          <p>The imaging unit allows real-time observation, particle image acquisition, and assessment of particles in the wet circulation system, enhancing understanding and analysis.</p>

          <br>
          <h3>Features and Functions:</h3>
          <p>Detect and count trace amounts of unusual particles, detect bubbles in the wet circulation system, and gain improved understanding of sample dispersion. Optional advanced software allows for particle shape analysis.</p>

          <br>
          <p>In summary, the HORIBA LA-960V2 combines advanced technology, precision, and user-friendly features, making it a versatile and reliable solution for particle size analysis across diverse applications.</p>

      `,
      para3: '',
      routing: 'laser-particle-size-analyzer-psa',
    },
    {
      id: 6,
      mainHeader: "Thermal Expansion Linear Variable Dilatometer upto  1000°C",
      titleHead: 'High Precision Thermal Expansion Dilatometers 1000°C | VBCC Research',
      metaDesc: "Explore High Precision Thermal Expansion Dilatometers up to 1000°C. Discover accurate measurements with linear variable differential transformer technology.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service6-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service6-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Thermal Expansion (Dilatometer up to 1000°C)',
      description:
        'A dilatometer is a precision instrument for the measurement of dimensional changes in material as a function of temperature.',
      students: '₹1500 - Students',
      industries: '₹2000 - Industries',
      para1: '',
      para2: `
          <p>A Dilatometer, a sophisticated thermo-analytical instrument, serves as a crucial tool for measuring the thermal expansion or contraction of various materials under specific controlled temperature-time programs. Equipped with a high-resolution linear variable differential transformer (LVDT) measuring system, it ensures precise digital measurements.</p>

          <h3>How It Works:</h3>
          <h4>Digital Measurement:</h4>
          <p>The Dilatometer employs a high-resolution LVDT measuring system (1-micrometer accuracy) to digitally measure thermal expansion or contraction.</p>
          <h4>Computer Integration:</h4>
          <p>Measurements are transmitted to a computer through a connected LVDT, enabling real-time data acquisition.</p>
          <h4>Online Graph Plotting:</h4>
          <p>Labview software is utilized to plot an online graph illustrating the relationship between temperature and the percentage of total expansion.</p>

          <h3>Use Cases:</h3>
          <h4>Diverse Material Testing:</h4>
          <p>Dilatometry finds application in testing a diverse range of materials, including traditional and advanced ceramics, glasses, metals, and polymers.</p>

          <h3>Key Features:</h3>
          <h4>Maximum Temperature Capability:</h4>
          <p>The Dilatometer is designed to operate at temperatures up to 1000°C, allowing for testing under high-temperature conditions.</p>
          <h4>Sample Size Flexibility:</h4>
          <p>Accommodates sample sizes with outer diameters (OD) or widths ranging from 5 to 10mm and lengths from 25 to 50mm.</p>
          <p>Thermal Expansion Insights:</p>
          <p>Provides critical insights into the thermal expansion behavior of materials, aiding in material characterization and performance prediction.</p>

          <h3>Benefits:</h3>
          <h4>Precision in Measurements:</h4>
          <p>The LVDT measuring system ensures high precision, with a resolution of 1 micrometer, leading to accurate thermal expansion measurements.</p>
          <h4>Real-time Graphical Representation:</h4>
          <p>Labview software facilitates the online plotting of graphs, allowing researchers to visualize the relationship between temperature and material expansion in real time.</p>
          <h4>Material Characterization:</h4>
          <p>Enables comprehensive material testing, contributing to a deeper understanding of thermal behaviors crucial for various industries.</p>

          <p>Technological Significance: The Dilatometer up to 1000°C stands as an invaluable instrument in materials science and engineering, offering a precise and digitally monitored approach to studying thermal expansion. Its diverse applications and flexibility in handling different sample sizes contribute to its technological significance in advancing material insights.</p>
      `,
      table1_th: 'Maximum Temperature',
      table1_th2: '1400°C',
      table1_td: 'Sample Size',
      table1_td2: 'OD or Width: 5 to 10mm, Length: 25 to 50mm',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Thermal Expansion (Dilatometer up to 1000°C)',
      table2_td2: 'Sample Size: , Width:5-10mm, Length: 25-50 mm',
      routing: 'thermal-expansion-dilatometer-up-to-1000degc',
    },
    {
      id: 7,
      tmainHeader: "BET Analysis: Brunauer Emmett Teller Instrument",
      titleHead: 'Accurate BET Analysis with Brunauer Emmett Teller Instrument | VBCC Research',
      metaDesc: "Discover excellence in Brunauer Emmett Teller analysis. Our advanced instrument ensures precision in BET analysis, setting new standards in material characterization.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service7-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service7-sec-2.png',
      header: 'Sophisticated Instruments',
      heading: 'BET Analysis',
      description:
        'It is a physical characterization technique that provides quantitative data on the specific surface area and porosity distribution of solid materials.',
      students: '₹2500 - Students',
      industries: '₹4000 - Industries',
      para1: '',
      para2: `
    <p>Brunauer-Emmett-Teller (BET) Analysis is a crucial physical characterization technique offering quantitative insights into the specific surface area and porosity distribution of solid materials. Applicable to diverse matrices, from catalyst powders to monolithic materials, BET analysis plays a vital role in understanding a material's physical properties.</p>
<br>
    <h3>Use Cases:</h3>
    <p>BET analysis finds widespread application across various industries and material types. It is notably used in catalyst research, pharmaceuticals, nanomaterials, and porous materials such as zeolites and activated carbons. The technique provides essential data for optimizing processes related to gas storage, drug delivery, and catalytic reactions. In the field of catalyst development, researchers leverage BET analysis to assess the efficiency of catalysts by examining their surface area, which directly influences catalytic activity.</p>
    <br>
    <h3>Benefits:</h3>
    <h4>1. Quantitative Surface Area Measurement:</h4>
    <ul>
        <li>BET analysis offers a quantitative measure of the specific surface area, allowing researchers to precisely understand the available surface for interactions.</li>
    </ul>

    <h4>2. Porosity Assessment:</h4>
    <ul>
        <li>Beyond surface area, BET analysis provides information about the porosity distribution of a material, aiding in the characterization of its internal structure.</li>
    </ul>

    <h4>3. Gas Adsorption Isotherms:</h4>
    <ul>
        <li>By studying the adsorption isotherms, researchers gain insights into the interaction between gases and solids, contributing to a comprehensive understanding of material behavior.</li>
    </ul>

    <h4>4. Catalyst Optimization:</h4>
    <ul>
        <li>In catalysis research, BET analysis plays a crucial role in optimizing catalysts for enhanced performance, leading to more efficient chemical processes.</li>
    </ul>

    <h4>5. Material Development:</h4>
    <ul>
        <li>For materials like activated carbons and zeolites, BET analysis guides the development of materials with tailored porosity for specific applications, such as gas separation or water purification.</li>
    </ul>

    <h4>6. Quality Control:</h4>
    <ul>
        <li>Industries such as pharmaceuticals use BET analysis for quality control, ensuring consistency in the porosity and surface area of materials used in drug formulations.</li>
    </ul>

    <p>In summary, BET analysis is a versatile and indispensable tool, providing crucial data for researchers and industries involved in material development, catalysis, and various applications where surface characteristics and porosity play a vital role. Its ability to deliver quantitative and insightful results makes it an essential technique in the field of materials science.</p>
    <br>
    <h4>Analyzing BET Data:</h4>
    <p>The technique assesses the amount of gas adsorbed, considering factors such as exposed surface area, temperature, gas pressure, and the strength of interaction between the gas and solid. Nitrogen is commonly used in BET surface area analysis due to its high purity and h4 interaction with most solids, making it a versatile and widely applicable method for material characterization. The obtained data aids in optimizing processes and enhancing the performance of various materials across multiple industries.</p>

        `,
      routing: 'bet-analysis',
    },
    {
      id: 8,
      mainHeader: "Pin on Disc Tribometer Wear Test solutions",
      titleHead: 'Pin on Disc Tribometer for Wear Test | VBCC Research',
      metaDesc: "Explore precision and durability with our Pin on Disc Tribometer & Wear Test solutions with unmatched quality. Discover excellence today.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service8-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service8-sec-2.gif',
      header: 'Sophisticated Instruments',
      heading: 'Pin On Disc Tribometer (Wear)',
      description:
        'It is a commonly used tribological characterization technique to estimate the coefficient of friction and the wear mechanism.',
      students: '₹1000 - Students',
      industries: '₹1500 - Industries',
      para1: ``,
      para2: `
    <p>The Pin-On-Disc Wear Test is a commonly used tribological characterization technique to estimate the coefficient of friction and the wear mechanism.</p>

    <p>The ball, or pin on disk, wear testing machine presses stationary pin or ball against the rotating disk. Measure coefficient of friction (COF), friction force, wear rate, wear volume, temperature, and several other tribology parameters.</p>
<br>
    <h3>A Pin-On-Disc Tribometer</h3>
    <p>is a specialized instrument designed to assess and quantify the wear and friction characteristics of materials under controlled sliding conditions. This tribological testing device consists of a stationary pin in contact with a rotating disc, simulating the frictional conditions encountered in real-world applications.</p>
    <br>
    <h3>Use Cases:</h3>
    <p>The Pin-On-Disc Tribometer finds extensive application in various industries for evaluating the wear resistance and frictional behavior of materials. It is commonly used in the automotive sector to study the wear performance of brake materials, helping optimize brake pad formulations for enhanced durability and safety. In the field of manufacturing, the tribometer is employed to assess the wear resistance of cutting tools, providing insights into tool material selection and coating effectiveness. Additionally, it plays a crucial role in the development of bearings, gears, and other components in machinery, where minimizing wear and friction is paramount for efficient operation.</p>
    <br>
    <h3>Benefits:</h3>
    <h4>1. Wear Analysis:</h4>
    <ul>
        <li>Pin-On-Disc Tribometers enable precise quantification of wear rates, aiding researchers and engineers in evaluating the durability and longevity of materials.</li>
    </ul>

    <h4>2. Frictional Behavior:</h4>
    <ul>
        <li>The tribometer allows for the measurement of friction coefficients under different conditions, contributing to the understanding of material interactions and the optimization of lubrication strategies.</li>
    </ul>

    <h4>3. Material Selection:</h4>
    <ul>
        <li>Industries involved in material development and selection benefit from tribometer testing by identifying materials that exhibit superior wear resistance, leading to the creation of more robust and reliable products.</li>
    </ul>

    <h4>4. Coating Evaluation:</h4>
    <ul>
        <li>Researchers use the tribometer to assess the effectiveness of coatings in reducing wear and friction, guiding the development of advanced surface treatments for various applications.</li>
    </ul>

    <h4>5. Quality Control:</h4>
    <ul>
        <li>The tribometer serves as a valuable tool in quality control processes, ensuring that materials and components meet specified wear and friction criteria before reaching the market.</li>
    </ul>

    <h4>6. Optimization of Design:</h4>
    <ul>
        <li>Tribometer data aids in the optimization of designs for various mechanical components, allowing engineers to make informed decisions that enhance the overall performance and reliability of systems.</li>
    </ul>

    <p>In summary, the Pin-On-Disc Tribometer is a versatile tool with wide-ranging applications in wear analysis and frictional studies. Its benefits extend to industries seeking to improve the durability, efficiency, and reliability of materials and components in diverse applications.</p>

         `,
      para3: '',
      routing: 'pin-on-disc-tribometer-wear',
    },
    {
      id: 9,
      mainHeader: "Planetary Mill with Tungsten Carbide Balls & Vial per hour",
      titleHead: 'High-Efficiency Planetary Mill with Tungsten Carbide Balls & Vial per hour | VBCC Research',
      metaDesc: "Maximize productivity with our High-Efficiency Planetary Mill, designed for processing Tungsten Carbide Balls & Vials per hour with precision.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service9-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service9-sec-2.jpg',
      header: 'Material Preparation',
      heading: 'Planetary Mill with Tungsten Carbide Balls & Vial per hour',
      description:
        'Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.',
      students: '300 - Students',
      industries: '₹600 - Industries',
      para1: '',
      para2: `
          <p>Planetary ball mills are smaller than common ball mills and mainly used in laboratories for grinding sample material down to very small sizes. A planetary ball mill consists of at least one grinding jar which is arranged eccentrically on a so-called sun wheel.</p>

          <34>Planetary Mill with TC Balls & Vial:</34>
          <h3>Features:</h3>
          <ul>
              <li><h4>Automatic Operation: The equipment operates entirely automatically, offering convenient time settings and variable speed adjustments for precise control over the milling process.</h4></li>
              <li><h4>Vial Material: Crafted with durable Tungsten Carbide, ensuring longevity and resistance to wear during milling and mixing operations.</h4></li>
              <li><h4>Vial Capacity: Boasting a generous 250 ml capacity, providing ample space for milling and mixing various materials with ease.</h4></li>
              <li><h4>Grinding Media: Utilizes high-quality Tungsten Carbide Balls (10 mm diameter - 30 Nos) as efficient grinding media, ensuring effective particle size reduction.</h4></li>
              <li><h4>Loading Capacity: Accommodates a maximum loading capacity of 100g, dependent on the material density, and a minimum loading capacity of 5g for versatility in experimental setups.</h4></li>
              <li><h4>Material Loss: Minimal material loss of only 2%, preserving the integrity of the processed materials.</h4></li>
          </ul>

          <h3>Use Cases:</h3>
          <p>The VBCC Planetary Ball Mill, equipped with TC balls and vial, finds its application in the realm of Advanced Ceramics, catering to nanotechnology applications with precision and efficiency:</p>
          <ul>
              <li><h4>Advanced Ceramics Processing: Specifically designed for milling and mixing tasks related to Advanced Ceramics, ensuring uniform and controlled processing of ceramic materials.</h4></li>
              <li><h4>Particle Size Reduction: Facilitates the reduction of particle sizes from Micron (10-6µm) to Nano Size (10-9nm) within a short timeframe of 30 to 60 minutes, crucial for nanotechnology applications.</h4></li>
              <li><h4>Nanotechnology Research: Ideal for nanotechnology research where achieving nano-sized particles is essential for enhanced material properties and performance.</h4></li>
              <li><h4>Time-Efficient Operation: The automatic operation with time settings allows for efficient milling within specified durations, promoting productivity in laboratory settings.</h4></li>
              <li><h4>Variable Speed Control: Variable speed adjustments provide flexibility in controlling the milling process, accommodating diverse materials and experimental requirements.</h4></li>
          </ul>

          <p>The Planetary Mill with TC Balls & Vial stands as a reliable tool in materials research and nanotechnology, offering precision, efficiency, and versatility in the milling and mixing of Advanced Ceramics. Its automated features and robust design make it an essential instrument for laboratories engaged in cutting-edge research and development.</p>
      `,
      para3: '',
      table1_th: 'Vial Material',
      table1_th2: 'Tungsten Carbide',
      table1_td: 'Vial Capacity',
      table1_td2: '250 ml',
      table1_td3: 'Grinding Media',
      table1_td4: 'Tungsten Carbide Balls (10 mm dia - 30 Nos)',
      table1_td5: 'Max. Loading Capacity',
      table1_td6: '100g (Depends upon Density of material)',
      table1_td7: 'Min. Loading Capacity',
      table1_td8: '5g',
      table1_td9: 'Material Loss',
      table1_td10: '2%',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Planetary Mill with TC balls & Vial',
      table2_td2: '100 gms max for 1 Hour',
      routing: 'planetary-mill-with-tungsten-carbide-balls',
    },
    {
      id: 10,
      mainHeader: "Pellet Press Machines 10 Tone",
      titleHead: 'High-Quality Pellet Press Machines with 10 Ton Capacity | VBCC Research',
      metaDesc: "Unleash productivity with our top-notch pellet press machine. Achieve precision and power with our 10-ton pellet press for quality pellets every time.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service10-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service10-sec-2.jpg',
      header: 'Shaping',
      heading: 'Pellet Press (10 tone)',
      description:
        'Pellet mill is a kind of machine that is used for producing pellets from powdered biomass material. It is also known as pellet press.',
      students: '₹200 - Students',
      industries: '₹500 - Industries',
      para1: '',
      para2: `
    <p>Pellet mill is a kind of machine that is used for producing pellets from powdered biomass material. It is also known as pellet press. It works very effectively and you can always rely on for the production of very fine pellets. To produce the small substances, it works by putting together smaller particles into larger and homogenous mass. It therefore implies that it doesn’t break the large materials into smaller substances.</p>

    <h3>VBCC Press is used to compact the different kinds of Ceramic and Metal Powders into Pellet shape for variety of Applications and Characterization.</h3>

    <h3>10-Ton Hydraulic Pellet Press - Manual Operation</h3>
    <p>The 10-ton hydraulic pellet press, designed for manual operation, ensures precise and reliable pellet compaction for diverse applications.</p>

    <h3>Capacity:</h3>
    <ul>
        <li>Press Capacity: 10 tons</li>
        <li>Cylinder Capacity: 10 tons (Max) - Driven by a robust hydraulic power unit.</li>
    </ul>

    <h3>Design Features:</h3>
    <ul>
        <li>Piston Stroke: Maximum 50mm stroke for controlled pellet compaction.</li>
        <li>Ram Configuration: Stationary upper ram ensures stability during operation.</li>
        <li>Loading Type: Vertical up loading simplifies the process for user convenience.</li>
    </ul>

    <h3>Dimensions and Construction:</h3>
    <ul>
        <li>Daylight: Ample 120mm distance between punch and die for flexibility.</li>
        <li>Platen Size: 100mm diameter provides a uniform surface for pellet compression.</li>
        <li>Press Frame: Sturdy 2-pillar type construction ensures durability and stability.</li>
    </ul>

    <h3>Pressure Control:</h3>
    <ul>
        <li>Pressure Gauge: Equipped with a precise digital pressure gauge for effective monitoring.</li>
        <li>Max Pressure: Capable of exerting a maximum pressure of 300 bars (30Mpa).</li>
    </ul>

    <h3>Model and Dies:</h3>
    <ul>
        <li>Model: Designed as a Table Top model for easy placement and operation.</li>
        <li>Pellet Dies: Includes 12mm (2 nos) and 15mm (2 nos) pellet dies for versatile pellet size options.</li>
    </ul>

    <p>The 10-ton hydraulic pellet press blends power and precision, offering user-friendly features for manual pellet compaction across various industries. Whether for research, development, or production, this press delivers consistent results with the flexibility to accommodate different pellet sizes. Its sturdy construction, digital pressure control, and multiple die options make it an ideal solution for efficient and controlled manual pellet compaction.</p>

    <p>The Equipment is completely automatic with Time setting and Variable adjustments. Its features are:</p>
      `,
      para3: '',
      table1_th: 'Capacity of Press',
      table1_th2: '15 Ton',
      table1_td: 'Powders',
      table1_td2: 'Ceramic and Metal Powders',
      table1_td3: 'Binder',
      table1_td4:
        'Customer is expected to bring. (Otherwise PVA will be added)',
      table1_td5: 'Die Material',
      table1_td6: 'H11',
      table1_td7: 'Die Size',
      table1_td8: '10 mm, 20 mm',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Pellet Press',
      table2_td2: 'Per Pellet (up to 15 ton)',
      routing: 'pellet-press-10-tone',
    },
    {
      id: 11,
      mainHeader: "Box Furnace - up to 1200°C",
      titleHead: 'High-Quality Industrial Box Furnace 1200°C  | VBCC Research',
      metaDesc: "Elevate your industrial processes with our high-quality box furnace, designed to reach 1200°C. Experience efficiency and reliability like never before.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service11-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service11-sec-2.png',
      header: 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1200°C (5°C ramp & 3hrs dwell)',
      description:
        'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.',
      students: '2000 - Students',
      industries: '₹3000 - Industries',
      para1: '',
      para2: `
          <p>A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.</p>

          <h3>Box Furnace - up to 1200°C (5°C Ramp & 3hrs Dwell):</h3>

          <h3>Features:</h3>
          <ul>
              <li><h4>Vertical Lift or Swing Out Door:</h4> Allows convenient placement of various-sized products, ensuring flexibility in the heat-treating process.</li>
              <li><h4>Working Temperature up to RT of 1200°C:</h4> Capable of accommodating high-temperature thermal processes such as annealing, stress relieving, and tempering.</li>
              <li><h4>Tailor-Made Box Size:</h4> Customizable box dimensions tailored to meet specific customer requirements.</li>
              <li><h4>Kanthal Heating Element:</h4> Utilizes high-quality heating elements from Sweden, ensuring durability and efficiency.</li>
              <li><h4>1°C Accuracy at Dwell Temp:</h4> Precision control with a high level of accuracy, crucial for maintaining specific temperature conditions.</li>
              <li><h4>Rapid Heating Rate (1 to 20°C/min) Programmable:</h4> Offers programmable heating rates for flexibility in different thermal applications.</li>
              <li><h4>Suitable for Nanotechnology Applications:</h4> Designed to meet the specialized requirements of nanotechnology processes.</li>
              <li><h4>Imported/Indigenized Insulation:</h4> Utilizes insulation materials sourced internationally or locally to ensure optimal thermal efficiency.</li>
              <li><h4>Indigenous VBCC Make Phase Control Thyristor Controller:</h4> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><h4>TAIE PID Programmable Digital Temperature Indicator cum Controller:</h4> Features advanced PID control for precise temperature regulation.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><h4>Available Space:</h4> 150 x 150 x 200 mm (lxbxh)</li>
              <li><h4>Rate of Heating:</h4> 5°C/Min</li>
              <li><h4>Equipment:</h4> Box Furnace - up to 1200°C</li>
              <li><h4>Quantity/Time:</h4> 2 Hrs</li>
              <li><h4>Working Zone:</h4> 150 x 150 x 200 mm</li>
          </ul>

          <h3>Use Cases:</h3>
          <p>The Box Furnace operating at temperatures up to 1200°C with a 5°C ramp and 3hrs dwell finds extensive application in various thermal processes, including:</p>
          <ul>
              <li><h4>Heat Treatment:</h4> Ideal for subjecting materials to controlled high temperatures for heat treatment.</li>
              <li><h4>Sintering:</h4> Used for the sintering of oxides and clay materials to achieve desired properties.</li>
              <li><h4>Annealing:</h4> Precision annealing processes to enhance material properties.</li>
              <li><h4>Thermal Processing in Nanotechnology:</h4> Tailored for nanotechnology applications requiring specific temperature profiles.</li>
              <li><h4>Calcining and Curing:</h4> Versatile for processes such as calcining and curing in different industries.</li>
          </ul>

          <p>The furnace's customizable features, precise temperature control, and adaptability make it a valuable tool for industries ranging from materials science to nanotechnology, ensuring optimal performance in various high-temperature thermal applications.</p>
      `,
      table1_th: 'Available Space',
      table1_th2: '150 x 150 x 200 mm',
      table1_td: 'Rate of Heating',
      table1_td2: '5°C/Min',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Box Furnace - up to 1200°C',
      table2_td2: '2Hrs / Working Zone:150x150x200 mm',
      lists: [
        'Working Temperature up to RT of 1200°C',
        'Tailor made box size as per the customer requirement',
        'Kanthal heating element from Sweden',
        '1°C accuracy at dwell temp',
        'Rapid heating rate(1 to 20°C/min) programmable',
        'Suitable for nanotechnology applications',
        'Imported / indigenized Insulation',
        'Indigenous VBCC Make phase control thyristor controller',
        'TAIE PID programmable digital temperature indicator cum controller',
      ],
      routing: 'box-furnace-up-to-1200degc',
    },
    {
      id: 12,
      mainHeader: " Box Furnace - up to 1600°C ",
      titleHead: 'High- Quality Box Furnace up to 1600°C  | VBCC Research',
      metaDesc: "Discover precision with our high-quality box furnace, reaching temperatures up to 1600°C. Achieve unparalleled performance for your industrial needs.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service12-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service12-sec-2.jpg',
      header: 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1400°C (5°C ramp & 3hrs dwell)',
      description:
        'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.',
      students: '₹3500 - Students',
      industries: '₹5000 - Industries',
      para1: '',
      para2: `
          <p>A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.</p>

          <h3>Box Furnace - up to 1400°C (5°C Ramp & 3hrs Dwell):</h3>

          <h3>Features:</h3>
          <ul>
              <li><h4>Vertical Lift or Swing Out Door:</h4> Enables convenient placement of various-sized products, ensuring flexibility in heat-treating processes.</li>
              <li><h4>Working Temperature up to RT to 1400°C:</h4> Capable of accommodating high-temperature thermal processes such as annealing, stress relieving, and tempering, providing a wide temperature range.</li>
              <li><h4>Tailor-Made Box Size:</h4> Customizable box dimensions tailored to meet specific customer requirements.</li>
              <li><h4>Silicon Carbide Heating Elements:</h4> Utilizes high-quality heating elements from the USA, ensuring durability and efficiency at elevated temperatures.</li>
              <li><h4>1°C Accuracy at Dwell Temp:</h4> Precision control with a high level of accuracy, crucial for maintaining specific temperature conditions during extended dwell times.</li>
              <li><h4>Rapid Heating Rate (1 to 20°C/min) Programmable:</h4> Offers programmable heating rates for flexibility in different thermal applications.</li>
              <li><h4>Suitable for Nanotechnology Applications:</h4> Designed to meet the specialized requirements of nanotechnology processes with high-temperature demands.</li>
              <li><h4>Imported/Indigenized Insulation:</h4> Utilizes insulation materials sourced internationally or locally to ensure optimal thermal efficiency.</li>
              <li><h4>Indigenous VBCC Make Phase Control Thyristor Controller:</h4> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><h4>TAIE PID Programmable Digital Temperature Indicator cum Controller:</h4> Features advanced PID control for precise temperature regulation.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><h4>Available Space:</h4> 150 x 150 x 200 mm (lxbxh)</li>
              <li><h4>Rate of Heating:</h4> 5°C/Min</li>
              <li><h4>Equipment:</h4> Box Furnace - up to 1400°C</li>
              <li><h4>Quantity/Time:</h4> 2 Hrs</li>
              <li><h4>Working Zone:</h4> 150 x 150 x 200 mm</li>
          </ul>

          <h3>Use Cases:</h3>
          <p>The Box Furnace operating at temperatures up to 1400°C with a 5°C ramp and 3hrs dwell is versatile and finds applications in various thermal processes, including:</p>
          <ul>
              <li><h4>Heat Treatment:</h4> Ideal for subjecting materials to controlled high temperatures for heat treatment.</li>
              <li><h4>Sintering:</h4> Used for the sintering of oxides and clay materials to achieve desired properties.</li>
              <li><h4>Annealing:</h4> Precision annealing processes to enhance material properties.</li>
              <li><h4>Thermal Processing in Nanotechnology:</h4> Tailored for nanotechnology applications requiring specific temperature profiles at elevated ranges.</li>
              <li><h4>Calcining and Curing:</h4> Versatile for processes such as calcining and curing in different industries.</li>
          </ul>

          <p>The furnace's customizable features, precise temperature control, and adaptability make it an indispensable tool for industries ranging from materials science to nanotechnology, ensuring optimal performance in various high-temperature thermal applications.</p>
      `,
      table1_th: 'Available Space',
      table1_th2: '150 x 150 x 200 mm',
      table1_td: 'Rate of Heating',
      table1_td2: '5°C/Min',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Box Furnace - up to 1400°C',
      table2_td2: '2Hrs / Working Zone:150x150x200 mm',
      lists: [
        'Working Temperature up to RT to 1400°C',
        'Tailor made box size as per the customer requirement',
        'Silicon carbide heating elements from USA',
        '1°C accuracy at dwell temp',
        'Rapid heating rate(1 to 20°C/min) programmable',
        'Suitable for nanotechnology applications',
        'Imported / indigenized Insulation',
        'Indigenous VBCC Make phase control thyristor controller',
        'TAIE PID programmable digital temperature indicator cum controller',
      ],
      routing: 'box-furnace-up-to-1400degc',
    },
    {
      id: 13,
      titleHead: 'Heat Treatment Facility',
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service13-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service13-sec-2.png',
      header: 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1600°C (5°C ramp & 3hrs dwell)',
      description:
        'A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.',
      students: '₹5000 - Students',
      industries: '₹7500 - Industries',
      para1: '',
      para2: `
          <p>A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.</p>

          <h4>Box Furnace - up to 1600°C (5°C Ramp & 3hrs Dwell):</h4>

          <h3>Features:</h3>
          <ul>
              <li><h4>Vertical Lift or Swing Out Door:</h4> Facilitates easy placement of various-sized products, enhancing flexibility in high-temperature thermal processes.</li>
              <li><h4>Working Temperature up to RT to 1600°C:</h4> Offers an extensive temperature range, suitable for diverse applications such as annealing, stress relieving, and tempering at extreme temperatures.</li>
              <li><h4>Tailor-Made Box Size:</h4> Customizable box dimensions to meet specific customer requirements, ensuring adaptability for various production needs.</li>
              <li><h4>Molybdenum Di Silicide Heating Elements:</h4> Utilizes high-quality heating elements from the USA, specifically molybdenum di silicide, ensuring robustness and efficiency at ultra-high temperatures.</li>
              <li><h4>1°C Accuracy at Dwell Temp:</h4> Precise temperature control with high accuracy, crucial for maintaining specific temperature conditions during extended dwell times at extreme temperatures.</li>
              <li><h4>Rapid Heating Rate (1 to 20°C/min) Programmable:</h4> Offers programmable heating rates for flexibility in different thermal applications, ensuring efficient and time-sensitive processing.</li>
              <li><h4>Suitable for Nanotechnology Applications:</h4> Tailored to meet the demanding requirements of nanotechnology processes that necessitate extreme temperature conditions.</li>
              <li><h4>Imported/Indigenized Insulation:</h4> Utilizes a combination of insulation materials sourced internationally or locally to ensure optimal thermal efficiency.</li>
              <li><h4>Indigenous VBCC Make Phase Control Thyristor Controller:</h4> Employs an indigenous thyristor controller for efficient and reliable temperature control at extremely high temperatures.</li>
              <li><h4>Eurotherm PID Programmable Digital Temperature Indicator cum Controller:</h4> Features advanced PID control from Eurotherm for precise temperature regulation in extreme thermal environments.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><h4>Available Space:</h4> 150 x 150 x 200 mm (lxbxh)</li>
              <li><h4>Rate of Heating:</h4> 5°C/Min</li>
              <li><h4>Equipment:</h4> Box Furnace - up to 1600°C</li>
              <li><h4>Quantity/Time:</h4> 2 Hrs</li>
              <li><h4>Working Zone:</h4> 150 x 150 x 200 mm</li>
          </ul>

          <h3>Use Cases:</h3>
          <p>The Box Furnace operating at temperatures up to 1600°C with a 5°C ramp and 3hrs dwell is designed for various high-temperature thermal processes, including:</p>
          <ul>
              <li><h4>Heat Treatment at Extreme Temperatures:</h4> Ideal for subjecting materials to controlled high temperatures for heat treatment under extreme conditions.</li>
              <li><h4>Advanced Sintering:</h4> Utilized for the advanced sintering of oxides and clay materials, achieving specific properties at extreme temperature ranges.</li>
              <li><h4>Specialized Annealing:</h4> Precision annealing processes at ultra-high temperatures to enhance material properties in unique applications.</li>
              <li><h4>Extreme Temperature Thermal Processing in Nanotechnology:</h4> Tailored for nanotechnology applications requiring specific temperature profiles at exceptionally high ranges.</li>
              <li><h4>Innovative Calcining and Curing:</h4> Versatile for innovative processes such as calcining and curing in industries where extreme temperatures are essential.</li>
          </ul>

          <p>The furnace's customizable features, precise temperature control, and adaptability make it an essential tool for industries pushing the boundaries of material science and nanotechnology, ensuring optimal performance in various extreme high-temperature thermal applications.</p>
      `,
      table1_th: 'Available Space',
      table1_th2: '150 x 150 x 200 mm',
      table1_td: 'Rate of Heating',
      table1_td2: '5°C/Min',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Box Furnace - up to 1600°C',
      table2_td2: '2Hrs / Working Zone:150x150x200 mm',
      lists: [
        'Working Temperature up to RT to 1600°C',
        'Tailor made box size as per the customer requirement',
        'Molybdenum di silicide heating elements from USA',
        '1°C accuracy at dwell temp',
        'Rapid heating rate(1 to 20°C/min) programmable',
        'Suitable for nanotechnology applications',
        'Imported / indigenized Insulation',
        'Indigenous VBCC Make phase control thyristor controller',
        'Eurotherm PID programmable digital temperature indicator cum controller',
      ],
      routing: 'box-furnace-up-to-1600degc',
    },
    {
      id: 14,
      mainHeader: "Tubular Furnace with Controlled atmosphere 1200°C",
      titleHead: 'Efficient Tubular Furnace 1200°C  | VBCC Research',
      metaDesc: "Unlock precision with our Efficient Tubular Furnace 1200°C. Explore high-temperature possibilities for advanced applications.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service14-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service14-sec-2.jpg',
      header: 'Heat Treatment Facility',
      heading:
        'Tubular Furnace with Controlled atmosphere 1200°C with Cold Vacuum & Argon Purging',
      description:
        'A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.',
      students: '₹3500 - Students',
      industries: '₹5000 - Industries',
      para1: '',
      para2: `
          <p>A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix.</p>

          <h3>Tubular Furnace with Controlled Atmosphere 1200°C:</h3>

          <h3>Features:</h3>
          <ul>
              <li><h4>Electric Heating Device:</h4> Specifically designed for syntheses and purifications of inorganic compounds, with occasional use in organic synthesis, using electric heating technology.</li>
              <li><h4>Working Temperature up to RT to 1200°C:</h4> Offers a broad temperature range suitable for various applications, from ambient conditions to high-temperature processes.</li>
              <li><h4>Tailor-Made Tubular Size:</h4> Customizable tubular dimensions to meet specific customer requirements, ensuring adaptability for diverse applications.</li>
              <li><h4>Alumina Tubes (90% to 99.7%):</h4> Utilizes high-purity alumina tubes to withstand high temperatures and harsh chemical environments.</li>
              <li><h4>Kanthal Heating Element:</h4> Incorporates quality Kanthal heating elements from Sweden, known for their efficiency and durability.</li>
              <li><h4>1°C Accuracy at Dwell Temp:</h4> Maintains precise temperature control, critical for conducting controlled syntheses and purifications.</li>
              <li><h4>Controlled Heating Rate (1 to 5°C/min) Programmable:</h4> Allows programmable heating rates for tailored thermal processing, accommodating various synthesis and purification requirements.</li>
              <li><h4>Suitable for Nanotechnology Applications:</h4> Designed to meet the specialized temperature needs of nanotechnology processes.</li>
              <li><h4>Imported/Indigenized Insulation:</h4> Combines insulation materials sourced internationally or locally for optimal thermal efficiency.</li>
              <li><h4>Indigenous VBCC Make Phase Control Thyristor Controller:</h4> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><h4>TAIE PID Programmable Digital Temperature Indicator cum Controller:</h4> Features advanced PID control from TAIE for precise and programmable temperature regulation.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><h4>Available Space:</h4> 60(ID) x 200(L) mm</li>
              <li><h4>Rate of Heating:</h4> 1 to 10°C/Min (Normally 10°C/Min)</li>
              <li><h4>Equipment:</h4> Tubular Furnace with Controlled Atmosphere - 1200°C with Cold Vacuum and Argon Purging</li>
              <li><h4>Quantity/Time:</h4> 2 Hrs</li>
              <li><h4>Working Zone:</h4> 50x150 mm</li>
          </ul>

          <h3>Use Cases:</h3>
          <p>The Tubular Furnace with Controlled Atmosphere 1200°C, featuring Cold Vacuum and Argon Purging, is highly versatile and finds applications in:</p>
          <ul>
              <li><h4>Inorganic Compound Synthesis:</h4> Ideal for conducting precise syntheses of inorganic compounds with controlled atmospheric conditions.</li>
              <li><h4>Purification Processes:</h4> Ensures optimal conditions for purifying materials, especially inorganic substances.</li>
              <li><h4>Organic Synthesis:</h4> Occasionally utilized in organic synthesis processes that demand controlled high temperatures.</li>
              <li><h4>Nanotechnology Research:</h4> Tailored for nanotechnology applications requiring specific temperature profiles and controlled atmospheres.</li>
              <li><h4>Material Purification under Argon or Nitrogen Atmospheres:</h4> Suited for operations under controlled gaseous environments, including Argon and Nitrogen.</li>
              <li><h4>Ambient to High-Temperature Processes:</h4> Versatile temperature range for a broad spectrum of thermal applications.</li>
          </ul>

          <p>The tubular furnace's precise temperature control, programmable features, and adaptability make it an essential tool for researchers and industries involved in cutting-edge materials synthesis, purification, and nanotechnology applications.</p>
      `,
      table1_th: 'Available Space',
      table1_th2: '60(ID) x 200(L) mm',
      table1_td: 'Rate of Heating',
      table1_td2: '1 to 10°C/Min (Normally 10°C/Min)',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td:
        'Tubular Furnace with controlled atmosphere - 1200°C with Cold Vacuum and Argon purging',
      table2_td2: '2Hrs / Working Zone:50x150 mm',
      lists: [
        'Working Temperature up to RT to 1200°C',
        'Tailor made tubular size as per the customer requirement',
        '90% to 99.7% alumina tubes as per customer requirement',
        'Kanthal heating element from Sweden',
        '1°C accuracy at dwell temp',
        'Controlled heating rate(1 to 5°C/min)',
        'Suitable for nanotechnology applications',
        'Imported / indigenized Insulation',
        'Indigenous VBCC Make phase control thyristor controller',
        'TAIE PID programmable digital temperature indicator cum controller',
      ],
      routing: 'tubular-furnace-with-controlled-atmosphere-1200degc',
    },
    {
      id: 15,
      mainHeader: "Tubular Furnace Electric Heating Device with Controlled atmosphere 1600°C",
      titleHead: 'Tubular Furnace 1600°C Electric Heating Device | VBCC Research',
      metaDesc: "Explore high-performance 1600°C tubular furnaces – precision heating devices for your experiments. Trust the efficiency of electric tube furnaces.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service15-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service15-sec-2.jpg',
      header: 'Heat Treatment Facility',
      heading:
        'Tubular Furnace with Controlled atmosphere 1600°C with Cold Vacuum & Argon Purging',
      description:
        'A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.',
      students: '₹5000 - Students',
      industries: '₹7500 - Industries',
      para1: '',
      para2: `
          <p>A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix.</p>

          <h3>Features:</h3>
          <ul>
              <li><h4>Electric Heating Device:</h4> A tube furnace designed for conducting syntheses and purifications of inorganic compounds, occasionally applied in organic synthesis.</li>
              <li><h4>Working Temperature up to RT to 1600°C:</h4> Offers an extensive temperature range suitable for a variety of applications, from ambient conditions to high-temperature processes.</li>
              <li><h4>Tailor-Made Tubular Size:</h4> Customizable tubular dimensions to meet specific customer requirements, ensuring adaptability for diverse applications.</li>
              <li><h4>Molybdenum Di Silicide Heating Elements (USA):</h4> Utilizes high-quality heating elements known for their efficiency and durability, ensuring consistent performance.</li>
              <li><h4>Imported RCA Tube from Halden Wanger (Germany):</h4> Incorporates a high-quality RCA tube for enhanced reliability and performance.</li>
              <li><h4>1°C Accuracy at Dwell Temp:</h4> Maintains precise temperature control, crucial for conducting controlled syntheses and purifications.</li>
              <li><h4>Rapid Heating Rate (1 to 5°C/min) Programmable:</h4> Allows programmable heating rates for tailored thermal processing, accommodating various synthesis and purification requirements.</li>
              <li><h4>Suitable for Nanotechnology Applications:</h4> Specifically designed to meet the specialized temperature needs of nanotechnology processes.</li>
              <li><h4>Indigenously Developed Susceptor:</h4> Ensures reliable heat generation within the furnace, contributing to the overall efficiency of the system.</li>
              <li><h4>Imported/Indigenized Insulation:</h4> Combines insulation materials sourced internationally or locally for optimal thermal efficiency.</li>
              <li><h4>Indigenous VBCC Make Phase Control Thyristor Controller:</h4> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><h4>Eurotherm PID Programmable Digital Temperature Indicator cum Controller:</h4> Features advanced PID control from Eurotherm for precise and programmable temperature regulation.</li>
              <li><h4>Optional Rough Vacuum:</h4> Offers the flexibility of operating under rough vacuum conditions, enhancing the furnace's versatility.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><h4>Available Space:</h4> 60(ID) x 200(L) mm</li>
              <li><h4>Rate of Heating:</h4> 1 to 10°C/Min (Normally 10°C/Min)</li>
              <li><h4>Equipment:</h4> Tubular Furnace with Controlled Atmosphere - 1600°C with Argon Purging</li>
              <li><h4>Quantity/Time:</h4> 3 Hrs</li>
              <li><h4>Working Zone:</h4> 50x150 mm</li>
          </ul>

          <h3>Use Cases:</h3>
          <p>The Tubular Furnace with Controlled Atmosphere 1600°C, featuring Cold Vacuum and Argon Purging, excels in various applications:</p>
          <ul>
              <li><h4>High-Temperature Syntheses:</h4> Ideal for conducting syntheses requiring extremely high temperatures up to 1600°C.</li>
              <li><h4>Advanced Materials Research:</h4> Suited for nanotechnology research, providing precise temperature control for material synthesis.</li>
              <li><h4>Inorganic Compound Purification:</h4> Ensures optimal conditions for purifying inorganic compounds under controlled atmospheres.</li>
              <li><h4>Temperature-Sensitive Processes:</h4> The precise temperature control makes it suitable for processes where maintaining specific temperature profiles is critical.</li>
              <li><h4>Rough Vacuum Applications:</h4> Optional rough vacuum capability extends its utility for a broader range of processes.</li>
          </ul>

          <p>The Tubular Furnace with Controlled Atmosphere 1600°C stands as a versatile and reliable tool for researchers and industries engaged in cutting-edge materials synthesis, purification, and advanced research applications.</p>
      `,
      table1_th: 'Available Space',
      table1_th2: '60(ID) x 200(L) mm',
      table1_td: 'Rate of Heating',
      table1_td2: '1 to 10°C/Min (Normally 10°C/Min)',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td:
        'Tubular Furnace with controlled atmosphere - 1600°C with Argon purging',
      table2_td2: '3Hrs / Working Zone:50x150 mm',
      lists: [
        'Working Temperature up to RT to 1600°C',
        'Tailor made Tubular size as per the customer requirement',
        'Molybdenum di silicide heating elements from USA',
        'Imported RCA Tube from Halden Wanger Germany',
        '1°C accuracy at dwell temp',
        'Rapid heating rate(1 to 5°C/min) programmable',
        'Suitable for nanotechnology applications',
        'Indigenously developed susceptor for reliable heat generation',
        'Imported / indigenized Insulation',
        'Indigenous VBCC Make phase control thyristor controller',
        'Eurotherm PID programmable digital temperature indicator cum controller * Working Temperature up to RT to 1400°C * Rough Vacuum (optional)',
      ],
      routing: 'tubular-furnace-with-controlled-atmosphere-1600degc',
    },
    {
      id: 16,
      mainHeader: "Microwave Laboratory Furnace upto 1500°C",
      titleHead: 'High-Performance Microwave Furnace up to 1500°C | VBCC Research',
      metaDesc: "Unlock precision with our High-Performance Microwave Furnace up to 1500°C. Explore advanced laboratory furnace for testing.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service16-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service16-sec-2.jpg',
      header: 'Heat Treatment Facility',
      heading: 'Microwave Furnace up to 1500°C (20°C ramp & 30 min dwell)',
      description:
        'Microwave furnaces represent a system that combines free radiating heating elements with a microwave field.',
      students: '₹2500 - Students',
      industries: '₹5000 - Industries',
      para1: '',
      para2: `
          <p>Microwave furnace is another type of laboratory furnace used to carry out thermal research protocols. Microwave furnaces represent a system that combines free radiating heating elements with a microwave field. Traditional heating elements heat material from the outside in, and microwave energy heats volumetrically. Key advantages include greater energy efficiency, faster sample heating, more uniform heating, and improved material properties.</p>

          <h3>Microwave Furnace up to 1500°C:</h3>

          <h4>Features:</h4>
          <ul>
              <li><h4>Innovative Heating Technology:</h4> Utilizes a combination of free radiating heating elements and a microwave field, offering advantages in energy efficiency and sample heating compared to traditional methods.</li>
              <li><h4>Working Temperature up to RT to 1500°C:</h4> Provides a broad temperature range suitable for various thermal research protocols, accommodating a wide range of material processing needs.</li>
              <li><h4>Up to 10 KW with 2.45 GHz of Magnetron:</h4> Employs a high-power magnetron for efficient microwave energy generation, ensuring rapid and uniform sample heating.</li>
              <li><h4>1°C Accuracy at Dwell Temp:</h4> Maintains precise temperature control, crucial for achieving reproducible and accurate results in thermal research.</li>
              <li><h4>Rapid Heating Rate (100°C/min) Programmable:</h4> Offers programmable heating rates of up to 100°C/min, enabling quick and efficient sample processing.</li>
              <li><h4>Suitable for Nanotechnology Applications:</h4> Specifically designed for nanotechnology research, providing uniform and controlled heating for material synthesis.</li>
              <li><h4>Indigenously Developed Susceptor:</h4> Ensures reliable and efficient heat generation within the furnace, contributing to the overall performance of the system.</li>
              <li><h4>Imported Insulation (Portable Susceptor):</h4> Incorporates high-quality insulation, optimizing energy efficiency and maintaining a portable design.</li>
              <li><h4>Indigenous VBCC Make Phase Control Thyristor Controller:</h4> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><h4>Eurotherm PID Programmable Digital Temperature Indicator cum Controller:</h4> Features advanced PID control from Eurotherm for precise and programmable temperature regulation.</li>
              <li><h4>Computer Control (Optional):</h4> Offers the flexibility of computer control for enhanced automation and data management.</li>
              <li><h4>Data Logging (Optional):</h4> Provides an optional data logging feature for recording and analyzing experimental data.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><h4>Available Space:</h4> 75 x 75 x 75 mm</li>
              <li><h4>Rate of Heating:</h4> 1 to 25°C/Min</li>
              <li><h4>Equipment:</h4> Microwave Furnace up to 1500°C</li>
              <li><h4>Quantity/Time:</h4> 30 min</li>
              <li><h4>Working Zone:</h4> 25x25x50 mm</li>
          </ul>

          <h3>Use Cases:</h3>
          <p>The Microwave Furnace up to 1500°C, featuring a 20°C ramp and 30 min dwell, offers versatile applications in thermal research:</p>
          <ul>
              <li><h4>Material Synthesis:</h4> Enables efficient and uniform heating for synthesizing advanced materials, especially in nanotechnology applications.</li>
              <li><h4>Heat Treatment Protocols:</h4> Ideal for conducting heat treatment processes with precise temperature control and rapid heating rates.</li>
              <li><h4>Energy-Efficient Research:</h4> Enhances energy efficiency compared to traditional methods, making it suitable for sustainable research practices.</li>
              <li><h4>Uniform Sample Heating:</h4> Ensures uniform heating throughout the sample, contributing to more consistent and reliable experimental outcomes.</li>
              <li><h4>Quick Experimental Turnaround:</h4> The rapid heating rate allows for shortened experimental durations, improving overall research efficiency.</li>
          </ul>

          <p>The Microwave Furnace up to 1500°C stands as a cutting-edge tool for researchers engaged in thermal studies, offering advanced features and performance for a wide range of material processing applications.</p>
      `,
      table1_th: 'Available Space',
      table1_th2: '75 x 75 x 75 mm',
      table1_td: 'Rate of Heating',
      table1_td2: '1 to 25°C/Min',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Microwave Furnace up to 1500°C',
      table2_td2: '30min / Working Zone: 25x25x50 mm',
      lists: [
        'Working Temperature up to RT to 1500°C',
        'Up to 10 KW with 2.45 GHz of magnetron',
        '1°C accuracy at dwell temp',
        'Rapid heating rate(100°C/min) programmable',
        'Suitable for nanotechnology applications',
        'Indigenously developed susceptor for reliable heat generation',
        'Imported Insulation (portable susceptor) * Indigenous VBCC Make phase control thyristor controller',
        'Eurotherm PID programmable digital temperature indicator cum controller',
        'Computer Control (Optional)',
        'Data logging (optional)',
      ],
      routing: 'microwave-furnace-up-to-1500degc',
    },
    {
      id: 17,
      mainHeader: "Spin Coating Machine",
      titleHead: 'Quality Spin Coating Equipment with Technology | VBCC Research',
      metaDesc: "Achieve Precision in Thin Film Deposition with Our Spin Coating Machines with Quality Equipment in Spin Coating Technology.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service17-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service17-sec-2.jpg',
      header: 'Nano coating techniques',
      heading: 'Spin Coating',
      description:
        'Spin coating is a method wherein an excess amount of a solution is placed on the substrate, which is then rotated at high speed in order to spread the fluid by centrifugal force.',
      students: '₹400 - Students',
      industries: '₹800 - Industries',
      para1: '',
      para2: `
    <p>Spin coating is a specialized technique used for applying thin films with exceptional uniformity across the surface of a substrate. This process involves coating a rotating substrate with a solution—often referred to as an "ink"—resulting in the creation of a thin, even film of solid material.</p>

    <h3>How It Works:</h3>
    <ul>
        <li><h4>Solution Application: A liquid solution, containing the desired material dissolved in a solvent, is cast onto a rotating substrate.</h4></li>
        <li><h4>Centrifugal Force: High-speed rotation (typically >10 rotations per second) generates centripetal force, combined with surface tension, which uniformly spreads the liquid coating.</h4></li>
        <li><h4>Evaporation: While spinning, the solvent in the solution evaporates, leaving behind a thin, even layer of the desired material on the substrate.</h4></li>
    </ul>

    <h3>Use Cases:</h3>
    <ol>
        <li><h4>Semiconductor Fabrication: Essential in semiconductor manufacturing for applying uniform coatings of photoresists and other materials.</h4></li>
        <li><h4>Optoelectronic Devices: Used in the production of optoelectronic devices, such as light-emitting diodes (LEDs) and solar cells, to create precise thin films.</h4></li>
        <li><h4>Organic Electronics: Applied in the fabrication of organic electronic devices like organic light-emitting diodes (OLEDs) and organic photovoltaic cells.</h4></li>
        <li><h4>Biosensor Development: Utilized for coating biosensors to ensure a consistent and thin layer for accurate sensing.</h4></li>
    </ol>

    <h3>Benefits:</h3>
    <ol>
        <li><h4>Uniformity: Ensures exceptional uniformity in thin film deposition, critical for applications in microelectronics and optics.</h4></li>
        <li><h4>Precision and Control: Offers precise control over film thickness, crucial in industries requiring accurate and consistent coatings.</h4></li>
        <li><h4>Versatility: Applicable to a wide range of materials, making it versatile for various industries and applications.</h4></li>
        <li><h4>High Throughput: Rapid coating process allows for high throughput in manufacturing, contributing to overall efficiency.</h4></li>
    </ol>

    <p>In summary, spin coating stands as a fundamental technique in thin film deposition, playing a pivotal role in industries ranging from semiconductors to optoelectronics. Its ability to provide uniform and controlled coatings positions it as a valuable tool in the production of advanced electronic and optical devices.</p>
      `,
      para3: '',
      table1_th: 'Substrate Size',
      table1_th2: '25 mm',
      table1_td: 'Speed',
      table1_td2: '100 - 6,000 rpm (Variable)',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Spin Coater',
      table2_td2: 'Per Sample',
      routing: 'spin-coating',
    },
    {
      id: 18,
      mainHeader: "Spray Pyrolysis Equipment",
      titleHead: 'Efficient Spray Pyrolysis Equipment | VBCC Research',
      metaDesc: "Unlock Precision with Spray Pyrolysis Equipment - Explore a range of instruments for nanostructure synthesis and thin film deposition. ",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service18-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service18-sec-2.jpg',
      header: 'Nano coating techniques',
      heading: 'Spray Pyrolysis',
      description:
        'Spray pyrolysis is a process in which a thin film is deposited by spraying a solution on a heated surface, where the constituents react to form a chemical compound.',
      students: '₹1000 - Students',
      industries: '₹3000 - Industries',
      para1: '',
      para2: `
    <p>Spray pyrolysis is a specialized process used for the synthesis of nanostructures, where a precursor solution is sprayed onto a heated substrate. This technique facilitates the controlled decomposition of the precursor, leading to the formation of the desired final material on the substrate.</p>

    <h3>How It Works:</h3>
    <ul>
        <li><h4>Precursor Solution: A solution containing the precursor material is sprayed or injected onto a hot substrate using a nano-porous nebulizer.</h4></li>
        <li><h4>Decomposition and Formation: The precursor decomposes on the hot substrate, forming the final desired material through chemical reactions.</h4></li>
    </ul>

    <h3>Use Cases:</h3>
    <ol>
        <li><h4>Thin Film Deposition: Widely used for depositing thin films with controlled thickness on various substrates.</h4></li>
        <li><h4>Oxide Deposition: Particularly useful for the deposition of oxides, where chemical reactants are selected to ensure volatile by-products at the deposition temperature.</h4></li>
        <li><h4>Nanostructure Synthesis: Applied in the synthesis of nanostructures, contributing to the development of advanced materials with tailored properties.</h4></li>
        <li><h4>Photovoltaic Devices: Utilized in the fabrication of thin films for solar cells and other photovoltaic devices.</h4></li>
    </ol>

    <h3>Benefits:</h3>
    <ol>
        <li><h4>Automated Operation: The equipment is fully automatic, offering convenience in operation with time setting and variable adjustments.</h4></li>
        <li><h4>Temperature Control: Allows precise control of the substrate temperature, ensuring optimal conditions for the decomposition and formation process.</h4></li>
        <li><h4>Versatility: Suitable for a range of materials, making it versatile for various applications, especially in the deposition of oxides.</h4></li>
        <li><h4>High-Quality Films: Facilitates the production of high-quality thin films with uniform thickness, crucial for applications in electronics and materials science.</h4></li>
    </ol>

    <p>In summary, spray pyrolysis stands as a valuable technique in the realm of nanostructure synthesis and thin film deposition. Its automated operation, versatility, and ability to produce high-quality films make it a significant contributor to advancements in materials science and technology.</p>


      `,
      para3: '',
      table1_th: 'Max Substrate Temperature',
      table1_th2: '500°C',
      table1_td: 'Working Area',
      table1_td2: '150 x 150 mm',
      table1_td3: 'Air Pressure',
      table1_td4: '0.5 to 2 Bar',
      table1_td5: 'Nozzle Diameter',
      table1_td6: '0.5 mm',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Spray Pyrolysis',
      table2_td2: 'Per Sample',
      routing: 'spray-pyrolysis',
    },
    {
      id: 19,
      mainHeader: " Ceramic Dip Coating Machine",
      titleHead: 'High-Quality Ceramic Dip Coating Machines | VBCC Research',
      metaDesc: "Discover efficiency and uniformity in Ceramic Dip Coating. Explore our high-quality Dip Coater for precise thin film production.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service19-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service19-sec-2.png',
      header: 'Nano coating techniques',
      heading: 'Dip Coating',
      description:
        'Dip coating is an industrial coating process which is used, for example, to manufacture bulk products such as coated fabrics and specialised coatings for example in the biomedical field.',
      students: '₹250 - Students',
      industries: '₹500 - Industries',
      para1: '',
      para2: `

    <p>Dip coating is a meticulous process where a substrate material undergoes immersion in conformal coating, followed by controlled drying. The method is widely utilized for the creation of thin film coatings, ensuring uniformity and precision in the application.</p>

    <h3>How It Works:</h3>
    <ul>
        <li><h4>Submergence and Coating: Substrate material is fully immersed in a tank containing the desired coating material.</h4></li>
        <li><h4>The coated substrate is then lifted, allowing excess coating to drip off.</h4></li>
        <li><h4>Drying Techniques: The coated piece undergoes a drying phase, employing techniques such as force-drying or baking. Drying is critical for achieving the desired coating thickness and properties.</h4></li>
    </ul>

    <h3>Equipment and Automation:</h3>
    <ul>
        <li><h4>Dip Coater: An automatic unit with time settings and variable adjustments. Ensures consistency and repeatability in the coating process.</h4></li>
    </ul>

    <h3>Use Cases:</h3>
    <ol>
        <li><h4>Thin Film Production: Ideal for creating thin films with precise thickness and uniformity.</h4></li>
        <li><h4>Commonly employed in industries requiring controlled coating thickness.</h4></li>
        <li><h4>Precision Coating: Used in applications where precision in coating thickness is paramount. Ensures even distribution of coating material on complex surfaces.</h4></li>
    </ol>

    <h3>Benefits:</h3>
    <ul>
        <li><h4>Uniform Coating: Facilitates the achievement of uniform coating thickness across the substrate. Enhances the quality and performance of coated materials.</h4></li>
        <li><h4>Versatility: Adaptable to a variety of substrates and coating materials. Suitable for diverse industries and applications.</h4></li>
        <li><h4>Efficiency and Automation: Automatic equipment streamlines the coating process, reducing manual intervention. Enhances efficiency and repeatability in thin film production.</h4></li>
    </ul>

    <p>Dip coating stands as a versatile and precise method for applying conformal coatings, especially in the production of thin films. Its ability to provide uniform and controlled coatings makes it invaluable in industries where precision and consistency are paramount, ensuring optimal performance of coated materials.</p>
      `,
      para3: '',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Dip Coater',
      table2_td2: 'Per Sample',
      routing: 'dip-coating',
    },
    {
      id: 20,
      mainHeader: "Modulus of Rupture / Flexural & Bend Strength",
      titleHead: 'Modulus of Rupture & Flexural Strength Boost Bend Strength | VBCC Research',
      metaDesc: "Strengthen your products with Modulus of Rupture & Flexural Strength Testing. Optimize Construction, Ceramics & Automotive Designs for Bending Forces.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service20-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service20-sec-2.jpg',
      header: 'Physical properties',
      heading:
        'Cold / Fired (MOR) Modulus of Rupture(max 3 samples), Flexural Strength',
      description:
        'Modulus of rupture (MOR) is like a three-point bend test. MOR measures the bond strength of the test specimen.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
      <p>Flexural Strength, also known as the Modulus of Rupture (MOR), Bend Strength, or Fracture Strength is
    It is a mechanical parameter that gauges a material's ability to resist deformation under load, particularly in bending scenarios.</p>

    <h3>Formulas for Calculation:</h3>
    <p>For a rectangular sample under a load in three-point bending:</p>
    <p>FS = 3FL/2bd²</p>
    <ul>
        <li>F is the load (force) at the fracture point.</li>
        <li>L is the length of the support span.</li>
        <li>b is the width.</li>
        <li>d is the thickness.</li>
    </ul>

    <h3>Equipment:</h3>
    <ul>
        <li>Laboratory Scale: Cold / Fired MOR</li>
        <ul>
            <li>Suitable for small-scale sample testing.</li>
            <li>Accommodates up to three samples.</li>
        </ul>
        <li>Industrial Tile Sizes: Cold / Fired MOR</li>
        <ul>
            <li>Designed for larger tiles (up to 600 x 600 mm).</li>
            <li>Allows testing on a per-sample basis.</li>
        </ul>
    </ul>

    <h3>Use Cases:</h3>
    <ul>
        <li><h4>Construction Materials:</h4></li>
        <ul>
            <li>Assessing the strength of concrete beams, tiles, and masonry.</li>
        </ul>
        <li><h4>Ceramic and Glass Products:</h4></li>
        <ul>
            <li>Ensuring tiles and glass components can withstand bending forces.</li>
        </ul>
        <li><h4>Automotive Components:</h4></li>
        <ul>
            <li>Evaluating the flexural strength of vehicle parts.</li>
        </ul>
    </ul>

    <h3>How It Works:</h3>
    <p>Three-Point Bending:</p>
    <ul>
        <li>Applies a load at the center of a sample supported at both ends.</li>
        <li>Measures the maximum bending stress before fracture.</li>
        <li>Calculates flexural strength using the provided formula.</li>
    </ul>

    <h3>Benefits:</h3>
    <ul>
        <li><h4>Structural Integrity:</h4></li>
        <ul>
            <li>Determines a material's ability to resist bending deformation.</li>
        </ul>
        <li><h4>Quality Assurance:</h4></li>
        <ul>
            <li>Ensures products meet specified strength requirements.</li>
        </ul>
        <li<h4>>Design Optimization:</h4></li>
        <ul>
            <li>Guides the design of materials for enhanced flexural performance.</li>
        </ul>
        <li><h4>Safety Evaluation:</h4></li>
        <ul>
            <li>Crucial for applications where materials are subjected to bending forces.</li>
        </ul>
    </ul>

    <p>Flexural strength, evaluated through modulus of rupture testing, is a critical parameter for materials used in construction, ceramics, and automotive applications. The equipment accommodates both laboratory-scale assessments and larger industrial tiles, providing valuable insights into a material's ability to withstand bending forces.</p>

       `,
      para3: '',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Cold / Fired MOR (Laboratory Scale)',
      table2_td2: 'For 3 Samples',
      table1_td: 'Cold / Fired MOR',
      table1_td2: 'Per Sample(For Industrial Tile sizes up to 600 x600 mm)',
      lists: [
        "FS = 3FL/'2bd2",
        'F is the load (force) at the fracture point',
        'L is the length of the support span',
        'b is width',
        'd is thickness',
      ],
      routing: 'cold-fired-mor-modulus-of-rupture-flexural-strength',
    },
    {
      id: 21,
      mainHeader: "Aluminium Stir Casting Machine ",
      titleHead: 'Advanced Aluminium Stir Casting Machine | VBCC Research',
      metaDesc: "Elevate your manufacturing with our Advanced Aluminium Stir Casting Machine. Explore the efficiency of aluminium stir casting for precise material formation.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service21-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service21-sec-2.jpg',
      header: 'Casting',
      heading: 'Aluminium Stir Casting',
      description:
        'It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.',
      students: '₹2500 - Students',
      industries: '₹5000 - Industries',
      para1: '',
      para2: `
    <p>Stir casting is one of the most popular and widely used methods in which material formation (mainly Metal Alloys and Metal Matrix Composites) is done by melting metals and casting them into suitable shapes and sizes by pouring them into cavities. It is also called as liquid metallurgy.</p>

    <h3>Aluminium Stir Casting:</h3>
    <p>Aluminium stir casting, a prominent method in material formation, particularly for metal alloys and metal matrix composites (MMCs), stands as a cornerstone in the realm of liquid metallurgy. This widely utilized technique involves melting metals, including aluminium, and casting them into predefined shapes and sizes through controlled pouring into molds or cavities.</p>

    <p>The process of stir casting begins with the essential step of melting aluminium, a versatile and widely used metal known for its lightweight and excellent mechanical properties. The molten aluminium undergoes stirring, which is critical for achieving homogeneity and reinforcing the material with various components.</p>

    <p>This method is particularly advantageous for fabricating aluminium matrix composites (AMCs) and hybrid aluminium matrix composites. The economic efficiency of stir casting makes it a preferred choice for mass production in industrial applications. Its versatility is showcased in its ability to accommodate different substrate sizes, with a typical size of 25 mm, and variable stirring speeds ranging from 100 to 6,000 rpm. The equipment employed, known as a spin coater, facilitates controlled and uniform distribution of the molten material onto the substrate.</p>

    <p>The significance of aluminium stir casting lies not only in its cost-effectiveness but also in its ability to produce materials with enhanced mechanical and thermal properties. This makes it a valuable technique for applications demanding lightweight, high-strength materials, such as automotive components and aerospace structures. In a research or industrial setting, the quantity of material produced per sample and the processing time are critical considerations, and the adaptability of stir casting addresses these requirements efficiently.</p>

    <p>In conclusion, aluminium stir casting emerges as a pivotal process in the fabrication of advanced materials, offering a cost-effective and scalable solution for the production of aluminium matrix composites with tailored properties, positioning itself as a vital player in the domain of modern material engineering.</p>



      `,
      table1_th: 'Substrate Size',
      table1_th2: '25 mm',
      table1_td: 'Speed',
      table1_td2: '100 - 6,000 rpm (Variable)',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Spin Coater',
      table2_td2: 'Per Sample',
      routing: 'aluminium-stir-casting',
    },
    {
      id: 22,
      mainHeader: "Magnesium Stir Casting Equipment",
      titleHead: 'Quality Magnesium Stir Casting Equipment | VBCC Research',
      metaDesc: "Experience the future of material engineering with magnesium stir casting. Explore our fully automatic stir-casting equipment for crafting lightweight components.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service22-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service22-sec-2.png',
      header: 'Casting',
      heading: 'Magnesium Stir Casting',
      description:
        'It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.',
      students: '₹4000 - Students',
      industries: '₹6000 - Industries',
      para1: '',
      para2: `
          <p>Stir casting is one of the most popular and widely used methods in which material formation (mainly Metal Alloys and Metal Matrix Composites) is done by melting metals and casting them into suitable shapes and sizes by pouring them into cavities. It is also called liquid metallurgy.</p>

          <h3>Magnesium Stir Casting:</h3>
          <p>Magnesium stir casting emerges as a leading method in material formation, particularly for crafting Metal Alloys and Metal Matrix Composites (MMCs). Often referred to as liquid metallurgy, this widely adopted process involves the meticulous melting of metals and their subsequent casting into specifically designed shapes and sizes by carefully pouring the molten alloy into dedicated cavities.</p>

          <p>This versatile method finds extensive application in the casting of magnesium alloy and magnesium alloy composites. The incorporation of reinforcing particles into the magnesium matrix is achieved through proprietary methods, with the mixing process facilitated by a stirrer within the fully automatic stir casting model.</p>

          <p>The equipment used for magnesium stir casting is designed for efficiency and precision. The model operates fully automatically, ensuring consistency and repeatability in the manufacturing process. The weight capacity ranges from 500 grams to 2 kilograms, providing flexibility for different production requirements. The mold size, at 30 mm diameter and 200 mm length, allows for the creation of diverse shapes and sizes.</p>

          <h3>Use Cases:</h3>
          <p>Magnesium stir casting finds invaluable application in industries where lightweight materials with enhanced mechanical properties are imperative. In the automotive sector, this process is instrumental in crafting magnesium alloy components that contribute to reduced vehicle weight, improving fuel efficiency without compromising on strength. The aerospace industry also benefits from magnesium stir casting, creating components that meet stringent weight and performance criteria.</p>

          <h3>Benefits:</h3>
          <ul>
              <li><h4>Lightweight and High-Strength:</h4> Magnesium, known for its low density and high strength-to-weight ratio, ensures that components produced through stir casting exhibit superior strength while being lightweight.</li>
              <li><h4>Versatility in Shape and Size:</h4> The stir casting model's adaptability in terms of mold size and weight capacity allows for the creation of a wide range of components tailored to specific applications.</li>
              <li><h4>Fully Automatic Operation:</h4> The fully automatic nature of the stir casting model enhances efficiency, repeatability, and ease of operation, contributing to streamlined production processes.</li>
              <li><h4>Material Efficiency:</h4> The method's ability to incorporate reinforcing particles into the magnesium matrix enhances material properties, resulting in materials with improved performance characteristics.</li>
          </ul>

          <p>In summary, magnesium stir casting represents a cutting-edge technique with widespread applications in industries demanding lightweight, high-performance materials. Its versatility, efficiency, and ability to produce components with superior properties position it as a key player in advancing material engineering and manufacturing processes.</p>

      `,
      table1_th: 'Stir casting model',
      table1_th2: 'fully automatic',
      table1_td: 'Material',
      table1_td2: 'Aluminium',
      table1_td3: 'Weight',
      table1_td4: '500 gram to 2 kg',
      table1_td5: 'Mould size',
      table1_td6: '30 mm dia x200 mm length',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Magnesium Stir Casting',
      table2_td2: 'Per Run',
      routing: 'magnesium-stir-casting',
    },
    {
      id: 23,
      mainHeader: "Extruder Machine",
      titleHead: 'High-Quality Extruder Machine | VBCC Research',
      metaDesc: "Explore efficient extruder machines for ceramics, plastics, and metals. High-quality and versatile, our extruders offer continuous production.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service23-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service23-sec-2.jpg',
      header: 'Shaping',
      heading: 'Extruder',
      description:
        'Extruders are screw reactors, and extrusion is a series of processes which includes mixing, forming, puffing and drying.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `

    <p>An extruder serves as a screw reactor, driving the process of extrusion, which involves a sequence of operations including mixing, forming, puffing, and drying. This versatile tool finds applications across various industries, most notably in ceramics and metalworking.</p>

    <h3>How It Works:</h3>
    <ul>
        <li><h4>Continuous Process: Extrusion is a continuous process where materials are forced through a series of dies, shaping them into desired forms.</h4></li>
        <li><h4>Screw-Type Mechanism: In commercial screw-type extruders, a screw auger consistently propels materials through a die, resulting in various shapes like cylindrical rods, pipes, bars, and plates.</h4></li>
        <li><h4>Metal Extrusion: In metalworking, extrusion transforms a metal billet into a uniform cross-sectional length by pressing it through a die, with aluminum being a particularly amenable material for this process.</h4></li>
    </ul>

    <h3>Use Cases:</h3>
    <ul>
        <li><h4>Ceramic Manufacturing: Extrusion is widely employed in ceramics manufacturing for its efficiency in continuous production, producing shapes like rods, pipes, bars, and plates.</h4></li>
        <li><h4>Plastic Production: Plastic feed materials are molded into specific shapes using extruders, facilitating the production of diverse plastic products.</h4></li>
        <li><h4>Metal Extrusion: Aluminum, among other metals, undergoes extrusion for creating uniform cross-sectional lengths for various applications.</h4></li>
        <li><h4>Binder-Assisted Forming: Both clay and non-clay materials are formed into cylindrical or square shapes with the aid of binders, demonstrating the versatility of extruders.</h4></li>
    </ul>

    <h3>Benefits:</h3>
    <ul>
        <li><h4>Continuous Production: Enables continuous and efficient production processes, reducing downtime and increasing output.</h4></li>
        <li><h4>Shape Versatility: Capable of forming a variety of shapes, from simple cylinders and pipes to complex bars and plates.</h4></li>
        <li><h4>Efficient Material Processing: Ensures efficient mixing, forming, and shaping of materials, contributing to overall manufacturing efficiency.</h4></li>
        <li><h4>Binder-Assisted Forming: Facilitates the use of binders to shape materials, offering flexibility in the manufacturing of diverse products.</h4></li>
    </ul>

    <p>The extruder stands as a key player in manufacturing, driving continuous processes across ceramics, plastics, and metalworking. Its versatility, efficiency, and ability to shape materials make it an indispensable tool in modern industrial production.</p>


      `,
      para3: '',
      routing: 'extruder',
    },
    {
      id: 24,
      mainHeader: "Chemical Vapor Deposition Equipment (CVD)",
      titleHead: 'High-Quality Chemical Vapor Deposition Machine | VBCC Research',
      metaDesc: "Unlock the potential of Chemical Vapour Deposition (CVD) Machine for precision nanostructure control and diverse coating applications.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service24-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service24-sec-2.jpg',
      header: 'Nano coating techniques',
      heading: 'Chemical Vapour Deposition (CVD)',
      description:
        'It is a technique where a solid material is deposited from a vapor by some chemical reaction occurring on or in the vicinity of a normally heated substrate surface',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `

    <p>Chemical Vapour Deposition (CVD) is a sophisticated coating process that relies on thermally induced chemical reactions occurring at the surface of a heated substrate. In this technique, reagents are supplied in gaseous form, leading to the formation of coatings with diverse properties.</p>

    <h3>How It Works:</h3>
    <ul>
        <li><h4>Gaseous Reagent Supply: Reagents are introduced in gaseous form to the surface of a heated substrate.</h4></li>
        <li><h4>Thermally Induced Reactions: Chemical reactions are thermally induced, promoting the deposition of coating materials on the substrate.</h4></li>
        <li><h4>Nanostructure Development: CVD is prominently employed in nanotechnology for the precise development of nano materials with varied structures and dimensions.</h4></li>
    </ul>

    <h3>Use Cases:</h3>
    <ul>
        <li><h4>Carbon Nano Tubes (CNTs): CVD is extensively utilized in the preparation of Carbon Nano Tubes, offering a method for controlled synthesis.</h4></li>
        <li><h4>Nano Thin Film Coatings: Applied in the development of diverse Nano Thin Film Coatings with tailored properties.</h4></li>
    </ul>

    <h3>Benefits:</h3>
    <ul>
        <li><h4>Nanotechnology Advancements: Plays a pivotal role in nanotechnology, contributing to the creation of nano materials with specific structures.</h4></li>
        <li><h4>Versatile Applications: Widely employed for the preparation of Carbon Nano Tubes and Nano Thin Film Coatings, showcasing versatility.</h4></li>
        <li><h4>Precise Nanostructure Control: Allows precise control over the dimensions and structures of nano materials, crucial for tailored applications.</h4></li>
        <li><h4>Uniform Coating: Results in the deposition of coatings with uniform thickness, ensuring consistency in material properties.</h4></li>
    </ul>

    <h3>Technological Impact:</h3>
    <p>Chemical Vapour Deposition stands at the forefront of technological advancements, particularly in nanotechnology. Its ability to facilitate controlled nanostructure development and diverse coating applications underscores its significance in materials science and engineering.</p>

    <p>CVD plays a pivotal role in advancing nanotechnology and materials science, offering a powerful method for the controlled synthesis of nano materials and the development of specialized coatings.</p>


      `,
      lists: [],
      routing: 'chemical-vapour-deposition-cvd',
    },
    {
      id: 25,
      mainHeader: "Slip Casting for Ceramics",
      titleHead: 'Premium Slip Casting Ceramics Equipment | VBCC Research',
      metaDesc: "Crafting precision with slip casting ceramics – explore our premium equipment for flawless creations. Unleash your artistry with the best in slip casting technology",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service25-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service25-sec-2.jpg',
      header: 'Casting',
      heading: 'Slip Casting',
      description:
        'Slip Casting is a technique used for the production of complex shapes from a suspension poured into a mold.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Slip casting is a technique most widely used in the field of geopolymers. It is used for the production of complex shapes from a suspension poured into a mold. The suspension is made of raw materials in powder form, dispersed in a liquid which, in the case of geopolymers, is water.</p>

          <p>Slip casting is a meticulous technique employed in ceramics to produce intricate and precise forms. The process begins with a slip—a liquid mixture of clay and water, possessing a consistency similar to cream. The slip is poured into a plaster mold, and as the plaster absorbs water from the slip, a clay layer forms against the mold surface.</p>

          <p>To ensure a successful slip casting process, several crucial steps should be followed. First and foremost, the plaster mold must be meticulously prepared, ensuring it is free of imperfections that could affect the final product. Proper drying time is vital, allowing the clay to set and attain the desired thickness against the mold walls.</p>

          <p>Controlling the casting time is essential, as it influences the thickness of the final product. The removal of excess slip, known as "draining," demands precision. After draining, the slip must be allowed to set further to achieve the desired thickness for the finished ceramic piece.</p>

          <p>Attention to ambient conditions, including humidity and temperature, is crucial throughout the slip casting process. Proper drying and firing schedules are imperative for preventing defects and ensuring the final product's structural integrity.</p>

          <p>In essence, slip casting is an artful and meticulous process demanding attention to detail at every stage, from mold preparation to the final firing, resulting in intricately crafted ceramic pieces with precision and finesse.</p>

      `,
      routing: 'slip-casting',
    },
    {
      id: 26,
      mainHeader: "Sol Gel Route",
      titleHead: 'Sol-Gel Route with advanced Methods & process | VBCC Research',
      metaDesc: "Unlock the potential of advanced materials through the innovative Sol-Gel Route. Explore the Sol-Gel method and process for cutting-edge applications.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service26-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service26-sec-2.png',
      header: 'Material Preparation',
      heading: 'Sol Gel Route',
      description:
        'In materials science, the sol–gel process is a method for producing solid materials from small molecules.',
      industries: '₹ - Enquire for Estimate',
      para1: '',

      para2: `
          <p>The Sol-Gel process, a sophisticated wet chemical method, orchestrates the synthesis of diverse nanostructures, primarily focusing on metal oxide nanoparticles. This intricate dance of molecules involves dissolving a molecular precursor, typically a metal alkoxide, in water or alcohol. The subsequent transformation into a gel, achieved through controlled heating and stirring via hydrolysis/alcoholysis, sets the stage for crafting nano wonders.</p>

          <h3>Key Components (provided):</h3>
          <p>Chemicals for Sol-Gel Method:</p>
          <p>Tailored to the specific needs of the customer, these chemicals form the foundation for precision in nanostructure synthesis.</p>
          <p>Magnetic Stirrer cum Heater (2 Numbers):</p>
          <p>Essential tools in the Sol-Gel symphony, providing controlled agitation and heat for meticulous reactions.</p>
          <p>Hot Air Oven:</p>
          <p>A vital element in the process, the hot air oven plays a crucial role in facilitating the transformation of gels into functional nanostructures.</p>

          <h3>Versatility in Nano Material Synthesis:</h3>
          <p>Ceramic Nano Materials:</p>
          <p>Sol-Gel stands as the method of choice for preparing a wide array of ceramic nano materials. Its wet chemical route enables the synthesis of colloidal dispersions of oxides, paving the way for the creation of powders, fibers, thin films, and monoliths.</p>

          <h3>Crystallization and Beyond:</h3>
          <p>Gel Medium Transformation:</p>
          <p>The magic unfolds as crystals emerge from the gel medium. This transformation is orchestrated by inducing a state of super saturation through techniques like evaporation or cooling.</p>

          <h3>Applications:</h3>
          <p>Diverse Nanostructures:</p>
          <p>Sol-Gel's prowess extends to diverse nanostructures, with applications spanning powders, fibers, thin films, and monoliths. Its adaptability fuels advancements in materials science and nanotechnology.</p>

          <p>In the realm of nanostructure synthesis, the Sol-Gel Route emerges not just as a method but as a choreographed performance, delicately crafting the future of materials science. From tailored chemical compositions to controlled transformations, every step in the Sol-Gel dance contributes to the creation of nano wonders with real-world applications.</p>


      `,
      lists: [
        'Chemicals for Sol- Gel Method (As required by the customer)',
        'Magnetic Stirrer cum Heater - 2 Numbers',
        'Hot Air Oven',
      ],
      routing: 'sol-gel-route',
    },
    {
      id: 27,
      mainHeader: "Planetary Ball Milling Machine with Alumina Jar",
      titleHead: 'High-Quality Planetary Ball Mill with Alumina Jar | VBCC Research',
      metaDesc: "Elevate your processes with our advanced planetary ball milling machine, equipped with an alumina jar. Achieve exceptional outcomes in material refinement.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service27-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service27-sec-2.jpg',
      header: 'Material Preparation',
      heading: 'Planetary Ball Mill with Alumina Jar(500ml)',
      description:
        'Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Planetary Ball Mill is designed for mixing, fine grinding, and preparing small volume high-tech material production, which features with small volume, high efficiency, low noise.</p>

          <h3>Planetary Ball Mill with Alumina Jar:</h3>
          <p><h4>Overview:</h4> The Planetary Ball Mill with Alumina Jar stands as a sophisticated instrument designed for the meticulous mixing, fine grinding, and preparation of small volumes of high-tech materials. This cutting-edge equipment combines efficiency, compact design, and minimal noise, catering to the exacting demands of advanced ceramics and nanotechnology applications.</p>

          <h3>Key Features:</h3>
          <ul>
              <li><h4>Automatic Operation:</h4> The equipment operates seamlessly with automated functions, ensuring precision and ease of use.</li>
              <li><h4>Time Setting:</h4> Users can precisely control the milling duration with adjustable time settings, facilitating optimized results.</li>
              <li><h4>Variable Speed Adjustments:</h4> Variable speed adjustments provide flexibility to meet diverse milling requirements with efficiency.</li>
          </ul>

          <h3>Specifications:</h3>
          <ul>
              <li><h4>Vial Material:</h4> Crafted from high-quality alumina, the vial ensures compatibility with a range of materials and durability.</li>
              <li><h4>Vial Capacity:</h4> The 500 ml capacity allows for small-volume, yet efficient, material production.</li>
              <li><h4>Grinding Media:</h4> Alumina Balls (10 mm dia - 30 Nos) contribute to effective and uniform grinding.</li>
              <li><h4>Loading Capacity:</h4> With a loading capacity ranging from 5g to 100g (depending on material density), the mill accommodates varying sample sizes.</li>
              <li><h4>Material Loss:</h4> The minimal material loss of 2% ensures efficient utilization and reproducibility.</li>
          </ul>

          <h3>Use Cases:</h3>
          <ul>
              <li><h4>Nanomaterial Production:</h4> Ideal for nanotechnology applications, the mill achieves particle size reduction from Micron to Nano within a short timeframe.</li>
              <li><h4>Advanced Ceramics:</h4> Specifically tailored for advanced ceramics, the mill addresses the precision requirements of ceramic material preparation.</li>
              <li><h4>Laboratory Research:</h4> Widely used in laboratories, the Planetary Ball Mill facilitates diverse research endeavors with its versatile capabilities.</li>
          </ul>

          <p>The Planetary Ball Mill with Alumina Jar emerges as a reliable and advanced tool for laboratories and industries engaged in high-tech material production. Its features and capabilities position it as a cornerstone in the pursuit of precision and efficiency in materials processing.</p>


      `,

      para3: '',
      table1_th: 'Vial Material',
      table1_th2: 'Alumina',
      table1_td: 'Vial Capacity',
      table1_td2: '500 ml',
      table1_td3: 'Grinding Media',
      table1_td4: 'Alumina Balls (10 mm dia - 30 Nos)',
      table1_td5: 'Max. Loading Capacity',
      table1_td6: '100g (Depends upon Density of material)',
      table1_td7: 'Min. Loading Capacity',
      table1_td8: '5g',
      table1_td9: 'Material Loss',
      table1_td10: '2%',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Planetary Ball Mill with Alumina Jar',
      table2_td2: '100 gms max for 1 Hour',
      routing: 'planetary-ball-mill-with-alumina-jar-500ml',
    },
    {
      id: 28,
      mainHeader: "Jar Mill Dry/Wet Industrial Grinding Machine",
      titleHead: 'Jar Mill & Industrial Grinder for Dry/Wet Grinding | VBCC Research',
      metaDesc: "Elevate your grinding game with our jar mill - the epitome of excellence in dry/wet grinding. Discover the expertise of leading ball mill manufacturers in India.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service28-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service28-sec-2.jpg',
      header: 'Material Preparation',
      heading: 'Jar Mill (5 litre)',
      description:
        'Jar Mills are used for wet or dry grinding, mixing and blending for a wide variety of materials like ores, chemicals, paints, ceramics, glass, etc.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Jar Mills are used for wet or dry grinding, mixing, and blending for a wide variety of materials like ores, chemicals, paints, ceramics, glass, etc. Different size jars are available for different grinding conditions. A bench or floor model Jar Mills from Gilson have capacities from one to six jars.</p>

          <h3>Overview:</h3>
          <p>Jar Mills stand as versatile workhorses in laboratories and industrial settings, facilitating both wet and dry grinding, mixing, and blending of diverse materials. From ores and chemicals to paints, ceramics, and glass, Jar Mills from Gilson offer a flexible solution for materials processing.</p>

          <h3>Key Features:</h3>
          <ul>
              <li><h4>Automatic Operation: The Jar Mill operates seamlessly with automatic functions, streamlining the grinding and mixing processes.</h4></li>
              <li><h4>Time Setting: Users can precisely control the duration of operations with adjustable time settings, ensuring optimal results.</h4></li>
              <li><h4>Variable Speed Adjustments: The flexibility of variable speed adjustments accommodates different grinding conditions, providing adaptability for various materials.</h4></li>
          </ul>

          <h3>Specifications:</h3>
          <ul>
              <li><h4>Jar Material: Crafted from durable stainless steel, the jars ensure longevity and resistance to corrosion.</h4></li>
              <li><h4>Grinding Media: High Purity alumina grinding media enhances the efficiency of the grinding and mixing processes.</h4></li>
              <li><h4>Jar Capacity: With a substantial 5-liter capacity, the Jar Mill accommodates sizable quantities for efficient batch processing.</h4></li>
          </ul>

          <h3>Use Cases:</h3>
          <ul>
              <li><h4>Laboratory Applications: Ideal for laboratories, Jar Mills are employed in research and experimentation across diverse fields.</h4></li>
              <li><h4>Industrial Grinding: In industrial settings, Jar Mills find applications in large-scale grinding, mixing, and blending operations.</h4></li>
              <li><h4>Materials Processing: From ores to ceramics, the Jar Mill caters to the processing needs of a broad spectrum of materials.</h4></li>
          </ul>

          <h3>Versatility in Grinding:</h3>
          <p>Jar Mills, available in bench or floor models, offer versatility with capacities ranging from one to six jars. This adaptability makes them indispensable for laboratories exploring varied materials and industrial operations requiring efficient materials processing. Whether wet or dry grinding, Jar Mills deliver consistent and reliable results across a spectrum of applications.</p>


      `,
      table1_th: 'Jar material',
      table1_th2: 'Stainless steel',
      table1_td: 'Grinding Media',
      table1_td2: 'High Purity alumina',
      table1_td3: 'Jar capacity',
      table1_td4: '5 liter',
      routing: 'jar-mill',
    },
    {
      id: 29,
      mainHeader: "Glove Box",
      titleHead: 'Top-Quality Glove Box Container | VBCC Research',
      metaDesc: "Discover top-quality glove box containers for your lab needs. Find the perfect glove box and containers designed for efficiency and durability.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/glovebox.webp',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service29-sec-2.jpg',
      header: 'Material Preparation',
      heading: 'Glove Box',
      description:
        'A glovebox is a sealed container that is designed to allow one to manipulate objects where a separate atmosphere is desired.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>A Glove Box, or glovebox, stands as a sealed container designed for manipulating objects in controlled environments, safeguarding workers during the handling of hazardous materials or substances requiring a specific atmosphere. Various types, including inflatable glove bags, basic glove boxes, controlled atmosphere glove boxes, and those designed for biohazard or multi-hazard situations, cater to diverse applications.</p>

          <h3>Use Cases:</h3>
          <ul>
              <li><h4>Chemical Synthesis: Inert atmosphere glove boxes find extensive use in chemical synthesis processes, ensuring a controlled environment for precise reactions.</h4></li>
              <li><h4>Organic Electronics: Glove boxes contribute to the development and manipulation of materials in organic electronics, where a controlled atmosphere is crucial for optimal performance.</h4></li>
              <li><h4>Additive Manufacturing: Applications in additive manufacturing benefit from glove boxes, preventing contamination and maintaining the purity of materials.</h4></li>
              <li><h4>Battery Technology Development: The controlled environment provided by glove boxes proves essential in the research and development of advanced battery technologies.</h4></li>
              <li><h4>Materials Handling and Storage: Glove boxes facilitate the safe handling and storage of sensitive materials, shielding them from external contaminants.</h4></li>
              <li><h4>Perovskite Electronics: Precise control of atmospheric conditions within glove boxes is vital for the delicate processes involved in perovskite electronics.</h4></li>
          </ul>

          <h3>Benefits:</h3>
          <ul>
              <li><h4>Worker Safety: Protects workers from exposure to hazardous materials, ensuring a secure environment for intricate tasks.</h4></li>
              <li><h4>Contamination Prevention: Safeguards materials and processes from external contaminants, maintaining the integrity of sensitive substances.</h4></li>
              <li><h4>Controlled Atmosphere: Provides a precisely regulated environment, crucial for applications where atmospheric conditions significantly impact outcomes.</h4></li>
              <li><h4>Versatility: Various glove box types cater to specific needs, offering versatility for different industries and applications.</h4></li>
              <li><h4>Moisture and Oxygen Exclusion: Mitigates the risk of compromised atmospheres by minimizing physical leaks and preventing ingression of moisture and oxygen.</h4></li>
          </ul>

          <p>In conclusion, Glove Boxes play a pivotal role in ensuring safety, precision, and controlled environments across a spectrum of industries, making them indispensable for processes ranging from chemical synthesis to advanced electronics and materials research.</p>
      `,
      para3: '',
      routing: 'glove-box',
    },
    {
      id: 30,
      mainHeader: "Planetary Ball Mill Machine with Porcelain Jar ",
      titleHead: 'Planetary Ball Mill with Porcelain Jar Machine | VBCC Research',
      metaDesc: "Discover precision in every grind with our Planetary Ball Mill, featuring a porcelain jar for superior performance. Explore the excellence.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service30-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service30-sec-2.jpg',
      header: 'Material Preparation',
      heading: 'Planetary Ball Mill with Porcelain Jar(500ml)',
      description:
        'Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
    <p>Planetary Ball Mill is designed for mixing, fine grinding, and preparing small volume high-tech material production, which features with small volume, high efficiency, low noise.</p>

    <h3>Planetary Ball Mill with Porcelain Jar (500ml):</h3>

    <h3>Overview:</h3>
    <p>The VBCC Planetary Ball Mill, equipped with a Porcelain Jar, stands as a versatile instrument essential for the milling and mixing of various materials, specifically tailored for Traditional Ceramics applications. This state-of-the-art equipment is designed to reduce particle sizes from millimeters (10-3mm) to micron dimensions (10-6µm) with utmost precision.</p>

    <h3>Key Features:</h3>
    <ul>
        <li><h4>Automatic Operation: The equipment operates in a fully automatic mode, ensuring user-friendly and efficient performance.</h4></li>
        <li><h4>Time Setting: Users benefit from precise control over the milling duration, enhancing reproducibility and customization.</h4></li>
        <li><h4>Variable Speed Adjustments: Variable speed adjustments provide flexibility, accommodating diverse milling requirements with optimal efficiency.</h4></li>
    </ul>

    <h3>Specifications:</h3>
    <ul>
        <li><h4>Vial Material: Crafted from high-quality Porcelain, the vial ensures compatibility with Traditional Ceramics and durability.</h4></li>
        <li><h4>Vial Capacity: The 500 ml capacity supports efficient processing of medium-sized batches.</h4></li>
        <li><h4>Grinding Media: Options of Alumina and Steatite grinding media in 10mm and 20mm diameters offer versatility for different materials.</h4></li>
        <li><h4>Loading Capacity: With a loading capacity ranging from 50g to 300g (depending on material density), the mill caters to varying sample sizes.</h4></li>
    </ul>

    <h3>Use Cases:</h3>
    <ul>
        <li><h4>Traditional Ceramics: Tailored for Traditional Ceramics, the mill excels in applications such as casting, providing precision in material preparation.</h4></li>
        <li><h4>Particle Size Reduction: Efficiently reduces particle sizes from millimeters to microns, catering to a broad range of milling needs.</h4></li>
        <li><h4>Laboratory and Industrial Applications: Suitable for both laboratory research and industrial applications, offering versatility in material processing.</h4></li>
    </ul>

    <p>The Planetary Ball Mill with Porcelain Jar emerges as a reliable and advanced tool for applications in Traditional Ceramics. Its automatic operation, variable speed adjustments, and robust design make it a valuable asset for achieving precision and efficiency in materials processing.</p>
      `,
      table1_th: 'Vial Material',
      table1_th2: 'Porcelain Jar',
      table1_td: 'Vial Capacity',
      table1_td2: '500 ml',
      table1_td3: 'Grinding Media',
      table1_td4: 'Alumina / Steatite',
      table1_td5: 'Grinding Media Size',
      table1_td6: '10mm & 20mm dia',
      table1_td7: 'Max. Loading Capacity',
      table1_td8: '300g (Depends upon Density of material)',
      table1_td9: 'Min. Loading Capacity',
      table1_td10: '50g',
      routing: 'planetary-ball-mill-with-porcelain-jar-500ml',
    },
    {
      id: 31,
      mainHeader: "Evaluating Physical Material Properties",
      titleHead: 'Evaluating Physical Material Properties | VBCC Research',
      metaDesc: "Uncover the key factors in evaluating physical material properties. Enhance your understanding and optimize material performance effortlessly.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service31-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service31-sec-2.png',
      header: 'Physical properties',
      heading: 'Bulk Density, Porosity, Water Absorption, Fired Shrinkage',
      description:
        'Finding Bulk Density, Porosity, Water Absorption, Fired Shrinkage',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
    <h3>Evaluating Material Properties</h3>

    <h3>Bulk Density:</h3>
    <p>Calculation: Determined by measuring the volume of 100 g of powder after compaction.</p>
    <p>Bulk Density = Sintered Weight / (Soaked Wt - Suspended Wt) g/cc.</p>
    <p>Significance: Indicates the mass of a material per unit volume. Essential for understanding the compactness of powders and sintered materials.</p>

    <br>

    <h3>Porosity:</h3>
    <p>Calculation: Measured as a fraction of void spaces over the total volume or as a percentage.</p>
    <p>Porosity = (Soaked Wt - Sintered Wt) / (Soaked Wt - Suspended Wt) x 100%.</p>
    <p>Significance: Reflects the void fraction in a material. Crucial for assessing the material's structure and potential applications.</p>

    <br>

    <h3>Water Absorption:</h3>
    <p>Calculation: Defined as the ratio of water absorbed to the weight of the dry material.</p>
    <p>Water Absorption = (Soaked Wt - Sintered Wt) / Sintered Weight x 100%.</p>
    <p>Significance: Measures a material's capacity to absorb water. Essential for understanding material behavior in various environments.</p>

    <br>

    <h3>Fired Shrinkage:</h3>
    <p>Calculation: Comparative indicator of the degree of vitrification during firing.</p>
    <p>Fired Shrinkage = (Dia of After Drying - Dia of After Firing) / Dia of After Drying.</p>
    <p>Significance: Reflects the extent of shrinkage during the firing process. Crucial for controlling the dimensional changes in ceramics.</p>

    <br>

    <h3>Use Cases:</h3>
    <p>Quality Control: Essential metrics for quality control in ceramics and refractory production.</p>
    <p>Material Characterization: Provides insights into the physical properties of sintered materials.</p>
    <p>Process Optimization: Enables optimization of firing processes for desired shrinkage and properties.</p>

    <br>

    <h3>Benefits:</h3>
    <p>Quality Assurance: Ensures consistency and quality in material production.</p>
    <p>Process Efficiency: Guides process adjustments for optimal results.</p>
    <p>Material Performance: Aids in predicting material behavior in various conditions.</p>

    <br>

    <p>Understanding bulk density, porosity, water absorption, and fired shrinkage is fundamental for ensuring the quality, performance, and application-specific suitability of materials, particularly in the ceramics and refractory industries.</p>
      `,
      para3: '',
      para4: '',
      routing: 'bulk-density-porosity-water-absorption-fired-shrinkage',
    },
    {
      id: 32,
      mainHeader: "Particle Size Distribution Equipment",
      titleHead: 'Particle Size Distribution Equipment for Precise Analysis | VBCC Research',
      metaDesc: "Unlock Precision with Particle Size Distribution Equipment. Optimize processes, ensure quality, and predict performance across industries.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service32-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service32-sec-2.png',
      header: 'Physical properties',
      heading: 'Particle Size Distribution',
      description:
        'A particle size distribution indicates the percentage of particles of a certain size (or in a certain size interval). These intervals are also called size classes or fractions.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
    <h3>Definition:</h3>
    <p>Particle size distribution denotes the percentage of particles within specified size intervals in a material.</p>

    <h3>Methods:</h3>
    <p><h4>Laser Light Scattering:</h4></p>
    <p>Utilized for nano particles, measuring sizes from 0.3 nm up to 5 mm.</p>
    <p>Suitable for a wide range of particle sizes, including those up to 30 mm.</p>

    <br>

    <h3>How It Works:</h3>
    <p><h4>Granulometry:</h4></p>
    <p>Involves determining the relative amount of particles based on size, often expressed as a mathematical function or values.</p>
    <p>Laser light scattering measures particle sizes by analyzing light scattering patterns.</p>

    <br>

    <h3>Use Cases:</h3>
    <p><h4>Quality Control:</h4> Crucial in industries to ensure product consistency and quality.</p>
    <p><h4>Pharmaceuticals:</h4> Particle size influences drug delivery and bioavailability.</p>
    <p><h4>Chemical Processes:</h4> Affects reaction rates, surface area, and material properties.</p>
    <p><h4>Nanotechnology:</h4> Essential for controlling nanomaterial properties and behaviors.</p>

    <br>

    <h3>Benefits:</h3>
    <p><h4>Optimized Processes:</h4> Guides adjustments in manufacturing processes for desired particle characteristics.</p>
    <p><h4>Product Quality:</h4> Ensures uniformity and quality in the final product.</p>
    <p><h4>Performance Prediction:</h4> Helps predict material behavior in various applications.</p>
    <p><h4>Research and Development:</h4> Informs material design and development strategies.</p>

    <br>

    <p>Particle size distribution analysis is a fundamental tool across industries, offering insights into material properties crucial for product quality, performance, and the success of various processes. Whether in pharmaceuticals, chemicals, or nanotechnology, understanding and controlling particle size is central to achieving desired outcomes.</p>

      `,
      routing: 'particle-size-distribution',
    },
    {
      id: 33,
      mainHeader: "Cold Crushing Strength Machine (CSS)",
      titleHead: 'Enhance Quality with Cold Crushing Strength Machine | VBCC Research',
      metaDesc: "Improve your product quality effortlessly with our Cold Crushing Strength machine. Enhance durability and reliability for superior results.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service33-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service33-sec-2.jpg',
      header: 'Physical properties',
      heading: 'Cold Crushing Strength (CSS)',
      description:
        'The Cold Crushing Strength (CCS) represents the ability of a product to resist failure under compressive load at room temperature.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
    <p>Cold Crushing Strength (CCS) is a compressive test measuring a material's ability to withstand a given load, usually assessed at room temperature after firing to specific temperatures.</p>

    <h3>Measurement Standards:</h3>
    <p>Measured by ASTM C133.</p>
    <p>Provides an indication of abrasion resistance.</p>

    <h3>Importance in Refractories:</h3>
    <ul>
        <li><h4>Particle Distribution and Packing:</h4></li>
        <ul>
            <li>Essential for developing good CCS.</li>
        </ul>
        <li>Relevance to Refractory Performance:</li>
        <ul>
            <li>Indirectly linked, serves as an indicator of abrasion resistance.</li>
            <li>High CCS correlates with higher resistance to slag attack.</li>
        </ul>
    </ul>

    <h3>Use Cases:</h3>
    <ul>
        <li><h4>Quality Assessment:</h4></li>
        <ul>
            <li>Determines the strength of refractory materials.</li>
        </ul>
        <li><h4>Material Selection:</h4></li>
        <ul>
            <li>Influences choices in refractory linings based on anticipated mechanical stresses.</li>
        </ul>
        <li><h4>Insulating Bricks:</h4></li>
        <ul>
            <li>Critical for porous yet h4 refractory insulating bricks.</li>
        </ul>
    </ul>

    <h3>How It Works:</h3>
    <p>Compressive Test:</p>
    <ul>
        <li>Subjects a specimen to a compressive force to assess its strength.</li>
        <li>Typically measured at room temperature post-firing.</li>
    </ul>

    <h3>Benefits:</h3>
    <ul>
        <li><h4>Abrasion Resistance:</h4></li>
        <ul>
            <li>Higher CCS indicates greater resistance to abrasion.</li>
        </ul>
        <li><h4>Performance Prediction:</h4></li>
        <ul>
            <li>Provides insights into the ability of refractories to withstand mechanical stresses.</li>
        </ul>
        <li><h4>Material Development:</h4></li>
        <ul>
            <li>Guides the development of refractory materials with desired strength characteristics.</li>
        </ul>
    </ul>

    <p>Cold Crushing Strength is a pivotal parameter in refractory assessments, influencing material selection, quality evaluation, and performance predictions. Its application spans various industries where refractory materials play a crucial role in withstanding mechanical stresses and environmental conditions.</p>
         `,
      routing: 'cold-crushing-strength-css',
    },
    {
      id: 34,
      mainHeader: "Cold Crushing Strength Machine (CSS)",
      titleHead: 'Enhance Durability with High-Impact Resistance Solutions | VBCC Research',
      metaDesc: "Improve your product quality effortlessly with our Cold Crushing Strength machine. Enhance durability and reliability for superior results.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service34-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service34-sec-2.jpg',
      header: 'Physical properties',
      heading: 'Impact Resistance',
      description:
        "Impact resistance (or impact strength) describes a material's or a product's ability to absorb shock or impact energy without breaking.",
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
    <p>Impact resistance, or impact strength, refers to a material's or product's capability to absorb shock or impact energy without undergoing fracture or breakage.</p>

    <h3>Characteristics:</h3>
    <ul>
        <li><h4>Shock Absorption:</h4></li>
        <ul>
            <li>Ability to absorb and dissipate energy from sudden impacts.</li>
        </ul>
        <li><h4>Material Integrity:</h4></li>
        <ul>
            <li>Maintains structural integrity when subjected to impact forces.</li>
        </ul>
        <li><h4>Notched Specimen Test:</h4></li>
        <ul>
            <li>Involves striking a notched or V-notch specimen with a pendulum hammer.</li>
            <li>Measures energy absorbed during fracture.</li>
        </ul>
    </ul>

    <h3>Use Cases:</h3>
    <ul>
        <li><h4>Consumer Products:</h4></li>
        <ul>
            <li>Mobile devices, protective cases, and eyewear.</li>
        </ul>
        <li><h4>Automotive Components:</h4></li>
        <ul>
            <li>Bumpers, safety features, and body panels.</li>
        </ul>
        <li><h4>Construction Materials:</h4></li>
        <ul>
            <li>Building components and impact-resistant glass.</li>
        </ul>
        <li><h4>Sporting Equipment:</h4></li>
        <ul>
            <li>Helmets, pads, and sports gear.</li>
        </ul>
    </ul>

    <h3>How It Works:</h3>
    <ul>
        <li><h4>Notched Specimen Test:</h4></li>
        <ul>
            <li>Utilizes a pendulum hammer to strike a notched or V-notch specimen.</li>
            <li>Measures the energy absorbed by the material during fracture.</li>
            <li>Indicates the material's ability to resist breakage under impact.</li>
        </ul>
    </ul>

    <h3>Benefits:</h3>
    <ul>
        <li><h4>Durability Enhancement:</h4></li>
        <ul>
            <li>Increases the ability of materials to withstand sudden forces.</li>
        </ul>
        <li><h4>Safety Assurance:</h4></li>
        <ul>
            <li>Crucial for products designed to protect users from impacts.</li>
        </ul>
        <li><h4>Product Longevity:</h4></li>
        <ul>
            <li>Reduces the risk of damage and breakage during use.</li>
        </ul>
        <li><h4>Optimized Designs:</h4></li>
        <ul>
            <li>Enables the design of components for specific impact or shock loads.</li>
        </ul>
    </ul>

    <p>Impact resistance is a pivotal property ensuring materials and products can endure sudden forces without compromising their integrity. Testing methodologies, such as the notched specimen test, provide valuable insights into a material's ability to absorb impact energy, guiding the design of durable and resilient products across diverse industries.</p>
         `,
      para3: '',
      routing: 'impact-resistance',
    },
    {
      id: 35,
      mainHeader: " Abrasion Resistance Testing Equipment ",
      titleHead: 'High-Performance Abrasion Resistance Testing Equipment | VBCC Research',
      metaDesc: "Unlock the potential of precision testing with our high-performance abrasion resistance testing equipment. Ensure accuracy & reliability in every evaluation process.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service35-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service35-sec-2.gif',
      header: 'Physical properties',
      heading: 'Abrasion Resistance',
      description:
        'Abrasion resistance refers to the ability of materials and structures to withstand abrasion.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
    <p>Abrasion resistance is the capacity of materials and structures to endure wear and tear caused by friction, preventing deterioration and maintaining their original structure.</p>

    <h3>Characteristics:</h3>
    <ul>
        <li><h4>Mechanical Wear:</h4></li>
        <ul>
            <li>Resistance to wearing down or rubbing away through friction.</li>
        </ul>
        <li><h4>Hardness:</h4></li>
        <ul>
            <li>The harder the material, the higher its resistance to abrasion.</li>
        </ul>
        <li><h4>Abrasion Test:</h4></li>
        <ul>
            <li>Measures material loss using abrasive paper over a specified time.</li>
        </ul>
    </ul>

    <h3>Use Cases:</h3>
    <ul>
        <li><h4>Industrial Machinery:</h4></li>
        <ul>
            <li>Components exposed to continuous friction.</li>
        </ul>
        <li><h4>Automotive Applications:</h4></li>
        <ul>
            <li>Tires, brake systems, and other parts.</li>
        </ul>
        <li><h4>Construction Materials:</h4></li>
        <ul>
            <li>Flooring, concrete surfaces, and coatings.</li>
        </ul>
        <li><h4>Mining Equipment:</h4></li>
        <ul>
            <li>Tools, conveyor belts, and drilling components.</li>
        </ul>
    </ul>

    <h3>How It Works:</h3>
    <ul>
        <li><h4>Abrasion Test:</h4></li>
        <ul>
            <li>Employs abrasive paper to simulate frictional wear.</li>
            <li>Measures material loss over a defined period.</li>
            <li>Indicates the material's ability to maintain integrity under abrasive conditions.</li>
        </ul>
    </ul>

    <h3>Benefits:</h3>
    <ul>
        <li><h4>Material Longevity:</h4></li>
        <ul>
            <li>Enhances the lifespan of materials exposed to abrasive forces.</li>
        </ul>
        <li><h4>Cost Savings:</h4></li>
        <ul>
            <li>Reduces the frequency of replacements and maintenance.</li>
        </ul>
        <li><h4>Performance Assurance:</h4></li>
        <ul>
            <li>Ensures materials can withstand mechanical wear in diverse applications.</li>
        </ul>
        <li><h4>Quality Assessment:</h4></li>
        <ul>
            <li>Key parameter in material selection for specific use cases.</li>
        </ul>
    </ul>

    <p>Abrasion resistance is a critical property ensuring the durability and longevity of materials in various applications. Its measurement through abrasion tests provides valuable insights into a material's ability to withstand mechanical wear, aiding in material selection, quality assessment, and overall performance assurance.</p>
        `,
      routing: 'abrasion-resistance',
    },
    {
      id: 36,
      mainHeader: "Creep Resistance",
      titleHead: 'Advanced Creep Resistance Solutions | VBCC Research',
      metaDesc: "Discover material stability with our Advanced Creep Resistance Solutions. Precise digital measurements unveil long-term performance insights under extreme conditions.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service36-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service36-sec-2.jpg',
      header: 'Thermal Testing',
      heading: 'Creep Resistance',
      description:
        'The ability of the material to resist any kind of distortion when subjected to prolonged compressive load over an extended period of time.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Creep resistance is a material property that gauges its ability to withstand deformation when exposed to sustained compressive loads and elevated temperatures over an extended duration. This phenomenon commonly occurs in materials under mechanical stress at high operating conditions.</p>

          <h3>How It Works:</h3>
          <h4>Digital Shrinkage Measurement:</h4>
          <p>The equipment utilizes a high-resolution linear variable differential transformer (LVDT) measuring system (1-micrometer precision) for digitally measuring the percentage of shrinkage in a test piece under a constant load and elevated temperature.</p>
          <h4>Computer Integration:</h4>
          <p>LVDT values are transmitted to a computer through a dedicated cable, and Labview software is employed for real-time plotting of an online graph illustrating the relationship between temperature and the percentage of total expansion.</p>

          <h3>Use Cases:</h3>
          <h4>Refractory Testing:</h4>
          <p>Creep in compression is particularly measured to assess the shrinkage of refractory materials under constant loads and high temperatures.</p>

          <h3>Key Features:</h3>
          <h4>High-Temperature Capability:</h4>
          <p>The equipment is designed to operate at a maximum temperature of 1600°C, simulating harsh operating conditions.</p>
          <p>Sample Size Standardization:</p>
          <p>Standardized sample sizes with an outer diameter (OD) of 50mm and a length of 50mm ensure consistency in testing.</p>

          <h3>Benefits:</h3>
          <h4>Material Stability Assessment:</h4>
          <p>Enables the assessment of a material's stability and resistance to deformation under prolonged compressive loads and elevated temperatures.</p>
          <h4>Digital Precision:</h4>
          <p>The LVDT measuring system ensures high precision (1 micrometer), providing accurate and reliable measurements of material shrinkage.</p>
          <h4>Long-Term Performance Prediction:</h4>
          <p>Facilitates insights into a material's long-term performance, aiding in predicting its behavior under sustained mechanical stress.</p>

          <p>Creep resistance testing, as performed by the CREEP equipment, holds significance in material engineering for evaluating materials used in high-stress, high-temperature applications. Its ability to simulate and assess long-term stability contributes to the understanding and improvement of materials for various industries, including those involving refractory materials.</p>
      `,
      table1_th: 'Maximum Temperature',
      table1_th2: '1700°C',
      table1_td: 'Sample Size',
      table1_td2: 'OD: 50 mm, Length: 50 mm',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'CREEP up to 1600°C',
      table2_td2: '24 Hours',
      routing: 'creep-resistance',
    },
    {
      id: 37,
      mainHeader: "Hot Modulus of Rupture Machine (HMOR)",
      titleHead: 'Precision Hot Modulus of Rupture Machines | VBCC Research',
      metaDesc: "Elevate your testing precision with our hot modulus of rupture machines. Achieve superior results in materials analysis and quality assurance.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service37-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service37-sec-2.jpg',
      header: 'Thermal Testing',
      heading: 'Hot Modulus Of Rupture (HMOR)',
      description:
        "It is the material's ability to resist deformation under load with Constant Temperature.",
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Hot Modulus Of Rupture (HMOR), also referred to as hot bend strength or fracture strength at a specific temperature, is a crucial mechanical parameter used to evaluate the ability of brittle materials to resist deformation under a constant load at elevated temperatures. This parameter holds significant importance in the characterization of refractory materials.</p>

          <h3>How It Works:</h3>
          <h4>High-Temperature Load Test:</h4>
          <p>The equipment performs a high-temperature load test to determine the material's ability to withstand deformation under load at a constant temperature.</p>
          <h4>Maximum Temperature Capability:</h4>
          <p>The HMOR equipment is designed to operate at extreme temperatures, with a maximum capability of 1700°C.</p>

          <h3>Use Cases:</h3>
          <h4>Quality Control in Refractory Materials:</h4>
          <p>HMOR is employed to assess the maximum load at high temperatures, providing essential data for quality control in the production and development of furnace linings.</p>

          <h3>Key Features:</h3>
          <h4>Sample Standardization:</h4>
          <p>Standardized sample sizes of 25mm x 25mm x 150mm ensure consistency in testing, allowing for accurate comparisons.</p>
          <h4>High-Temperature Assessment:</h4>
          <p>Capable of evaluating material strength under extreme conditions, making it particularly suitable for refractory materials used in high-temperature environments.</p>

          <h3>Benefits:</h3>
          <h4>Quality Assurance:</h4>
          <p>HMOR testing serves as a reliable parameter for quality assurance, ensuring that refractory materials can withstand the demanding conditions of furnace linings.</p>
          <h4>Performance Prediction:</h4>
          <p>Provides insights into material performance at elevated temperatures, aiding in predicting its behavior in real-world applications.</p>

          <p>HMOR testing is a critical aspect of material engineering, especially for materials used in industries where high temperatures and mechanical stress are prevalent. The ability to evaluate rupture strength under extreme heat contributes to the development of robust and reliable materials for applications in furnace linings and other high-temperature environments.</p>
      `,
      para3: '',
      table1_th: 'Maximum Temperature',
      table1_th2: '1700°C',
      table1_td: 'Sample Size',
      table1_td2: '25 mm X25 mm x 150 mm',
      table1_td3: 'Available Space',
      table1_td4: '≈ 200 x 200 x 300 mm',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'HMOR up to 1700°C',
      table2_td2: '4 Hours for 5 Samples',
      routing: 'hot-modulus-of-rupture-hmor',
    },
    {
      id: 38,
      mainHeader: "Thermal Conductivity Measurement Equipment ",
      titleHead: 'Thermal Conductivity Measurement Equipment | VBCC Research',
      metaDesc: "Unlock Material Potential with Precision: Explore our Thermal Conductivity Measurement Equipment. The key to accuracy.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service38-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service38-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Thermal Conductivity',
      description:
        'It refers to the ability of a given material to conduct or transfer heat.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Thermal conductivity (k, λ, or κ) is a crucial metric defining a material's ability to conduct heat. It plays a pivotal role in determining the rate of heat transfer, with lower thermal conductivity indicating slower heat transfer and vice versa.</p>

          <h3>How It Works:</h3>
          <h4>Temperature-Dependent Assessment:</h4>
          <p>The equipment evaluates thermal conductivity values from room temperature up to 1400°C or the maximum service limit of the refractory material.</p>
          <h4>Material Characterization:</h4>
          <p>Conducts tests on non-carbonaceous dielectric refractories to assess their thermal conductivity under varying temperature conditions.</p>

          <h3>Use Cases:</h3>
          <h4>Refractory Material Optimization:</h4>
          <p>Essential for optimizing the composition of refractory materials, ensuring they meet thermal performance requirements in high-temperature applications.</p>

          <h4>Key Features:</h4>
          <h4>Wide Temperature Range:</h4>
          <p>Capable of determining thermal conductivity across a broad temperature spectrum, allowing for comprehensive material characterization.</p>
          <h4>Dielectric Refractories Testing:</h4>
          <p>Specifically designed for non-carbonaceous dielectric refractories, providing insights into their thermal behavior.</p>

          <h3>Benefits:</h3>
          <h4>Performance Prediction:</h4>
          <p>Enables the prediction of material performance in real-world applications by understanding how it conducts heat at various temperatures.</p>
          <h4>Material Selection Criteria:</h4>
          <p>Aids in material selection for applications with specific temperature requirements, ensuring optimal thermal performance.</p>

          <p>Understanding thermal conductivity is fundamental in material engineering, particularly for substances used in high-temperature environments. This knowledge empowers engineers to design and select materials with tailored thermal properties, crucial for applications ranging from refractory linings in industrial furnaces to components in aerospace engineering. The ability to measure and control thermal conductivity enhances the efficiency and reliability of materials under diverse temperature conditions.</p>


      `,
      para3: '',
      para4: '',
      table1_th: 'Maximum Temperature',
      table1_th2: '1400°C',
      table1_td: 'Sample Size',
      table1_td2: '225 mm X 115 mm x 75 mm',
      table2_th: 'Equipment',
      table2_th2: 'Quantity / Time',
      table2_td: 'Thermal Conductivity for Refractory Bricks up to 1400°C',
      table2_td2: '4 Hours, 6 Hours',
      routing: 'thermal-conductivity',
    },
    {
      id: 39,
      mainHeader: "Permanent Linear Change of Refractory (PLC)",
      titleHead: 'Stability with Permanent Linear Change of Refractory | VBCC Research',
      metaDesc: "Enhance your operations with refractory materials designed for permanence. Explore the benefits of permanent linear change for long-lasting performance.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service39-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service39-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Permanent Linear Change (PLC)',
      description:
        'It is a factor used to judge the suitability of refractories in ranges of temperature limits.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Permanent Linear Change (PLC) serves as a crucial factor for assessing the suitability of refractory materials under diverse temperature conditions. It gauges the permanent alteration in dimensions that refractories may undergo due to processes like mineral formation, phase transformation, or shrinkage when exposed to heat.</p>

          <h3>How It Works:</h3>
          <h4>Experimental Measurement:</h4>
          <p>Refractories are heated to predetermined temperatures, held for specific durations, and then cooled to room temperature.</p>
          <p>The measuring temperature and time align with technical standards tailored to each product.</p>

          <h3>Use Cases:</h3>
          <h4>Temperature Suitability Assessment:</h4>
          <p>PLC is utilized to determine how refractory materials respond to temperature variations, ensuring they meet the requirements of specific applications.</p>

          <h3>Benefits:</h3>
          <h4>Performance Prediction:</h4>
          <p>Allows for predicting how refractories will change dimensionally under various temperature scenarios, aiding in material selection for specific operational conditions.</p>
          <h4>Quality Control:</h4>
          <p>Forms an integral part of quality control processes, ensuring that refractory products adhere to specified standards and exhibit desired thermal stability.</p>

          <p>Permanent Linear Change is a critical parameter in the material engineering of refractories, providing insights into their behavior when exposed to elevated temperatures. Understanding and controlling PLC contribute to the reliable performance of refractory materials in applications such as industrial furnaces, kilns, and other high-temperature environments.</p>


      `,
      routing: 'permanent-linear-change-plc',
    },
    {
      id: 40,
      mainHeader: "Refractoriness Under Load:",
      titleHead: 'Enhance Performance with High Refractoriness Under Load | VBCC Research',
      metaDesc: "Unlock superior heat resistance with Refractoriness Under Load (RUL) solutions. Assess, evaluate, and ensure structural integrity for high-temperature applications.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service40-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service40-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Refractory Under Load (RUL)',
      description:
        'It is a measure of the deformation behaviour of refractory ceramic products exposed to a constant load and increasing temperature.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Refractoriness Under Load (RUL) is a critical measure defined by ISO 1893, evaluating the deformation behavior of refractory ceramic products under a constant load with increasing temperature. It provides insights into the product's ability to withstand high temperatures without significant deformation.</p>

          <h3>How It Works:</h3>
          <h4>Constant Load and Temperature Increase:</h4>
          <p>Refractory samples are subjected to a constant load.</p>
          <p>The temperature is systematically increased to observe the onset of softening and deformation.</p>

          <h3>Use Cases:</h3>
          <h4>High-Temperature Applications:</h4>
          <p>RUL is employed to assess refractory products' suitability for applications exposed to elevated temperatures.</p>
          <p>Commonly used in industries such as metallurgy, cement, and glass manufacturing.</p>

          <h3>Benefits:</h3>
          <h4>Performance Evaluation:</h4>
          <p>RUL aids in understanding how refractory materials respond to high temperatures under load, ensuring they maintain structural integrity.</p>
          <h4>Quality Assurance:</h4>
          <p>Integral to quality control processes, RUL testing verifies that refractory products meet specified standards for high-temperature applications.</p>

          <p>Refractoriness Under Load is a crucial parameter in the selection and development of refractory materials for industries where exposure to high temperatures is common. The ability to withstand load while maintaining stability is vital for the reliable and safe operation of industrial processes involving intense heat.</p>
      `,
      routing: 'refractory-under-load-rul',
    },
    {
      id: 41,
      mainHeader: "Pyrometric Cone Equivalent  (PCE)",
      titleHead: 'Pyrometric Cone Equivalent for Temperature Measurement | VBCC Research',
      metaDesc: "Discover the significance of Pyrometric Cone Equivalent in achieving optimal heat-work and temperature. Ideal for industrial and hobbyist kilns.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service41-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service41-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Pyrometric Cone Equivalent (PCE)',
      description:
        'They are used to determine the Cone equivalent of an unknown raw material by placing several different PCE cones alongside an unknown raw material (that has been pressed into the same shape as a cone).',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>PCE, or Pyrometric Cone Equivalent, is a crucial metric in the ceramics industry, providing insights into the firing process by determining the cone equivalent of raw materials. This method involves placing various PCE cones alongside an unknown material, allowing for the assessment of heat-work, time, and temperature.</p>

          <h3>How It Works:</h3>
          <h4>Comparative Analysis:</h4>
          <p>Involves placing PCE cones alongside an unknown raw material pressed into a cone shape.</p>
          <p>The cones deform based on the heat-work, time, and temperature, providing a comparative analysis.</p>
          <h4>Indication of Firing Conditions:</h4>
          <p>The deformation of cones indicates the firing conditions and whether the desired heat-work has been achieved.</p>

          <h3>Use Cases:</h3>
          <h4>Industrial Kilns:</h4>
          <p>Widely used in industrial kilns for consistent monitoring of ceramic firings.</p>
          <p>Ensures that the firing conditions meet the required standards for quality production.</p>
          <h4>Pottery Kilns:</h4>
          <p>Essential in pottery kilns to achieve the desired properties in the fired clay.</p>
          <p>Enables potters to maintain control over the firing process for optimal results.</p>
          <h4>Quality Assurance:</h4>
          <p>Used in small hobby kilns for quality assurance in artisanal ceramic production.</p>
          <p>Provides a simple yet effective method for hobbyists to achieve desired firing outcomes.</p>

          <h3>Benefits:</h3>
          <h4>Precision in Firing:</h4>
          <p>Offers a precise indication of the heat-work and temperature achieved during firing.</p>
          <p>Allows for adjustments to firing conditions to meet specific requirements.</p>
          <h4>Quality Control:</h4>
          <p>Integral for quality control in ceramic production, ensuring uniformity and consistency.</p>
          <p>Provides a visual and tangible measure of the firing process.</p>
          <h4>Cost-Effective Monitoring:</h4>
          <p>Provides a cost-effective means of monitoring and controlling firing processes.</p>
          <p>Enables both large-scale industrial operations and individual artists to achieve desired ceramic properties.</p>

          <p>PCE is a universally recognized method that plays a pivotal role in the ceramics industry. Whether in large-scale industrial settings or small hobbyist kilns, the use of PCE ensures the consistent production of high-quality ceramics by closely monitoring and controlling the firing conditions.</p>
      `,
      routing: 'pyrometric-cone-equivalent-pce',
    },
    {
      id: 42,
      mainHeader: "Thermal Cycling Machines ",
      titleHead: 'Precision Temperature Thermal Cycling Machines | VBCC Research',
      metaDesc: "Elevate your experiments with advanced thermal cycling machines. Achieve precision temperature control effortlessly.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service42-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service42-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Thermal Cycling',
      description:
        'It is defined as any recursive thermal test in which the temperature is regularly altered, touching a high-temperature peak and a low-temperature peak.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Thermal cycling, also known as temperature cycling, is a recurring thermal test involving the regular alteration of temperatures, oscillating between high and low temperature peaks. This testing method is employed to evaluate the resilience of materials against exposure to alternating extremes of temperature.</p>

          <h3>How It Works:</h3>
          <h4>Temperature Alteration:</h4>
          <p>Materials or components undergo repetitive cycles of exposure to high-temperature peaks and low-temperature troughs.</p>
          <p>The goal is to simulate real-world conditions where temperature variations are encountered.</p>

          <h3>Use Cases:</h3>
          <h4>Performance Verification:</h4>
          <p>Thermal cycling is crucial for assessing the performance of components and materials in environments characterized by temperature fluctuations.</p>
          <p>Commonly applied in the testing of electronic components, materials for aerospace applications, and other temperature-sensitive devices.</p>
          <h4>Identifying Defects:</h4>
          <p>Detects workmanship or material defects that may arise under the stress of thermal cycling.</p>
          <p>Helps in quality control and ensuring reliability in diverse applications.</p>

          <h3>Benefits:</h3>
          <h4>Quality Assurance:</h4>
          <p>Assures the integrity and reliability of materials by subjecting them to conditions replicating real-world temperature variations.</p>
          <h4>Durability Testing:</h4>
          <p>Provides insights into the durability and longevity of materials and components under cyclic thermal stress.</p>

          <h4>Duration:</h4>
          <h4>Varied Timeframe:</h4>
          <p>The duration of thermal cycling varies based on sample volume and specific equipment, typically lasting between one and four hours.</p>

          <p>Thermal cycling is a vital tool in materials testing, offering researchers and engineers a controlled environment to assess the impact of cyclic temperature changes on various materials and components. This process aids in refining designs, ensuring reliability, and identifying potential weaknesses in a wide range of applications.</p>

      `,
      para3: '',
      routing: 'thermal-cycling',
    },
    {
      id: 43,
      mainHeader: "Thermal Cycling Machines",
      titleHead: 'Expert Slag Testing Services | VBCC Research',
      metaDesc: "Optimize durability in high-temperature environments with Slag Testing. Evaluate refractory resistance, minimize replacements, and cut maintenance costs.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service43-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service43-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Slag Testing',
      description:
        'It is the wear and tear of refractories caused by static chemical attack of slag.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Slag testing is a critical evaluation method employed to assess the resilience of refractory materials when exposed to molten slag, a glass-like residue formed during the smelting process. This testing primarily distinguishes between two modes of attack: corrosion, signifying static chemical wear, and erosion, indicating mechanical wear caused by molten slag.</p>

          <h3>How It Works:</h3>
          <h4>Corrosion Assessment:</h4>
          <h4>Static Chemical Attack:</h4>
          <p>Involves examining refractories for wear and tear caused by the chemical composition of slag.</p>
          <p>Identifies the refractory's resistance to chemical corrosion over time.</p>
          <h4>Erosion Analysis:</h4>
          <h4>Mechanical Wear:</h4>
          <p>Evaluates the breaking and washing away of refractory materials due to the mechanical action of molten slag.</p>
          <p>Assesses the refractory's ability to withstand physical erosion.</p>

          <h3>Use Cases:</h3>
          <h4>Steel Industry:</h4>
          <p>Crucial for assessing refractory performance in steelmaking furnaces exposed to aggressive slag.</p>
          <p>Ensures the durability and longevity of refractory linings in these high-temperature environments.</p>
          <h4>Foundries:</h4>
          <p>Employed to evaluate refractory materials in foundry applications where molten metal and slag interactions are common.</p>
          <p>Facilitates the selection of refractories with optimal resistance to slag-induced wear.</p>

          <h3>Benefits:</h3>
          <h4>Performance Validation:</h4>
          <p>Validates the performance of refractories under conditions mimicking real-world industrial processes.</p>
          <p>Ensures refractory materials can endure prolonged exposure to molten slag.</p>
          <h4>Cost Efficiency:</h4>
          <p>Identifies refractory materials with superior resistance, minimizing the need for frequent replacements.</p>
          <p>Reduces downtime and maintenance costs in industrial settings.</p>
          <h4>Quality Assurance:</h4>
          <p>Provides a qualitative and quantitative assessment of refractory durability.</p>
          <p>Assures the quality of refractory linings in critical applications.</p>

          <p>Slag testing is indispensable for industries relying on refractories to withstand the harsh conditions of molten slag. By differentiating between corrosion and erosion, this testing method enables industries to make informed decisions regarding the selection of refractory materials, ensuring the longevity and efficiency of industrial processes.</p>
      `,
      routing: 'slag-testing',
    },
    {
      id: 44,
      mainHeader: "Sieve Analysis Testing Equipment",
      titleHead: 'Precision Sieve Analysis Equipment for Accurate Testing | VBCC Research',
      metaDesc: "Revolutionize your testing processes with our advanced sieve analysis equipment. Experience unparalleled precision in sieve testing for optimal results.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service44-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service44-sec-2.jpg',
      header: 'Thermal Testing',
      heading: 'Sieve Analysis',
      description:
        'It is a method that is used to determine the grain size distribution of soils that are greater than 0.075 mm in diameter.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Sieve analysis is a fundamental method employed to determine the distribution of grain sizes in soils with particles greater than 0.075 mm in diameter. Typically used for sand and gravel, this method is invaluable for understanding the composition of soil.</p>

          <h3>How It Works:</h3>
          <h4>Particle Size Distribution:</h4>
          <p>Involves determining the quantity of powder retained on a series of sieves with varying aperture sizes.</p>
          <p>A sample is introduced at the top of a stack of sieves arranged in decreasing size order.</p>
          <h4>Formula:</h4>
          <p>Utilizes a formula to calculate the percentage retained on and passing through each sieve.</p>
          <p>Masses for each sieve (individual/cumulative) are divided by the total dry mass before washing and multiplied by 100.</p>

          <h3>Use Cases:</h3>
          <h4>Soil Composition Analysis:</h4>
          <p>Essential for analyzing and understanding the grain size distribution of soils.</p>
          <p>Particularly useful for sand and gravel but not exclusive to these materials.</p>
          <h4>Engineering and Construction:</h4>
          <p>Critical in geotechnical engineering for designing foundations, slopes, and other structures.</p>
          <p>Guides construction decisions based on soil composition.</p>

          <h3>Benefits:</h3>
          <h4>Accurate Classification:</h4>
          <p>Provides accurate information about the distribution of particle sizes within a soil sample.</p>
          <h4>Foundation for Decisions:</h4>
          <p>Aids in making informed decisions in engineering and construction projects based on soil characteristics.</p>
          <h4>Quality Control:</h4>
          <p>A valuable quality control tool, ensuring that soil used in construction meets specified criteria.</p>

          <p>Sieve analysis is a cornerstone in soil science and geotechnical engineering, offering insights into the physical properties of soils. By revealing the distribution of particle sizes, it aids in planning and executing construction projects, ensuring the stability and integrity of structures.</p>


      `,
      para3: '',
      routing: 'sieve-analysis',
    },
    {
      id: 45,
      mainHeader: "Thermal Shock Resistance Equipment",
      titleHead: 'Enhance Performance with Thermal Shock Resistance Equipment | VBCC Research',
      metaDesc: "Navigate through the science of thermal shock resistance. From laboratory simulations to key parameters, ensure material reliability in fluctuating temperatures.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service45-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service45-sec-2.png',
      header: 'Thermal Testing',
      heading: 'Thermal Shock Resistance',
      description:
        'It is the ability of a solid to withstand sudden changes in temperature either during heating or cooling.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Thermal shock resistance is a critical property characterizing a material's ability to endure sudden and extreme changes in temperature, whether during rapid heating or cooling. This resilience is particularly crucial in applications where materials are subjected to alternating high and low-temperature environments.</p>

          <h3>How It Works:</h3>
          <h4>Simulation Methods:</h4>
          <h4>Laboratory Simulation:</h4>
          <p>Conditions akin to thermal shock are replicated in the lab using water or air after exposure to furnace environments.</p>
          <p>Materials are subjected to abrupt temperature changes to assess their response.</p>
          <h4>Parameters for Computation:</h4>
          <h4>High Fracture Strength (σf):</h4>
          <p>Measures the material's resistance to fracture under stress.</p>
          <h4>Thermal Conductivity (K):</h4>
          <p>Indicates the material's ability to conduct heat.</p>
          <h4>Elastic Modulus (E):</h4>
          <p>Reflects the material's elastic deformation under stress.</p>
          <h4>Linear Coefficient of Thermal Expansion (αL):</h4>
          <p>Defines how the material's dimensions change with temperature.</p>

          <h3>Use Cases:</h3>
          <h4>Manufacturing Industries:</h4>
          <p>Crucial for materials used in manufacturing processes involving rapid temperature changes, such as glass production.</p>
          <p>Ensures the durability and reliability of materials in challenging thermal environments.</p>
          <h4>Electronics:</h4>
          <p>Essential in electronic components to withstand fluctuations in operating temperatures.</p>
          <p>Safeguards against thermal stress-induced failures in electronic devices.</p>

          <h3>Benefits:</h3>
          <h4>Durability Assurance:</h4>
          <p>Identifies materials capable of withstanding abrupt temperature variations.</p>
          <p>Ensures longevity and performance stability in diverse applications.</p>
          <h4>Reliability in Extreme Conditions:</h4>
          <p>Guarantees the reliability of materials in environments with rapid and severe temperature fluctuations.</p>
          <p>Reduces the risk of material failure due to thermal shock.</p>
          <h4>Performance Optimization:</h4>
          <p>Enables the selection of materials with optimal thermal shock resistance for specific applications.</p>
          <p>Enhances the overall efficiency and dependability of materials in challenging thermal scenarios.</p>

          <p>In industries where materials are exposed to challenging thermal conditions, understanding and assessing thermal shock resistance is pivotal. By considering key parameters and simulation methods, manufacturers can ensure the longevity and reliability of materials subjected to rapid and extreme temperature changes.</p>
      `,
      para3: '',
      routing: 'thermal-shock-resistance',
    },
    {
      id: 46,
      mainHeader: "Ball Clay",
      titleHead: 'Premium Ball Clay for Exceptional Ceramics | VBCC Research',
      metaDesc: "Unlock the potential of your ceramics with Ball Clay. Achieve unmatched plasticity, strength, and color consistency. Perfect for whiteware & sanitaryware production.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service46-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service46-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'Ball Clay',
      description: 'Ball clays are fine-grained, highly plastic clays.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `

          <p>Ball Clay: Fine-grained, highly plastic clays, primarily composed of kaolinite, mica, and quartz, appreciated for their plasticity, unfired strength, and light color upon firing.</p>

          <h3>Composition:</h3>
          <h4>Typically contain:</h4>
          <ul>
              <li>20–80% Kaolinite.</li>
              <li>10–25% Mica.</li>
              <li>6–65% Quartz.</li>
              <li>Small amounts of organic matter (e.g., lignite).</li>
              <li>Trace minerals like pyrite and siderite.</li>
          </ul>

          <h3>Use Cases:</h3>
          <h4>1. Ceramic Whiteware Production:</h4>
          <ul>
              <li>Principal raw material for manufacturing ceramic whiteware (tableware, tiles, etc.).</li>
              <li>Adds plasticity, aiding in the molding and shaping of products.</li>
          </ul>

          <h4>2. Sanitaryware Manufacturing:</h4>
          <ul>
              <li>Widely used in the production of sanitaryware items (sinks, toilets) due to its desirable properties.</li>
          </ul>

          <h3>How It Works:</h3>
          <h4>Plasticity Enhancement:</h4>
          <ul>
              <li>Ball clays exhibit high plasticity, making them easy to shape and mold.</li>
              <li>Enhance workability in the forming process of ceramic products.</li>
          </ul>

          <h3>Benefits:</h3>
          <h4>1. Plasticity:</h4>
          <ul>
              <li>Ensures ease of shaping during ceramic product formation.</li>
              <li> Allows intricate designs and detailed molding..</li>
          </ul>
          <h4>2. Unfired Strength:</h4>
          <ul>
              <li>Contributes to the structural integrity of products before firing.</li>
          </ul>
          <h4>3. Color Consistency:</h4>
          <ul>
              <li> Yields a light color upon firing, contributing to the desired aesthetic of ceramic items.</li>
          </ul>
          <h4>4. Versatility:</h4>
          <ul>
              <li>Adaptable for various ceramic applications, providing versatility in manufacturing.</li>
          </ul>
          <p>Ball clay, characterized by its unique composition and plasticity, stands as a crucial component in the ceramics industry. Its use spans from shaping everyday tableware to forming sanitaryware, showcasing its significance in the creation of high-quality ceramic products.</p>



      `,
      routing: 'ball-clay',
    },
    {
      id: 47,
      mainHeader: "China Clay Kaolin ",
      titleHead: 'Premium China Clay Kaolin | VBCC Research',
      metaDesc: "Elevate your creations with China clay Kaolin for fine porcelain, enhanced paper, and diverse industrial applications.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service47-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service47-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'China Clay',
      description:
        'Kaolin, also called China clay, soft white clay that is an essential ingredient in the manufacture of China and porcelain and is widely used in the making of paper, rubber, paint, and many other products.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `

          <p>China Clay (Kaolin): Soft, white clay essential in the production of China and porcelain, with versatile applications in paper, rubber, paint, and various industries.</p>

          <h3>Composition:</h3>
          <li>Primarily composed of the mineral kaolinite.</li>
          <li>Natural state:  White, soft powder.</li>
          <br>
          <h3>Characteristics:</h3>
          <li>Kaolinite manifests as hexagonal, platy crystals.</li>
          <li>Crystal size: Ranges from about 0.1 micrometers to 10 micrometers or larger.</li>
          <br>
          <h3>Formation:</h3>
          <li>Originates from the decomposition of minerals, notably Feldspar.</li>
          <li>Feldspar decomposition occurs in rocks like Granite.</li>
          <li>Geological process occurred millions of years ago during the late Cretaceous and early Paleogene periods.</li>
          <br>
          <h3>Use Cases:</h3>
          <h4>1. Porcelain and China Production:</h4>
          <ul>
              <li>Integral ingredient for crafting high-quality porcelain and China.</li>
          </ul>
          <h4>2. Paper Manufacturing:</h4>
          <ul>
              <li>Enhances paper quality and texture.</li>
          </ul>
          <h4>3. Rubber Industry:</h4>
          <ul>
              <li> Used as a reinforcing agent in rubber products.</li>
          </ul>
          <h4>4. Paint Production:</h4>
          <ul>
              <li> Serves as a pigment and filler in paint formulations.</li>
          </ul>
          <h4>5. Versatile Industrial Applications:</h4>
          <ul>
              <li> Employed in the creation of diverse products due to its unique properties.</li>
          </ul>
          <br>
          <h3>How It Works:</h3>
          <h4>Porcelain Formation:</h4>
          <ul>
          <li>Kaolin contributes to the plasticity and workability of porcelain clay.</li>
          <li>During firing, kaolin transforms into a durable and white ceramic material.</li>
          </ul>
          <br>
          <h3>Benefits:</h3>
          <h4>1. Porcelain Craftsmanship:</h4>
          <ul>
              <li> Essential for producing fine porcelain items with distinctive characteristics.</li>
          </ul>
          <h4>2. Textural Enhancements:</h4>
          <ul>
              <li>Improves the texture and printability of paper.</li>
          </ul>
          <h4>3. Reinforcement in Rubber:</h4>
          <ul>
              <li> Enhances the strength and resilience of rubber products.</li>
          </ul>
          <h4>4. Pigment and Filler:</h4>
          <ul>
              <li> Acts as a pigment and filler in paint, contributing to color and consistency.</li>
          </ul>
          <h4>5. Broad Applicability:</h4>
          <ul>
              <li> Versatility allows its incorporation into a wide range of industrial products.</li>
          </ul>
          <p>China clay, with its origins dating back millions of years, continues to be a cornerstone in various industries, particularly in the art of crafting porcelain and the manufacturing of diverse products where its unique properties bring value and distinction.</p>


      `,

      para3: '',
      routing: 'china-clay',
    },
    {
      id: 48,
      mainHeader: "Refractory Than Clay ",
      titleHead: 'Refractory Than Clay Solutions for Ceramics | VBCC Research',
      metaDesc: "Explore the world of refractory ceramics with Than clays. Crafting resilience in high-temperature environments, our solutions go beyond ordinary clay. ",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service48-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service48-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'Than Clay',
      description:
        'Than fire clay is a range of refractory clays used in the manufacture of ceramics, especially fire brick.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>A range of refractory clays utilized in ceramics manufacturing, particularly in crafting fire bricks.</p>
          <h4>Composition:</h4>
          <ul>
          <li>Defined by the EPA as a "mineral aggregate composed of hydrous silicates of aluminium (Al2O3·2SiO2·2H2O) with or without free silica."</li>
          </ul>
          <br>

          <h3>Temperature Resistance:</h3>
          <ul>
          <li>High-grade fire clays withstand temperatures up to 1,775 °C (3,227 °F).</li>
          <li>To be classified as "fire clay," it must endure a minimum temperature of 1,515 °C (2,759 °F).</li>
          </ul>
          <br>

          <h3>Types of Fire Clays:</h3>
          <ul>
          <li>Range from flint clays to plastic fire clays.</li>
          <li>Include semi-flint and semi-plastic fire clays.</li>
          </ul>
          <br>

          <h3>Composition (Typical):</h3>
          <ul>
              <li>Al2O3: 23-34%</li>
              <li>SiO2: 50-60%</li>
              <li>Loss on ignition: 6-27%</li>
              <li>May contain Fe2O3, CaO, MgO, K2O, Na2O, TiO2, along with fine-grained micas and quartz.</li>
          </ul>
          <br>

          <h3>Chemical Analyses (19th Century):</h3>
          <ul>
          <li>Alumina content historically lower in 19th-century sources.</li>
          <li>Contemporary analyses provide values closer to the defined composition.</li>
          </ul>
          <br>

          <h3>Use Cases:</h3>
          <h4>1. Ceramic Manufacturing:</h4>
          <ul>
              <li>Primary material for crafting fire bricks. Used in the production of refractory ceramics.</li>
          </ul>
          <h4>2. High-Temperature Applications:</h4>
          <ul>
              <li> Ideal for applications requiring resilience at elevated temperatures.</li>
          </ul>
          <h4>3. Refractory Products:</h4>
          <ul>
              <li> Retains strength and structure at high temperatures, crucial for refractory applications.</li>
          </ul>

          <h3>How It Works:</h3>
          <h4>Refractory Properties:</h4>
          <ul>
          <li> Retains strength and structure at high temperatures, crucial for refractory applications.</li>
</ul>
          <h3>Benefits:</h3>
          <h4>1. Temperature Endurance:</h4>
          <ul>
              <li>Withstands extreme temperatures, ensuring reliability in high-heat environments.</li>
          </ul>
          <h4>2. Versatile Applications:</h4>
          <ul>
              <li>Suitable for various refractory and ceramic manufacturing needs.</li>
          </ul>
          <h4>3. Structural Integrity:</h4>
          <ul>
              <li> Contributes to the durability and longevity of refractory products.</li>
          </ul>

          <p>Fire clay, known for its resilience and heat-resistant properties, stands as a fundamental component in the creation of refractory ceramics, especially fire bricks, contributing to the robustness of structures in demanding high-temperature conditions.</p>
      `,
      para3: '',
      routing: 'than-clay',
    },
    {
      id: 49,
      mainHeader: "Feldspar Powder",
      titleHead: 'High-Quality Feldspar Powder for Industrial Use | VBCC Research',
      metaDesc: "Elevate your ceramics, glass, and industrial products with High-Quality Feldspar Powder. Explore its versatility as a flux and enhancer, optimizing luster and quality.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service49-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service49-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'Feldspar',
      description:
        'Feldspar is a group of rock-forming aluminium tectosilicate minerals, also containing other cations such as sodium, calcium, potassium, or barium.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `

          <p>A group of rock-forming aluminium tectosilicate minerals, featuring sodium, calcium, potassium, or barium as additional cations.</p>

          <h3>Types of Feldspar:</h3>
              <li>Plagioclase Feldspars:</li>
                  <ul>
                      <li>Contain sodium-calcium components.</li>
                  </ul>

              <li>Alkali Feldspars:</li>
                  <ul>
                      <li>Feature potassium-sodium constituents.</li>
                  </ul>
                  <br>
              <h3>Industrial Significance:</h3>
              <li>An essential source of alumina in glassmaking and ceramics industries.</li>
          <br>


          <br>

          <h3>Applications:</h3>
          <h4>1. Ceramics Industry:</h4>
          <ul>
              <li>Acts as a flux in ceramics, enhancing vitreous lustre in chinaware and ceramic tiles.</li>
          </ul>
          <h4>2. Glazes and Enamels:</h4>
          <ul>
              <li>Utilized in glazes and enamels for enhancing surface characteristics.</li>
          </ul>
          <h4>3. Paints, Plastics, Sealants, and Adhesives:</h4>
          <ul>
              <li>Serves as a crucial mineral filler in various industrial products.</li>
          </ul>
          <br>

          <h3>Composition:</h3>
          <ul>
          <li>Aluminosilicate minerals with the general formula AT₄O₈.</li>

              <li>A: Potassium, sodium, or calcium.</li>
              <li>T: Silicon and aluminium, with a Si:Al ratio ranging from 3:1 to 1:1.</li>
          </ul>
          <br>

          <h3>How It Works:</h3>
          <li>Flux in Ceramics:</li>
          <ul>
              <li>Enhances melting and vitrification in ceramics production.</li>
          </ul>
          <br>

          <h3>Benefits:</h3>
          <h4>1. Glass and Ceramic Enhancement:</h4>
          <ul>
              <li>Improves the properties of glass and ceramic products.</li>
          </ul>
          <h4>2. Surface Characteristics:</h4>
          <ul>
              <li>Enhances lustre and surface quality in chinaware and tiles.</li>
          </ul>
          <h4>3. Versatile Industrial Applications:</h4>
          <ul>
              <li>Valuable in a range of industries, including paints, plastics, sealants, and adhesives.</li>
          </ul>
          <br>

          <p>Feldspar, with its versatile applications in glassmaking, ceramics, and various industrial products, stands as a foundational mineral that contributes to the enhancement of material properties and surface characteristics across multiple sectors.</p>


      `,
      para3: '',
      routing: 'feldspar',
    },
    {
      id: 50,
      mainHeader: " Quartz Ceramics",
      titleHead: 'High-Quality Quartz Ceramics  | VBCC Research',
      metaDesc: "Explore unbeatable quartz on premium ceramics. Elevate your projects with high-quality quartz ceramics.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service50-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service50-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'Quartz',
      description:
        'Quartz is a hard, crystalline mineral composed of silica (silicon dioxide).',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `

    <p>Quartz is a hard, crystalline mineral composed of silicon dioxide (SiO2), forming a continuous framework of SiO4 silicon–oxygen tetrahedra.</p>

    <h3>Forms:</h3>
    <h4>1. α-Quartz:</h4>
    <ul>
        <li> Normal form.</li>

    </ul>
    <h4>2. β-Quartz:</h4>
    <ul>
    <li> High-temperature form, transforming abruptly at 573 °C.</li>
    </ul>
    <br>

    <h3>Chirality:</h3>
    <ul>
        <li>Both α- and β-quartz are chiral.</li>
    </ul>
    <br>

    <h3>Transformation:</h3>
    <ul>
        <li>The transformation from α-quartz to β-quartz at 573 °C is accompanied by a significant change in volume, inducing micro fracturing in ceramics or rocks.</li>
    </ul>
    <br>

    <h3>Use Cases:</h3>
    <h4>1. Construction Materials:</h4>
    <ul>
        <li>Raw material for glass, concrete, and mortar.</li>
    </ul>
    <h4>2. Silicon Production:</h4>
    <ul>
        <li>Refined to yield silicon critical for computers and high-tech applications.</li>
    </ul>
    <br>

    <h4>Working Mechanism:</h4>
    <ul>
        <li>The continuous SiO4 silicon–oxygen tetrahedral framework provides hardness and stability to quartz.</li>
    </ul>
    <br>

    <h3>Benefits:</h3>
    <h4>1. Diverse Construction Applications:</h4>
    <ul>
        <li>Essential in the production of glass, concrete, and mortar for construction.</li>
    </ul>
    <h4>2. Critical Silicon Source:</h4>
    <ul>
        <li>Serves as a crucial raw material for silicon production, vital in modern technology.</li>
    </ul>
    <br>

    <p>Quartz, with its distinctive crystalline structure and transformative properties, plays a foundational role in construction materials and as a source for silicon, contributing significantly to the realms of construction and high-tech applications.</p>


      `,
      para3: '',
      routing: 'quartz',
    },
    {
      id: 51,
      mainHeader: "Alumina Ceramics",
      titleHead: 'High-Quality Alumina Ceramics for Superior Performance | VBCC Research',
      metaDesc: "Elevate your materials with high-quality alumina ceramics. From abrasive materials to protective coatings, explore the versatility and durability of alumina.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service51-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service51-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'Alumina',
      description:
        'Alumina (Aluminium Oxide) is the most widely used oxide ceramic material. Its applications are widespread, and include spark plugs, tap washers, abrasion resistant tiles, and cutting tools.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Alumina, derived from aluminium oxide, stands out as a versatile material widely employed for its hardness, strength, and protective characteristics in diverse industrial applications.</p>

          <h3>Composition:</h3>
          <ul>
              <li>Aluminium oxide, or alumina (Al2O3), occurs naturally as corundum.</li>
          </ul>
          <br>

          <h3>Production:</h3>
          <ul>
              <li>Obtained by burning aluminium in oxygen or by heating hydroxide, nitrate, or sulphate of the metal.</li>
              <li>Industrially separated from bauxite, an ore containing 30–54% alumina, iron (III) oxide (Fe2O3), and silica (SiO2).</li>
          </ul>
          <br>

          <h3>Use Cases:</h3>
          <h4>1. Abrasive Materials:</h4>
          <ul>
              <li>Alumina is widely utilized in industrial abrasive materials.</li>
              <li>Superior hardness and strength make it effective for various abrasive applications.</li>
          </ul>
          <h4>2. Protective Coating:</h4>
          <ul>
              <li>Used as a coating to protect surfaces against abrasion.</li>
              <li>Provides a durable shield, enhancing the lifespan of materials.</li>
          </ul>
          <h4>3. Industrial Applications:</h4>
          <ul>
              <li>Found in diverse industrial applications due to its versatility.</li>
              <li>Used in manufacturing processes requiring robust and wear-resistant materials.</li>
          </ul>
          <br>

          <h3>Benefits:</h3>
          <h4>1. Superior Hardness:</h4>
          <ul>
              <li> Alumina exhibits exceptional hardness, contributing to its effectiveness in abrasive materials.</li>
          </ul>
          <h4>2. Strength:</h4>
          <ul>
          <li>The strength of alumina enhances its durability in applications subjected to wear and tear.</li>
          </ul>
          <h4>3. Protective Qualities:</h4>
          <ul>
          <li>As a coating, alumina offers protective qualities, reducing the impact of abrasion on surfaces.</li>
          </ul>
          <p>Alumina, derived from aluminium oxide, stands out as a versatile material widely employed for its hardness, strength, and protective characteristics in diverse industrial applications.</p>

      `,
      routing: 'alumina',
    },
    {
      id: 52,
      mainHeader: "Zirconia Ceramics",
      titleHead: 'Quality Zirconia White Solid Ceramic Glaze | VBCC Research',
      metaDesc: "Elevate your applications with Zirconia Ceramics - the epitome of hardness and versatility. Quality Zirconia white solid ceramic glaze for lasting performance.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service52-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service52-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'Zirconia',
      description:
        "Zirconia is a white solid ceramic glaze and one of several newer materials that combine metal's strength with the aesthetic, tooth-like appeal of porcelain.",
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
      <h3>Characteristics:</h3>
      <li>Zirconia is a white solid ceramic glaze with properties that combine the strength of metal with the aesthetic appeal of porcelain.</li>
<br>
      <h3>Use Cases:</h3>
      <h4>1. Dental Applications:</h4>
      <ul>
          <li>Zirconia crowns and dental implants are continually developed for improved performance.</li>
          <li>Commonly used in dentistry due to its superior strength, hardness, wear resistance, and biocompatibility.</li>
      </ul>

      <h4>2. Refractory Products:</h4>
      <ul>
          <li>Ideal for a range of refractory products requiring stability at high temperatures.</li>
          <li>Exhibits h4 thermal and corrosion resistance.</li>
      </ul>

      <h4>3. Ceramic Colors and Pigments:</h4>
      <ul>
          <li>Used in the production of ceramic colors and pigments.</li>
          <li>Offers consistent quality and chemical inertness.</li>
      </ul>

      <h4>4. Electronic Applications:</h4>
      <ul>
          <li>Applied in electronic applications, showcasing good mechanical properties.</li>
      </ul>

      <h4>5. Biocompatible Prosthetics:</h4>
      <ul>
          <li>Utilized in prosthesis devices such as hip joints and femoral ball heads.</li>
          <li>Known for excellent biocompatibility with the human body.</li>
      </ul>

      <h3>Benefits:</h3>
      <h4>1. Mechanical Properties:</h4>
      <ul>
          <li>Zirconia products demonstrate good mechanical properties.</li>
          <li>Suitable for applications requiring strength and stability.</li>
      </ul>

      <h4>2. Thermal and Corrosion Resistance:</h4>
      <ul>
          <li>Exhibits h4 thermal and corrosion resistance, ensuring durability in various conditions.</li>
      </ul>

      <h4>3. Biocompatibility:</h4>
      <ul>
          <li>Superior biocompatibility makes it a preferred material for medical implants.</li>
          <li>Particularly favored in dental applications for its compatibility with the human body.</li>
      </ul>

      <p>Zirconia, with its unique combination of strength, stability, and biocompatibility, finds versatile applications in dentistry, refractory products, ceramic manufacturing, electronics, and medical prosthetics. Its continual development makes it a material of choice in various cutting-edge applications.</p>

      `,
      para3: '',
      routing: 'zirconia',
    },
    {
      id: 53,
      mainHeader: "Silicon Carbide Ceramic",
      titleHead: 'Quality Silicon Carbide Ceramic | VBCC Research',
      metaDesc: "Optimize your projects with premium silicon carbide ceramics. Unleash quality and durability in every application.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service53-sec-1.jpg',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service53-sec-2.jpg',
      header: 'Raw Materials',
      heading: 'Silicon Carbide',
      description:
        'Silicon carbide, also known as carborundum, is a hard chemical compound containing silicon and carbon.',
      industries: '₹ - Enquire for Estimate',
      para1: '',
      para2: `
          <p>Silicon carbide (SiC), also known as carborundum, is a hard chemical compound composed of silicon and carbon.</p>

          <h3>Occurrence:</h3>
          <ul>
              <li>Naturally occurs as the rare mineral moissanite; however, it is mass-produced in powder and crystal forms.</li>
          </ul>
          <br>

          <h3>Forms:</h3>
          <h4>1. Grains:</h4>
          <ul>
              <li>Can be bonded by sintering to form hard ceramics.</li>
              <li>Widely used in applications requiring high endurance, such as car brakes, clutches, and bulletproof vests.</li>
          </ul>
          <h4>2. Single Crystals:</h4>
          <ul>
              <li>Grown by the Lely method.</li>
              <li>Cut into gems known as synthetic moissanite.</li>
          </ul>
          <br>

          <h3>Applications:</h3>
          <h4>1. Abrasive:</h4>
          <ul>
              <li>Used for its abrasive properties.</li>
          </ul>
          <h4>2. Semiconductor:</h4>
          <ul>
              <li>Functions as a semiconductor.</li>
          </ul>
          <h4>3. Gem Quality Diamond Simulant:</h4>
          <ul>
              <li>Used as a diamond simulant, especially in gem-quality synthetic moissanite.</li>
          </ul>
          <br>

          <h3>Manufacturing Process:</h3>
          <ul>
              <li>Silicon carbide is manufactured by combining silica sand and carbon in an Acheson graphite electric resistance furnace at high temperatures (1,600–2,500 °C).</li>
          </ul>
          <br>

          <h3>Benefits:</h3>
          <h4>1. High Endurance:</h4>

          <ul>
              <li>Ideal for applications requiring durability, such as car brakes and bulletproof vests.</li>
          </ul>
          <h4> 2. Versatility:</h4>

          <ul>
              <li>Functions as an abrasive, semiconductor, and gem-quality diamond simulant.</li>
          </ul>
          <h4> 3. Manufacturing Simplicity:</h4>

          <ul>
              <li> Produced through a straightforward process involving common materials.</li>
          </ul>
          <br>

          <p>Silicon carbide, with its remarkable hardness and versatility, finds applications ranging from abrasives to semiconductors, showcasing its significance in various industries.</p>



      `,
      para3: '',
      routing: 'silicon-carbide',
    },
    {
      id: 54,
      mainHeader: "Industrial Hot Air Oven for Laboratory",
      titleHead: 'Best Industrial Hot Air Ovens for Laboratory | VBCC Research',
      metaDesc: "Discover the best industrial hot air ovens for laboratory use. Find reliable hot air ovens designed for precise temperature control and optimal performance.",
      image_1: 'https://ik.imagekit.io/webibee/VBRC/service54-sec-1.png',
      image_2: 'https://ik.imagekit.io/webibee/VBRC/service54-sec-2.jpg',
      header: 'Heat Treatment Facility',
      heading: 'Hot Air Oven',
      description:
        'Hot air ovens are electrical devices which use dry heat to sterilize A Hot Air Oven is a laboratory appliance that is used to dry, sterilize, or heat materials.',
      industries: '₹ - Enquire for Estimate',
      para1:
        'A Hot Air Oven is a laboratory appliance that is used to dry, sterilize, or heat materials. It works by circulating hot air inside the oven chamber to evenly distribute heat to the materials being processed. Hot air ovens are often used in a variety of settings, including research laboratories, industrial settings, and educational institutions.',
      para2:
        'Hot air ovens typically have a temperature range of ambient temperature to 250°C or higher and are equipped with a thermostat to maintain a consistent temperature. Some hot air ovens also have a fan to circulate the hot air inside the oven chamber, which can help to ensure that the materials being processed are heated or dried evenly. Hot air ovens are commonly used to sterilize equipment and materials, as the high temperatures can kill microorganisms. They are also used to dry materials, such as chemicals, biological specimens, and glassware. In addition, hot air ovens can be used to heat materials for a variety of purposes, such as activating chemicals or heating materials to a specific temperature for testing.',
      table1_th: 'Hot Zone Size',
      table1_th2: '450mmx 450mmx 450mm',
      table1_td: 'Tray',
      table1_td2: '3 Nos. - Stainless steel',
      table1_td3: 'Max Temp',
      table1_td4: '250°C',
      routing: 'hot-air-oven',
    },
  ];

  toggleMenu(): void {
    let menuBtn = document.querySelector('.menu-btn');
    if (!this.showMenu1) {
      menuBtn.classList.add('close');
      // Reset the menu state
      this.showMenu1 = true;
    } else {
      menuBtn.classList.remove('close');
      // Reset the menu state
      this.showMenu1 = false;
    }
  }

  imagesNav = [
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ];
  currentImageIndex15 = 0;
  changeImage15() {
    this.currentImageIndex15 =
      (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }
}
