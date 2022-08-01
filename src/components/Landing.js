import React from "react";

import Hero from "../images/image-hero-mobile.png";

import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import marker from "../images/client-maker.svg";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <main className="container">
      <section className="landing">
        <div className="hero">
          <img src={Hero} alt="" />
        </div>
        <div className="landing_text">
          <h1 className="landing_title">
            Make <span className="w-break">remote work</span>
          </h1>
          <p className="landing_p">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 360 }}
            className="reset--btn learn-btn"
          >
            Learn more
          </motion.button>
          <div className="landing_companies">
            <div className="landing_company">
              <img src={databiz} alt="" />
            </div>
            <div className="landing_company">
              <img src={audiophile} alt="" />
            </div>
            <div className="landing_company">
              <img src={meet} alt="" />
            </div>
            <div className="landing_company">
              <img src={marker} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
