import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        {/* <img src="https://www.ideas4life.biz/images/slide/shopping.jpg" className="card-img" alt="background"/> */}
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.ideas4life.biz/images/slide/shopping.jpg"  class="d-block w-100" alt="..." height="900px"/>
    </div>
    <div class="carousel-item">
      <img src="https://marketplace-static.emag.ro/resources/000/024/245/047/24245047.jpg" class="d-block w-100" alt="..." height="900px"/>
    </div>
    <div class="carousel-item">
      <img src="https://swordstoday.ie/wp-content/uploads/2022/01/1641352373_851_The-iPhone-14-will-bring-unexpected-details-in-screen-high-tech-fashion.jpg" class="d-block w-100" alt="..."height="900px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="card-img-overlay d-flex flex-column justify-content-start">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0 ">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
          CHECK OUT ALL TRENDS
          </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
