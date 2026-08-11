import { NAV_LINKS, WHATSAPP_LINK } from "../lib/constants";
import ZoomableImage from "./ZoomableImage";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <img src="/assets/logo.jpg" alt="SwiftExchange logo" width={40} height={40} />
              <span className="word">
                Swift<span>Exchange</span>
              </span>
            </a>
            <p>
              A registered crypto trading desk. Every trade is confirmed and settled one-on-one
              on WhatsApp.
            </p>
          </div>

          <div className="foot-col">
            <h4>Explore</h4>
            {NAV_LINKS.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <a href="#contact">Contact Us</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Trade on WhatsApp
            </a>
            <a href="https://twitter.com/_SwiftExchange" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.instagram.com/myswiftexchange/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>

          <div className="foot-col">
            <h4>Registered Business</h4>
            <div className="cac-box">

              <ZoomableImage
                src="/assets/certificate.jpg"
                alt="CAC Certificate of Registration"
                width={52} 
                height={68}
              />
              <div className="t">
                <b>Swiftsale Services</b>
                CAC Reg. No. 3647700
                <br />
                Onitsha, Anambra State
              </div>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} SwiftExchange. All rights reserved.</span>
          <span>Trading is conducted exclusively via WhatsApp.</span>
        </div>
      </div>
    </footer>
  );
}