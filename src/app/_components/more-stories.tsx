import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Image from "next/image";
import aboutImage from "../../../public/assets/img/profile-img.jpg"

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <main className="main">
    <section id="about" className="about section container-fluid container-xl">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-md-6">

            <div className="row justify-content-between gy-4">
              <div className="col-lg-5">
                <Image src={aboutImage} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-7 about-info flex flex-col gap-3">
                <p><strong>Name: </strong> <span>Morgan Freeman</span></p>
                <p><strong>Profile: </strong> <span>full stack developer</span></p>
                <p><strong>Email: </strong> <span>contact@example.com</span></p>
                <p><strong>Phone: </strong> <span>(617) 557-0089</span></p>
              </div>
            </div>

            <div className="skills-content skills-animation">

              <h5>Skills</h5>

              <div className="progress">
                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={70}     
                        aria-valuemin={0}      
                        aria-valuemax={100} 
                        style={{ width: '100%' }}   
                      />

                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={70}     
                        aria-valuemin={0}      
                        aria-valuemax={100} 
                        style={{ width: '90%' }}   
                      />
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={70}     
                        aria-valuemin={0}      
                        aria-valuemax={90} 
                        style={{ width: '80%' }}   
                      />
                </div>
              </div>

              <div className="progress">
                <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={70}     
                        aria-valuemin={0}      
                        aria-valuemax={100} 
                        style={{ width: '70%' }}   
                      />
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="about-me">
              <h4>About me</h4>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                imperdiet et, porttitor
                at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                porttitor accumsan tincidunt.
              </p>
              <p>
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                porttitor volutpat. Vestibulum
                ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
              </p>
              <p>
                Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Nulla porttitor accumsan
                tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
    </main>
  );
}
