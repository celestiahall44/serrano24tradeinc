import logo from '../SerranoLogoNBG.png'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Electrical',
    description:
      'From new lighting and outlets to panel upgrades, careful electrical work keeps your property running safely.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M27 4 11 26h11l-2 18 17-24H25l2-16Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'New builds',
    description:
      'From early plans through the finishing work, get a reliable partner for new residential and commercial construction.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m6 22 18-14 18 14M11 20v21h26V20M19 41V27h10v14M18 18h.01M30 18h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Renovations',
    description:
      'Thoughtful upgrades for homes and commercial spaces, planned around the way you live or work.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 22 24 8l17 14M12 20v21h24V20M20 41V28h8v13" />
      </svg>
    ),
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-5-5 5 5-5 5" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Serrano24 Contracting home">
          <img src={logo} alt="Serrano24 logo" />
          <span className="brand-divider" />
          <span className="brand-trade">CONTRACTING</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">Our approach</a>
          <a className="nav-cta" href="#contact">
            Get a quote <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> RESIDENTIAL · COMMERCIAL · NEW BUILDS · RENOVATIONS</div>
            <h1>
              Good work.
              <br />
              <span>Done right.</span>
              <br />
              Built to last.
            </h1>
            <p className="hero-description">
              From ground-up builds to electrical work and thoughtful renovations,
              we bring care and clear communication to residential and
              commercial projects.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let’s talk about your project <ArrowIcon />
              </a>
              <a className="text-link" href="#services">
                Explore our services <span>↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-mark" aria-hidden="true">✓</span>
              <span><strong>Licensed &amp; insured</strong><br />Residential and commercial projects.</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
              alt="Bright, newly built modern interior"
            />
            <div className="hero-photo-shade" />
            <div className="photo-caption">
              <span className="caption-line" />
              <span>MADE FOR THE WAY YOU LIVE &amp; WORK</span>
            </div>
            <div className="hero-brand-panel">
              <img src={logo} alt="Serrano24 Trading logo" />
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark-eyebrow"><span /> HOW WE CAN HELP</div>
              <h2>One call. <span>Every detail.</span></h2>
            </div>
            <p>
              From new construction to a single-room renovation, get one dependable
              partner for your residential or commercial project.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number} / 03</span>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Ask us about ${service.title}`}>
                  Discuss this service <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Bright, renovated commercial workspace"
              loading="lazy"
            />
            <div className="image-index">S24 <span>—</span> THE FINISH MATTERS</div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span /> THE SERRANO24 STANDARD</div>
            <h2>Built with care. <span>Renewed with purpose.</span></h2>
            <p>
              New builds and renovations deserve a team that listens, communicates,
              and pays attention to the details. We bring that same care to
              residential and commercial spaces.
            </p>
            <div className="values-list">
              <div><span>01</span> Clear communication, start to finish</div>
              <div><span>02</span> Thoughtful, detail-focused workmanship</div>
              <div><span>03</span> Licensed and insured</div>
            </div>
            <a className="text-link light-link" href="#contact">
              Get to know your contractor <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <div className="eyebrow"><span /> HAVE A PROJECT IN MIND?</div>
              <h2>Planning a new build or renovation? <span>Let’s talk.</span></h2>
              <p>
                Tell us about your residential or commercial project. We’ll
                start with a conversation and help you figure out a good next step.
              </p>
            </div>
            <a className="button button-light" href="mailto:?subject=Let%27s%20talk%20about%20my%20new%20build%20or%20renovation">
              Start a conversation <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">SERRANO<span>24</span> CONTRACTING</a>
        <span>Residential &amp; commercial · New builds · Renovations · Electrical</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
