import { Component,  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    formData = {
        name: '',
        email: '',
        message: ''
      };

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}
  headingParams : any;
  contentParams : any;
  id : any;
  image_1 : any;
  image_2 : any;
  header : any;
  heading : any;
  title : any;
  title_heading : any;
  students : any;
  industries : any;
  lists : any = [];
  description : any;
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
  table1_td5 : any;
  table1_td6 : any;
  table1_td7 : any;
  table1_td8 : any;
  table1_td9 : any;
  table1_td10 : any;
  para1: any;
  para2:any;
  para3: any;
  para4: any;
  showMenu1: boolean = false;


  ngOnInit(): void {
    this.filterMethod();
  }

  ngDoCheck(){
    this.contentParams = this.activatedRoute.snapshot.params['routing'];
    this.filterMethod();
  }

  filterMethod() {
    this.headingParams = this.activatedRoute.snapshot.params['routing'];
    const filteredData = this.content.filter((x)=>x.routing == this.headingParams);
    this.image_1 = filteredData[0].image_1;
    this.image_2 = filteredData[0].image_2;
    this.header = filteredData[0].header;
    this.heading = filteredData[0].heading;
    this.title = filteredData[0].title;
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
    this.table1_td8= filteredData[0].table1_td8;
    this.table1_td9= filteredData[0].table1_td9;
    this.table1_td10= filteredData[0].table1_td10;
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
    let description  = `\nName : ${name}\nEmail: ${email}\nMessage: ${message}`
    let mail = 'drVBCC@gmail.com'
    // You can construct the Gmail URL with the entered data and open it in a new tab.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(description)}`;
    // window.open(gmailUrl, '_blank');
    window.location.href=gmailUrl;
    (document.getElementById('name') as any).value = "";
    (document.getElementById('email') as any).value = "";
    (document.getElementById('message') as any).value = "";
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
      title : 'Sophisticated Instruments',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service1-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service1-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'X-Ray Diffraction (XRD)',
      description : "It is a non-destructive method for analysing matters ranging from liquids to crystals.",
      students : '₹750 - Students',
      industries : '₹1500 - Industries',
      para1 : "",
      para2 :`
          <p>X-ray diffraction (XRD) is a non-destructive method for analyzing matters ranging from liquids to crystals. This characterization method provides statistical information on interlayer multiple orientations of carbon nanomaterials. The parameters examined by this technique are structural strain, diameter, chirality distribution, and impurities in CNMs.</p>
         <br>
          <h4>Benchtop X-ray Diffractometer for Phase Analysis</h4>
          <p>New sixth generation MiniFlex benchtop X-ray diffractometer is a multipurpose powder diffraction analytical instrument that can determine: crystalline phase identification (phase ID) and quantification, percent (%) crystallinity, crystallite size and strain, lattice parameter refinement, Rietveld refinement, and molecular structure. It is widely used in research, especially in material science and chemistry, as well as in industry for research and quality control. It is the newest addition to the MiniFlex series of benchtop X-ray diffraction analyzers from Rigaku, which began with the introduction of the original MiniFlex XRD system decades ago.</p>

         <br>
          <h4>X-ray Powder Diffraction with HPAD Detector</h4>
          <p>MiniFlex XRD system delivers speed and sensitivity through innovative technology advances, including the HyPix-400 MF 2D hybrid pixel array detector (HPAD) together with an available 600 W X-ray source and new 8-position automatic sample changer.</p>
          <br>
          <h4>Hybrid Pixel Array Detector (HPAD)</h4>
          <p>This new direct photon counting detector enables high-speed, low-noise data collection and may be operated in 0D and 1D modes for conventional XRD analysis and 2D mode for samples with coarse grain size and/or preferred orientation.</p>
          <br>
          <h4>XRD Accessories Enhance Your MiniFlex</h4>
          <p>A variety of X-ray tube anodes – along with a range of sample rotation and positioning accessories, together with a variety of temperature attachments – are offered to ensure that the MiniFlex X-ray diffraction (XRD) system is versatile enough to perform challenging qualitative and quantitative analyses of a broad range of samples, whether performing research or routine quality control. The new (Gen 6) MiniFlex X-ray diffractometer system embodies the Rigaku philosophy of “Leading with Innovation” by offering the world’s most advanced benchtop system for powder diffractometry.</p>
          <br>
          <h4>Advanced Powder Diffraction Software</h4>
          <p>Each MiniFlex comes standard with the latest version of SmartLab Studio-II, Rigaku's full-function powder diffraction analysis package. The latest version offers important new functionality; including a fundamental parameter method (FP) for more accurate peak calculation, phase identification using the Crystallography Open Database (COD), and a wizard for ab inito crystal structure analysis.</p>


      `,

      routing :  'x-ray-diffraction-xrd'
    },
    {
      id : 2,
      title : 'Sophisticated Instruments',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service2-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service2-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'X-Ray Fluorescence (XRF)',
      description : 'It is the emission of characteristic "secondary" (or fluorescent) X-rays from a material that has been excited by being bombarded with high-energy X-rays or gamma rays.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      para1 : "",
      para2 : `
          <p>A non-destructive analytical technique revolutionizing material analysis by determining elemental compositions. Utilizing a primary X-ray source to excite a sample, XRF analyzers measure the emitted fluorescent X-rays, providing insights into a material's chemistry.</p>

          <br>
          <h4>Key Features:</h4>
          <ul>
              <li>Non-destructive Analysis: Requires minimal sample preparation, allowing subsequent measurements by other techniques if needed.</li>
              <li>Maximum Sensitivity: Employs a thin window Ag anode X-ray tube for high sensitivity, ensuring accuracy with a 50 kV X-ray tube ideal for heavier elements.</li>
              <li>Easy Communication: Equipped with USB and network connections for seamless integration with computer peripherals, facilitating extended use and application development.</li>
              <li>Atmospheric Variations: Built-in sensors compensate for air-pressure and temperature variations, ensuring consistent results regardless of weather conditions.</li>
              <li>Spillage Protection: Incorporates a spillage protection foil, easily replaceable by the operator in case of accidents.</li>
          </ul>

          <br>
          <h4>Applications:</h4>
          <ul>
              <li>Mining and Minerals: Quantification of rocks, ores, and drill cores; standardless analysis for mineral quantification.</li>
              <li>Metals: Coating inspection, positive material identification, elemental quantification of slags.</li>
              <li>Petrochemicals: Sulfur quantification in fuels, compliant performance for ASTM D6481, ISO, and JIS test methods.</li>
              <li>Food: Rapid quantification of nutrients, process control in food production, accurate quantification of milk powder.</li>
              <li>Building Materials: On-site quality control of cement and clinker, screening of alternative fuels and raw materials.</li>
              <li>Academia: Versatile instrument suitable for various sample types, ideal for education with pre-calibrated Academia solution.</li>
              <li>Pharmaceuticals: Accelerated process development, FDA compliance with Enhanced Data Security software, efficient raw material inspection.</li>
              <li>Environmental: In-field identification of contaminated soils, analysis of inorganic compounds on air filters, quick wastewater analysis.</li>
              <li>Plastics and Polymers: RoHS-3 analysis, detailed analysis of heterogeneous samples, unique CRM solutions for polyethylene.</li>
          </ul>

          <p>This concise overview encapsulates the versatility and efficiency of XRF in diverse industries, making it a transformative tool for elemental analysis.</p>


      `,
      para3 :"",
      para4 :"",
      lists : [],
      routing : "x-ray-fluorescence-xrf"
    },
    {
      id : 3,
      title : 'Sophisticated Instruments',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service3-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service3-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'Scanning Electron Microscope (SEM)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image.',
      students : '₹1000 - Students',
      industries : '₹2000 - Industries',
      para1 : "",
      para2 : `
    <p>The Scanning Electron Microscope (SEM) is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The electrons interact with atoms in the sample, producing various signals that contain information about the surface topography and composition of the sample.</p>

    <h4>Equipment Features</h4>
    <p>Benchtop Scanning Electron Microscope. Intuitive operation is achieved via touch panel and new operation screens. The low vacuum mode is included in the standard configuration, and EDS can be installed, offering a truly multi-functional benchtop SEM</p>
        <h4 >Compact benchtop SEM</h4>
        <ul>
        <li>Compact size of 325 mm (W) × 490 mm (D) × 430 mm (H)</li>
        <li>Sleek exterior design</li>
        <li>External appearance does not change even when EDS is installed</li>
        </ul>
        <h4>Intuitive operation</h4>
        <ul>
        <li>Designed with easy-to-understand controls and operation screens</li>
        <li>Touch panels are adopted to provide more intuitive operation</li>
        <li>A wealth of functions</li>
        <li>High and Low vacuum modes are standard</li>
        <li>Length measurement functions are also standard</li>
        <li>Tilt & rotation motor-driven holder can be installed (option)</li>
        <li>EDS (elemental analysis device) can be installed (option)</li>
        </ul>
        <h4>Quick response</h4>
        <ul>
        <li>Images can be displayed 3 minutes after the instrument is started</li>
        <li>One-touch switching between High vacuum and Low vacuum modes</li>
        <li>Easy maintenance with a one-piece grid</li>
        </ul>

    <br>

    <h4>Application JCM-6000Plus</h4>
    <br>
    <h5>Lithium Ion Battery Note</h5>
    <p>The applications for lithium ion batteries (LIB) cover a wide range, from power sources for personal computers and mobile devices to automobiles, and there is always a demand for even better performance and safety. To ensure the performance and quality of LIB, analysis and evaluation using high-performance assessment systems is necessary. This LIB note offers characteristic comparisons and application examples of lithium ion battery material assessment which satisfies such needs.</p>
    <br>
    <h5>High Angle Backscattered Electrons and Low Angle Backscattered Electrons</h5>
    <p>Backscattered electrons emitted from a sample can be captured at angles that are closer to the direction of incident electrons (high takeoff angle) or are farther from the incident electrons (low takeoff angle) by changing the position of the backscattered electron detector. The former is called high angle backscattered electrons, while the latter low angle backscattered electrons. Each provides different types of information.</p>
<br>
    <h5>Backscattered Electrons</h5>
    <p>When a beam of electrons is projected onto the surface of a solid sample, many of the incident electrons will be scattered inside of the sample, resulting in repeated collisions with the atomic core and electrons that compose the sample, until they lose their energy inside the sample.</p>

        `,
      routing : "scanning-electron-microscope-sem"
    },
    {
      id : 4,
      title : 'Sophisticated Instruments',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service4-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service4-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'Scanning Electron Microscope (SEM- Gold Sputtering)(3 Images)',
      description : 'It is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The process is done once it’s coated with ultra-thin electrically-conducting metal.',
      students : '₹1250 - Students',
      industries : '₹2500 - Industries',
      para1 : "",
      para2 :`
      <p>The Scanning Electron Microscope (SEM) is an instrument that produces a largely magnified image by using electrons instead of light to form an image. The electrons interact with atoms in the sample, producing various signals that contain information about the surface topography and composition of the sample.</p>
  <br>
  <p>
  Sputter coating for SEM is the process of applying an ultra-thin coating of electrically-conducting metal – such as gold (Au).
  </p>
  <br>
      <h4>Equipment Features</h4>
      <p>Benchtop Scanning Electron Microscope. Intuitive operation is achieved via touch panel and new operation screens. The low vacuum mode is included in the standard configuration, and EDS can be installed, offering a truly multi-functional benchtop SEM</p>
          <h4 >Compact benchtop SEM</h4>
          <ul>
          <li>Compact size of 325 mm (W) × 490 mm (D) × 430 mm (H)</li>
          <li>Sleek exterior design</li>
          <li>External appearance does not change even when EDS is installed</li>
          </ul>
          <h4>Intuitive operation</h4>
          <ul>
          <li>Designed with easy-to-understand controls and operation screens</li>
          <li>Touch panels are adopted to provide more intuitive operation</li>
          <li>A wealth of functions</li>
          <li>High and Low vacuum modes are standard</li>
          <li>Length measurement functions are also standard</li>
          <li>Tilt & rotation motor-driven holder can be installed (option)</li>
          <li>EDS (elemental analysis device) can be installed (option)</li>
          </ul>
          <h4>Quick response</h4>
          <ul>
          <li>Images can be displayed 3 minutes after the instrument is started</li>
          <li>One-touch switching between High vacuum and Low vacuum modes</li>
          <li>Easy maintenance with a one-piece grid</li>
          </ul>

      <br>

      <h4>Application JCM-6000Plus</h4>
      <br>
      <h5>Lithium Ion Battery Note</h5>
      <p>The applications for lithium ion batteries (LIB) cover a wide range, from power sources for personal computers and mobile devices to automobiles, and there is always a demand for even better performance and safety. To ensure the performance and quality of LIB, analysis and evaluation using high-performance assessment systems is necessary. This LIB note offers characteristic comparisons and application examples of lithium ion battery material assessment which satisfies such needs.</p>
      <br>
      <h5>High Angle Backscattered Electrons and Low Angle Backscattered Electrons</h5>
      <p>Backscattered electrons emitted from a sample can be captured at angles that are closer to the direction of incident electrons (high takeoff angle) or are farther from the incident electrons (low takeoff angle) by changing the position of the backscattered electron detector. The former is called high angle backscattered electrons, while the latter low angle backscattered electrons. Each provides different types of information.</p>
  <br>
      <h5>Backscattered Electrons</h5>
      <p>When a beam of electrons is projected onto the surface of a solid sample, many of the incident electrons will be scattered inside of the sample, resulting in repeated collisions with the atomic core and electrons that compose the sample, until they lose their energy inside the sample.</p>

          `,
      para3 : "",
      routing : "scanning-electron-microscope-sem-gold-sputtering"
    },
    {
      id : 5,
      title : 'Sophisticated Instruments',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service5-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service5-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'Laser Particle Size Analyzer (PSA)',
      description : 'It is used to measure the sizes of particles in a material. Particle size is calculated by measuring the angle of light scattered by the particles as they pass through a laser beam.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      para1 : "",
      para2 : `
<p>
Laser diffraction measures particle size distributions by measuring the angular variation in intensity of light scattered as a laser beam passes through a dispersed particulate sample. Large particles scatter light at small angles relative to the laser beam and small particles scatter light at large angles.
</p>
          <br>
          <p>The HORIBA LA-960V2 Laser Scattering Particle Size Distribution Analyzer is a state-of-the-art instrument that employs laser diffraction to measure particle size distributions with exceptional precision. It utilizes the angular variation in light intensity scattered as a laser beam passes through a dispersed particulate sample. Large particles scatter light at small angles, while small particles scatter light at larger angles, allowing for accurate size determination.</p>

          <br>
          <h4>Advanced Detector Design:</h4>
          <p>The instrument features an advanced detector design where the number of detectors, angular range, and layout contribute to overall system performance.</p>

          <br>
          <h4>Superior Instrument-to-Instrument Precision:</h4>
          <p>Designed for consistency, the LA-960V2 ensures the same user experience irrespective of the manufacture date, operator skill, or geographic location. It achieves unmatched instrument agreement without the need for correlation.</p>

          <br>
          <h4>Automatic Laser Alignment in Seconds:</h4>
          <p>With computer-controlled laser alignment, the LA-960V2 ensures perfect measurements. The innovative alignment process takes only a few seconds, streamlining the measurement procedure.</p>

          <br>
          <h4>Guaranteed Accuracy and Precision:</h4>
          <p>The LA-960V2 is a refined particle size analyzer capable of accurately measuring NIST-traceable size standards within 0.6% of specification. It fully complies with ISO 13320 recommendations for materials on the D10, D50, and D90.</p>

          <!-- Other content follows with similar formatting -->

          <br>
          <h4>LY-9610 Imaging Unit:</h4>
          <p>The imaging unit allows real-time observation, particle image acquisition, and assessment of particles in the wet circulation system, enhancing understanding and analysis.</p>

          <br>
          <h4>Features and Functions:</h4>
          <p>Detect and count trace amounts of unusual particles, detect bubbles in the wet circulation system, and gain improved understanding of sample dispersion. Optional advanced software allows for particle shape analysis.</p>

          <br>
          <p>In summary, the HORIBA LA-960V2 combines advanced technology, precision, and user-friendly features, making it a versatile and reliable solution for particle size analysis across diverse applications.</p>


      `,
      para3 : "",
      routing : "laser-particle-size-analyzer-psa"
    },
    {
      id : 6,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service6-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service6-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Thermal Expansion (Dilatometer up to 1000°C)',
      description : 'A dilatometer is a precision instrument for the measurement of dimensional changes in material as a function of temperature.',
      students : '₹1500 - Students',
      industries : '₹2000 - Industries',
      para1 : "",
      para2 : `
          <p>A Dilatometer, a sophisticated thermo-analytical instrument, serves as a crucial tool for measuring the thermal expansion or contraction of various materials under specific controlled temperature-time programs. Equipped with a high-resolution linear variable differential transformer (LVDT) measuring system, it ensures precise digital measurements.</p>

          <h4>How It Works:</h4>
          <p>Digital Measurement:</p>
          <p>The Dilatometer employs a high-resolution LVDT measuring system (1-micrometer accuracy) to digitally measure thermal expansion or contraction.</p>
          <p>Computer Integration:</p>
          <p>Measurements are transmitted to a computer through a connected LVDT, enabling real-time data acquisition.</p>
          <p>Online Graph Plotting:</p>
          <p>Labview software is utilized to plot an online graph illustrating the relationship between temperature and the percentage of total expansion.</p>

          <h4>Use Cases:</h4>
          <p>Diverse Material Testing:</p>
          <p>Dilatometry finds application in testing a diverse range of materials, including traditional and advanced ceramics, glasses, metals, and polymers.</p>

          <h4>Key Features:</h4>
          <p>Maximum Temperature Capability:</p>
          <p>The Dilatometer is designed to operate at temperatures up to 1000°C, allowing for testing under high-temperature conditions.</p>
          <p>Sample Size Flexibility:</p>
          <p>Accommodates sample sizes with outer diameters (OD) or widths ranging from 5 to 10mm and lengths from 25 to 50mm.</p>
          <p>Thermal Expansion Insights:</p>
          <p>Provides critical insights into the thermal expansion behavior of materials, aiding in material characterization and performance prediction.</p>

          <h4>Benefits:</h4>
          <p>Precision in Measurements:</p>
          <p>The LVDT measuring system ensures high precision, with a resolution of 1 micrometer, leading to accurate thermal expansion measurements.</p>
          <p>Real-time Graphical Representation:</p>
          <p>Labview software facilitates the online plotting of graphs, allowing researchers to visualize the relationship between temperature and material expansion in real time.</p>
          <p>Material Characterization:</p>
          <p>Enables comprehensive material testing, contributing to a deeper understanding of thermal behaviors crucial for various industries.</p>

          <p>Technological Significance: The Dilatometer up to 1000°C stands as an invaluable instrument in materials science and engineering, offering a precise and digitally monitored approach to studying thermal expansion. Its diverse applications and flexibility in handling different sample sizes contribute to its technological significance in advancing material insights.</p>
      `,
      table1_th : 'Maximum Temperature',
      table1_th2 : '1400°C',
      table1_td : 'Sample Size',
      table1_td2 : 'OD or Width: 5 to 10mm, Length: 25 to 50mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Thermal Expansion (Dilatometer up to 1000°C)',
      table2_td2 : 'Sample Size: , Width:5-10mm, Length: 25-50 mm',
      routing : "thermal-expansion-dilatometer-up-to-1000degc"
    },
    {
      id : 7,
      title : 'Sophisticated Instruments',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service7-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service7-sec-2.png',
      header : 'Sophisticated Instruments',
      heading: 'BET Analysis',
      description : 'It is a physical characterization technique that provides quantitative data on the specific surface area and porosity distribution of solid materials.',
      students : '₹2500 - Students',
      industries : '₹4000 - Industries',
      para1 : "",
      para2 :`
    <p>Brunauer-Emmett-Teller (BET) Analysis is a crucial physical characterization technique offering quantitative insights into the specific surface area and porosity distribution of solid materials. Applicable to diverse matrices, from catalyst powders to monolithic materials, BET analysis plays a vital role in understanding a material's physical properties.</p>
<br>
    <h4>Use Cases:</h4>
    <p>BET analysis finds widespread application across various industries and material types. It is notably used in catalyst research, pharmaceuticals, nanomaterials, and porous materials such as zeolites and activated carbons. The technique provides essential data for optimizing processes related to gas storage, drug delivery, and catalytic reactions. In the field of catalyst development, researchers leverage BET analysis to assess the efficiency of catalysts by examining their surface area, which directly influences catalytic activity.</p>
    <br>
    <h4>Benefits:</h4>
    <p>1. Quantitative Surface Area Measurement:</p>
    <ul>
        <li>BET analysis offers a quantitative measure of the specific surface area, allowing researchers to precisely understand the available surface for interactions.</li>
    </ul>

    <p>2. Porosity Assessment:</p>
    <ul>
        <li>Beyond surface area, BET analysis provides information about the porosity distribution of a material, aiding in the characterization of its internal structure.</li>
    </ul>

    <p>3. Gas Adsorption Isotherms:</p>
    <ul>
        <li>By studying the adsorption isotherms, researchers gain insights into the interaction between gases and solids, contributing to a comprehensive understanding of material behavior.</li>
    </ul>

    <p>4. Catalyst Optimization:</p>
    <ul>
        <li>In catalysis research, BET analysis plays a crucial role in optimizing catalysts for enhanced performance, leading to more efficient chemical processes.</li>
    </ul>

    <p>5. Material Development:</p>
    <ul>
        <li>For materials like activated carbons and zeolites, BET analysis guides the development of materials with tailored porosity for specific applications, such as gas separation or water purification.</li>
    </ul>

    <p>6. Quality Control:</p>
    <ul>
        <li>Industries such as pharmaceuticals use BET analysis for quality control, ensuring consistency in the porosity and surface area of materials used in drug formulations.</li>
    </ul>

    <p>In summary, BET analysis is a versatile and indispensable tool, providing crucial data for researchers and industries involved in material development, catalysis, and various applications where surface characteristics and porosity play a vital role. Its ability to deliver quantitative and insightful results makes it an essential technique in the field of materials science.</p>
    <br>
    <h4>Analyzing BET Data:</h4>
    <p>The technique assesses the amount of gas adsorbed, considering factors such as exposed surface area, temperature, gas pressure, and the strength of interaction between the gas and solid. Nitrogen is commonly used in BET surface area analysis due to its high purity and strong interaction with most solids, making it a versatile and widely applicable method for material characterization. The obtained data aids in optimizing processes and enhancing the performance of various materials across multiple industries.</p>

        `,
      routing : "bet-analysis"
    },
    {
      id : 8,
      title : 'Sophisticated Instruments',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service8-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service8-sec-2.gif',
      header : 'Sophisticated Instruments',
      heading: 'Pin On Disc Tribometer (Wear)',
      description : 'It is a commonly used tribological characterization technique to estimate the coefficient of friction and the wear mechanism.',
      students : '₹1000 - Students',
      industries : '₹1500 - Industries',
      para1 : ``,
      para2 :`
    <p>The Pin-On-Disc Wear Test is a commonly used tribological characterization technique to estimate the coefficient of friction and the wear mechanism.</p>

    <p>The ball, or pin on disk, wear testing machine presses stationary pin or ball against the rotating disk. Measure coefficient of friction (COF), friction force, wear rate, wear volume, temperature, and several other tribology parameters.</p>
<br>
    <h4>A Pin-On-Disc Tribometer</h4>
    <p>is a specialized instrument designed to assess and quantify the wear and friction characteristics of materials under controlled sliding conditions. This tribological testing device consists of a stationary pin in contact with a rotating disc, simulating the frictional conditions encountered in real-world applications.</p>
    <br>
    <h4>Use Cases:</h4>
    <p>The Pin-On-Disc Tribometer finds extensive application in various industries for evaluating the wear resistance and frictional behavior of materials. It is commonly used in the automotive sector to study the wear performance of brake materials, helping optimize brake pad formulations for enhanced durability and safety. In the field of manufacturing, the tribometer is employed to assess the wear resistance of cutting tools, providing insights into tool material selection and coating effectiveness. Additionally, it plays a crucial role in the development of bearings, gears, and other components in machinery, where minimizing wear and friction is paramount for efficient operation.</p>
    <br>
    <h4>Benefits:</h4>
    <p>1. Wear Analysis:</p>
    <ul>
        <li>Pin-On-Disc Tribometers enable precise quantification of wear rates, aiding researchers and engineers in evaluating the durability and longevity of materials.</li>
    </ul>

    <p>2. Frictional Behavior:</p>
    <ul>
        <li>The tribometer allows for the measurement of friction coefficients under different conditions, contributing to the understanding of material interactions and the optimization of lubrication strategies.</li>
    </ul>

    <p>3. Material Selection:</p>
    <ul>
        <li>Industries involved in material development and selection benefit from tribometer testing by identifying materials that exhibit superior wear resistance, leading to the creation of more robust and reliable products.</li>
    </ul>

    <p>4. Coating Evaluation:</p>
    <ul>
        <li>Researchers use the tribometer to assess the effectiveness of coatings in reducing wear and friction, guiding the development of advanced surface treatments for various applications.</li>
    </ul>

    <p>5. Quality Control:</p>
    <ul>
        <li>The tribometer serves as a valuable tool in quality control processes, ensuring that materials and components meet specified wear and friction criteria before reaching the market.</li>
    </ul>

    <p>6. Optimization of Design:</p>
    <ul>
        <li>Tribometer data aids in the optimization of designs for various mechanical components, allowing engineers to make informed decisions that enhance the overall performance and reliability of systems.</li>
    </ul>

    <p>In summary, the Pin-On-Disc Tribometer is a versatile tool with wide-ranging applications in wear analysis and frictional studies. Its benefits extend to industries seeking to improve the durability, efficiency, and reliability of materials and components in diverse applications.</p>

         `,
      para3 : "",
      routing : "pin-on-disc-tribometer-wear"
    },
    {
      id : 9,
      title : 'Material Preparation',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service9-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service9-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Planetary Mill with Tungsten Carbide Balls & Vial per hour',
      description : "Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.",
      students : '300 - Students',
      industries : '₹600 - Industries',
      para1 : "",
      para2 : `
          <p>Planetary ball mills are smaller than common ball mills and mainly used in laboratories for grinding sample material down to very small sizes. A planetary ball mill consists of at least one grinding jar which is arranged eccentrically on a so-called sun wheel.</p>

          <h4>Planetary Mill with TC Balls & Vial:</h4>
          <p>Features:</p>
          <ul>
              <li>Automatic Operation: The equipment operates entirely automatically, offering convenient time settings and variable speed adjustments for precise control over the milling process.</li>
              <li>Vial Material: Crafted with durable Tungsten Carbide, ensuring longevity and resistance to wear during milling and mixing operations.</li>
              <li>Vial Capacity: Boasting a generous 250 ml capacity, providing ample space for milling and mixing various materials with ease.</li>
              <li>Grinding Media: Utilizes high-quality Tungsten Carbide Balls (10 mm diameter - 30 Nos) as efficient grinding media, ensuring effective particle size reduction.</li>
              <li>Loading Capacity: Accommodates a maximum loading capacity of 100g, dependent on the material density, and a minimum loading capacity of 5g for versatility in experimental setups.</li>
              <li>Material Loss: Minimal material loss of only 2%, preserving the integrity of the processed materials.</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>The VBCC Planetary Ball Mill, equipped with TC balls and vial, finds its application in the realm of Advanced Ceramics, catering to nanotechnology applications with precision and efficiency:</p>
          <ul>
              <li>Advanced Ceramics Processing: Specifically designed for milling and mixing tasks related to Advanced Ceramics, ensuring uniform and controlled processing of ceramic materials.</li>
              <li>Particle Size Reduction: Facilitates the reduction of particle sizes from Micron (10-6µm) to Nano Size (10-9nm) within a short timeframe of 30 to 60 minutes, crucial for nanotechnology applications.</li>
              <li>Nanotechnology Research: Ideal for nanotechnology research where achieving nano-sized particles is essential for enhanced material properties and performance.</li>
              <li>Time-Efficient Operation: The automatic operation with time settings allows for efficient milling within specified durations, promoting productivity in laboratory settings.</li>
              <li>Variable Speed Control: Variable speed adjustments provide flexibility in controlling the milling process, accommodating diverse materials and experimental requirements.</li>
          </ul>

          <p>The Planetary Mill with TC Balls & Vial stands as a reliable tool in materials research and nanotechnology, offering precision, efficiency, and versatility in the milling and mixing of Advanced Ceramics. Its automated features and robust design make it an essential instrument for laboratories engaged in cutting-edge research and development.</p>
      `,
      para3 :"",
      table1_th : 'Vial Material',
      table1_th2 : 'Tungsten Carbide',
      table1_td : 'Vial Capacity',
      table1_td2 : '250 ml',
      table1_td3 : 'Grinding Media',
      table1_td4 : 'Tungsten Carbide Balls (10 mm dia - 30 Nos)',
      table1_td5 : 'Max. Loading Capacity',
      table1_td6 : '100g (Depends upon Density of material)',
      table1_td7 : 'Min. Loading Capacity',
      table1_td8 : '5g',
      table1_td9 : 'Material Loss',
      table1_td10 : '2%',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Planetary Mill with TC balls & Vial',
      table2_td2 : '100 gms max for 1 Hour',
      routing : "planetary-mill-with-tungsten-carbide-balls"
    },
    {
      id : 10,
      title : 'Shaping',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service10-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service10-sec-2.jpg',
      header : 'Shaping',
      heading: 'Pellet Press (10 tone)',
      description : 'Pellet mill is a kind of machine that is used for producing pellets from powdered biomass material. It is also known as pellet press.',
      students : '₹200 - Students',
      industries : '₹500 - Industries',
      para1 : "",
      para2 : `
    <p>Pellet mill is a kind of machine that is used for producing pellets from powdered biomass material. It is also known as pellet press. It works very effectively and you can always rely on for the production of very fine pellets. To produce the small substances, it works by putting together smaller particles into larger and homogenous mass. It therefore implies that it doesn’t break the large materials into smaller substances.</p>

    <h4>VBCC Press is used to compact the different kinds of Ceramic and Metal Powders into Pellet shape for variety of Applications and Characterization.</h4>

    <h4>10-Ton Hydraulic Pellet Press - Manual Operation</h4>
    <p>The 10-ton hydraulic pellet press, designed for manual operation, ensures precise and reliable pellet compaction for diverse applications.</p>

    <h4>Capacity:</h4>
    <ul>
        <li>Press Capacity: 10 tons</li>
        <li>Cylinder Capacity: 10 tons (Max) - Driven by a robust hydraulic power unit.</li>
    </ul>

    <h4>Design Features:</h4>
    <ul>
        <li>Piston Stroke: Maximum 50mm stroke for controlled pellet compaction.</li>
        <li>Ram Configuration: Stationary upper ram ensures stability during operation.</li>
        <li>Loading Type: Vertical up loading simplifies the process for user convenience.</li>
    </ul>

    <h4>Dimensions and Construction:</h4>
    <ul>
        <li>Daylight: Ample 120mm distance between punch and die for flexibility.</li>
        <li>Platen Size: 100mm diameter provides a uniform surface for pellet compression.</li>
        <li>Press Frame: Sturdy 2-pillar type construction ensures durability and stability.</li>
    </ul>

    <h4>Pressure Control:</h4>
    <ul>
        <li>Pressure Gauge: Equipped with a precise digital pressure gauge for effective monitoring.</li>
        <li>Max Pressure: Capable of exerting a maximum pressure of 300 bars (30Mpa).</li>
    </ul>

    <h4>Model and Dies:</h4>
    <ul>
        <li>Model: Designed as a Table Top model for easy placement and operation.</li>
        <li>Pellet Dies: Includes 12mm (2 nos) and 15mm (2 nos) pellet dies for versatile pellet size options.</li>
    </ul>

    <p>The 10-ton hydraulic pellet press blends power and precision, offering user-friendly features for manual pellet compaction across various industries. Whether for research, development, or production, this press delivers consistent results with the flexibility to accommodate different pellet sizes. Its sturdy construction, digital pressure control, and multiple die options make it an ideal solution for efficient and controlled manual pellet compaction.</p>

    <p>The Equipment is completely automatic with Time setting and Variable adjustments. Its features are:</p>
      `,
      para3 : "",
      table1_th : 'Capacity of Press',
      table1_th2 : '15 Ton',
      table1_td : 'Powders',
      table1_td2 : 'Ceramic and Metal Powders',
      table1_td3 : 'Binder',
      table1_td4 : 'Customer is expected to bring. (Otherwise PVA will be added)',
      table1_td5 : 'Die Material',
      table1_td6 : 'H11',
      table1_td7 : 'Die Size',
      table1_td8 : '10 mm, 20 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Pellet Press',
      table2_td2 : 'Per Pellet (up to 15 ton)',
      routing : "pellet-press-10-tone"
    },
    {
      id : 11,
      title : 'Heat Treatment Facility',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service11-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service11-sec-2.png',
      header : 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1200°C (5°C ramp & 3hrs dwell)',
      description : "A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.",
      students : '2000 - Students',
      industries : '₹3000 - Industries',
      para1 :"",
      para2 : `
          <p>A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.</p>

          <h4>Box Furnace - up to 1200°C (5°C Ramp & 3hrs Dwell):</h4>

          <h4>Features:</h4>
          <ul>
              <li><strong>Vertical Lift or Swing Out Door:</strong> Allows convenient placement of various-sized products, ensuring flexibility in the heat-treating process.</li>
              <li><strong>Working Temperature up to RT of 1200°C:</strong> Capable of accommodating high-temperature thermal processes such as annealing, stress relieving, and tempering.</li>
              <li><strong>Tailor-Made Box Size:</strong> Customizable box dimensions tailored to meet specific customer requirements.</li>
              <li><strong>Kanthal Heating Element:</strong> Utilizes high-quality heating elements from Sweden, ensuring durability and efficiency.</li>
              <li><strong>1°C Accuracy at Dwell Temp:</strong> Precision control with a high level of accuracy, crucial for maintaining specific temperature conditions.</li>
              <li><strong>Rapid Heating Rate (1 to 20°C/min) Programmable:</strong> Offers programmable heating rates for flexibility in different thermal applications.</li>
              <li><strong>Suitable for Nanotechnology Applications:</strong> Designed to meet the specialized requirements of nanotechnology processes.</li>
              <li><strong>Imported/Indigenized Insulation:</strong> Utilizes insulation materials sourced internationally or locally to ensure optimal thermal efficiency.</li>
              <li><strong>Indigenous VBCC Make Phase Control Thyristor Controller:</strong> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><strong>TAIE PID Programmable Digital Temperature Indicator cum Controller:</strong> Features advanced PID control for precise temperature regulation.</li>
          </ul>

          <h4>Operating Specifications:</h4>
          <ul>
              <li><strong>Available Space:</strong> 150 x 150 x 200 mm (lxbxh)</li>
              <li><strong>Rate of Heating:</strong> 5°C/Min</li>
              <li><strong>Equipment:</strong> Box Furnace - up to 1200°C</li>
              <li><strong>Quantity/Time:</strong> 2 Hrs</li>
              <li><strong>Working Zone:</strong> 150 x 150 x 200 mm</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>The Box Furnace operating at temperatures up to 1200°C with a 5°C ramp and 3hrs dwell finds extensive application in various thermal processes, including:</p>
          <ul>
              <li><strong>Heat Treatment:</strong> Ideal for subjecting materials to controlled high temperatures for heat treatment.</li>
              <li><strong>Sintering:</strong> Used for the sintering of oxides and clay materials to achieve desired properties.</li>
              <li><strong>Annealing:</strong> Precision annealing processes to enhance material properties.</li>
              <li><strong>Thermal Processing in Nanotechnology:</strong> Tailored for nanotechnology applications requiring specific temperature profiles.</li>
              <li><strong>Calcining and Curing:</strong> Versatile for processes such as calcining and curing in different industries.</li>
          </ul>

          <p>The furnace's customizable features, precise temperature control, and adaptability make it a valuable tool for industries ranging from materials science to nanotechnology, ensuring optimal performance in various high-temperature thermal applications.</p>
      `,
      table1_th : 'Available Space',
      table1_th2 : '150 x 150 x 200 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '5°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Box Furnace - up to 1200°C',
      table2_td2 : '2Hrs / Working Zone:150x150x200 mm',
      lists : ['Working Temperature up to RT of 1200°C', 'Tailor made box size as per the customer requirement', 'Kanthal heating element from Sweden', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 20°C/min) programmable', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'TAIE PID programmable digital temperature indicator cum controller'],
      routing : "box-furnace-up-to-1200degc"
    },
    {
      id : 12,
      title : 'Heat Treatment Facility',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service12-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service12-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1400°C (5°C ramp & 3hrs dwell)',
      description : "A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.",
      students : '₹3500 - Students',
      industries : '₹5000 - Industries',
      para1 : "",
      para2 : `
          <p>A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.</p>

          <h4>Box Furnace - up to 1400°C (5°C Ramp & 3hrs Dwell):</h4>

          <h3>Features:</h3>
          <ul>
              <li><strong>Vertical Lift or Swing Out Door:</strong> Enables convenient placement of various-sized products, ensuring flexibility in heat-treating processes.</li>
              <li><strong>Working Temperature up to RT to 1400°C:</strong> Capable of accommodating high-temperature thermal processes such as annealing, stress relieving, and tempering, providing a wide temperature range.</li>
              <li><strong>Tailor-Made Box Size:</strong> Customizable box dimensions tailored to meet specific customer requirements.</li>
              <li><strong>Silicon Carbide Heating Elements:</strong> Utilizes high-quality heating elements from the USA, ensuring durability and efficiency at elevated temperatures.</li>
              <li><strong>1°C Accuracy at Dwell Temp:</strong> Precision control with a high level of accuracy, crucial for maintaining specific temperature conditions during extended dwell times.</li>
              <li><strong>Rapid Heating Rate (1 to 20°C/min) Programmable:</strong> Offers programmable heating rates for flexibility in different thermal applications.</li>
              <li><strong>Suitable for Nanotechnology Applications:</strong> Designed to meet the specialized requirements of nanotechnology processes with high-temperature demands.</li>
              <li><strong>Imported/Indigenized Insulation:</strong> Utilizes insulation materials sourced internationally or locally to ensure optimal thermal efficiency.</li>
              <li><strong>Indigenous VBCC Make Phase Control Thyristor Controller:</strong> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><strong>TAIE PID Programmable Digital Temperature Indicator cum Controller:</strong> Features advanced PID control for precise temperature regulation.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><strong>Available Space:</strong> 150 x 150 x 200 mm (lxbxh)</li>
              <li><strong>Rate of Heating:</strong> 5°C/Min</li>
              <li><strong>Equipment:</strong> Box Furnace - up to 1400°C</li>
              <li><strong>Quantity/Time:</strong> 2 Hrs</li>
              <li><strong>Working Zone:</strong> 150 x 150 x 200 mm</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>The Box Furnace operating at temperatures up to 1400°C with a 5°C ramp and 3hrs dwell is versatile and finds applications in various thermal processes, including:</p>
          <ul>
              <li><strong>Heat Treatment:</strong> Ideal for subjecting materials to controlled high temperatures for heat treatment.</li>
              <li><strong>Sintering:</strong> Used for the sintering of oxides and clay materials to achieve desired properties.</li>
              <li><strong>Annealing:</strong> Precision annealing processes to enhance material properties.</li>
              <li><strong>Thermal Processing in Nanotechnology:</strong> Tailored for nanotechnology applications requiring specific temperature profiles at elevated ranges.</li>
              <li><strong>Calcining and Curing:</strong> Versatile for processes such as calcining and curing in different industries.</li>
          </ul>

          <p>The furnace's customizable features, precise temperature control, and adaptability make it an indispensable tool for industries ranging from materials science to nanotechnology, ensuring optimal performance in various high-temperature thermal applications.</p>
      `,
      table1_th : 'Available Space',
      table1_th2 : '150 x 150 x 200 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '5°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Box Furnace - up to 1400°C',
      table2_td2 : '2Hrs / Working Zone:150x150x200 mm',
      lists : ['Working Temperature up to RT to 1400°C', 'Tailor made box size as per the customer requirement', 'Silicon carbide heating elements from USA', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 20°C/min) programmable', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'TAIE PID programmable digital temperature indicator cum controller'],
      routing : "box-furnace-up-to-1400degc"
    },
    {
      id : 13,
      title : 'Heat Treatment Facility',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service13-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service13-sec-2.png',
      header : 'Heat Treatment Facility',
      heading: 'Box Furnace - up to 1600°C (5°C ramp & 3hrs dwell)',
      description : "A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace.",
      students : '₹5000 - Students',
      industries : '₹7500 - Industries',
      para1 : "",
      para2 : `
          <p>A Box Furnace features a vertical lift or swing out door allowing the various sized product(s) to be placed in the furnace. Box Furnaces are utilized for heat-treating, calcining, curing, annealing, stress relieving, preheating, tempering, and other high temperature thermal processes.</p>

          <h4>Box Furnace - up to 1600°C (5°C Ramp & 3hrs Dwell):</h4>

          <h3>Features:</h3>
          <ul>
              <li><strong>Vertical Lift or Swing Out Door:</strong> Facilitates easy placement of various-sized products, enhancing flexibility in high-temperature thermal processes.</li>
              <li><strong>Working Temperature up to RT to 1600°C:</strong> Offers an extensive temperature range, suitable for diverse applications such as annealing, stress relieving, and tempering at extreme temperatures.</li>
              <li><strong>Tailor-Made Box Size:</strong> Customizable box dimensions to meet specific customer requirements, ensuring adaptability for various production needs.</li>
              <li><strong>Molybdenum Di Silicide Heating Elements:</strong> Utilizes high-quality heating elements from the USA, specifically molybdenum di silicide, ensuring robustness and efficiency at ultra-high temperatures.</li>
              <li><strong>1°C Accuracy at Dwell Temp:</strong> Precise temperature control with high accuracy, crucial for maintaining specific temperature conditions during extended dwell times at extreme temperatures.</li>
              <li><strong>Rapid Heating Rate (1 to 20°C/min) Programmable:</strong> Offers programmable heating rates for flexibility in different thermal applications, ensuring efficient and time-sensitive processing.</li>
              <li><strong>Suitable for Nanotechnology Applications:</strong> Tailored to meet the demanding requirements of nanotechnology processes that necessitate extreme temperature conditions.</li>
              <li><strong>Imported/Indigenized Insulation:</strong> Utilizes a combination of insulation materials sourced internationally or locally to ensure optimal thermal efficiency.</li>
              <li><strong>Indigenous VBCC Make Phase Control Thyristor Controller:</strong> Employs an indigenous thyristor controller for efficient and reliable temperature control at extremely high temperatures.</li>
              <li><strong>Eurotherm PID Programmable Digital Temperature Indicator cum Controller:</strong> Features advanced PID control from Eurotherm for precise temperature regulation in extreme thermal environments.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><strong>Available Space:</strong> 150 x 150 x 200 mm (lxbxh)</li>
              <li><strong>Rate of Heating:</strong> 5°C/Min</li>
              <li><strong>Equipment:</strong> Box Furnace - up to 1600°C</li>
              <li><strong>Quantity/Time:</strong> 2 Hrs</li>
              <li><strong>Working Zone:</strong> 150 x 150 x 200 mm</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>The Box Furnace operating at temperatures up to 1600°C with a 5°C ramp and 3hrs dwell is designed for various high-temperature thermal processes, including:</p>
          <ul>
              <li><strong>Heat Treatment at Extreme Temperatures:</strong> Ideal for subjecting materials to controlled high temperatures for heat treatment under extreme conditions.</li>
              <li><strong>Advanced Sintering:</strong> Utilized for the advanced sintering of oxides and clay materials, achieving specific properties at extreme temperature ranges.</li>
              <li><strong>Specialized Annealing:</strong> Precision annealing processes at ultra-high temperatures to enhance material properties in unique applications.</li>
              <li><strong>Extreme Temperature Thermal Processing in Nanotechnology:</strong> Tailored for nanotechnology applications requiring specific temperature profiles at exceptionally high ranges.</li>
              <li><strong>Innovative Calcining and Curing:</strong> Versatile for innovative processes such as calcining and curing in industries where extreme temperatures are essential.</li>
          </ul>

          <p>The furnace's customizable features, precise temperature control, and adaptability make it an essential tool for industries pushing the boundaries of material science and nanotechnology, ensuring optimal performance in various extreme high-temperature thermal applications.</p>
      `,
      table1_th : 'Available Space',
      table1_th2 : '150 x 150 x 200 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '5°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Box Furnace - up to 1600°C',
      table2_td2 : '2Hrs / Working Zone:150x150x200 mm',
      lists : ['Working Temperature up to RT to 1600°C', 'Tailor made box size as per the customer requirement', 'Molybdenum di silicide heating elements from USA', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 20°C/min) programmable', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'Eurotherm PID programmable digital temperature indicator cum controller'],
      routing : "box-furnace-up-to-1600degc"
    },
    {
      id : 14,
      title : 'Heat Treatment Facility',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service14-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service14-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Tubular Furnace with Controlled atmosphere 1200°C with Cold Vacuum & Argon Purging',
      description : "A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.",
      students : '₹3500 - Students',
      industries : '₹5000 - Industries',
      para1 :"",
      para2 : `
          <p>A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix.</p>

          <h4>Tubular Furnace with Controlled Atmosphere 1200°C:</h4>

          <h3>Features:</h3>
          <ul>
              <li><strong>Electric Heating Device:</strong> Specifically designed for syntheses and purifications of inorganic compounds, with occasional use in organic synthesis, using electric heating technology.</li>
              <li><strong>Working Temperature up to RT to 1200°C:</strong> Offers a broad temperature range suitable for various applications, from ambient conditions to high-temperature processes.</li>
              <li><strong>Tailor-Made Tubular Size:</strong> Customizable tubular dimensions to meet specific customer requirements, ensuring adaptability for diverse applications.</li>
              <li><strong>Alumina Tubes (90% to 99.7%):</strong> Utilizes high-purity alumina tubes to withstand high temperatures and harsh chemical environments.</li>
              <li><strong>Kanthal Heating Element:</strong> Incorporates quality Kanthal heating elements from Sweden, known for their efficiency and durability.</li>
              <li><strong>1°C Accuracy at Dwell Temp:</strong> Maintains precise temperature control, critical for conducting controlled syntheses and purifications.</li>
              <li><strong>Controlled Heating Rate (1 to 5°C/min) Programmable:</strong> Allows programmable heating rates for tailored thermal processing, accommodating various synthesis and purification requirements.</li>
              <li><strong>Suitable for Nanotechnology Applications:</strong> Designed to meet the specialized temperature needs of nanotechnology processes.</li>
              <li><strong>Imported/Indigenized Insulation:</strong> Combines insulation materials sourced internationally or locally for optimal thermal efficiency.</li>
              <li><strong>Indigenous VBCC Make Phase Control Thyristor Controller:</strong> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><strong>TAIE PID Programmable Digital Temperature Indicator cum Controller:</strong> Features advanced PID control from TAIE for precise and programmable temperature regulation.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><strong>Available Space:</strong> 60(ID) x 200(L) mm</li>
              <li><strong>Rate of Heating:</strong> 1 to 10°C/Min (Normally 10°C/Min)</li>
              <li><strong>Equipment:</strong> Tubular Furnace with Controlled Atmosphere - 1200°C with Cold Vacuum and Argon Purging</li>
              <li><strong>Quantity/Time:</strong> 2 Hrs</li>
              <li><strong>Working Zone:</strong> 50x150 mm</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>The Tubular Furnace with Controlled Atmosphere 1200°C, featuring Cold Vacuum and Argon Purging, is highly versatile and finds applications in:</p>
          <ul>
              <li><strong>Inorganic Compound Synthesis:</strong> Ideal for conducting precise syntheses of inorganic compounds with controlled atmospheric conditions.</li>
              <li><strong>Purification Processes:</strong> Ensures optimal conditions for purifying materials, especially inorganic substances.</li>
              <li><strong>Organic Synthesis:</strong> Occasionally utilized in organic synthesis processes that demand controlled high temperatures.</li>
              <li><strong>Nanotechnology Research:</strong> Tailored for nanotechnology applications requiring specific temperature profiles and controlled atmospheres.</li>
              <li><strong>Material Purification under Argon or Nitrogen Atmospheres:</strong> Suited for operations under controlled gaseous environments, including Argon and Nitrogen.</li>
              <li><strong>Ambient to High-Temperature Processes:</strong> Versatile temperature range for a broad spectrum of thermal applications.</li>
          </ul>

          <p>The tubular furnace's precise temperature control, programmable features, and adaptability make it an essential tool for researchers and industries involved in cutting-edge materials synthesis, purification, and nanotechnology applications.</p>
      `,
      table1_th : 'Available Space',
      table1_th2 : '60(ID) x 200(L) mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '1 to 10°C/Min (Normally 10°C/Min)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Tubular Furnace with controlled atmosphere - 1200°C with Cold Vacuum and Argon purging',
      table2_td2 : '2Hrs / Working Zone:50x150 mm',
      lists : ['Working Temperature up to RT to 1200°C', 'Tailor made tubular size as per the customer requirement','90% to 99.7% alumina tubes as per customer requirement', 'Kanthal heating element from Sweden', '1°C accuracy at dwell temp', 'Controlled heating rate(1 to 5°C/min)', 'Suitable for nanotechnology applications', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'TAIE PID programmable digital temperature indicator cum controller'],
      routing : "tubular-furnace-with-controlled-atmosphere-1200degc"
    },
    {
      id : 15,
      title : 'Heat Treatment Facility',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service15-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service15-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Tubular Furnace with Controlled atmosphere 1600°C with Cold Vacuum & Argon Purging',
      description : "A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis.",
      students : '₹5000 - Students',
      industries : '₹7500 - Industries',
      para1 :"",
      para2 : `
          <p>A tube furnace is an electric heating device used to conduct syntheses and purifications of inorganic compounds and occasionally in organic synthesis. One possible design consists of a cylindrical cavity surrounded by heating coils that are embedded in a thermally insulating matrix.</p>

          <h4>Features:</h4>
          <ul>
              <li><strong>Electric Heating Device:</strong> A tube furnace designed for conducting syntheses and purifications of inorganic compounds, occasionally applied in organic synthesis.</li>
              <li><strong>Working Temperature up to RT to 1600°C:</strong> Offers an extensive temperature range suitable for a variety of applications, from ambient conditions to high-temperature processes.</li>
              <li><strong>Tailor-Made Tubular Size:</strong> Customizable tubular dimensions to meet specific customer requirements, ensuring adaptability for diverse applications.</li>
              <li><strong>Molybdenum Di Silicide Heating Elements (USA):</strong> Utilizes high-quality heating elements known for their efficiency and durability, ensuring consistent performance.</li>
              <li><strong>Imported RCA Tube from Halden Wanger (Germany):</strong> Incorporates a high-quality RCA tube for enhanced reliability and performance.</li>
              <li><strong>1°C Accuracy at Dwell Temp:</strong> Maintains precise temperature control, crucial for conducting controlled syntheses and purifications.</li>
              <li><strong>Rapid Heating Rate (1 to 5°C/min) Programmable:</strong> Allows programmable heating rates for tailored thermal processing, accommodating various synthesis and purification requirements.</li>
              <li><strong>Suitable for Nanotechnology Applications:</strong> Specifically designed to meet the specialized temperature needs of nanotechnology processes.</li>
              <li><strong>Indigenously Developed Susceptor:</strong> Ensures reliable heat generation within the furnace, contributing to the overall efficiency of the system.</li>
              <li><strong>Imported/Indigenized Insulation:</strong> Combines insulation materials sourced internationally or locally for optimal thermal efficiency.</li>
              <li><strong>Indigenous VBCC Make Phase Control Thyristor Controller:</strong> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><strong>Eurotherm PID Programmable Digital Temperature Indicator cum Controller:</strong> Features advanced PID control from Eurotherm for precise and programmable temperature regulation.</li>
              <li><strong>Optional Rough Vacuum:</strong> Offers the flexibility of operating under rough vacuum conditions, enhancing the furnace's versatility.</li>
          </ul>

          <h4>Operating Specifications:</h4>
          <ul>
              <li><strong>Available Space:</strong> 60(ID) x 200(L) mm</li>
              <li><strong>Rate of Heating:</strong> 1 to 10°C/Min (Normally 10°C/Min)</li>
              <li><strong>Equipment:</strong> Tubular Furnace with Controlled Atmosphere - 1600°C with Argon Purging</li>
              <li><strong>Quantity/Time:</strong> 3 Hrs</li>
              <li><strong>Working Zone:</strong> 50x150 mm</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>The Tubular Furnace with Controlled Atmosphere 1600°C, featuring Cold Vacuum and Argon Purging, excels in various applications:</p>
          <ul>
              <li><strong>High-Temperature Syntheses:</strong> Ideal for conducting syntheses requiring extremely high temperatures up to 1600°C.</li>
              <li><strong>Advanced Materials Research:</strong> Suited for nanotechnology research, providing precise temperature control for material synthesis.</li>
              <li><strong>Inorganic Compound Purification:</strong> Ensures optimal conditions for purifying inorganic compounds under controlled atmospheres.</li>
              <li><strong>Temperature-Sensitive Processes:</strong> The precise temperature control makes it suitable for processes where maintaining specific temperature profiles is critical.</li>
              <li><strong>Rough Vacuum Applications:</strong> Optional rough vacuum capability extends its utility for a broader range of processes.</li>
          </ul>

          <p>The Tubular Furnace with Controlled Atmosphere 1600°C stands as a versatile and reliable tool for researchers and industries engaged in cutting-edge materials synthesis, purification, and advanced research applications.</p>
      `,
      table1_th : 'Available Space',
      table1_th2 : '60(ID) x 200(L) mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '1 to 10°C/Min (Normally 10°C/Min)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Tubular Furnace with controlled atmosphere - 1600°C with Argon purging',
      table2_td2 : '3Hrs / Working Zone:50x150 mm',
      lists : ['Working Temperature up to RT to 1600°C', 'Tailor made Tubular size as per the customer requirement', 'Molybdenum di silicide heating elements from USA', 'Imported RCA Tube from Halden Wanger Germany', '1°C accuracy at dwell temp', 'Rapid heating rate(1 to 5°C/min) programmable', 'Suitable for nanotechnology applications', 'Indigenously developed susceptor for reliable heat generation', 'Imported / indigenized Insulation', 'Indigenous VBCC Make phase control thyristor controller', 'Eurotherm PID programmable digital temperature indicator cum controller * Working Temperature up to RT to 1400°C * Rough Vacuum (optional)'],
      routing : "tubular-furnace-with-controlled-atmosphere-1600degc"
    },
    {
      id : 16,
      title : 'Heat Treatment Facility',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service16-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service16-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Microwave Furnace up to 1500°C (20°C ramp & 30 min dwell)',
      description : "Microwave furnaces represent a system that combines free radiating heating elements with a microwave field.",
      students : '₹2500 - Students',
      industries : '₹5000 - Industries',
      para1 : "",
      para2 :`
          <p>Microwave furnace is another type of laboratory furnace used to carry out thermal research protocols. Microwave furnaces represent a system that combines free radiating heating elements with a microwave field. Traditional heating elements heat material from the outside in, and microwave energy heats volumetrically. Key advantages include greater energy efficiency, faster sample heating, more uniform heating, and improved material properties.</p>

          <h4>Microwave Furnace up to 1500°C:</h4>

          <h3>Features:</h3>
          <ul>
              <li><strong>Innovative Heating Technology:</strong> Utilizes a combination of free radiating heating elements and a microwave field, offering advantages in energy efficiency and sample heating compared to traditional methods.</li>
              <li><strong>Working Temperature up to RT to 1500°C:</strong> Provides a broad temperature range suitable for various thermal research protocols, accommodating a wide range of material processing needs.</li>
              <li><strong>Up to 10 KW with 2.45 GHz of Magnetron:</strong> Employs a high-power magnetron for efficient microwave energy generation, ensuring rapid and uniform sample heating.</li>
              <li><strong>1°C Accuracy at Dwell Temp:</strong> Maintains precise temperature control, crucial for achieving reproducible and accurate results in thermal research.</li>
              <li><strong>Rapid Heating Rate (100°C/min) Programmable:</strong> Offers programmable heating rates of up to 100°C/min, enabling quick and efficient sample processing.</li>
              <li><strong>Suitable for Nanotechnology Applications:</strong> Specifically designed for nanotechnology research, providing uniform and controlled heating for material synthesis.</li>
              <li><strong>Indigenously Developed Susceptor:</strong> Ensures reliable and efficient heat generation within the furnace, contributing to the overall performance of the system.</li>
              <li><strong>Imported Insulation (Portable Susceptor):</strong> Incorporates high-quality insulation, optimizing energy efficiency and maintaining a portable design.</li>
              <li><strong>Indigenous VBCC Make Phase Control Thyristor Controller:</strong> Employs an indigenous thyristor controller for efficient and reliable temperature control.</li>
              <li><strong>Eurotherm PID Programmable Digital Temperature Indicator cum Controller:</strong> Features advanced PID control from Eurotherm for precise and programmable temperature regulation.</li>
              <li><strong>Computer Control (Optional):</strong> Offers the flexibility of computer control for enhanced automation and data management.</li>
              <li><strong>Data Logging (Optional):</strong> Provides an optional data logging feature for recording and analyzing experimental data.</li>
          </ul>

          <h3>Operating Specifications:</h3>
          <ul>
              <li><strong>Available Space:</strong> 75 x 75 x 75 mm</li>
              <li><strong>Rate of Heating:</strong> 1 to 25°C/Min</li>
              <li><strong>Equipment:</strong> Microwave Furnace up to 1500°C</li>
              <li><strong>Quantity/Time:</strong> 30 min</li>
              <li><strong>Working Zone:</strong> 25x25x50 mm</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>The Microwave Furnace up to 1500°C, featuring a 20°C ramp and 30 min dwell, offers versatile applications in thermal research:</p>
          <ul>
              <li><strong>Material Synthesis:</strong> Enables efficient and uniform heating for synthesizing advanced materials, especially in nanotechnology applications.</li>
              <li><strong>Heat Treatment Protocols:</strong> Ideal for conducting heat treatment processes with precise temperature control and rapid heating rates.</li>
              <li><strong>Energy-Efficient Research:</strong> Enhances energy efficiency compared to traditional methods, making it suitable for sustainable research practices.</li>
              <li><strong>Uniform Sample Heating:</strong> Ensures uniform heating throughout the sample, contributing to more consistent and reliable experimental outcomes.</li>
              <li><strong>Quick Experimental Turnaround:</strong> The rapid heating rate allows for shortened experimental durations, improving overall research efficiency.</li>
          </ul>

          <p>The Microwave Furnace up to 1500°C stands as a cutting-edge tool for researchers engaged in thermal studies, offering advanced features and performance for a wide range of material processing applications.</p>
      `,
      table1_th : 'Available Space',
      table1_th2 : '75 x 75 x 75 mm',
      table1_td : 'Rate of Heating',
      table1_td2 : '1 to 25°C/Min',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Microwave Furnace up to 1500°C',
      table2_td2 : '30min / Working Zone: 25x25x50 mm',
      lists : ['Working Temperature up to RT to 1500°C','Up to 10 KW with 2.45 GHz of magnetron', '1°C accuracy at dwell temp', 'Rapid heating rate(100°C/min) programmable', 'Suitable for nanotechnology applications', 'Indigenously developed susceptor for reliable heat generation', 'Imported Insulation (portable susceptor) * Indigenous VBCC Make phase control thyristor controller', 'Eurotherm PID programmable digital temperature indicator cum controller', 'Computer Control (Optional)', 'Data logging (optional)'],
      routing : "microwave-furnace-up-to-1500degc"
    },
    {
      id : 17,
      title : 'Nano coating techniques',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service17-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service17-sec-2.jpg',
      header : 'Nano coating techniques',
      heading: 'Spin Coating',
      description : "Spin coating is a method wherein an excess amount of a solution is placed on the substrate, which is then rotated at high speed in order to spread the fluid by centrifugal force.",
      students : '₹400 - Students',
      industries : '₹800 - Industries',
      para1 : "",
      para2 : `
    <p>Spin coating is a specialized technique used for applying thin films with exceptional uniformity across the surface of a substrate. This process involves coating a rotating substrate with a solution—often referred to as an "ink"—resulting in the creation of a thin, even film of solid material.</p>

    <h4>How It Works:</h4>
    <ul>
        <li>Solution Application: A liquid solution, containing the desired material dissolved in a solvent, is cast onto a rotating substrate.</li>
        <li>Centrifugal Force: High-speed rotation (typically >10 rotations per second) generates centripetal force, combined with surface tension, which uniformly spreads the liquid coating.</li>
        <li>Evaporation: While spinning, the solvent in the solution evaporates, leaving behind a thin, even layer of the desired material on the substrate.</li>
    </ul>

    <h4>Use Cases:</h4>
    <ol>
        <li>Semiconductor Fabrication: Essential in semiconductor manufacturing for applying uniform coatings of photoresists and other materials.</li>
        <li>Optoelectronic Devices: Used in the production of optoelectronic devices, such as light-emitting diodes (LEDs) and solar cells, to create precise thin films.</li>
        <li>Organic Electronics: Applied in the fabrication of organic electronic devices like organic light-emitting diodes (OLEDs) and organic photovoltaic cells.</li>
        <li>Biosensor Development: Utilized for coating biosensors to ensure a consistent and thin layer for accurate sensing.</li>
    </ol>

    <h4>Benefits:</h4>
    <ol>
        <li>Uniformity: Ensures exceptional uniformity in thin film deposition, critical for applications in microelectronics and optics.</li>
        <li>Precision and Control: Offers precise control over film thickness, crucial in industries requiring accurate and consistent coatings.</li>
        <li>Versatility: Applicable to a wide range of materials, making it versatile for various industries and applications.</li>
        <li>High Throughput: Rapid coating process allows for high throughput in manufacturing, contributing to overall efficiency.</li>
    </ol>

    <p>In summary, spin coating stands as a fundamental technique in thin film deposition, playing a pivotal role in industries ranging from semiconductors to optoelectronics. Its ability to provide uniform and controlled coatings positions it as a valuable tool in the production of advanced electronic and optical devices.</p>
      `,
      para3 : "",
      table1_th : 'Substrate Size',
      table1_th2 : '25 mm',
      table1_td : 'Speed',
      table1_td2 : '100 - 6,000 rpm (Variable)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Spin Coater',
      table2_td2 : 'Per Sample',
      routing : "spin-coating"
    },
    {
      id : 18,
      title : 'Nano coating techniques',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service18-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service18-sec-2.jpg',
      header : 'Nano coating techniques',
      heading: 'Spray Pyrolysis',
      description : "Spray pyrolysis is a process in which a thin film is deposited by spraying a solution on a heated surface, where the constituents react to form a chemical compound.",
      students : '₹1000 - Students',
      industries : '₹3000 - Industries',
      para1 : "",
      para2 : `
    <p>Spray pyrolysis is a specialized process used for the synthesis of nanostructures, where a precursor solution is sprayed onto a heated substrate. This technique facilitates the controlled decomposition of the precursor, leading to the formation of the desired final material on the substrate.</p>

    <h4>How It Works:</h4>
    <ul>
        <li>Precursor Solution: A solution containing the precursor material is sprayed or injected onto a hot substrate using a nano-porous nebulizer.</li>
        <li>Decomposition and Formation: The precursor decomposes on the hot substrate, forming the final desired material through chemical reactions.</li>
    </ul>

    <h4>Use Cases:</h4>
    <ol>
        <li>Thin Film Deposition: Widely used for depositing thin films with controlled thickness on various substrates.</li>
        <li>Oxide Deposition: Particularly useful for the deposition of oxides, where chemical reactants are selected to ensure volatile by-products at the deposition temperature.</li>
        <li>Nanostructure Synthesis: Applied in the synthesis of nanostructures, contributing to the development of advanced materials with tailored properties.</li>
        <li>Photovoltaic Devices: Utilized in the fabrication of thin films for solar cells and other photovoltaic devices.</li>
    </ol>

    <h4>Benefits:</h4>
    <ol>
        <li>Automated Operation: The equipment is fully automatic, offering convenience in operation with time setting and variable adjustments.</li>
        <li>Temperature Control: Allows precise control of the substrate temperature, ensuring optimal conditions for the decomposition and formation process.</li>
        <li>Versatility: Suitable for a range of materials, making it versatile for various applications, especially in the deposition of oxides.</li>
        <li>High-Quality Films: Facilitates the production of high-quality thin films with uniform thickness, crucial for applications in electronics and materials science.</li>
    </ol>

    <p>In summary, spray pyrolysis stands as a valuable technique in the realm of nanostructure synthesis and thin film deposition. Its automated operation, versatility, and ability to produce high-quality films make it a significant contributor to advancements in materials science and technology.</p>


      `,
      para3 :"",
      table1_th : 'Max Substrate Temperature',
      table1_th2 : '500°C',
      table1_td : 'Working Area',
      table1_td2 : '150 x 150 mm',
      table1_td3 : 'Air Pressure',
      table1_td4 : '0.5 to 2 Bar',
      table1_td5 : 'Nozzle Diameter',
      table1_td6 : '0.5 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Spray Pyrolysis',
      table2_td2 : 'Per Sample',
      routing : "spray-pyrolysis"
    },
    {
      id : 19,
      title : 'Nano coating techniques',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service19-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service19-sec-2.png',
      header : 'Nano coating techniques',
      heading: 'Dip Coating',
      description : "Dip coating is an industrial coating process which is used, for example, to manufacture bulk products such as coated fabrics and specialised coatings for example in the biomedical field.",
      students : '₹250 - Students',
      industries : '₹500 - Industries',
      para1 : "",
      para2 : `

    <p>Dip coating is a meticulous process where a substrate material undergoes immersion in conformal coating, followed by controlled drying. The method is widely utilized for the creation of thin film coatings, ensuring uniformity and precision in the application.</p>

    <h4>How It Works:</h4>
    <ul>
        <li>Submergence and Coating: Substrate material is fully immersed in a tank containing the desired coating material.</li>
        <li>The coated substrate is then lifted, allowing excess coating to drip off.</li>
        <li>Drying Techniques: The coated piece undergoes a drying phase, employing techniques such as force-drying or baking. Drying is critical for achieving the desired coating thickness and properties.</li>
    </ul>

    <h4>Equipment and Automation:</h4>
    <ul>
        <li>Dip Coater: An automatic unit with time settings and variable adjustments. Ensures consistency and repeatability in the coating process.</li>
    </ul>

    <h4>Use Cases:</h4>
    <ol>
        <li>Thin Film Production: Ideal for creating thin films with precise thickness and uniformity.</li>
        <li>Commonly employed in industries requiring controlled coating thickness.</li>
        <li>Precision Coating: Used in applications where precision in coating thickness is paramount. Ensures even distribution of coating material on complex surfaces.</li>
    </ol>

    <h4>Benefits:</h4>
    <ul>
        <li>Uniform Coating: Facilitates the achievement of uniform coating thickness across the substrate. Enhances the quality and performance of coated materials.</li>
        <li>Versatility: Adaptable to a variety of substrates and coating materials. Suitable for diverse industries and applications.</li>
        <li>Efficiency and Automation: Automatic equipment streamlines the coating process, reducing manual intervention. Enhances efficiency and repeatability in thin film production.</li>
    </ul>

    <p>Dip coating stands as a versatile and precise method for applying conformal coatings, especially in the production of thin films. Its ability to provide uniform and controlled coatings makes it invaluable in industries where precision and consistency are paramount, ensuring optimal performance of coated materials.</p>
      `,
      para3 : "",
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Dip Coater',
      table2_td2 : 'Per Sample',
      routing : "dip-coating"
    },
    {
      id : 20,
      title : 'Physical properties',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service20-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service20-sec-2.jpg',
      header : 'Physical properties',
      heading: 'Cold / Fired (MOR) Modulus of Rupture(max 3 samples), Flexural Strength',
      description : "Modulus of rupture (MOR) is like a three-point bend test. MOR measures the bond strength of the test specimen.",
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 : `
      <p>Flexural Strength, also known as the Modulus of Rupture (MOR), Bend Strength, or Fracture Strength is
    It is a mechanical parameter that gauges a material's ability to resist deformation under load, particularly in bending scenarios.</p>

    <h4>Formulas for Calculation:</h4>
    <p>For a rectangular sample under a load in three-point bending:</p>
    <p>FS = 3FL/2bd²</p>
    <ul>
        <li>F is the load (force) at the fracture point.</li>
        <li>L is the length of the support span.</li>
        <li>b is the width.</li>
        <li>d is the thickness.</li>
    </ul>

    <h4>Equipment:</h4>
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

    <h4>Use Cases:</h4>
    <ul>
        <li>Construction Materials:</li>
        <ul>
            <li>Assessing the strength of concrete beams, tiles, and masonry.</li>
        </ul>
        <li>Ceramic and Glass Products:</li>
        <ul>
            <li>Ensuring tiles and glass components can withstand bending forces.</li>
        </ul>
        <li>Automotive Components:</li>
        <ul>
            <li>Evaluating the flexural strength of vehicle parts.</li>
        </ul>
    </ul>

    <h4>How it Works:</h4>
    <p>Three-Point Bending:</p>
    <ul>
        <li>Applies a load at the center of a sample supported at both ends.</li>
        <li>Measures the maximum bending stress before fracture.</li>
        <li>Calculates flexural strength using the provided formula.</li>
    </ul>

    <h4>Benefits:</h4>
    <ul>
        <li>Structural Integrity:</li>
        <ul>
            <li>Determines a material's ability to resist bending deformation.</li>
        </ul>
        <li>Quality Assurance:</li>
        <ul>
            <li>Ensures products meet specified strength requirements.</li>
        </ul>
        <li>Design Optimization:</li>
        <ul>
            <li>Guides the design of materials for enhanced flexural performance.</li>
        </ul>
        <li>Safety Evaluation:</li>
        <ul>
            <li>Crucial for applications where materials are subjected to bending forces.</li>
        </ul>
    </ul>

    <p>Flexural strength, evaluated through modulus of rupture testing, is a critical parameter for materials used in construction, ceramics, and automotive applications. The equipment accommodates both laboratory-scale assessments and larger industrial tiles, providing valuable insights into a material's ability to withstand bending forces.</p>

       `,
      para3 :"",
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Cold / Fired MOR (Laboratory Scale)',
      table2_td2 : 'For 3 Samples',
      table1_td : 'Cold / Fired MOR',
      table1_td2 : 'Per Sample(For Industrial Tile sizes up to 600 x600 mm)',
      lists : ["FS = 3FL/'2bd2", "F is the load (force) at the fracture point", "L is the length of the support span", "b is width", "d is thickness"],
      routing :  'cold-fired-mor-modulus-of-rupture-flexural-strength'
    },
    {
      id : 21,
      title : 'Casting',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service21-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service21-sec-2.jpg',
      header : 'Casting',
      heading: 'Aluminium Stir Casting',
      description : "It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.",
      students : '₹2500 - Students',
      industries : '₹5000 - Industries',
      para1 : "",
      para2 : `
    <p>Stir casting is one of the most popular and widely used methods in which material formation (mainly Metal Alloys and Metal Matrix Composites) is done by melting metals and casting them into suitable shapes and sizes by pouring them into cavities. It is also called as liquid metallurgy.</p>

    <h4>Aluminium Stir Casting:</h4>
    <p>Aluminium stir casting, a prominent method in material formation, particularly for metal alloys and metal matrix composites (MMCs), stands as a cornerstone in the realm of liquid metallurgy. This widely utilized technique involves melting metals, including aluminium, and casting them into predefined shapes and sizes through controlled pouring into molds or cavities.</p>

    <p>The process of stir casting begins with the essential step of melting aluminium, a versatile and widely used metal known for its lightweight and excellent mechanical properties. The molten aluminium undergoes stirring, which is critical for achieving homogeneity and reinforcing the material with various components.</p>

    <p>This method is particularly advantageous for fabricating aluminium matrix composites (AMCs) and hybrid aluminium matrix composites. The economic efficiency of stir casting makes it a preferred choice for mass production in industrial applications. Its versatility is showcased in its ability to accommodate different substrate sizes, with a typical size of 25 mm, and variable stirring speeds ranging from 100 to 6,000 rpm. The equipment employed, known as a spin coater, facilitates controlled and uniform distribution of the molten material onto the substrate.</p>

    <p>The significance of aluminium stir casting lies not only in its cost-effectiveness but also in its ability to produce materials with enhanced mechanical and thermal properties. This makes it a valuable technique for applications demanding lightweight, high-strength materials, such as automotive components and aerospace structures. In a research or industrial setting, the quantity of material produced per sample and the processing time are critical considerations, and the adaptability of stir casting addresses these requirements efficiently.</p>

    <p>In conclusion, aluminium stir casting emerges as a pivotal process in the fabrication of advanced materials, offering a cost-effective and scalable solution for the production of aluminium matrix composites with tailored properties, positioning itself as a vital player in the domain of modern material engineering.</p>



      `
     ,
      table1_th : 'Substrate Size',
      table1_th2 : '25 mm',
      table1_td : 'Speed',
      table1_td2 : '100 - 6,000 rpm (Variable)',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Spin Coater',
      table2_td2 : 'Per Sample',
      routing : "aluminium-stir-casting"
    },
    {
      id : 22,
      title : 'Casting',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service22-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service22-sec-2.png',
      header : 'Casting',
      heading: 'Magnesium Stir Casting',
      description : "It involves mixing molten metals to create high-performance materials resistant to wear, corrosion, and extreme temperatures.",
      students : '₹4000 - Students',
      industries : '₹6000 - Industries',
      para1 :"",
      para2 : `
          <p>Stir casting is one of the most popular and widely used methods in which material formation (mainly Metal Alloys and Metal Matrix Composites) is done by melting metals and casting them into suitable shapes and sizes by pouring them into cavities. It is also called liquid metallurgy.</p>

          <h4>Magnesium Stir Casting:</h4>
          <p>Magnesium stir casting emerges as a leading method in material formation, particularly for crafting Metal Alloys and Metal Matrix Composites (MMCs). Often referred to as liquid metallurgy, this widely adopted process involves the meticulous melting of metals and their subsequent casting into specifically designed shapes and sizes by carefully pouring the molten alloy into dedicated cavities.</p>

          <p>This versatile method finds extensive application in the casting of magnesium alloy and magnesium alloy composites. The incorporation of reinforcing particles into the magnesium matrix is achieved through proprietary methods, with the mixing process facilitated by a stirrer within the fully automatic stir casting model.</p>

          <p>The equipment used for magnesium stir casting is designed for efficiency and precision. The model operates fully automatically, ensuring consistency and repeatability in the manufacturing process. The weight capacity ranges from 500 grams to 2 kilograms, providing flexibility for different production requirements. The mold size, at 30 mm diameter and 200 mm length, allows for the creation of diverse shapes and sizes.</p>

          <h4>Use Cases:</h4>
          <p>Magnesium stir casting finds invaluable application in industries where lightweight materials with enhanced mechanical properties are imperative. In the automotive sector, this process is instrumental in crafting magnesium alloy components that contribute to reduced vehicle weight, improving fuel efficiency without compromising on strength. The aerospace industry also benefits from magnesium stir casting, creating components that meet stringent weight and performance criteria.</p>

          <h4>Benefits:</h4>
          <ul>
              <li><strong>Lightweight and High-Strength:</strong> Magnesium, known for its low density and high strength-to-weight ratio, ensures that components produced through stir casting exhibit superior strength while being lightweight.</li>
              <li><strong>Versatility in Shape and Size:</strong> The stir casting model's adaptability in terms of mold size and weight capacity allows for the creation of a wide range of components tailored to specific applications.</li>
              <li><strong>Fully Automatic Operation:</strong> The fully automatic nature of the stir casting model enhances efficiency, repeatability, and ease of operation, contributing to streamlined production processes.</li>
              <li><strong>Material Efficiency:</strong> The method's ability to incorporate reinforcing particles into the magnesium matrix enhances material properties, resulting in materials with improved performance characteristics.</li>
          </ul>

          <p>In summary, magnesium stir casting represents a cutting-edge technique with widespread applications in industries demanding lightweight, high-performance materials. Its versatility, efficiency, and ability to produce components with superior properties position it as a key player in advancing material engineering and manufacturing processes.</p>

      `
    ,
      table1_th : 'Stir casting model',
      table1_th2 : 'fully automatic',
      table1_td : 'Material',
      table1_td2 : 'Aluminium',
      table1_td3 : 'Weight',
      table1_td4 : '500 gram to 2 kg',
      table1_td5 : 'Mould size',
      table1_td6 : '30 mm dia x200 mm length',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Magnesium Stir Casting',
      table2_td2 : 'Per Run',
      routing : "magnesium-stir-casting"
    },
    {
      id : 23,
      title : 'Shaping',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service23-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service23-sec-2.jpg',
      header : 'Shaping',
      heading: 'Extruder',
      description : 'Extruders are screw reactors, and extrusion is a series of processes which includes mixing, forming, puffing and drying.',
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `

    <p>An extruder serves as a screw reactor, driving the process of extrusion, which involves a sequence of operations including mixing, forming, puffing, and drying. This versatile tool finds applications across various industries, most notably in ceramics and metalworking.</p>

    <h4>How It Works:</h4>
    <ul>
        <li>Continuous Process: Extrusion is a continuous process where materials are forced through a series of dies, shaping them into desired forms.</li>
        <li>Screw-Type Mechanism: In commercial screw-type extruders, a screw auger consistently propels materials through a die, resulting in various shapes like cylindrical rods, pipes, bars, and plates.</li>
        <li>Metal Extrusion: In metalworking, extrusion transforms a metal billet into a uniform cross-sectional length by pressing it through a die, with aluminum being a particularly amenable material for this process.</li>
    </ul>

    <h4>Use Cases:</h4>
    <ul>
        <li>Ceramic Manufacturing: Extrusion is widely employed in ceramics manufacturing for its efficiency in continuous production, producing shapes like rods, pipes, bars, and plates.</li>
        <li>Plastic Production: Plastic feed materials are molded into specific shapes using extruders, facilitating the production of diverse plastic products.</li>
        <li>Metal Extrusion: Aluminum, among other metals, undergoes extrusion for creating uniform cross-sectional lengths for various applications.</li>
        <li>Binder-Assisted Forming: Both clay and non-clay materials are formed into cylindrical or square shapes with the aid of binders, demonstrating the versatility of extruders.</li>
    </ul>

    <h4>Benefits:</h4>
    <ul>
        <li>Continuous Production: Enables continuous and efficient production processes, reducing downtime and increasing output.</li>
        <li>Shape Versatility: Capable of forming a variety of shapes, from simple cylinders and pipes to complex bars and plates.</li>
        <li>Efficient Material Processing: Ensures efficient mixing, forming, and shaping of materials, contributing to overall manufacturing efficiency.</li>
        <li>Binder-Assisted Forming: Facilitates the use of binders to shape materials, offering flexibility in the manufacturing of diverse products.</li>
    </ul>

    <p>The extruder stands as a key player in manufacturing, driving continuous processes across ceramics, plastics, and metalworking. Its versatility, efficiency, and ability to shape materials make it an indispensable tool in modern industrial production.</p>


      `,
      para3 : "",
      routing : "extruder"
    },
    {
      id : 24,
      title : 'Nano coating techniques',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service24-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service24-sec-2.jpg',
      header : 'Nano coating techniques',
      heading: 'Chemical Vapour Deposition (CVD)',
      description : "It is a technique where a solid material is deposited from a vapor by some chemical reaction occurring on or in the vicinity of a normally heated substrate surface",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `

    <p>Chemical Vapour Deposition (CVD) is a sophisticated coating process that relies on thermally induced chemical reactions occurring at the surface of a heated substrate. In this technique, reagents are supplied in gaseous form, leading to the formation of coatings with diverse properties.</p>

    <h4>How It Works:</h4>
    <ul>
        <li>Gaseous Reagent Supply: Reagents are introduced in gaseous form to the surface of a heated substrate.</li>
        <li>Thermally Induced Reactions: Chemical reactions are thermally induced, promoting the deposition of coating materials on the substrate.</li>
        <li>Nanostructure Development: CVD is prominently employed in nanotechnology for the precise development of nano materials with varied structures and dimensions.</li>
    </ul>

    <h4>Use Cases:</h4>
    <ul>
        <li>Carbon Nano Tubes (CNTs): CVD is extensively utilized in the preparation of Carbon Nano Tubes, offering a method for controlled synthesis.</li>
        <li>Nano Thin Film Coatings: Applied in the development of diverse Nano Thin Film Coatings with tailored properties.</li>
    </ul>

    <h4>Benefits:</h4>
    <ul>
        <li>Nanotechnology Advancements: Plays a pivotal role in nanotechnology, contributing to the creation of nano materials with specific structures.</li>
        <li>Versatile Applications: Widely employed for the preparation of Carbon Nano Tubes and Nano Thin Film Coatings, showcasing versatility.</li>
        <li>Precise Nanostructure Control: Allows precise control over the dimensions and structures of nano materials, crucial for tailored applications.</li>
        <li>Uniform Coating: Results in the deposition of coatings with uniform thickness, ensuring consistency in material properties.</li>
    </ul>

    <h4>Technological Impact:</h4>
    <p>Chemical Vapour Deposition stands at the forefront of technological advancements, particularly in nanotechnology. Its ability to facilitate controlled nanostructure development and diverse coating applications underscores its significance in materials science and engineering.</p>

    <p>CVD plays a pivotal role in advancing nanotechnology and materials science, offering a powerful method for the controlled synthesis of nano materials and the development of specialized coatings.</p>


      `,
      lists : [],
      routing : "chemical-vapour-deposition-cvd"
    },
    {
      id : 25,
      title : 'Casting',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service25-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service25-sec-2.jpg',
      header : 'Casting',
      heading: 'Slip Casting',
      description : "Slip Casting is a technique used for the production of complex shapes from a suspension poured into a mold.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
          <p>Slip casting is a technique most widely used in the field of geopolymers. It is used for the production of complex shapes from a suspension poured into a mold. The suspension is made of raw materials in powder form, dispersed in a liquid which, in the case of geopolymers, is water.</p>

          <p>Slip casting is a meticulous technique employed in ceramics to produce intricate and precise forms. The process begins with a slip—a liquid mixture of clay and water, possessing a consistency similar to cream. The slip is poured into a plaster mold, and as the plaster absorbs water from the slip, a clay layer forms against the mold surface.</p>

          <p>To ensure a successful slip casting process, several crucial steps should be followed. First and foremost, the plaster mold must be meticulously prepared, ensuring it is free of imperfections that could affect the final product. Proper drying time is vital, allowing the clay to set and attain the desired thickness against the mold walls.</p>

          <p>Controlling the casting time is essential, as it influences the thickness of the final product. The removal of excess slip, known as "draining," demands precision. After draining, the slip must be allowed to set further to achieve the desired thickness for the finished ceramic piece.</p>

          <p>Attention to ambient conditions, including humidity and temperature, is crucial throughout the slip casting process. Proper drying and firing schedules are imperative for preventing defects and ensuring the final product's structural integrity.</p>

          <p>In essence, slip casting is an artful and meticulous process demanding attention to detail at every stage, from mold preparation to the final firing, resulting in intricately crafted ceramic pieces with precision and finesse.</p>

      `
      ,
      routing : "slip-casting"
    },
    {
      id : 26,
      title : 'Material Preparation',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service26-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service26-sec-2.png',
      header : 'Material Preparation',
      heading: 'Sol Gel Route',
      description : "In materials science, the sol–gel process is a method for producing solid materials from small molecules.",
      industries : '₹ - Enquire for Estimate',
      para1 :"",

      para2 :`
          <p>The Sol-Gel process, a sophisticated wet chemical method, orchestrates the synthesis of diverse nanostructures, primarily focusing on metal oxide nanoparticles. This intricate dance of molecules involves dissolving a molecular precursor, typically a metal alkoxide, in water or alcohol. The subsequent transformation into a gel, achieved through controlled heating and stirring via hydrolysis/alcoholysis, sets the stage for crafting nano wonders.</p>

          <h4>Key Components (provided):</h4>
          <p>Chemicals for Sol-Gel Method:</p>
          <p>Tailored to the specific needs of the customer, these chemicals form the foundation for precision in nanostructure synthesis.</p>
          <p>Magnetic Stirrer cum Heater (2 Numbers):</p>
          <p>Essential tools in the Sol-Gel symphony, providing controlled agitation and heat for meticulous reactions.</p>
          <p>Hot Air Oven:</p>
          <p>A vital element in the process, the hot air oven plays a crucial role in facilitating the transformation of gels into functional nanostructures.</p>

          <h4>Versatility in Nano Material Synthesis:</h4>
          <p>Ceramic Nano Materials:</p>
          <p>Sol-Gel stands as the method of choice for preparing a wide array of ceramic nano materials. Its wet chemical route enables the synthesis of colloidal dispersions of oxides, paving the way for the creation of powders, fibers, thin films, and monoliths.</p>

          <h4>Crystallization and Beyond:</h4>
          <p>Gel Medium Transformation:</p>
          <p>The magic unfolds as crystals emerge from the gel medium. This transformation is orchestrated by inducing a state of super saturation through techniques like evaporation or cooling.</p>

          <h4>Applications:</h4>
          <p>Diverse Nanostructures:</p>
          <p>Sol-Gel's prowess extends to diverse nanostructures, with applications spanning powders, fibers, thin films, and monoliths. Its adaptability fuels advancements in materials science and nanotechnology.</p>

          <p>In the realm of nanostructure synthesis, the Sol-Gel Route emerges not just as a method but as a choreographed performance, delicately crafting the future of materials science. From tailored chemical compositions to controlled transformations, every step in the Sol-Gel dance contributes to the creation of nano wonders with real-world applications.</p>


      `
     ,
      lists : ['Chemicals for Sol- Gel Method (As required by the customer)', 'Magnetic Stirrer cum Heater - 2 Numbers', 'Hot Air Oven'],
      routing : "sol-gel-route"
    },
    {
      id : 27,
      title : 'Material Preparation',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service27-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service27-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Planetary Ball Mill with Alumina Jar(500ml)',
      description : "Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
          <p>Planetary Ball Mill is designed for mixing, fine grinding, and preparing small volume high-tech material production, which features with small volume, high efficiency, low noise.</p>

          <h4>Planetary Ball Mill with Alumina Jar:</h4>
          <p><strong>Overview:</strong> The Planetary Ball Mill with Alumina Jar stands as a sophisticated instrument designed for the meticulous mixing, fine grinding, and preparation of small volumes of high-tech materials. This cutting-edge equipment combines efficiency, compact design, and minimal noise, catering to the exacting demands of advanced ceramics and nanotechnology applications.</p>

          <h4>Key Features:</h4>
          <ul>
              <li><strong>Automatic Operation:</strong> The equipment operates seamlessly with automated functions, ensuring precision and ease of use.</li>
              <li><strong>Time Setting:</strong> Users can precisely control the milling duration with adjustable time settings, facilitating optimized results.</li>
              <li><strong>Variable Speed Adjustments:</strong> Variable speed adjustments provide flexibility to meet diverse milling requirements with efficiency.</li>
          </ul>

          <h4>Specifications:</h4>
          <ul>
              <li><strong>Vial Material:</strong> Crafted from high-quality alumina, the vial ensures compatibility with a range of materials and durability.</li>
              <li><strong>Vial Capacity:</strong> The 500 ml capacity allows for small-volume, yet efficient, material production.</li>
              <li><strong>Grinding Media:</strong> Alumina Balls (10 mm dia - 30 Nos) contribute to effective and uniform grinding.</li>
              <li><strong>Loading Capacity:</strong> With a loading capacity ranging from 5g to 100g (depending on material density), the mill accommodates varying sample sizes.</li>
              <li><strong>Material Loss:</strong> The minimal material loss of 2% ensures efficient utilization and reproducibility.</li>
          </ul>

          <h4>Use Cases:</h4>
          <ul>
              <li><strong>Nanomaterial Production:</strong> Ideal for nanotechnology applications, the mill achieves particle size reduction from Micron to Nano within a short timeframe.</li>
              <li><strong>Advanced Ceramics:</strong> Specifically tailored for advanced ceramics, the mill addresses the precision requirements of ceramic material preparation.</li>
              <li><strong>Laboratory Research:</strong> Widely used in laboratories, the Planetary Ball Mill facilitates diverse research endeavors with its versatile capabilities.</li>
          </ul>

          <p>The Planetary Ball Mill with Alumina Jar emerges as a reliable and advanced tool for laboratories and industries engaged in high-tech material production. Its features and capabilities position it as a cornerstone in the pursuit of precision and efficiency in materials processing.</p>


      `,

      para3 :"",
      table1_th : 'Vial Material',
      table1_th2 : 'Alumina',
      table1_td : 'Vial Capacity',
      table1_td2 : '500 ml',
      table1_td3 : 'Grinding Media',
      table1_td4 : 'Alumina Balls (10 mm dia - 30 Nos)',
      table1_td5 : 'Max. Loading Capacity',
      table1_td6 : '100g (Depends upon Density of material)',
      table1_td7 : 'Min. Loading Capacity',
      table1_td8 : '5g',
      table1_td9 : 'Material Loss',
      table1_td10 : '2%',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Planetary Ball Mill with Alumina Jar',
      table2_td2 : '100 gms max for 1 Hour',
      routing : "planetary-ball-mill-with-alumina-jar-500ml"
    },
    {
      id : 28,
      title : 'Material Preparation',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service28-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service28-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Jar Mill (5 litre)',
      description : "Jar Mills are used for wet or dry grinding, mixing and blending for a wide variety of materials like ores, chemicals, paints, ceramics, glass, etc.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
          <p>Jar Mills are used for wet or dry grinding, mixing, and blending for a wide variety of materials like ores, chemicals, paints, ceramics, glass, etc. Different size jars are available for different grinding conditions. A bench or floor model Jar Mills from Gilson have capacities from one to six jars.</p>

          <h4>Overview:</h4>
          <p>Jar Mills stand as versatile workhorses in laboratories and industrial settings, facilitating both wet and dry grinding, mixing, and blending of diverse materials. From ores and chemicals to paints, ceramics, and glass, Jar Mills from Gilson offer a flexible solution for materials processing.</p>

          <h4>Key Features:</h4>
          <ul>
              <li>Automatic Operation: The Jar Mill operates seamlessly with automatic functions, streamlining the grinding and mixing processes.</li>
              <li>Time Setting: Users can precisely control the duration of operations with adjustable time settings, ensuring optimal results.</li>
              <li>Variable Speed Adjustments: The flexibility of variable speed adjustments accommodates different grinding conditions, providing adaptability for various materials.</li>
          </ul>

          <h4>Specifications:</h4>
          <ul>
              <li>Jar Material: Crafted from durable stainless steel, the jars ensure longevity and resistance to corrosion.</li>
              <li>Grinding Media: High Purity alumina grinding media enhances the efficiency of the grinding and mixing processes.</li>
              <li>Jar Capacity: With a substantial 5-liter capacity, the Jar Mill accommodates sizable quantities for efficient batch processing.</li>
          </ul>

          <h4>Use Cases:</h4>
          <ul>
              <li>Laboratory Applications: Ideal for laboratories, Jar Mills are employed in research and experimentation across diverse fields.</li>
              <li>Industrial Grinding: In industrial settings, Jar Mills find applications in large-scale grinding, mixing, and blending operations.</li>
              <li>Materials Processing: From ores to ceramics, the Jar Mill caters to the processing needs of a broad spectrum of materials.</li>
          </ul>

          <h4>Versatility in Grinding:</h4>
          <p>Jar Mills, available in bench or floor models, offer versatility with capacities ranging from one to six jars. This adaptability makes them indispensable for laboratories exploring varied materials and industrial operations requiring efficient materials processing. Whether wet or dry grinding, Jar Mills deliver consistent and reliable results across a spectrum of applications.</p>


      `,
      table1_th : 'Jar material',
      table1_th2 : 'Stainless steel',
      table1_td : 'Grinding Media',
      table1_td2 : 'High Purity alumina',
      table1_td3 : 'Jar capacity',
      table1_td4 : '5 liter',
      routing : "jar-mill"
    },
    {
      id : 29,
      title : 'Material Preparation',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/glovebox.webp',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service29-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Glove Box',
      description : "A glovebox is a sealed container that is designed to allow one to manipulate objects where a separate atmosphere is desired.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 :`
          <p>A Glove Box, or glovebox, stands as a sealed container designed for manipulating objects in controlled environments, safeguarding workers during the handling of hazardous materials or substances requiring a specific atmosphere. Various types, including inflatable glove bags, basic glove boxes, controlled atmosphere glove boxes, and those designed for biohazard or multi-hazard situations, cater to diverse applications.</p>

          <h4>Use Cases:</h4>
          <ul>
              <li>Chemical Synthesis: Inert atmosphere glove boxes find extensive use in chemical synthesis processes, ensuring a controlled environment for precise reactions.</li>
              <li>Organic Electronics: Glove boxes contribute to the development and manipulation of materials in organic electronics, where a controlled atmosphere is crucial for optimal performance.</li>
              <li>Additive Manufacturing: Applications in additive manufacturing benefit from glove boxes, preventing contamination and maintaining the purity of materials.</li>
              <li>Battery Technology Development: The controlled environment provided by glove boxes proves essential in the research and development of advanced battery technologies.</li>
              <li>Materials Handling and Storage: Glove boxes facilitate the safe handling and storage of sensitive materials, shielding them from external contaminants.</li>
              <li>Perovskite Electronics: Precise control of atmospheric conditions within glove boxes is vital for the delicate processes involved in perovskite electronics.</li>
          </ul>

          <h4>Benefits:</h4>
          <ul>
              <li>Worker Safety: Protects workers from exposure to hazardous materials, ensuring a secure environment for intricate tasks.</li>
              <li>Contamination Prevention: Safeguards materials and processes from external contaminants, maintaining the integrity of sensitive substances.</li>
              <li>Controlled Atmosphere: Provides a precisely regulated environment, crucial for applications where atmospheric conditions significantly impact outcomes.</li>
              <li>Versatility: Various glove box types cater to specific needs, offering versatility for different industries and applications.</li>
              <li>Moisture and Oxygen Exclusion: Mitigates the risk of compromised atmospheres by minimizing physical leaks and preventing ingression of moisture and oxygen.</li>
          </ul>

          <p>In conclusion, Glove Boxes play a pivotal role in ensuring safety, precision, and controlled environments across a spectrum of industries, making them indispensable for processes ranging from chemical synthesis to advanced electronics and materials research.</p>
      `
    ,
      para3 : "",
      routing : "glove-box"
    },
    {
      id : 30,
      title : 'Material Preparation',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service30-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service30-sec-2.jpg',
      header : 'Material Preparation',
      heading: 'Planetary Ball Mill with Porcelain Jar(500ml)',
      description : "Planetary ball mills are mainly used in laboratories for grinding sample material down to very small sizes.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
    <p>Planetary Ball Mill is designed for mixing, fine grinding, and preparing small volume high-tech material production, which features with small volume, high efficiency, low noise.</p>

    <h4>Planetary Ball Mill with Porcelain Jar (500ml):</h4>

    <h4>Overview:</h4>
    <p>The VBCC Planetary Ball Mill, equipped with a Porcelain Jar, stands as a versatile instrument essential for the milling and mixing of various materials, specifically tailored for Traditional Ceramics applications. This state-of-the-art equipment is designed to reduce particle sizes from millimeters (10-3mm) to micron dimensions (10-6µm) with utmost precision.</p>

    <h4>Key Features:</h4>
    <ul>
        <li>Automatic Operation: The equipment operates in a fully automatic mode, ensuring user-friendly and efficient performance.</li>
        <li>Time Setting: Users benefit from precise control over the milling duration, enhancing reproducibility and customization.</li>
        <li>Variable Speed Adjustments: Variable speed adjustments provide flexibility, accommodating diverse milling requirements with optimal efficiency.</li>
    </ul>

    <h4>Specifications:</h4>
    <ul>
        <li>Vial Material: Crafted from high-quality Porcelain, the vial ensures compatibility with Traditional Ceramics and durability.</li>
        <li>Vial Capacity: The 500 ml capacity supports efficient processing of medium-sized batches.</li>
        <li>Grinding Media: Options of Alumina and Steatite grinding media in 10mm and 20mm diameters offer versatility for different materials.</li>
        <li>Loading Capacity: With a loading capacity ranging from 50g to 300g (depending on material density), the mill caters to varying sample sizes.</li>
    </ul>

    <h4>Use Cases:</h4>
    <ul>
        <li>Traditional Ceramics: Tailored for Traditional Ceramics, the mill excels in applications such as casting, providing precision in material preparation.</li>
        <li>Particle Size Reduction: Efficiently reduces particle sizes from millimeters to microns, catering to a broad range of milling needs.</li>
        <li>Laboratory and Industrial Applications: Suitable for both laboratory research and industrial applications, offering versatility in material processing.</li>
    </ul>

    <p>The Planetary Ball Mill with Porcelain Jar emerges as a reliable and advanced tool for applications in Traditional Ceramics. Its automatic operation, variable speed adjustments, and robust design make it a valuable asset for achieving precision and efficiency in materials processing.</p>
      `
      ,
      table1_th : 'Vial Material',
      table1_th2 : 'Porcelain Jar',
      table1_td : 'Vial Capacity',
      table1_td2 : '500 ml',
      table1_td3 : 'Grinding Media',
      table1_td4 : 'Alumina / Steatite',
      table1_td5 : 'Grinding Media Size',
      table1_td6 : '10mm & 20mm dia',
      table1_td7 : 'Max. Loading Capacity',
      table1_td8 : '300g (Depends upon Density of material)',
      table1_td9 : 'Min. Loading Capacity',
      table1_td10 : '50g',
      routing : "planetary-ball-mill-with-porcelain-jar-500ml"
    },
    {
      id : 31,
      title : 'Physical properties',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service31-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service31-sec-2.png',
      header : 'Physical properties',
      heading: 'Bulk Density, Porosity, Water Absorption, Fired Shrinkage',
      description : "Finding Bulk Density, Porosity, Water Absorption, Fired Shrinkage",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
    <h4>Evaluating Material Properties</h4>

    <h4>Bulk Density:</h4>
    <p>Calculation: Determined by measuring the volume of 100 g of powder after compaction.</p>
    <p>Bulk Density = Sintered Weight / (Soaked Wt - Suspended Wt) g/cc.</p>
    <p>Significance: Indicates the mass of a material per unit volume. Essential for understanding the compactness of powders and sintered materials.</p>

    <br>

    <h4>Porosity:</h4>
    <p>Calculation: Measured as a fraction of void spaces over the total volume or as a percentage.</p>
    <p>Porosity = (Soaked Wt - Sintered Wt) / (Soaked Wt - Suspended Wt) x 100%.</p>
    <p>Significance: Reflects the void fraction in a material. Crucial for assessing the material's structure and potential applications.</p>

    <br>

    <h4>Water Absorption:</h4>
    <p>Calculation: Defined as the ratio of water absorbed to the weight of the dry material.</p>
    <p>Water Absorption = (Soaked Wt - Sintered Wt) / Sintered Weight x 100%.</p>
    <p>Significance: Measures a material's capacity to absorb water. Essential for understanding material behavior in various environments.</p>

    <br>

    <h4>Fired Shrinkage:</h4>
    <p>Calculation: Comparative indicator of the degree of vitrification during firing.</p>
    <p>Fired Shrinkage = (Dia of After Drying - Dia of After Firing) / Dia of After Drying.</p>
    <p>Significance: Reflects the extent of shrinkage during the firing process. Crucial for controlling the dimensional changes in ceramics.</p>

    <br>

    <h4>Use Cases:</h4>
    <p>Quality Control: Essential metrics for quality control in ceramics and refractory production.</p>
    <p>Material Characterization: Provides insights into the physical properties of sintered materials.</p>
    <p>Process Optimization: Enables optimization of firing processes for desired shrinkage and properties.</p>

    <br>

    <h4>Benefits:</h4>
    <p>Quality Assurance: Ensures consistency and quality in material production.</p>
    <p>Process Efficiency: Guides process adjustments for optimal results.</p>
    <p>Material Performance: Aids in predicting material behavior in various conditions.</p>

    <br>

    <p>Understanding bulk density, porosity, water absorption, and fired shrinkage is fundamental for ensuring the quality, performance, and application-specific suitability of materials, particularly in the ceramics and refractory industries.</p>
      `,
      para3 : "",
      para4 :"",
      routing :  'bulk-density-porosity-water-absorption-fired-shrinkage'
    },
    {
      id : 32,
      title : 'Physical properties',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service32-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service32-sec-2.png',
      header : 'Physical properties',
      heading: 'Particle Size Distribution',
      description : "A particle size distribution indicates the percentage of particles of a certain size (or in a certain size interval). These intervals are also called size classes or fractions.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
    <h4>Definition:</h4>
    <p>Particle size distribution denotes the percentage of particles within specified size intervals in a material.</p>

    <h4>Methods:</h4>
    <p><strong>Laser Light Scattering:</strong></p>
    <p>Utilized for nano particles, measuring sizes from 0.3 nm up to 5 mm.</p>
    <p>Suitable for a wide range of particle sizes, including those up to 30 mm.</p>

    <br>

    <h4>How it Works:</h4>
    <p><strong>Granulometry:</strong></p>
    <p>Involves determining the relative amount of particles based on size, often expressed as a mathematical function or values.</p>
    <p>Laser light scattering measures particle sizes by analyzing light scattering patterns.</p>

    <br>

    <h4>Use Cases:</h4>
    <p><strong>Quality Control:</strong> Crucial in industries to ensure product consistency and quality.</p>
    <p><strong>Pharmaceuticals:</strong> Particle size influences drug delivery and bioavailability.</p>
    <p><strong>Chemical Processes:</strong> Affects reaction rates, surface area, and material properties.</p>
    <p><strong>Nanotechnology:</strong> Essential for controlling nanomaterial properties and behaviors.</p>

    <br>

    <h4>Benefits:</h4>
    <p><strong>Optimized Processes:</strong> Guides adjustments in manufacturing processes for desired particle characteristics.</p>
    <p><strong>Product Quality:</strong> Ensures uniformity and quality in the final product.</p>
    <p><strong>Performance Prediction:</strong> Helps predict material behavior in various applications.</p>
    <p><strong>Research and Development:</strong> Informs material design and development strategies.</p>

    <br>

    <p>Particle size distribution analysis is a fundamental tool across industries, offering insights into material properties crucial for product quality, performance, and the success of various processes. Whether in pharmaceuticals, chemicals, or nanotechnology, understanding and controlling particle size is central to achieving desired outcomes.</p>

      `,
      routing :  'particle-size-distribution'
    },
    {
      id : 33,
      title : 'Physical properties',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service33-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service33-sec-2.jpg',
      header : 'Physical properties',
      heading: 'Cold Crushing Strength (CSS)',
      description : "The Cold Crushing Strength (CCS) represents the ability of a product to resist failure under compressive load at room temperature.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
    <p>Cold Crushing Strength (CCS) is a compressive test measuring a material's ability to withstand a given load, usually assessed at room temperature after firing to specific temperatures.</p>

    <h4>Measurement Standards:</h4>
    <p>Measured by ASTM C133.</p>
    <p>Provides an indication of abrasion resistance.</p>

    <h4>Importance in Refractories:</h4>
    <ul>
        <li>Particle Distribution and Packing:</li>
        <ul>
            <li>Essential for developing good CCS.</li>
        </ul>
        <li>Relevance to Refractory Performance:</li>
        <ul>
            <li>Indirectly linked, serves as an indicator of abrasion resistance.</li>
            <li>High CCS correlates with higher resistance to slag attack.</li>
        </ul>
    </ul>

    <h4>Use Cases:</h4>
    <ul>
        <li>Quality Assessment:</li>
        <ul>
            <li>Determines the strength of refractory materials.</li>
        </ul>
        <li>Material Selection:</li>
        <ul>
            <li>Influences choices in refractory linings based on anticipated mechanical stresses.</li>
        </ul>
        <li>Insulating Bricks:</li>
        <ul>
            <li>Critical for porous yet strong refractory insulating bricks.</li>
        </ul>
    </ul>

    <h4>How it Works:</h4>
    <p>Compressive Test:</p>
    <ul>
        <li>Subjects a specimen to a compressive force to assess its strength.</li>
        <li>Typically measured at room temperature post-firing.</li>
    </ul>

    <h4>Benefits:</h4>
    <ul>
        <li>Abrasion Resistance:</li>
        <ul>
            <li>Higher CCS indicates greater resistance to abrasion.</li>
        </ul>
        <li>Performance Prediction:</li>
        <ul>
            <li>Provides insights into the ability of refractories to withstand mechanical stresses.</li>
        </ul>
        <li>Material Development:</li>
        <ul>
            <li>Guides the development of refractory materials with desired strength characteristics.</li>
        </ul>
    </ul>

    <p>Cold Crushing Strength is a pivotal parameter in refractory assessments, influencing material selection, quality evaluation, and performance predictions. Its application spans various industries where refractory materials play a crucial role in withstanding mechanical stresses and environmental conditions.</p>
         `,
      routing :  'cold-crushing-strength-css'
    },
    {
      id : 34,
      title : 'Physical properties',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service34-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service34-sec-2.jpg',
      header : 'Physical properties',
      heading: 'Impact Resistance',
      description : "Impact resistance (or impact strength) describes a material's or a product's ability to absorb shock or impact energy without breaking.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
    <p>Impact resistance, or impact strength, refers to a material's or product's capability to absorb shock or impact energy without undergoing fracture or breakage.</p>

    <h4>Characteristics:</h4>
    <ul>
        <li>Shock Absorption:</li>
        <ul>
            <li>Ability to absorb and dissipate energy from sudden impacts.</li>
        </ul>
        <li>Material Integrity:</li>
        <ul>
            <li>Maintains structural integrity when subjected to impact forces.</li>
        </ul>
        <li>Notched Specimen Test:</li>
        <ul>
            <li>Involves striking a notched or V-notch specimen with a pendulum hammer.</li>
            <li>Measures energy absorbed during fracture.</li>
        </ul>
    </ul>

    <h4>Use Cases:</h4>
    <ul>
        <li>Consumer Products:</li>
        <ul>
            <li>Mobile devices, protective cases, and eyewear.</li>
        </ul>
        <li>Automotive Components:</li>
        <ul>
            <li>Bumpers, safety features, and body panels.</li>
        </ul>
        <li>Construction Materials:</li>
        <ul>
            <li>Building components and impact-resistant glass.</li>
        </ul>
        <li>Sporting Equipment:</li>
        <ul>
            <li>Helmets, pads, and sports gear.</li>
        </ul>
    </ul>

    <h4>How it Works:</h4>
    <ul>
        <li>Notched Specimen Test:</li>
        <ul>
            <li>Utilizes a pendulum hammer to strike a notched or V-notch specimen.</li>
            <li>Measures the energy absorbed by the material during fracture.</li>
            <li>Indicates the material's ability to resist breakage under impact.</li>
        </ul>
    </ul>

    <h4>Benefits:</h4>
    <ul>
        <li>Durability Enhancement:</li>
        <ul>
            <li>Increases the ability of materials to withstand sudden forces.</li>
        </ul>
        <li>Safety Assurance:</li>
        <ul>
            <li>Crucial for products designed to protect users from impacts.</li>
        </ul>
        <li>Product Longevity:</li>
        <ul>
            <li>Reduces the risk of damage and breakage during use.</li>
        </ul>
        <li>Optimized Designs:</li>
        <ul>
            <li>Enables the design of components for specific impact or shock loads.</li>
        </ul>
    </ul>

    <p>Impact resistance is a pivotal property ensuring materials and products can endure sudden forces without compromising their integrity. Testing methodologies, such as the notched specimen test, provide valuable insights into a material's ability to absorb impact energy, guiding the design of durable and resilient products across diverse industries.</p>
         `,
      para3 : "",
      routing :  'impact-resistance'
    },
    {
      id : 35,
      title : 'Physical properties',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service35-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service35-sec-2.gif',
      header : 'Physical properties',
      heading: 'Abrasion Resistance',
      description : "Abrasion resistance refers to the ability of materials and structures to withstand abrasion.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
    <p>Abrasion resistance is the capacity of materials and structures to endure wear and tear caused by friction, preventing deterioration and maintaining their original structure.</p>

    <h4>Characteristics:</h4>
    <ul>
        <li>Mechanical Wear:</li>
        <ul>
            <li>Resistance to wearing down or rubbing away through friction.</li>
        </ul>
        <li>Hardness:</li>
        <ul>
            <li>The harder the material, the higher its resistance to abrasion.</li>
        </ul>
        <li>Abrasion Test:</li>
        <ul>
            <li>Measures material loss using abrasive paper over a specified time.</li>
        </ul>
    </ul>

    <h4>Use Cases:</h4>
    <ul>
        <li>Industrial Machinery:</li>
        <ul>
            <li>Components exposed to continuous friction.</li>
        </ul>
        <li>Automotive Applications:</li>
        <ul>
            <li>Tires, brake systems, and other parts.</li>
        </ul>
        <li>Construction Materials:</li>
        <ul>
            <li>Flooring, concrete surfaces, and coatings.</li>
        </ul>
        <li>Mining Equipment:</li>
        <ul>
            <li>Tools, conveyor belts, and drilling components.</li>
        </ul>
    </ul>

    <h4>How it Works:</h4>
    <ul>
        <li>Abrasion Test:</li>
        <ul>
            <li>Employs abrasive paper to simulate frictional wear.</li>
            <li>Measures material loss over a defined period.</li>
            <li>Indicates the material's ability to maintain integrity under abrasive conditions.</li>
        </ul>
    </ul>

    <h4>Benefits:</h4>
    <ul>
        <li>Material Longevity:</li>
        <ul>
            <li>Enhances the lifespan of materials exposed to abrasive forces.</li>
        </ul>
        <li>Cost Savings:</li>
        <ul>
            <li>Reduces the frequency of replacements and maintenance.</li>
        </ul>
        <li>Performance Assurance:</li>
        <ul>
            <li>Ensures materials can withstand mechanical wear in diverse applications.</li>
        </ul>
        <li>Quality Assessment:</li>
        <ul>
            <li>Key parameter in material selection for specific use cases.</li>
        </ul>
    </ul>

    <p>Abrasion resistance is a critical property ensuring the durability and longevity of materials in various applications. Its measurement through abrasion tests provides valuable insights into a material's ability to withstand mechanical wear, aiding in material selection, quality assessment, and overall performance assurance.</p>
        `,
      routing :  'abrasion-resistance'
    },
    {
      id : 36,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service36-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service36-sec-2.jpg',
      header : 'Thermal Testing',
      heading: 'Creep Resistance',
      description : 'The ability of the material to resist any kind of distortion when subjected to prolonged compressive load over an extended period of time.',
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 : `
          <p>Creep resistance is a material property that gauges its ability to withstand deformation when exposed to sustained compressive loads and elevated temperatures over an extended duration. This phenomenon commonly occurs in materials under mechanical stress at high operating conditions.</p>

          <h4>How It Works:</h4>
          <p>Digital Shrinkage Measurement:</p>
          <p>The equipment utilizes a high-resolution linear variable differential transformer (LVDT) measuring system (1-micrometer precision) for digitally measuring the percentage of shrinkage in a test piece under a constant load and elevated temperature.</p>
          <p>Computer Integration:</p>
          <p>LVDT values are transmitted to a computer through a dedicated cable, and Labview software is employed for real-time plotting of an online graph illustrating the relationship between temperature and the percentage of total expansion.</p>

          <h4>Use Cases:</h4>
          <p>Refractory Testing:</p>
          <p>Creep in compression is particularly measured to assess the shrinkage of refractory materials under constant loads and high temperatures.</p>

          <h4>Key Features:</h4>
          <p>High-Temperature Capability:</p>
          <p>The equipment is designed to operate at a maximum temperature of 1600°C, simulating harsh operating conditions.</p>
          <p>Sample Size Standardization:</p>
          <p>Standardized sample sizes with an outer diameter (OD) of 50mm and a length of 50mm ensure consistency in testing.</p>

          <h4>Benefits:</h4>
          <p>Material Stability Assessment:</p>
          <p>Enables the assessment of a material's stability and resistance to deformation under prolonged compressive loads and elevated temperatures.</p>
          <p>Digital Precision:</p>
          <p>The LVDT measuring system ensures high precision (1 micrometer), providing accurate and reliable measurements of material shrinkage.</p>
          <p>Long-Term Performance Prediction:</p>
          <p>Facilitates insights into a material's long-term performance, aiding in predicting its behavior under sustained mechanical stress.</p>

          <p>Creep resistance testing, as performed by the CREEP equipment, holds significance in material engineering for evaluating materials used in high-stress, high-temperature applications. Its ability to simulate and assess long-term stability contributes to the understanding and improvement of materials for various industries, including those involving refractory materials.</p>
      `,
      table1_th : 'Maximum Temperature',
      table1_th2 : '1700°C',
      table1_td : 'Sample Size',
      table1_td2 : 'OD: 50 mm, Length: 50 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'CREEP up to 1600°C',
      table2_td2 : '24 Hours',
      routing : "creep-resistance"
    },
    {
      id : 37,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service37-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service37-sec-2.jpg',
      header : 'Thermal Testing',
      heading: 'Hot Modulus Of Rupture (HMOR)',
      description : "It is the material's ability to resist deformation under load with Constant Temperature.",
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 :`
          <p>Hot Modulus Of Rupture (HMOR), also referred to as hot bend strength or fracture strength at a specific temperature, is a crucial mechanical parameter used to evaluate the ability of brittle materials to resist deformation under a constant load at elevated temperatures. This parameter holds significant importance in the characterization of refractory materials.</p>

          <h4>How It Works:</h4>
          <p>High-Temperature Load Test:</p>
          <p>The equipment performs a high-temperature load test to determine the material's ability to withstand deformation under load at a constant temperature.</p>
          <p>Maximum Temperature Capability:</p>
          <p>The HMOR equipment is designed to operate at extreme temperatures, with a maximum capability of 1700°C.</p>

          <h4>Use Cases:</h4>
          <p>Quality Control in Refractory Materials:</p>
          <p>HMOR is employed to assess the maximum load at high temperatures, providing essential data for quality control in the production and development of furnace linings.</p>

          <h4>Key Features:</h4>
          <p>Sample Standardization:</p>
          <p>Standardized sample sizes of 25mm x 25mm x 150mm ensure consistency in testing, allowing for accurate comparisons.</p>
          <p>High-Temperature Assessment:</p>
          <p>Capable of evaluating material strength under extreme conditions, making it particularly suitable for refractory materials used in high-temperature environments.</p>

          <h4>Benefits:</h4>
          <p>Quality Assurance:</p>
          <p>HMOR testing serves as a reliable parameter for quality assurance, ensuring that refractory materials can withstand the demanding conditions of furnace linings.</p>
          <p>Performance Prediction:</p>
          <p>Provides insights into material performance at elevated temperatures, aiding in predicting its behavior in real-world applications.</p>

          <p>HMOR testing is a critical aspect of material engineering, especially for materials used in industries where high temperatures and mechanical stress are prevalent. The ability to evaluate rupture strength under extreme heat contributes to the development of robust and reliable materials for applications in furnace linings and other high-temperature environments.</p>
      `,
      para3 : "",
      table1_th : 'Maximum Temperature',
      table1_th2 : '1700°C',
      table1_td : 'Sample Size',
      table1_td2 : '25 mm X25 mm x 150 mm',
      table1_td3: 'Available Space',
      table1_td4: '≈ 200 x 200 x 300 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'HMOR up to 1700°C',
      table2_td2 : '4 Hours for 5 Samples',
      routing : "hot-modulus-of-rupture-hmor"
    },
    {
      id : 38,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service38-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service38-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Thermal Conductivity',
      description : 'It refers to the ability of a given material to conduct or transfer heat.',
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
          <p>Thermal conductivity (k, λ, or κ) is a crucial metric defining a material's ability to conduct heat. It plays a pivotal role in determining the rate of heat transfer, with lower thermal conductivity indicating slower heat transfer and vice versa.</p>

          <h4>How It Works:</h4>
          <p>Temperature-Dependent Assessment:</p>
          <p>The equipment evaluates thermal conductivity values from room temperature up to 1400°C or the maximum service limit of the refractory material.</p>
          <p>Material Characterization:</p>
          <p>Conducts tests on non-carbonaceous dielectric refractories to assess their thermal conductivity under varying temperature conditions.</p>

          <h4>Use Cases:</h4>
          <p>Refractory Material Optimization:</p>
          <p>Essential for optimizing the composition of refractory materials, ensuring they meet thermal performance requirements in high-temperature applications.</p>

          <h4>Key Features:</h4>
          <p>Wide Temperature Range:</p>
          <p>Capable of determining thermal conductivity across a broad temperature spectrum, allowing for comprehensive material characterization.</p>
          <p>Dielectric Refractories Testing:</p>
          <p>Specifically designed for non-carbonaceous dielectric refractories, providing insights into their thermal behavior.</p>

          <h4>Benefits:</h4>
          <p>Performance Prediction:</p>
          <p>Enables the prediction of material performance in real-world applications by understanding how it conducts heat at various temperatures.</p>
          <p>Material Selection Criteria:</p>
          <p>Aids in material selection for applications with specific temperature requirements, ensuring optimal thermal performance.</p>

          <p>Understanding thermal conductivity is fundamental in material engineering, particularly for substances used in high-temperature environments. This knowledge empowers engineers to design and select materials with tailored thermal properties, crucial for applications ranging from refractory linings in industrial furnaces to components in aerospace engineering. The ability to measure and control thermal conductivity enhances the efficiency and reliability of materials under diverse temperature conditions.</p>


      `,
      para3 : "",
      para4 : "",
      table1_th : 'Maximum Temperature',
      table1_th2 : '1400°C',
      table1_td : 'Sample Size',
      table1_td2 : '225 mm X 115 mm x 75 mm',
      table2_th : 'Equipment',
      table2_th2 : 'Quantity / Time',
      table2_td : 'Thermal Conductivity for Refractory Bricks up to 1400°C',
      table2_td2 : '4 Hours, 6 Hours',
      routing : "thermal-conductivity"
    },
    {
      id : 39,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service39-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service39-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Permanent Linear Change (PLC)',
      description : 'It is a factor used to judge the suitability of refractories in ranges of temperature limits.',
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 : `
          <p>Permanent Linear Change (PLC) serves as a crucial factor for assessing the suitability of refractory materials under diverse temperature conditions. It gauges the permanent alteration in dimensions that refractories may undergo due to processes like mineral formation, phase transformation, or shrinkage when exposed to heat.</p>

          <h4>How It Works:</h4>
          <p>Experimental Measurement:</p>
          <p>Refractories are heated to predetermined temperatures, held for specific durations, and then cooled to room temperature.</p>
          <p>The measuring temperature and time align with technical standards tailored to each product.</p>

          <h4>Use Cases:</h4>
          <p>Temperature Suitability Assessment:</p>
          <p>PLC is utilized to determine how refractory materials respond to temperature variations, ensuring they meet the requirements of specific applications.</p>

          <h4>Benefits:</h4>
          <p>Performance Prediction:</p>
          <p>Allows for predicting how refractories will change dimensionally under various temperature scenarios, aiding in material selection for specific operational conditions.</p>
          <p>Quality Control:</p>
          <p>Forms an integral part of quality control processes, ensuring that refractory products adhere to specified standards and exhibit desired thermal stability.</p>

          <p>Permanent Linear Change is a critical parameter in the material engineering of refractories, providing insights into their behavior when exposed to elevated temperatures. Understanding and controlling PLC contribute to the reliable performance of refractory materials in applications such as industrial furnaces, kilns, and other high-temperature environments.</p>


      `,
      routing : "permanent-linear-change-plc"
    },
    {
      id : 40,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service40-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service40-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Refractory Under Load (RUL)',
      description : 'It is a measure of the deformation behaviour of refractory ceramic products exposed to a constant load and increasing temperature.',
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2: `
          <p>Refractoriness Under Load (RUL) is a critical measure defined by ISO 1893, evaluating the deformation behavior of refractory ceramic products under a constant load with increasing temperature. It provides insights into the product's ability to withstand high temperatures without significant deformation.</p>

          <h4>How It Works:</h4>
          <p>Constant Load and Temperature Increase:</p>
          <p>Refractory samples are subjected to a constant load.</p>
          <p>The temperature is systematically increased to observe the onset of softening and deformation.</p>

          <h4>Use Cases:</h4>
          <p>High-Temperature Applications:</p>
          <p>RUL is employed to assess refractory products' suitability for applications exposed to elevated temperatures.</p>
          <p>Commonly used in industries such as metallurgy, cement, and glass manufacturing.</p>

          <h4>Benefits:</h4>
          <p>Performance Evaluation:</p>
          <p>RUL aids in understanding how refractory materials respond to high temperatures under load, ensuring they maintain structural integrity.</p>
          <p>Quality Assurance:</p>
          <p>Integral to quality control processes, RUL testing verifies that refractory products meet specified standards for high-temperature applications.</p>

          <p>Refractoriness Under Load is a crucial parameter in the selection and development of refractory materials for industries where exposure to high temperatures is common. The ability to withstand load while maintaining stability is vital for the reliable and safe operation of industrial processes involving intense heat.</p>
      `,
      routing : "refractory-under-load-rul"
    },
    {
      id : 41,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service41-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service41-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Pyrometric Cone Equivalent (PCE)',
      description : 'They are used to determine the Cone equivalent of an unknown raw material by placing several different PCE cones alongside an unknown raw material (that has been pressed into the same shape as a cone).',
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
          <p>PCE, or Pyrometric Cone Equivalent, is a crucial metric in the ceramics industry, providing insights into the firing process by determining the cone equivalent of raw materials. This method involves placing various PCE cones alongside an unknown material, allowing for the assessment of heat-work, time, and temperature.</p>

          <h4>How It Works:</h4>
          <p>Comparative Analysis:</p>
          <p>Involves placing PCE cones alongside an unknown raw material pressed into a cone shape.</p>
          <p>The cones deform based on the heat-work, time, and temperature, providing a comparative analysis.</p>
          <p>Indication of Firing Conditions:</p>
          <p>The deformation of cones indicates the firing conditions and whether the desired heat-work has been achieved.</p>

          <h4>Use Cases:</h4>
          <p>Industrial Kilns:</p>
          <p>Widely used in industrial kilns for consistent monitoring of ceramic firings.</p>
          <p>Ensures that the firing conditions meet the required standards for quality production.</p>
          <p>Pottery Kilns:</p>
          <p>Essential in pottery kilns to achieve the desired properties in the fired clay.</p>
          <p>Enables potters to maintain control over the firing process for optimal results.</p>
          <p>Quality Assurance:</p>
          <p>Used in small hobby kilns for quality assurance in artisanal ceramic production.</p>
          <p>Provides a simple yet effective method for hobbyists to achieve desired firing outcomes.</p>

          <h4>Benefits:</h4>
          <p>Precision in Firing:</p>
          <p>Offers a precise indication of the heat-work and temperature achieved during firing.</p>
          <p>Allows for adjustments to firing conditions to meet specific requirements.</p>
          <p>Quality Control:</p>
          <p>Integral for quality control in ceramic production, ensuring uniformity and consistency.</p>
          <p>Provides a visual and tangible measure of the firing process.</p>
          <p>Cost-Effective Monitoring:</p>
          <p>Provides a cost-effective means of monitoring and controlling firing processes.</p>
          <p>Enables both large-scale industrial operations and individual artists to achieve desired ceramic properties.</p>

          <p>PCE is a universally recognized method that plays a pivotal role in the ceramics industry. Whether in large-scale industrial settings or small hobbyist kilns, the use of PCE ensures the consistent production of high-quality ceramics by closely monitoring and controlling the firing conditions.</p>
      `,
      routing : "pyrometric-cone-equivalent-pce"
    },
    {
      id : 42,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service42-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service42-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Thermal Cycling',
      description : 'It is defined as any recursive thermal test in which the temperature is regularly altered, touching a high-temperature peak and a low-temperature peak.',
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 : `
          <p>Thermal cycling, also known as temperature cycling, is a recurring thermal test involving the regular alteration of temperatures, oscillating between high and low temperature peaks. This testing method is employed to evaluate the resilience of materials against exposure to alternating extremes of temperature.</p>

          <h4>How It Works:</h4>
          <p>Temperature Alteration:</p>
          <p>Materials or components undergo repetitive cycles of exposure to high-temperature peaks and low-temperature troughs.</p>
          <p>The goal is to simulate real-world conditions where temperature variations are encountered.</p>

          <h4>Use Cases:</h4>
          <p>Performance Verification:</p>
          <p>Thermal cycling is crucial for assessing the performance of components and materials in environments characterized by temperature fluctuations.</p>
          <p>Commonly applied in the testing of electronic components, materials for aerospace applications, and other temperature-sensitive devices.</p>
          <p>Identifying Defects:</p>
          <p>Detects workmanship or material defects that may arise under the stress of thermal cycling.</p>
          <p>Helps in quality control and ensuring reliability in diverse applications.</p>

          <h4>Benefits:</h4>
          <p>Quality Assurance:</p>
          <p>Assures the integrity and reliability of materials by subjecting them to conditions replicating real-world temperature variations.</p>
          <p>Durability Testing:</p>
          <p>Provides insights into the durability and longevity of materials and components under cyclic thermal stress.</p>

          <h4>Duration:</h4>
          <p>Varied Timeframe:</p>
          <p>The duration of thermal cycling varies based on sample volume and specific equipment, typically lasting between one and four hours.</p>

          <p>Thermal cycling is a vital tool in materials testing, offering researchers and engineers a controlled environment to assess the impact of cyclic temperature changes on various materials and components. This process aids in refining designs, ensuring reliability, and identifying potential weaknesses in a wide range of applications.</p>

      `,
      para3 : "",
      routing : "thermal-cycling"
    },
    {
      id : 43,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service43-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service43-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Slag Testing',
      description : 'It is the wear and tear of refractories caused by static chemical attack of slag.',
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
          <p>Slag testing is a critical evaluation method employed to assess the resilience of refractory materials when exposed to molten slag, a glass-like residue formed during the smelting process. This testing primarily distinguishes between two modes of attack: corrosion, signifying static chemical wear, and erosion, indicating mechanical wear caused by molten slag.</p>

          <h4>How It Works:</h4>
          <p>Corrosion Assessment:</p>
          <p>Static Chemical Attack:</p>
          <p>Involves examining refractories for wear and tear caused by the chemical composition of slag.</p>
          <p>Identifies the refractory's resistance to chemical corrosion over time.</p>
          <p>Erosion Analysis:</p>
          <p>Mechanical Wear:</p>
          <p>Evaluates the breaking and washing away of refractory materials due to the mechanical action of molten slag.</p>
          <p>Assesses the refractory's ability to withstand physical erosion.</p>

          <h4>Use Cases:</h4>
          <p>Steel Industry:</p>
          <p>Crucial for assessing refractory performance in steelmaking furnaces exposed to aggressive slag.</p>
          <p>Ensures the durability and longevity of refractory linings in these high-temperature environments.</p>
          <p>Foundries:</p>
          <p>Employed to evaluate refractory materials in foundry applications where molten metal and slag interactions are common.</p>
          <p>Facilitates the selection of refractories with optimal resistance to slag-induced wear.</p>

          <h4>Benefits:</h4>
          <p>Performance Validation:</p>
          <p>Validates the performance of refractories under conditions mimicking real-world industrial processes.</p>
          <p>Ensures refractory materials can endure prolonged exposure to molten slag.</p>
          <p>Cost Efficiency:</p>
          <p>Identifies refractory materials with superior resistance, minimizing the need for frequent replacements.</p>
          <p>Reduces downtime and maintenance costs in industrial settings.</p>
          <p>Quality Assurance:</p>
          <p>Provides a qualitative and quantitative assessment of refractory durability.</p>
          <p>Assures the quality of refractory linings in critical applications.</p>

          <p>Slag testing is indispensable for industries relying on refractories to withstand the harsh conditions of molten slag. By differentiating between corrosion and erosion, this testing method enables industries to make informed decisions regarding the selection of refractory materials, ensuring the longevity and efficiency of industrial processes.</p>
      `,
      routing : "slag-testing"
    },
    {
      id : 44,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service44-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service44-sec-2.jpg',
      header : 'Thermal Testing',
      heading: 'Sieve Analysis',
      description : 'It is a method that is used to determine the grain size distribution of soils that are greater than 0.075 mm in diameter.',
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 :`
          <p>Sieve analysis is a fundamental method employed to determine the distribution of grain sizes in soils with particles greater than 0.075 mm in diameter. Typically used for sand and gravel, this method is invaluable for understanding the composition of soil.</p>

          <h4>How It Works:</h4>
          <p>Particle Size Distribution:</p>
          <p>Involves determining the quantity of powder retained on a series of sieves with varying aperture sizes.</p>
          <p>A sample is introduced at the top of a stack of sieves arranged in decreasing size order.</p>
          <p>Formula:</p>
          <p>Utilizes a formula to calculate the percentage retained on and passing through each sieve.</p>
          <p>Masses for each sieve (individual/cumulative) are divided by the total dry mass before washing and multiplied by 100.</p>

          <h4>Use Cases:</h4>
          <p>Soil Composition Analysis:</p>
          <p>Essential for analyzing and understanding the grain size distribution of soils.</p>
          <p>Particularly useful for sand and gravel but not exclusive to these materials.</p>
          <p>Engineering and Construction:</p>
          <p>Critical in geotechnical engineering for designing foundations, slopes, and other structures.</p>
          <p>Guides construction decisions based on soil composition.</p>

          <h4>Benefits:</h4>
          <p>Accurate Classification:</p>
          <p>Provides accurate information about the distribution of particle sizes within a soil sample.</p>
          <p>Foundation for Decisions:</p>
          <p>Aids in making informed decisions in engineering and construction projects based on soil characteristics.</p>
          <p>Quality Control:</p>
          <p>A valuable quality control tool, ensuring that soil used in construction meets specified criteria.</p>

          <p>Sieve analysis is a cornerstone in soil science and geotechnical engineering, offering insights into the physical properties of soils. By revealing the distribution of particle sizes, it aids in planning and executing construction projects, ensuring the stability and integrity of structures.</p>


      `,
      para3 : "",
      routing : "sieve-analysis"
    },
    {
      id : 45,
      title : 'Thermal Testing',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service45-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service45-sec-2.png',
      header : 'Thermal Testing',
      heading: 'Thermal Shock Resistance',
      description : 'It is the ability of a solid to withstand sudden changes in temperature either during heating or cooling.',
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
          <p>Thermal shock resistance is a critical property characterizing a material's ability to endure sudden and extreme changes in temperature, whether during rapid heating or cooling. This resilience is particularly crucial in applications where materials are subjected to alternating high and low-temperature environments.</p>

          <h4>How It Works:</h4>
          <p>Simulation Methods:</p>
          <p>Laboratory Simulation:</p>
          <p>Conditions akin to thermal shock are replicated in the lab using water or air after exposure to furnace environments.</p>
          <p>Materials are subjected to abrupt temperature changes to assess their response.</p>
          <p>Parameters for Computation:</p>
          <p>High Fracture Strength (σf):</p>
          <p>Measures the material's resistance to fracture under stress.</p>
          <p>Thermal Conductivity (K):</p>
          <p>Indicates the material's ability to conduct heat.</p>
          <p>Elastic Modulus (E):</p>
          <p>Reflects the material's elastic deformation under stress.</p>
          <p>Linear Coefficient of Thermal Expansion (αL):</p>
          <p>Defines how the material's dimensions change with temperature.</p>

          <h4>Use Cases:</h4>
          <p>Manufacturing Industries:</p>
          <p>Crucial for materials used in manufacturing processes involving rapid temperature changes, such as glass production.</p>
          <p>Ensures the durability and reliability of materials in challenging thermal environments.</p>
          <p>Electronics:</p>
          <p>Essential in electronic components to withstand fluctuations in operating temperatures.</p>
          <p>Safeguards against thermal stress-induced failures in electronic devices.</p>

          <h4>Benefits:</h4>
          <p>Durability Assurance:</p>
          <p>Identifies materials capable of withstanding abrupt temperature variations.</p>
          <p>Ensures longevity and performance stability in diverse applications.</p>
          <p>Reliability in Extreme Conditions:</p>
          <p>Guarantees the reliability of materials in environments with rapid and severe temperature fluctuations.</p>
          <p>Reduces the risk of material failure due to thermal shock.</p>
          <p>Performance Optimization:</p>
          <p>Enables the selection of materials with optimal thermal shock resistance for specific applications.</p>
          <p>Enhances the overall efficiency and dependability of materials in challenging thermal scenarios.</p>

          <p>In industries where materials are exposed to challenging thermal conditions, understanding and assessing thermal shock resistance is pivotal. By considering key parameters and simulation methods, manufacturers can ensure the longevity and reliability of materials subjected to rapid and extreme temperature changes.</p>
      `,
      para3 : "",
      routing : "thermal-shock-resistance"
    },
    {
      id : 46,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service46-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service46-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Ball Clay',
      description : "Ball clays are fine-grained, highly plastic clays.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 :`

          <p>Ball Clay: Fine-grained, highly plastic clays, primarily composed of kaolinite, mica, and quartz, appreciated for their plasticity, unfired strength, and light color upon firing.</p>

          <h4>Composition:</h4>
          <li>Typically contain:</li>
          <ul>
              <li>20–80% Kaolinite.</li>
              <li>10–25% Mica.</li>
              <li>6–65% Quartz.</li>
              <li>Small amounts of organic matter (e.g., lignite).</li>
              <li>Trace minerals like pyrite and siderite.</li>
          </ul>

          <h4>Use Cases:</h4>
          <p>1. Ceramic Whiteware Production:</p>
          <ul>
              <li>Principal raw material for manufacturing ceramic whiteware (tableware, tiles, etc.).</li>
              <li>Adds plasticity, aiding in the molding and shaping of products.</li>
          </ul>

          <p>2. Sanitaryware Manufacturing:</p>
          <ul>
              <li>Widely used in the production of sanitaryware items (sinks, toilets) due to its desirable properties.</li>
          </ul>

          <p>How It Works:</p>
          <li>Plasticity Enhancement:</li>
          <ul>
              <li>Ball clays exhibit high plasticity, making them easy to shape and mold.</li>
              <li>Enhance workability in the forming process of ceramic products.</li>
          </ul>

          <h4>Benefits:</h4>
          <p>1. Plasticity:</p>
          <ul>
              <li>Ensures ease of shaping during ceramic product formation.</li>
              <li> Allows intricate designs and detailed molding..</li>
          </ul>
          <p>2. Unfired Strength:</p>
          <ul>
              <li>Contributes to the structural integrity of products before firing.</li>
          </ul>
          <p>3. Color Consistency:</p>
          <ul>
              <li> Yields a light color upon firing, contributing to the desired aesthetic of ceramic items.</li>
          </ul>
          <p>4. Versatility:</p>
          <ul>
              <li>Adaptable for various ceramic applications, providing versatility in manufacturing.</li>
          </ul>
          <p>Ball clay, characterized by its unique composition and plasticity, stands as a crucial component in the ceramics industry. Its use spans from shaping everyday tableware to forming sanitaryware, showcasing its significance in the creation of high-quality ceramic products.</p>



      `
      ,

      routing :  'ball-clay'
    },
    {
      id : 47,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service47-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service47-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'China Clay',
      description : "Kaolin, also called China clay, soft white clay that is an essential ingredient in the manufacture of China and porcelain and is widely used in the making of paper, rubber, paint, and many other products.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `

          <p>China Clay (Kaolin): Soft, white clay essential in the production of China and porcelain, with versatile applications in paper, rubber, paint, and various industries.</p>

          <h4>Composition:</h4>
          <li>Primarily composed of the mineral kaolinite.</li>
          <li>Natural state:  White, soft powder.</li>
          <br>
          <h4>Characteristics:</h4>
          <li>Kaolinite manifests as hexagonal, platy crystals.</li>
          <li>Crystal size: Ranges from about 0.1 micrometers to 10 micrometers or larger.</li>
          <br>
          <h4>Formation:</h4>
          <li>Originates from the decomposition of minerals, notably Feldspar.</li>
          <li>Feldspar decomposition occurs in rocks like Granite.</li>
          <li>Geological process occurred millions of years ago during the late Cretaceous and early Paleogene periods.</li>
          <br>
          <h4>Use Cases:</h4>
          <p>1. Porcelain and China Production:</p>
          <ul>
              <li>Integral ingredient for crafting high-quality porcelain and China.</li>
          </ul>
          <p>2. Paper Manufacturing:</p>
          <ul>
              <li>Enhances paper quality and texture.</li>
          </ul>
          <p>3. Rubber Industry:</p>
          <ul>
              <li> Used as a reinforcing agent in rubber products.</li>
          </ul>
          <p>4. Paint Production:</p>
          <ul>
              <li> Serves as a pigment and filler in paint formulations.</li>
          </ul>
          <p>5. Versatile Industrial Applications:</p>
          <ul>
              <li> Employed in the creation of diverse products due to its unique properties.</li>
          </ul>
          <br>
          <h4>How It Works:</h4>
          <li>Porcelain Formation:</li>
          <ul>
          <li>Kaolin contributes to the plasticity and workability of porcelain clay.</li>
          <li>During firing, kaolin transforms into a durable and white ceramic material.</li>
          </ul>
          <br>
          <h4>Benefits:</h4>
          <p>1. Porcelain Craftsmanship:</p>
          <ul>
              <li> Essential for producing fine porcelain items with distinctive characteristics.</li>
          </ul>
          <p>2. Textural Enhancements:</p>
          <ul>
              <li>Improves the texture and printability of paper.</li>
          </ul>
          <p>3. Reinforcement in Rubber:</p>
          <ul>
              <li> Enhances the strength and resilience of rubber products.</li>
          </ul>
          <p>4. Pigment and Filler:</p>
          <ul>
              <li> Acts as a pigment and filler in paint, contributing to color and consistency.</li>
          </ul>
          <p>5. Broad Applicability:</p>
          <ul>
              <li> Versatility allows its incorporation into a wide range of industrial products.</li>
          </ul>
          <p>China clay, with its origins dating back millions of years, continues to be a cornerstone in various industries, particularly in the art of crafting porcelain and the manufacturing of diverse products where its unique properties bring value and distinction.</p>


      `,

      para3 : "",
      routing :  'china-clay'
    },
    {
      id : 48,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service48-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service48-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Than Clay',
      description : "Than fire clay is a range of refractory clays used in the manufacture of ceramics, especially fire brick.",
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 : `
          <p>A range of refractory clays utilized in ceramics manufacturing, particularly in crafting fire bricks.</p>
          <h4>Composition:</h4>
          <ul>
          <li>Defined by the EPA as a "mineral aggregate composed of hydrous silicates of aluminium (Al2O3·2SiO2·2H2O) with or without free silica."</li>
          </ul>
          <br>

          <h4>Temperature Resistance:</h4>
          <ul>
          <li>High-grade fire clays withstand temperatures up to 1,775 °C (3,227 °F).</li>
          <li>To be classified as "fire clay," it must endure a minimum temperature of 1,515 °C (2,759 °F).</li>
          </ul>
          <br>

          <h4>Types of Fire Clays:</h4>
          <ul>
          <li>Range from flint clays to plastic fire clays.</li>
          <li>Include semi-flint and semi-plastic fire clays.</li>
          </ul>
          <br>

          <h4>Composition (Typical):</h4>
          <ul>
              <li>Al2O3: 23-34%</li>
              <li>SiO2: 50-60%</li>
              <li>Loss on ignition: 6-27%</li>
              <li>May contain Fe2O3, CaO, MgO, K2O, Na2O, TiO2, along with fine-grained micas and quartz.</li>
          </ul>
          <br>

          <h4>Chemical Analyses (19th Century):</h4>
          <ul>
          <li>Alumina content historically lower in 19th-century sources.</li>
          <li>Contemporary analyses provide values closer to the defined composition.</li>
          </ul>
          <br>

          <h4>Use Cases:</h4>
          <p>1. Ceramic Manufacturing:</p>
          <ul>
              <li>Primary material for crafting fire bricks. Used in the production of refractory ceramics.</li>
          </ul>
          <p>2. High-Temperature Applications:</p>
          <ul>
              <li> Ideal for applications requiring resilience at elevated temperatures.</li>
          </ul>
          <p>3. Refractory Products:</p>
          <ul>
              <li> Retains strength and structure at high temperatures, crucial for refractory applications.</li>
          </ul>

          <h4>How It Works:</h4>
          <li>Refractory Properties:</li>
          <ul>
          <li> Retains strength and structure at high temperatures, crucial for refractory applications.</li>
</ul>
          <h4>Benefits:</h4>
          <p>1. Temperature Endurance:</p>
          <ul>
              <li>Withstands extreme temperatures, ensuring reliability in high-heat environments.</li>
          </ul>
          <p>2. Versatile Applications:</p>
          <ul>
              <li>Suitable for various refractory and ceramic manufacturing needs.</li>
          </ul>
          <p>3. Structural Integrity:</p>
          <ul>
              <li> Contributes to the durability and longevity of refractory products.</li>
          </ul>

          <p>Fire clay, known for its resilience and heat-resistant properties, stands as a fundamental component in the creation of refractory ceramics, especially fire bricks, contributing to the robustness of structures in demanding high-temperature conditions.</p>
      `,
      para3 : "",
      routing :  'than-clay'
    },
    {
      id : 49,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service49-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service49-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Feldspar',
      description : "Feldspar is a group of rock-forming aluminium tectosilicate minerals, also containing other cations such as sodium, calcium, potassium, or barium.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `

          <p>A group of rock-forming aluminium tectosilicate minerals, featuring sodium, calcium, potassium, or barium as additional cations.</p>

          <h4>Types of Feldspar:</h4>
              <li>Plagioclase Feldspars:</li>
                  <ul>
                      <li>Contain sodium-calcium components.</li>
                  </ul>

              <li>Alkali Feldspars:</li>
                  <ul>
                      <li>Feature potassium-sodium constituents.</li>
                  </ul>
                  <br>
              <p>Industrial Significance:</p>
              <li>An essential source of alumina in glassmaking and ceramics industries.</li>
          <br>


          <br>

          <h4>Applications:</h4>
          <p>1. Ceramics Industry:</p>
          <ul>
              <li>Acts as a flux in ceramics, enhancing vitreous lustre in chinaware and ceramic tiles.</li>
          </ul>
          <p>2. Glazes and Enamels:</p>
          <ul>
              <li>Utilized in glazes and enamels for enhancing surface characteristics.</li>
          </ul>
          <p>3. Paints, Plastics, Sealants, and Adhesives:</p>
          <ul>
              <li>Serves as a crucial mineral filler in various industrial products.</li>
          </ul>
          <br>

          <h4>Composition:</h4>
          <ul>
          <li>Aluminosilicate minerals with the general formula AT₄O₈.</li>

              <li>A: Potassium, sodium, or calcium.</li>
              <li>T: Silicon and aluminium, with a Si:Al ratio ranging from 3:1 to 1:1.</li>
          </ul>
          <br>

          <h4>How It Works:</h4>
          <li>Flux in Ceramics:</li>
          <ul>
              <li>Enhances melting and vitrification in ceramics production.</li>
          </ul>
          <br>

          <h4>Benefits:</h4>
          <p>1. Glass and Ceramic Enhancement:</p>
          <ul>
              <li>Improves the properties of glass and ceramic products.</li>
          </ul>
          <p>2. Surface Characteristics:</p>
          <ul>
              <li>Enhances lustre and surface quality in chinaware and tiles.</li>
          </ul>
          <p>3. Versatile Industrial Applications:</p>
          <ul>
              <li>Valuable in a range of industries, including paints, plastics, sealants, and adhesives.</li>
          </ul>
          <br>

          <p>Feldspar, with its versatile applications in glassmaking, ceramics, and various industrial products, stands as a foundational mineral that contributes to the enhancement of material properties and surface characteristics across multiple sectors.</p>


      `
      ,
      para3 : "",
      routing :  'feldspar'
    },
    {
      id : 50,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service50-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service50-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Quartz',
      description : "Quartz is a hard, crystalline mineral composed of silica (silicon dioxide).",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `

    <p>Quartz is a hard, crystalline mineral composed of silicon dioxide (SiO2), forming a continuous framework of SiO4 silicon–oxygen tetrahedra.</p>

    <h4>Forms:</h4>
    <p>1. α-Quartz:</p>
    <ul>
        <li> Normal form.</li>

    </ul>
    <p>2. β-Quartz:</p>
    <ul>
    <li> High-temperature form, transforming abruptly at 573 °C.</li>
    </ul>
    <br>

    <h4>Chirality:</h4>
    <ul>
        <li>Both α- and β-quartz are chiral.</li>
    </ul>
    <br>

    <h4>Transformation:</h4>
    <ul>
        <li>The transformation from α-quartz to β-quartz at 573 °C is accompanied by a significant change in volume, inducing micro fracturing in ceramics or rocks.</li>
    </ul>
    <br>

    <h4>Use Cases:</h4>
    <p>1. Construction Materials:</p>
    <ul>
        <li>Raw material for glass, concrete, and mortar.</li>
    </ul>
    <p>2. Silicon Production:</p>
    <ul>
        <li>Refined to yield silicon critical for computers and high-tech applications.</li>
    </ul>
    <br>

    <h4>Working Mechanism:</h4>
    <ul>
        <li>The continuous SiO4 silicon–oxygen tetrahedral framework provides hardness and stability to quartz.</li>
    </ul>
    <br>

    <h4>Benefits:</h4>
    <p>1. Diverse Construction Applications:</p>
    <ul>
        <li>Essential in the production of glass, concrete, and mortar for construction.</li>
    </ul>
    <p>2. Critical Silicon Source:</p>
    <ul>
        <li>Serves as a crucial raw material for silicon production, vital in modern technology.</li>
    </ul>
    <br>

    <p>Quartz, with its distinctive crystalline structure and transformative properties, plays a foundational role in construction materials and as a source for silicon, contributing significantly to the realms of construction and high-tech applications.</p>


      `,
      para3 : "",
      routing :  'quartz'
    },
    {
      id : 51,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service51-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service51-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Alumina',
      description : "Alumina (Aluminium Oxide) is the most widely used oxide ceramic material. Its applications are widespread, and include spark plugs, tap washers, abrasion resistant tiles, and cutting tools.",
      industries : '₹ - Enquire for Estimate',
      para1 :"",
      para2 : `
          <p>Alumina, derived from aluminium oxide, stands out as a versatile material widely employed for its hardness, strength, and protective characteristics in diverse industrial applications.</p>

          <h4>Composition:</h4>
          <ul>
              <li>Aluminium oxide, or alumina (Al2O3), occurs naturally as corundum.</li>
          </ul>
          <br>

          <h4>Production:</h4>
          <ul>
              <li>Obtained by burning aluminium in oxygen or by heating hydroxide, nitrate, or sulphate of the metal.</li>
              <li>Industrially separated from bauxite, an ore containing 30–54% alumina, iron (III) oxide (Fe2O3), and silica (SiO2).</li>
          </ul>
          <br>

          <h4>Use Cases:</h4>
          <p>1. Abrasive Materials:</p>
          <ul>
              <li>Alumina is widely utilized in industrial abrasive materials.</li>
              <li>Superior hardness and strength make it effective for various abrasive applications.</li>
          </ul>
          <p>2. Protective Coating:</p>
          <ul>
              <li>Used as a coating to protect surfaces against abrasion.</li>
              <li>Provides a durable shield, enhancing the lifespan of materials.</li>
          </ul>
          <p>3. Industrial Applications:</p>
          <ul>
              <li>Found in diverse industrial applications due to its versatility.</li>
              <li>Used in manufacturing processes requiring robust and wear-resistant materials.</li>
          </ul>
          <br>

          <h4>Benefits:</h4>
          <p>1. Superior Hardness:</p>
          <ul>
              <li> Alumina exhibits exceptional hardness, contributing to its effectiveness in abrasive materials.</li>
          </ul>
          <p>2. Strength:</p>
          <ul>
          <li>The strength of alumina enhances its durability in applications subjected to wear and tear.</li>
          </ul>
          <p>3. Protective Qualities:</p>
          <ul>
          <li>As a coating, alumina offers protective qualities, reducing the impact of abrasion on surfaces.</li>
          </ul>
          <p>Alumina, derived from aluminium oxide, stands out as a versatile material widely employed for its hardness, strength, and protective characteristics in diverse industrial applications.</p>

      `,
      routing :  'alumina'
    },
    {
      id : 52,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service52-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service52-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Zirconia',
      description : "Zirconia is a white solid ceramic glaze and one of several newer materials that combine metal's strength with the aesthetic, tooth-like appeal of porcelain.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 : `
      <h4>Characteristics:</h4>
      <li>Zirconia is a white solid ceramic glaze with properties that combine the strength of metal with the aesthetic appeal of porcelain.</li>
<br>
      <h4>Use Cases:</h4>
      <p>1. Dental Applications:</p>
      <ul>
          <li>Zirconia crowns and dental implants are continually developed for improved performance.</li>
          <li>Commonly used in dentistry due to its superior strength, hardness, wear resistance, and biocompatibility.</li>
      </ul>

      <p>2. Refractory Products:</p>
      <ul>
          <li>Ideal for a range of refractory products requiring stability at high temperatures.</li>
          <li>Exhibits strong thermal and corrosion resistance.</li>
      </ul>

      <p>3. Ceramic Colors and Pigments:</p>
      <ul>
          <li>Used in the production of ceramic colors and pigments.</li>
          <li>Offers consistent quality and chemical inertness.</li>
      </ul>

      <p>4. Electronic Applications:</p>
      <ul>
          <li>Applied in electronic applications, showcasing good mechanical properties.</li>
      </ul>

      <p>5. Biocompatible Prosthetics:</p>
      <ul>
          <li>Utilized in prosthesis devices such as hip joints and femoral ball heads.</li>
          <li>Known for excellent biocompatibility with the human body.</li>
      </ul>

      <h4>Benefits:</h4>
      <p>1. Mechanical Properties:</p>
      <ul>
          <li>Zirconia products demonstrate good mechanical properties.</li>
          <li>Suitable for applications requiring strength and stability.</li>
      </ul>

      <p>2. Thermal and Corrosion Resistance:</p>
      <ul>
          <li>Exhibits strong thermal and corrosion resistance, ensuring durability in various conditions.</li>
      </ul>

      <p>3. Biocompatibility:</p>
      <ul>
          <li>Superior biocompatibility makes it a preferred material for medical implants.</li>
          <li>Particularly favored in dental applications for its compatibility with the human body.</li>
      </ul>

      <p>Zirconia, with its unique combination of strength, stability, and biocompatibility, finds versatile applications in dentistry, refractory products, ceramic manufacturing, electronics, and medical prosthetics. Its continual development makes it a material of choice in various cutting-edge applications.</p>

      `,
      para3 :"",
      routing : 'zirconia'
    },
    {
      id : 53,
      title : 'Raw Materials',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service53-sec-1.jpg',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service53-sec-2.jpg',
      header : 'Raw Materials',
      heading: 'Silicon Carbide',
      description : "Silicon carbide, also known as carborundum, is a hard chemical compound containing silicon and carbon.",
      industries : '₹ - Enquire for Estimate',
      para1 : "",
      para2 :`
          <p>Silicon carbide (SiC), also known as carborundum, is a hard chemical compound composed of silicon and carbon.</p>

          <h4>Occurrence:</h4>
          <ul>
              <li>Naturally occurs as the rare mineral moissanite; however, it is mass-produced in powder and crystal forms.</li>
          </ul>
          <br>

          <h4>Forms:</h4>
          <p>1. Grains:</p>
          <ul>
              <li>Can be bonded by sintering to form hard ceramics.</li>
              <li>Widely used in applications requiring high endurance, such as car brakes, clutches, and bulletproof vests.</li>
          </ul>
          <p>2. Single Crystals:</p>
          <ul>
              <li>Grown by the Lely method.</li>
              <li>Cut into gems known as synthetic moissanite.</li>
          </ul>
          <br>

          <h4>Applications:</h4>
          <p>1. Abrasive:</p>
          <ul>
              <li>Used for its abrasive properties.</li>
          </ul>
          <p>2. Semiconductor:</p>
          <ul>
              <li>Functions as a semiconductor.</li>
          </ul>
          <p>3. Gem Quality Diamond Simulant:</p>
          <ul>
              <li>Used as a diamond simulant, especially in gem-quality synthetic moissanite.</li>
          </ul>
          <br>

          <h4>Manufacturing Process:</h4>
          <ul>
              <li>Silicon carbide is manufactured by combining silica sand and carbon in an Acheson graphite electric resistance furnace at high temperatures (1,600–2,500 °C).</li>
          </ul>
          <br>

          <h4>Benefits:</h4>
          <p>1. High Endurance:</p>

          <ul>
              <li>Ideal for applications requiring durability, such as car brakes and bulletproof vests.</li>
          </ul>
          <p> 2. Versatility:</p>

          <ul>
              <li>Functions as an abrasive, semiconductor, and gem-quality diamond simulant.</li>
          </ul>
          <p> 2. Manufacturing Simplicity:</p>

          <ul>
              <li> Produced through a straightforward process involving common materials.</li>
          </ul>
          <br>

          <p>Silicon carbide, with its remarkable hardness and versatility, finds applications ranging from abrasives to semiconductors, showcasing its significance in various industries.</p>



      `,
      para3 : "",
      routing :  'silicon-carbide'
    },
    {
      id : 54,
      title : 'Heat Treatment Facility',
      image_1 : 'https://ik.imagekit.io/webibee/VBRC/service54-sec-1.png',
      image_2 : 'https://ik.imagekit.io/webibee/VBRC/service54-sec-2.jpg',
      header : 'Heat Treatment Facility',
      heading: 'Hot Air Oven',
      description : "Hot air ovens are electrical devices which use dry heat to sterilize A Hot Air Oven is a laboratory appliance that is used to dry, sterilize, or heat materials.",
      industries : '₹ - Enquire for Estimate',
      para1 : 'A Hot Air Oven is a laboratory appliance that is used to dry, sterilize, or heat materials. It works by circulating hot air inside the oven chamber to evenly distribute heat to the materials being processed. Hot air ovens are often used in a variety of settings, including research laboratories, industrial settings, and educational institutions.',
      para2 : 'Hot air ovens typically have a temperature range of ambient temperature to 250°C or higher and are equipped with a thermostat to maintain a consistent temperature. Some hot air ovens also have a fan to circulate the hot air inside the oven chamber, which can help to ensure that the materials being processed are heated or dried evenly. Hot air ovens are commonly used to sterilize equipment and materials, as the high temperatures can kill microorganisms. They are also used to dry materials, such as chemicals, biological specimens, and glassware. In addition, hot air ovens can be used to heat materials for a variety of purposes, such as activating chemicals or heating materials to a specific temperature for testing.',
      table1_th : 'Hot Zone Size',
      table1_th2 : '450mmx 450mmx 450mm',
      table1_td : 'Tray',
      table1_td2 : '3 Nos. - Stainless steel',
      table1_td3 : 'Max Temp',
      table1_td4 : '250°C',
      routing : "hot-air-oven"
    }
  ];

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

  imagesNav=[
    'https://ik.imagekit.io/webibee/VBRC/images/menu_own.svg',
    'https://ik.imagekit.io/webibee/VBRC/images/icons8-close.svg',
  ];
  currentImageIndex15 = 0;
  changeImage15() {
    this.currentImageIndex15 = (this.currentImageIndex15 + 1) % this.imagesNav.length;
  }
}
