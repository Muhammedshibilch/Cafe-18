import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Navbar style={{ backgroundColor: "white" }} data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./public/logo2.png" alt="" width={"100px"} />
          </Navbar.Brand>
          <Nav className="me-5">
            <Nav.Link className="me-5 text-dark " href="#aboutpage">
              About
            </Nav.Link>
            <Nav.Link className="me-5 text-dark" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="me-5 text-dark" href="#testimonials">
              Testimonials
            </Nav.Link>
            <Nav.Link className="me-5 text-dark" href="#contact">
              Contacts
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="back">
        <center>
          <h1 className="text-white-50 header">
            Cafe <span className="text-black-50">18</span>{" "}
          </h1>
          <h3 className="sub-head">Savor the essence of coffee culture</h3>
          <a href="#aboutpage">
            <button className="about-button me-5 mt-4 ">About</button>
          </a>
          <a href="#services">
            {" "}
            <button className="services-button">Services</button>
          </a>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              style={{ border: "1px solid white", padding: "10px" }}
              className="social-icon"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              style={{ border: "1px solid white", padding: "10px" }}
              className="social-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              style={{ border: "1px solid white", padding: "10px" }}
              className="social-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </center>
      </div>
      <div id="aboutpage">
        <center>
          <h1 className="mt-4 about">About Cafe 18</h1>
        </center>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 position-relative">
              <img
                src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDJ8fCUyMkNvZmZlZSUyMnxlbnwwfHx8fDE3MzI5NDE3MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Cafe 18"
                className="img-fluid mt-4"
                height="400px"
              />
              <div className="info-box">
                <p>
                  {" "}
                  <center>
                    Your <br /> destination for <br /> coffee lovers <br />{" "}
                    since 2021
                  </center>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text mt-5">
                <p>
                  At Cafe 18, we’re not just a cafe – we’re your haven for all
                  things coffee. With a passion for brewing the finest blends
                  and a commitment to exceptional customer service, we pride
                  ourselves on creating a welcoming space where coffee
                  enthusiasts can indulge in their favorite brews.
                </p>
                <p>
                  Whether you're in the mood for a rich espresso, a creamy
                  latte, or a refreshing cold brew, our dedicated team is here
                  to elevate your coffee experience. At Cafe 18, enjoying your
                  perfect cup of coffee is our priority.
                </p>
                <p>
                  Join us to explore the vibrant world of coffee, where every
                  sip tells a story. Welcome to Cafe 18 – where great coffee
                  meets a warm atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="mt-3">
        <center>
          <h1 className="mt-4 s-title">Services offered at Cafe 18</h1>
          <p className="s-subtitle">
            Reach out to us for a unique coffee experience and expert
            recommendations.
          </p>
        </center>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card service-card">
                <div className="circle-design">
                  <span>0</span>
                </div>
                <div className="card-body">
                  <h4 className="card-title mt-5">Coffee selection</h4>
                  <p className="card-text">
                    An extensive menu of coffee options sourced from the best
                    beans around the world, we ensure that every cup is crafted
                    to perfection, catering to your unique taste preferences.
                  </p>
                  <a href="#" className="c-link">
                    Contact ➜
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card service-card">
                <div className="circle-design">
                  <span>1</span>
                </div>
                <div className="card-body">
                  <h4 className="card-title mt-5">Personalized service</h4>
                  <p className="card-text">
                    Our friendly baristas provide personalized service, guiding
                    you through our menu to help you find the perfect drink that
                    suits your mood and taste.
                  </p>
                  <a href="#" className="c-link">
                    Contact ➜
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card service-card">
                <div className="circle-design">
                  <span>2</span>
                </div>
                <div className="card-body">
                  <h4 className="card-title mt-5">Community events</h4>
                  <p className="card-text">
                    We host a variety of community events, from coffee tastings
                    to latte art workshops, fostering a love for coffee and
                    connecting with fellow enthusiasts.
                  </p>
                  <a href="#" className="c-link">
                    Contact ➜
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonials" class="parallax">
        <div class="overlay">
          <h1>Elevating your coffee experience with passion and care.</h1>
        </div>
      </div>
      <div id="contact" className="contact-container">
        <div className="contact-info">
          <h2>Get in touch with us</h2>
          <p>3961 Cafe 18, Kannur, Kerala</p>
          <p>+91 7510702634</p>
          <p>
            <a href="mailto:shibilmuhammed069@gmail.com">
              shibilmuhammed069@gmail.com
            </a>
          </p>
          <div className="social-media">
            <p>Follow us:</p>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="4"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer className="footer-container">
        <nav className="footer-navigation">
          <a href="#aboutpage">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contacts</a>
        </nav>
        <p className="footer-copyright">
          &copy; All Rights Reserved. <span>Cafe 18</span>
        </p>
      </footer>
    </>
  );
}

export default App;
