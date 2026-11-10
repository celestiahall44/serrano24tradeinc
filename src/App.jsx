import { useEffect, useRef } from 'react'
import logo from '../SerranoLogoNBG.png'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Residential electrical',
    detailHref: '#electrical',
    detailLabel: 'Explore electrical work',
    className: 'service-card-photo service-card-electrical',
    description:
      'Lighting, outlets, and electrical upgrades planned around your home, with careful workmanship and clear communication.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M27 4 11 26h11l-2 18 17-24H25l2-16Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Panel upgrades',
    detailHref: '#electrical',
    detailLabel: 'Explore panel upgrades',
    className: 'service-card-photo service-card-panels',
    description:
      'Update your home’s electrical panel to support everyday needs and planned improvements, with attention to safety and detail.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m6 22 18-14 18 14M11 20v21h26V20M19 41V27h10v14M18 18h.01M30 18h.01" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Home renovations',
    detailHref: '#renovations',
    detailLabel: 'Explore home renovations',
    className: 'service-card-photo service-card-renovations',
    description:
      'From single-room updates to larger home remodels, thoughtful improvements built around the way you and your family live.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 22 24 8l17 14M12 20v21h24V20M20 41V28h8v13" />
      </svg>
    ),
  },
]

const serviceDetails = [
  {
    id: 'electrical',
    eyebrow: 'RESIDENTIAL ELECTRICAL',
    title: 'Everyday power.',
    accent: 'Thoughtfully planned.',
    description: 'From a single fixture to a panel upgrade, electrical work built around how you use your home.',
    items: [
      {
        title: 'Lighting that works for you',
        description: 'Update fixtures and lighting layouts to make your rooms more comfortable and useful.',
      },
      {
        title: 'Outlets & electrical updates',
        description: 'Plan outlet improvements and electrical upgrades around everyday needs, furniture, and the way you live.',
      },
      {
        title: 'Panel upgrades',
        description: 'Discuss your existing panel, your home’s electrical needs, and the improvements you’re planning next.',
      },
    ],
    closing: 'Updating one room or planning ahead? Let’s talk through your electrical needs.',
    action: 'Discuss electrical work',
  },
  {
    id: 'renovations',
    eyebrow: 'HOME RENOVATIONS',
    title: 'The home you know.',
    accent: 'A fresh start.',
    description: 'Thoughtful updates for the spaces you use most, with clear communication from the first conversation.',
    items: [
      {
        title: 'Single-room updates',
        description: 'Refresh a room with improvements shaped around what works, what doesn’t, and what you want to change.',
      },
      {
        title: 'Larger home remodels',
        description: 'Bring your ideas together into a clear scope for a more connected, comfortable home.',
      },
      {
        title: 'Electrical planning',
        description: 'Consider lighting, outlets, and electrical needs early so they fit naturally into your renovation.',
      },
    ],
    closing: 'Have a space in mind? Tell us what you’d like to improve and we’ll discuss the next step.',
    action: 'Discuss a home renovation',
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
  const siteShell = useRef(null)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || !('IntersectionObserver' in window)) return

    const targets = [...siteShell.current.querySelectorAll(
      '.section-heading, .service-card, .service-detail-item, .service-detail-actions, .projects-placeholder, .about-image, .about-copy, .owner-portrait-placeholder, .contact-inner',
    )]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })

    targets.forEach((target) => {
      if (target.getBoundingClientRect().top >= window.innerHeight) {
        target.classList.add('scroll-reveal', 'reveal-pending')
        observer.observe(target)
      }
    })

    function clearReveals() {
      observer.disconnect()
      targets.forEach((target) => target.classList.remove('scroll-reveal', 'reveal-pending'))
    }

    function handleMotionChange(event) {
      if (event.matches) clearReveals()
    }

    function revealOnFocus(event) {
      event.currentTarget.classList.remove('reveal-pending')
      observer.unobserve(event.currentTarget)
    }

    targets.forEach((target) => target.addEventListener('focusin', revealOnFocus))
    motionPreference.addEventListener('change', handleMotionChange)
    return () => {
      clearReveals()
      targets.forEach((target) => target.removeEventListener('focusin', revealOnFocus))
      motionPreference.removeEventListener('change', handleMotionChange)
    }
  }, [])

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
    <div className="site-shell" ref={siteShell}>
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
            <div className="eyebrow"><span /> RESIDENTIAL ELECTRICAL · HOME RENOVATIONS</div>
            <h1>
              Your home.
              <br />
              <span>Done right.</span>
              <br />
              Built to last.
            </h1>
            <p className="hero-description">
              Residential electrical work comes first, from lighting and outlets
              to panel upgrades. When it’s time to renovate, we bring that same
              care and clear communication to your home.
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
              <span><strong>Licensed &amp; insured</strong><br />Electrical work and renovations for your home.</span>
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
              From a lighting upgrade to a home renovation, get one dependable
              partner focused on your home.
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
                <a href={service.detailHref}>
                  {service.detailLabel} <span aria-hidden="true">↓</span>
                </a>
                <button className="contact-trigger" type="button" onClick={openContact} aria-haspopup="dialog" aria-label={`Ask us about ${service.title}`}>
                  Discuss this service <ArrowIcon />
                </button>
              </article>
            ))}
          </div>
        </section>

        {serviceDetails.map((detail) => (
          <section className={`service-detail service-detail-${detail.id} section-wrap`} id={detail.id} key={detail.id} aria-labelledby={`${detail.id}-heading`}>
            <div className="section-heading">
              <div>
                <div className="eyebrow dark-eyebrow"><span /> {detail.eyebrow}</div>
                <h2 id={`${detail.id}-heading`}>{detail.title} <span>{detail.accent}</span></h2>
              </div>
              <p>{detail.description}</p>
            </div>
            <ul className="service-detail-grid">
              {detail.items.map((item, index) => (
                <li className="service-detail-item" key={item.title}>
                  <span className="service-detail-number" aria-hidden="true">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="service-detail-actions">
              <p>{detail.closing}</p>
              <button className="contact-trigger text-link" type="button" onClick={openContact} aria-haspopup="dialog">
                {detail.action} <ArrowIcon />
              </button>
            </div>
          </section>
        ))}

        <section className="projects section-wrap" id="projects" aria-labelledby="projects-heading">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark-eyebrow"><span /> OUR WORK</div>
              <h2 id="projects-heading">Completed <span>projects.</span></h2>
            </div>
            <p>
              A closer look at our residential electrical work and home renovations.
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
              Your home deserves an electrician who listens, communicates, and
              pays attention to the details. From electrical upgrades to home
              renovations, we treat your space with care.
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
              <h2>Electrical work or a home renovation? <span>Let’s talk.</span></h2>
              <p>
                Tell us what you’d like to improve in your home. We’ll
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
        <span>Residential electrical · Panel upgrades · Home renovations</span>
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
        <div className="eyebrow"><span /> LET’S IMPROVE YOUR HOME</div>
        <h2 id="contact-modal-heading">Let’s talk about <span>your project.</span></h2>
        <p id="contact-modal-description">
          Contact Sergio Serrano or reach Holly Moore at the office to discuss
          your home’s electrical needs or renovation plans and request a quote.
          Please leave a message if we miss your
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
