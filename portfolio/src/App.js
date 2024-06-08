import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
import './assets/js/main.js';


function App() {
  return (
    <div>
    
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Portfolio />
        <Services />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
      <Scripts />
    </div>
  );
}

function Header() {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <Profile />
        <Navbar />
      </div>
    </header>
  );
}

function Profile() {
  return (
    <div className="profile">
      <img src="assets/img/profile-img.jpg" alt="Profile" className="img-fluid rounded-circle" />
      <h1 className="text-light"><a href="index.html">Dikhsan</a></h1>
      <div className="social-links mt-3 text-center">
        <SocialLink href="#" className="twitter" icon="bx bxl-twitter" />
        <SocialLink href="#" className="facebook" icon="bx bxl-facebook" />
        <SocialLink href="https://instagram.com/dikhsan_tibong?igshid=MzNlNGNkZWQ4Mg==" className="instagram" icon="bx bxl-instagram" />
        <SocialLink href="https://www.linkedin.com/in/dikhsan-tibong-8a7205252/" className="linkedin" icon="bx bxl-linkedin" />
      </div>
    </div>
  );
}

function SocialLink({ href, className, icon }) {
  return (
    <a href={href} className={className}><i className={icon}></i></a>
  );
}

function Navbar() {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <NavItem href="#hero" className="nav-link scrollto active" icon="bx bx-home" text="Home" />
        <NavItem href="#about" className="nav-link scrollto" icon="bx bx-user" text="About" />
        <NavItem href="#resume" className="nav-link scrollto" icon="bx bx-file-blank" text="Resume" />
        <NavItem href="#portfolio" className="nav-link scrollto" icon="bx bx-book-content" text="Portfolio" />
        <NavItem href="#services" className="nav-link scrollto" icon="bx bx-server" text="Services" />
        <NavItem href="#contact" className="nav-link scrollto" icon="bx bx-envelope" text="Contact" />
      </ul>
    </nav>
  );
}

function NavItem({ href, className, icon, text }) {
  return (
    <li><a href={href} className={className}><i className={icon}></i> <span>{text}</span></a></li>
  );
}

function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Dikhsan Dwirangga Tibong</h1>
        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer, Videographer"></span></p>
        <a href="https://wa.me/qr/HJRKD3TCUUXNB1" className="btn-contact">Hubungi Saya</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            "Saya adalah seorang kreator konten yang bersemangat dengan keahlian dalam dunia video editing dan programming. Dengan pengalaman yang luas dalam mengedit dan menyusun video, saya memadukan kreativitas dan keahlian teknis untuk menciptakan konten visual yang menarik dan berkesan. Selain itu, saya juga memiliki kemampuan dalam pengembangan perangkat lunak yang memungkinkan saya untuk menciptakan solusi digital yang inovatif."
          </p>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <PortfolioFilter text="All" filter="*" active />
              <PortfolioFilter text="Video" filter=".filter-Video" />
              <PortfolioFilter text="Web" filter=".filter-web" />
              <PortfolioFilter text="App" filter=".filter-App" />
              <PortfolioFilter text="Motion" filter=".filter-Motion" />
              <PortfolioFilter text="Design" filter=".filter-Design" />
              <PortfolioFilter text="Poster" filter=".filter-Poster" />
              <PortfolioFilter text="Logo" filter=".filter-Logo" />
            </ul>
          </div>
        </div>
        <PortfolioItems />
      </div>
    </section>
  );
}

function PortfolioFilter({ text, filter, active }) {
  return (
    <li data-filter={filter} className={active ? "filter-active" : ""}>{text}</li>
  );
}

