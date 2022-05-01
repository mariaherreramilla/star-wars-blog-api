import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <h1 className="title">Welcome, chosen one!</h1>
    <h3>May the force be with you, always...</h3>
    <div className="container">
      <div className="row">
        <div className="cardsContainer">
          <div className="col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img
                src="https://www.denofgeek.com/wp-content/uploads/2013/04/star_wars_1.jpg?fit=1280%2C800"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Characters</h5>
                <p className="card-text">
                  Check the best characters in the Star Wars universe! From Luke
                  Skywalker to the evil Darth Vader.
                </p>
                <a href="#" className="btn btn-warning">
                  Go to Characters!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img
                src="https://scitechdaily.com/images/Kepler-16b-1-scaled.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Planets</h5>
                <p className="card-text">
                  The Star Wars story happens on a stretch of several and
                  hostile planets. Come check them out!
                </p>
                <a href="#" className="btn btn-warning">
                  Go to Planets!
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card bg-dark">
              <img
                src="https://www.sideshow.com/wp/wp-content/uploads/2018/09/star-wars-speeder-bike-sixth-scale-figure-related-collectible-sideshow-feature-100121.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Vehicles</h5>
                <p className="card-text">
                  What is a republic pilot without his ship? How could Han
                  go across the galaxy without the Millenial Falcon?
                </p>
                <a href="#" className="btn btn-warning">
                  Go to vehicles!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
