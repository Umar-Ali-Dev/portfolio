import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <div className=" logo d-flex align-items-center">
           <h1 className="sitename">Bilal Ahmad</h1>
        </div>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home </a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            {/* <li className="dropdown"><a href="#"><span>Dropdown</span> 
            </a>
            
            </li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
