import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6" id="hero">
            <h1 className="display-4 font-weight-bold">Hi I'm Waseem</h1>
            <p className="lead">Web Developer and IT Manager</p>
            <hr />
            <div class="icons mb-4">
              <Link to="mailto:wmohammad83@icloud.com" className="">
                <i class="fa-regular fa-envelope"></i>
              </Link>
              <Link
                target="_blank"
                to="https://uk.linkedin.com/in/waseem-mohammad-a587061b2?original_referer=https%3A%2F%2Fwww.google.com%2F"
                class=""
              >
                <i class="fa-brands fa-linkedin"></i>
              </Link>
              <Link target="_blank" to="https://github.com/wmohammad83">
                <i class="fa-brands fa-github"></i>
              </Link>
            </div>
            <Button
              as={Link}
              to="/contact"
              className="secondary justify-contact-center"
              size="lg"
            >
              <i class="fa-regular fa-envelope"></i> Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
