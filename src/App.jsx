import { useRef } from 'react'
import logo from '../SerranoLogoNBG.png'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Electrical',
    className: 'service-card-photo service-card-electrical',
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
    className: 'service-card-photo service-card-new-builds',
    photoCredit: {
      href: 'https://commons.wikimedia.org/wiki/File:Electrical_panel_and_subpanel_with_cover_removed_from_subpanel.jpg',
      text: 'Photo: Gvolk / CC BY-SA 3.0',
    },
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
    className: 'service-card-photo service-card-renovations',
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
  const contactDialog = useRef(null)

  function openContact() {
    contactDialog.current.showModal()
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    ) {
      event.currentTarget.close()
    }
  }

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
          <a href="#projects">Projects</a>
          <a href="#about">Our approach</a>
          <button className="contact-trigger nav-cta" type="button" onClick={openContact} aria-haspopup="dialog">
            Get a quote <ArrowIcon />
          </button>
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
              <button className="contact-trigger button button-primary" type="button" onClick={openContact} aria-haspopup="dialog">
                Let’s talk about your project <ArrowIcon />
              </button>
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
              <span>THOUGHTFUL LIGHTING. DEPENDABLE ELECTRICAL.</span>
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
              <article className={`service-card ${service.className || ''}`} key={service.number}>
                <div className="service-card-top">
                  <span>{service.number} / 03</span>
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="contact-trigger" type="button" onClick={openContact} aria-haspopup="dialog" aria-label={`Ask us about ${service.title}`}>
                  Discuss this service <ArrowIcon />
                </button>
                {service.photoCredit && (
                  <a className="service-photo-credit" href={service.photoCredit.href}>
                    {service.photoCredit.text}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects" aria-labelledby="projects-heading">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark-eyebrow"><span /> OUR WORK</div>
              <h2 id="projects-heading">Completed <span>projects.</span></h2>
            </div>
            <p>
              A closer look at our work, from the first detail to the final finish.
            </p>
          </div>
          <div className="projects-placeholder">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <rect x="6" y="8" width="36" height="32" rx="2" />
              <circle cx="17" cy="18" r="3" />
              <path d="m6 34 10-10 8 8 8-12 10 14" />
            </svg>
            <h3>Project spotlight coming soon.</h3>
            <p>
              We’re putting together photos and details of our completed projects.
              Check back soon to see the work up close.
            </p>
            <button className="contact-trigger text-link" type="button" onClick={openContact} aria-haspopup="dialog">
              Tell us about your project <ArrowIcon />
            </button>
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
            <a className="text-link light-link" href="#owner">
              Get to know your contractor <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="owner section-wrap" id="owner" aria-labelledby="owner-heading">
          <div className="owner-portrait-placeholder">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="22" r="11" />
              <path d="M12 56v-5a20 20 0 0 1 40 0v5" />
            </svg>
            <span>Owner portrait coming soon</span>
          </div>
          <div className="owner-copy section-heading">
            <div className="eyebrow dark-eyebrow"><span /> THE PERSON BEHIND THE WORK</div>
            <h2 id="owner-heading">Meet the <span>owner.</span></h2>
            <p>
              Every project starts with a conversation. Get to know the person
              behind Serrano24TradeInc.
            </p>
            <p className="owner-bio-placeholder">
              A personal introduction, background, and story behind the business
              are coming soon.
            </p>
            <button className="contact-trigger text-link" type="button" onClick={openContact} aria-haspopup="dialog">
              Let’s talk about your project <ArrowIcon />
            </button>
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
            <button className="contact-trigger button button-light" type="button" onClick={openContact} aria-haspopup="dialog">
              Start a conversation <ArrowIcon />
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">SERRANO<span>24</span>TRADEINC.</a>
        <span>Residential &amp; commercial · New builds · Renovations · Electrical</span>
        <a href="#home">Back to top ↑</a>
      </footer>

      <dialog className="contact-modal" ref={contactDialog} aria-labelledby="contact-modal-heading" aria-describedby="contact-modal-description" onClick={closeOnBackdrop}>
        <form method="dialog" className="contact-modal-close">
          <button type="submit" aria-label="Close contact dialog">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </form>
        <div className="eyebrow"><span /> LET’S BUILD SOMETHING</div>
        <h2 id="contact-modal-heading">Let’s talk about <span>your project.</span></h2>
        <p id="contact-modal-description">
          Contact Sergio Serrano or reach Holly Moore at the office to discuss
          your project or request a quote. Please leave a message if we miss your
          call, or feel free to text either number.
        </p>
        <div className="contact-modal-links">
          <a href="tel:+13239947108">
            <span>CELL · SERGIO SERRANO</span>
            <strong>323-994-7108</strong>
            <ArrowIcon />
          </a>
          <a href="tel:+12136104036">
            <span>OFFICE · HOLLY MOORE</span>
            <strong>213-610-4036</strong>
            <ArrowIcon />
          </a>
          <a href="mailto:serrano24trade@gmail.com">
            <span>EMAIL SERGIO</span>
            <strong>serrano24trade@gmail.com</strong>
            <ArrowIcon />
          </a>
        </div>
      </dialog>
    </div>
  )
}

export default App
