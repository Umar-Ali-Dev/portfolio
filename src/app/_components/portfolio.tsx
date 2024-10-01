import Image from 'next/image'
import React from 'react'
import statsImage from "../../../public/assets/img/stats-bg.jpg"
import redwave from "../../../public/assets/icons/RED 1.svg"
import redchain from "../../../public/assets/icons/redchainn 1.svg"
import shabaz from "../../../public/assets/icons/shahbazPay.svg"
import easy from "../../../public/assets/icons/easy 1.svg"
import shape from "../../../public/assets/icons/shape 1.svg"
import frosty from "../../../public/assets/icons/Frosty_Metrics.38b015f8 1.svg"
import nadine from "../../../public/assets/icons/nadine.svg"
import tie from "../../../public/assets/icons/the tie 1.svg"
import market from "../../../public/assets/icons/market pro 1.svg"
import quick from "../../../public/assets/icons/quick card 1.svg"


const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div> 

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>
          
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className='bg-[#FF9696] flex justify-center items-center w-full h-[280px]'>
              < Image src={redwave} className="" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className='bg-[#A0D4FF] flex justify-center items-center w-full h-[280px]'>

              < Image src={redchain} className="" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className='bg-[#5FB7FF] flex justify-center items-center w-full h-[280px]'>

              < Image src={shabaz} className="" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className='bg-[#239F4C] flex justify-center items-center w-full h-[280px]'>

              < Image src={easy} className="" alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>Books 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className='bg-[#2F73C1] flex justify-center items-center w-full h-[280px]'>

              < Image src={shape} className=" " alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className='bg-[#0D1A37] flex justify-center items-center w-full h-[280px]'>

              < Image src={frosty} className=" " alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className='bg-black flex justify-center items-center w-full h-[280px]'>
              < Image src={nadine} className=" " alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className='bg-black flex justify-center items-center w-full h-[280px]'>
              < Image src={tie} className=" " alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>Books 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className='bg-[#FEBE10] flex justify-center items-center w-full h-[280px]'>
              < Image src={quick} className=" " alt=""/>
              </div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/ Image/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div> 
 
  

             

          </div>

        </div>

      </div>

    </section>
  )
}

export default Portfolio