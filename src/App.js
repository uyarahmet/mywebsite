import './css/main.css';
import './css/base.css';
import './css/vendor.css';
import me from './images/me.jpg'
import inventory from './images/portfolio/inventory.jpg'
import tree from './images/portfolio/philo_tree.png'
import spartan from './images/portfolio/spartan.jpg'

function App() {
  return (
    <div className='App'>

     <section id="intro">

     	<div class="intro-overlay"></div>

     	<div class="intro-content">
     		<div class="row">

     			<div class="col-twelve">

  	   			<h5>Hello.</h5>
  	   			<h1>I'm Ahmet Uyar.</h1>

  	   			<p class="intro-position">
  	   				<span>CS and EEE double major student</span>
  	   			</p>

  	   			<a class="button stroke smoothscroll" href="#about" title="">More About Me</a>

  	   		</div>

     		</div>
     	</div>

     	<ul class="intro-social">
           <li><a href="https://github.com/uyarahmet"><i class="fa fa-github"></i></a></li>
           <li><a href="https://www.linkedin.com/in/ahmet-uyar-8aa306198/"><i class="fa fa-linkedin"></i></a></li>
           <li><a href="https://twitter.com/UYRAHMET"><i class="fa fa-twitter"></i></a></li>
           <li><a href="https://www.instagram.com/uyaar/"><i class="fa fa-instagram"></i></a></li>
        </ul>

     </section>


     <section id="about">

     	<div class="row section-intro">
     		<div class="col-twelve">

     			<h5>About</h5>
     			<h1>Let me introduce myself.</h1>
           <br/>
           <br/>


     			<div class="intro-info">

     				<img src={me} alt=''></img>

     				<p class="lead">I'm Ahmet, a student at Koç University. I am currently pursuing my Bachelor's degree in Computer
            Engineering together with Electrical and Electronics Engineering. I have experience in C, C++, Java, Python, and
           JavaScript. I'm interested in history, modeling, and simulation. </p>
     			</div>

     		</div>
     	</div>

     	<div class="row about-content">

     		<div class="col-six tab-full">

     			<h3>Experience</h3>
          <br/>
     			<p class ="exp-title">Software Development Intern at eKare Inc.</p>
          <br/>
          <p id="skills-text">
          •	Developing facial recognition and object detection AI solutions for filtering invalid photos inside
          the eKare database. Integrating the filtering middleware to eKare GAUSS api.</p>

           <br/>

     			<ul class="info-list">
     				<li>
     					<strong>Fullname:</strong>
     					<span>Ahmet Uyar</span>
     				</li>
     				<li>
     					<strong>Birth Date:</strong>
     					<span>May 15, 2001</span>
     				</li>
     				<li>
     					<strong>Email:</strong>
     					<span>auyar19@ku.edu.tr</span>
     				</li>
            <li>
     					<strong>GitHub:</strong>
     					<span><a href="https://github.com/uyarahmet">github.com/uyarahmet</a></span>
     				</li>

     			</ul>

     		</div>

     		<div class="col-six tab-full">

     			<h3>Skills</h3>
          <br/>
     			<p id = 'skills-text'>I am experienced and skilled in teaching progamming as I have became a <a href="https://sl.ku.edu.tr/">section leader</a> twice in my institution's
          introduction to programming course alongide with our <a href="https://cs101-merhabadunya.github.io/">volunteer program</a> where we taught programming with python to
          100+ highschool students all across the country.</p>

           <br/>

  				<ul class="skill-bars">
  				   <li>
  				   	<div class="progress percent90"><span>90%</span></div>
  				   	<strong>Python</strong>
  				   </li>
  				   <li>
  				   	<div class="progress percent85"><span>85%</span></div>
  				   	<strong>JavaScript</strong>
  				   </li>
  				   <li>
  				   	<div class="progress percent70"><span>70%</span></div>
  				   	<strong>C, C++</strong>
  				   </li>
  				   <li>
  				   	<div class="progress percent95"><span>95%</span></div>
  				   	<strong>Java</strong>
  				   </li>
  				   <li>

  				   	<div class="progress percent75"><span>75%</span></div>
  				   	<strong>Teaching</strong>
  				   </li>

  				</ul>

     		</div>

         <br/>
         <br/>

     	</div>
      <br/>
      <br/>
      <br/>
     	<div class="row button-section">
     		<div class="col-twelve">
     			<a href="https://user-images.githubusercontent.com/85699024/123351802-f96e5680-d52b-11eb-883a-f75230ced1d1.png" download title="Download CV" class="button button-primary">Display Resume</a>
     		</div>
     	</div>

     </section>



  	<section id="resume" class="grey-section">

  		<div class="row section-intro">
     		<div class="col-twelve">

     			<h5>Resume</h5>
     			<h1>More of my credentials.</h1>

     			<p class="lead">Below you can see the summary of my past journey</p>

     		</div>
     	</div>
     	<div class="row resume-timeline">

     		<div class="col-twelve resume-header">

     			<h2>Education</h2>

     		</div>

     		<div class="col-twelve">

     			<div class="timeline-wrap">

  	   			<div class="timeline-block">

  	   				<div class="timeline-ico">
  	   					<i class="fa fa-graduation-cap"></i>
  	   				</div>

  	   				<div class="timeline-header">
  	   					<h3><a href="https://eng.ku.edu.tr/">Bachelor Degree</a></h3>
  	   					<p>September 2019 - June 2023</p>
  	   				</div>

  	   				<div class="timeline-content">
  	   					<h4><a href="https://www.ku.edu.tr/">Koç University</a></h4>
  	   					<p id = 'skills-text'>I am currently pursuing a double major with <a href="https://cs.ku.edu.tr/">CS</a> and <a href="https://ee.ku.edu.tr/">EEE</a>. I was a
                   former board member of the <a href="https://ku.acm.org/">Koç University branch
                of Association of Computer Machinery (ACM)</a>. Became an undergraduate teaching assistant or tutor
                for several CS courses. Never stoping learning and having fun.</p>
  	   				</div>

  	   			</div>

     			</div>

     		</div>

     	</div>

     	<div class="row resume-timeline">

     		<div class="col-twelve resume-header">

     			<h2>Work Experience</h2>

     		</div>

     		<div class="col-twelve">

     			<div class="timeline-wrap">

     				<div class="timeline-block">

  	   				<div class="timeline-ico">
  	   					<i class="fa fa-briefcase"></i>
  	   				</div>

  	   				<div class="timeline-header">
  	   					<h3>R&D Intern</h3>
  	   					<p>June 2021 - Present</p>
  	   				</div>

  	   				<div class="timeline-content">
  	   					<h4><a href="https://ekare.ai/">eKare.ai</a></h4>
  	   					<p id = 'skills-text'>• Developing facial recognition and object detection AI solutions for filtering invalid photos inside the eKare database. <br/>
  • Integrating the filtering middleware to eKare GAUSS API and database using the Django framework.</p>
  	   				</div>

     			</div>

     		</div>

     	</div>

    </div>

  	</section>



  	<section id="portfolio">

  		<div class="row section-intro">
     		<div class="col-twelve">

     			<h5>Portfolio</h5>
     			<h1>Check Out Some of My Works.</h1>

     			<p class="lead">This feed will be updated regularly.</p>
         <br/>

     		</div>
     	</div>

     	<div class="row portfolio-content">

     		<div class="col-twelve">


  	         <div id="folio-wrapper" class="block-1-2 block-mob-full stack">

  	         	<div class="bgrid folio-item">
  	               <div class="item-wrap">
  	               	<img src={tree} alt=''/>
  	                  <a href="https://github.com/uyarahmet/DeNovo" class="overlay">
  	                     <div class="folio-item-table">
  	                     	<div class="folio-item-cell">
  		     					       <h3 class="folio-title">Bioinformatics</h3>
  		     					    	 <span class="folio-types">
  		     					       	  Biology
  		     					       </span>
  		     					   </div>
  	                     </div>
  	                  </a>
  	               </div>
  	        		</div>

  	        		<div class="bgrid folio-item">
  	               <div class="item-wrap">
  	               	<img src={inventory} alt=''/>
  	               	<a href="https://github.com/uyarahmet/Decovita_Inventory_Tracker" class="overlay">
  	                     <div class="folio-item-table">
  	                     	<div class="folio-item-cell">
  	                     		<h3 class="folio-title">Inventory Tracker</h3>
  		     					    	<span class="folio-types">
  		     					       	  Warehouse Management
  		     					      </span>
  		     					   </div>
  	                     </div>
  	                  </a>
  	               </div>
  	        		</div>

                <div class="bgrid folio-item">
  	               <div class="item-wrap">
  	               	<img src={spartan} alt=''/>
  	               	<a href="https://github.com/uyarahmet/2D-intersection-calculator" class="overlay">
  	                     <div class="folio-item-table">
  	                     	<div class="folio-item-cell">
  	                     		<h3 class="folio-title">2D Intersection Calculator</h3>
  		     					    	<span class="folio-types">
  		     					       	  Digital Design
  		     					      </span>
  		     					   </div>
  	                     </div>
  	                  </a>
  	               </div>

  	        		</div>

  	         </div>

     		</div>

     	</div>

  	</section>


  	<section id="contact">

  		<div class="row section-intro">
     		<div class="col-twelve">

     			<h5>Contact</h5>
     			<h1>I'd Love To Hear From You.</h1>

     			<p class="lead">Feel free to contact me.</p>
          <br/>
     		</div>
     	</div>

     	<div class="row contact-info">

     		<div class="col-four tab-full">

     			<div class="icon">
     				<i class="icon-pin"></i>
     			</div>

     			<h5>Where to find me</h5>

     			<p>
              Rumelifeneri, Sarıyer Rumeli Feneri Yolu, 34450 Sarıyer,
              Istanbul, Turkey <br/>
              </p>

     		</div>

     		<div class="col-four tab-full collapse">

     			<div class="icon">
     				<i class="icon-mail"></i>
     			</div>

     			<h5>Email Me At</h5>
 
     			<p>auyar19@ku.edu.tr <br/>
  			   </p>

     		</div>

     		<div class="col-four tab-full">

     			<div class="icon">
     				<i class="icon-phone"></i>
     			</div>

     			<h5>Call Me At</h5>

     			<p>US: (+1) 571 413 7968 <br/>
  			   	TR: (+90) 549 870 5654 <br/>
  			   </p>

     		</div>

     	</div>

  	</section>




     <footer>
       	<div class="row">

       		<div class="col-six tab-full pull-right social">

       			<ul class="footer-social">
              <li><a href="https://github.com/uyarahmet"><i class="fa fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/ahmet-uyar-8aa306198/"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="https://twitter.com/UYRAHMET"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/uyaar/"><i class="fa fa-instagram"></i></a></li>
  			   </ul>

  	      </div>

        </div>

     </footer>



     <script src="js/jquery-2.1.3.min.js"></script>
     <script src="js/plugins.js"></script>
     <script src="js/main.js"></script>

  </div>
  );
}

export default App;