function PortfolioItems() {
  const items = [
    { href: "https://www.youtube.com/watch?v=0wBERURsI-8", title: "Video Editing", text: "Penelitian Tanaman Obat", filter: "filter-Video" },
    { href: "https://www.youtube.com/watch?v=pqw74cTWlV8", title: "Video Editing", text: "Project Film 'MIMPI'", filter: "filter-Video" },
    { href: "https://www.youtube.com/watch?v=GXWAslZvQY8", title: "Video Editing", text: "Pengenalan Project Stunting PKM", filter: "filter-Video" },
    { href: "https://www.youtube.com/watch?v=Ii1TwTrdWYE", title: "Video Editing", text: "Example my timeline editing", filter: "filter-Video" },
    { href: "https://www.youtube.com/watch?v=VDJlHAq0KR0", title: "Video Editing", text: "project animasi fortifikasi pangan", filter: "filter-Video" },
    { href: "https://www.youtube.com/watch?v=YccVDnFCzRY", title: "Video Editing", text: "Example my timeline editing", filter: "filter-Video" },
    { href: "https://www.youtube.com/watch?v=ZZ8x0LsFTg8", title: "Video Editing", text: "Short Movie PKM Project", filter: "filter-Video" },
    { href: "portfolio-details.html", title: "Rumah Impian", text: "Logo Design E-Comerce", filter: "filter-web", img: "assets/img/portfolio/mock-up-1.png" },
    { href: "", title: "StuntCam", text: "Logo Design E-Comerce", filter: "filter-Logo", img: "assets/img/portfolio/porftolio-5.png" },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-end">
        {items.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function PortfolioItem({ href, title, text, filter, img }) {
  return (
    <div className={`col-lg-6 col-md-6 portfolio-item ${filter}`}>
      <div className="card custom-card mb-2" style={{ maxWidth: '560px' }}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {img ? (
            <img src={img} className="card-img-top" alt="Project Image" />
          ) : (
            <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden' }}>
              <iframe
                width="100%"
                height="100%"
                src={href.replace("watch?v=", "embed/") + "?controls=1&autoplay=1&modestbranding=1&mute=1"}
                style={{ position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="card-body custom-card-body">
            <h5 className="card-title custom-card-title">{title}</h5>
            <p className="card-text custom-card-text">{text}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    { icon: "fas fa-edit", title: "Desain Poster", description: "Kami menciptakan desain poster yang mencolok dan menarik, menghadirkan pesan Anda dalam bentuk visual yang menawan dan efektif." },
    { icon: "fas fa-laptop-code", title: "Pengembangan Web", description: "Kami menyediakan layanan pengembangan web yang inovatif dan responsif, memastikan situs web Anda berfungsi dengan baik di semua perangkat." },
    { icon: "fas fa-video", title: "Produksi Video", description: "Kami menawarkan layanan produksi video profesional, mulai dari konsep hingga pascaproduksi, untuk menciptakan konten video yang menarik dan berkualitas tinggi." },
    { icon: "fas fa-camera", title: "Fotografi", description: "Kami menyediakan layanan fotografi profesional untuk berbagai kebutuhan, mulai dari potret pribadi hingga fotografi produk." },
    { icon: "fas fa-paint-brush", title: "Desain Grafis", description: "Kami menciptakan desain grafis yang kreatif dan menarik untuk berbagai keperluan, termasuk logo, brosur, dan materi pemasaran lainnya." },
    { icon: "fas fa-edit", title: "Desain Poster", description: "Kami menciptakan desain poster yang mencolok dan menarik, menghadirkan pesan Anda dalam bentuk visual yang menawan dan efektif." },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ icon, title, description, delay }) {
  return (
    <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={delay}>
      <div className="icon"><i className={icon}></i></div>
      <h4 className="title"><a href="">{title}</a></h4>
      <p className="description">{description}</p>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Dikhsan Dwirangga Tibong</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <ul>
                <li>BTN Mahkota Hijau kendari, Sultra, Indonesia</li>
                <li>(+62) 812-3456-7890</li>
                <li>tibongdikhsan@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2019</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2019 - 2021</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2021 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2019 - 2021</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <ContactInfo />
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="info">
      <div className="address">
        <i className="bi bi-geo-alt"></i>
        <h4>Location:</h4>
        <p>BTN Mahkota Hijau kendari, Sultra, Indonesia</p>
      </div>
      <div className="email">
        <i className="bi bi-envelope"></i>
        <h4>Email:</h4>
        <p>tibongdikhsan@gmail.com</p>
      </div>
      <div className="phone">
        <i className="bi bi-phone"></i>
        <h4>Phone:</h4>
        <p>+62 812-3456-7890</p>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Your name</label>
          <input type="text" name="name" className="form-control" id="name" required />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Your email</label>
          <input type="email" className="form-control" name="email" id="email" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" className="form-control" name="subject" id="subject" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" name="message" rows="10" required></textarea>
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div className="text-center"><button type="submit">Send Message</button></div>
    </form>
  );
}

function BackToTop() {
  return (
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  );
}

function Scripts() {
  return (
    <>
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/typed.js/typed.umd.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}

export default App;
