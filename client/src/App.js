import React , { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import sprite from "./res/img/sprite.svg";

import story1 from "./res/img/story-1.jpeg";
import house1 from "./res/img/house-1.jpeg";
import house2 from "./res/img/house-2.jpeg";
import house3 from "./res/img/house-3.jpeg";
import house4 from "./res/img/house-4.jpeg";
import house5 from "./res/img/house-5.jpeg";
import house6 from "./res/img/house-6.jpeg";
import house7 from "./res/img/house-1.jpeg";
import house8 from "./res/img/house-2.jpeg";
import house9 from "./res/img/house-3.jpeg";
import house10 from "./res/img/house-4.jpeg";
import house11 from "./res/img/house-5.jpeg";
import house12 from "./res/img/house-3.jpeg";
import house13 from "./res/img/house-2.jpeg";
import house14 from "./res/img/house-1.jpeg";
import logo from "./res/img/logo.png";
import logoBbc from "./res/img/logo-bbc.png";
import logoForbes from "./res/img/logo-forbes.png";
import logoTech from "./res/img/logo-techcrunch.png";
import logoBi from "./res/img/logo-bi.png";

import story2 from "./res/img/story-2.jpeg";

import Header from './components/Dynamic/Header';
import SideNav from './components/Dynamic/SideNav';
import HotelView from './components/Dynamic/HotelView';
import Navigation from './components/Static/navigation';
import SurveyNew from './components/surveys/SurveyNew';
import Dashboard from './components/Dynamic/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <SideNav />
            <header className="header">
              <img src={logo} alt="logo" className="header__logo" />
              <h3 className="heading-3">Your own home</h3>
              <h1 className="heading-1">BIGGEST HEADER</h1>
              <button className="btn header__btn">View more</button>
              <div className="header__seenon-text">Seen on</div>
              <div className="header__seenon-logos">
                <img src={logoBbc} alt="" />
                <img src={logoBi} alt="" />
                <img src={logoForbes} alt="" />
                <img src={logoTech} alt="" />
              </div>
            </header>

            <div class="realtors">
              <h3 className="heading-3">Top 3 realtors</h3>
              <div className="realtors__list">
                <img src={house1} alt="" className="realtors__img" />
                <div className="realtors__details">
                  <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
                  <p className="realtors__sold">55555 sold</p>
                </div>

                <img src={house2} alt="" className="realtors__img" />
                <div className="realtors__details">
                  <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
                  <p className="realtors__sold">55555 sold</p>
                </div>

                <img src={logo} alt="" className="realtors__img" />
                <div className="realtors__details">
                  <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
                  <p className="realtors__sold">55555 sold</p>
                </div>
              </div>
            </div>

            <section className="features">
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-global"} />
                </svg>
                <h4 className="heading-4 heading-4--dark">
                  World's best luxury homes
                </h4>
                <p className="feature__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur distinctio necessitatibus pariatur voluptatibus.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-trophy"} />
                </svg>
                <h4 className="heading-4 heading-4--dark">
                  only the best propreties
                </h4>
                <p className="feature__text">
                  Voluptatum mollitia quae. Vero ipsum sapiente molestias
                  accusamus rerum sed a eligendi aut quia.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-map-pin"} />
                </svg>
                <h4 className="heading-4 heading-4--dark">
                  All homes in top locations
                </h4>
                <p className="feature__text">
                  Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                  consequatur harum.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-key"} />
                </svg>
                <h4 className="heading-4 heading-4--dark">
                  new home in one week
                </h4>
                <p className="feature__text">
                  Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-presentation"} />
                </svg>
                <h4 className="heading-4 heading-4--dark">top realtors</h4>
                <p className="feature__text">
                  Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                  distinctio necessitatibus pariatur voluptatibus.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-lock"} />
                </svg>
                <h4 className="heading-4 heading-4--dark">
                  secure payments on Nexter
                </h4>
                <p className="feature__text">
                  Pariatur voluptatibus quidem consequatur harum, voluptatum
                  mollitia quae.
                </p>
              </div>
            </section>

            <section className="features-2 u-margin-bottom-medium">
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-global"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-trophy"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-presentation"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-map-pin"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-key"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-global"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-trophy"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-presentation"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-map-pin"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-key"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-global"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-trophy"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-presentation"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-presentation"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-map-pin"} />
                </svg>
              </div>
              <div className="feature-2">
                <svg className="feature-2__icon">
                  <use href={sprite + "#icon-key"} />
                </svg>
              </div>
            </section>

            <div className="story__pictures">
              <img src={story1} alt="new house" className="story__img--1" />
              <img src={story2} alt="new house" className="story__img--2" />
            </div>

            <div className="story__content">
              <h3 className="heading-3 u-margin-bottom-small">
                Happy Customers
              </h3>
              <h2 className="heading-2 heading-2-dark u-margin-bottom-medium">
                &ldquo;The best decision&rdquo;
              </h2>
              <p className="story__text">
                Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                distinctio necessitatibus pariatur voluptatibus.
              </p>
              <button className="btn">Find your home</button>
            </div>

            <section className="homes">
              <div className="home">
                <img src={house1} alt="family house" className="home__img" />
                <svg className="home__like">
                  <use href={sprite + "#icon-heart-full"} />
                </svg>
                <h5 className="home__name">Beautiful family house</h5>
                <div className="home__location u-margin-top-small ">
                  <svg>
                    <use href={sprite + "#icon-map-pin"} />
                  </svg>
                  <p>USA</p>
                </div>
                <div className="home__rooms u-margin-top-small ">
                  <svg>
                    <use href={sprite + "#icon-profile-male"} />
                  </svg>
                  <p>5 rooms</p>
                </div>
                <div className="home__area">
                  <svg>
                    <use href={sprite + "#icon-expand"} />
                  </svg>
                  <p>
                    325 m<sup>2</sup>
                  </p>
                </div>
                <div className="home__price">
                  <svg>
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <p>$1,200,000</p>
                </div>
                <button className="btn home__btn">Contact us</button>
              </div>

              <div className="home">
                <img src={house2} alt="family house" className="home__img" />
                <svg className="home__like">
                  <use href={sprite + "#icon-heart-full"} />
                </svg>
                <h5 className="home__name">Beautiful family house</h5>
                <div className="home__location">
                  <svg>
                    <use href={sprite + "#icon-map-pin"} />
                  </svg>
                  <p>USA</p>
                </div>
                <div className="home__rooms">
                  <svg>
                    <use href={sprite + "#icon-profile-male"} />
                  </svg>
                  <p>5 rooms</p>
                </div>
                <div className="home__area">
                  <svg>
                    <use href={sprite + "#icon-expand"} />
                  </svg>
                  <p>
                    325 m<sup>2</sup>
                  </p>
                </div>
                <div className="home__price">
                  <svg>
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <p>$1,200,000</p>
                </div>
                <button className="btn home__btn">Contact us</button>
              </div>

              <div className="home">
                <img src={house3} alt="family house" className="home__img" />
                <svg className="home__like">
                  <use href={sprite + "#icon-heart-full"} />
                </svg>
                <h5 className="home__name">Beautiful family house</h5>
                <div className="home__location">
                  <svg>
                    <use href={sprite + "#icon-map-pin"} />
                  </svg>
                  <p>USA</p>
                </div>
                <div className="home__rooms">
                  <svg>
                    <use href={sprite + "#icon-profile-male"} />
                  </svg>
                  <p>5 rooms</p>
                </div>
                <div className="home__area">
                  <svg>
                    <use href={sprite + "#icon-expand"} />
                  </svg>
                  <p>
                    325 m<sup>2</sup>
                  </p>
                </div>
                <div className="home__price">
                  <svg>
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <p>$1,200,000</p>
                </div>
                <button className="btn home__btn">Contact us</button>
              </div>

              <div className="home">
                <img src={house4} alt="family house" className="home__img" />
                <svg className="home__like">
                  <use href={sprite + "#icon-heart-full"} />
                </svg>
                <h5 className="home__name">Beautiful family house</h5>
                <div className="home__location">
                  <svg>
                    <use href={sprite + "#icon-map-pin"} />
                  </svg>
                  <p>USA</p>
                </div>
                <div className="home__rooms">
                  <svg>
                    <use href={sprite + "#icon-profile-male"} />
                  </svg>
                  <p>5 rooms</p>
                </div>
                <div className="home__area">
                  <svg>
                    <use href={sprite + "#icon-expand"} />
                  </svg>
                  <p>
                    325 m<sup>2</sup>
                  </p>
                </div>
                <div className="home__price">
                  <svg>
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <p>$1,200,000</p>
                </div>
                <button className="btn home__btn">Contact us</button>
              </div>

              <div className="home">
                <img src={house5} alt="family house" className="home__img" />
                <svg className="home__like">
                  <use href={sprite + "#icon-heart-full"} />
                </svg>
                <h5 className="home__name">Beautiful family house</h5>
                <div className="home__location">
                  <svg>
                    <use href={sprite + "#icon-map-pin"} />
                  </svg>
                  <p>USA</p>
                </div>
                <div className="home__rooms">
                  <svg>
                    <use href={sprite + "#icon-profile-male"} />
                  </svg>
                  <p>5 rooms</p>
                </div>
                <div className="home__area">
                  <svg>
                    <use href={sprite + "#icon-expand"} />
                  </svg>
                  <p>
                    325 m<sup>2</sup>
                  </p>
                </div>
                <div className="home__price">
                  <svg>
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <p>$1,200,000</p>
                </div>
                <button className="btn home__btn">Contact us</button>
              </div>

              <div className="home">
                <img src={house6} alt="family house" className="home__img" />
                <svg className="home__like">
                  <use href={sprite + "#icon-heart-full"} />
                </svg>
                <h5 className="home__name">Beautiful family house</h5>
                <div className="home__location">
                  <svg>
                    <use href={sprite + "#icon-map-pin"} />
                  </svg>
                  <p>USA</p>
                </div>
                <div className="home__rooms">
                  <svg>
                    <use href={sprite + "#icon-profile-male"} />
                  </svg>
                  <p>5 rooms</p>
                </div>
                <div className="home__area">
                  <svg>
                    <use href={sprite + "#icon-expand"} />
                  </svg>
                  <p>
                    325 m<sup>2</sup>
                  </p>
                </div>
                <div className="home__price">
                  <svg>
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <p>$1,200,000</p>
                </div>
                <button className="btn home__btn">Contact us</button>
              </div>
            </section>

            <section className="gallery">
              <figure className="gallery__item gallery__item--1">
                <img
                  src={house1}
                  alt="Gallery image 1"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--2">
                <img
                  src={house2}
                  alt="Gallery image 2"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--3">
                <img
                  src={house3}
                  alt="Gallery image 3"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--4">
                <img
                  src={house4}
                  alt="Gallery image 4"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--5">
                <img
                  src={house5}
                  alt="Gallery image 5"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--6">
                <img
                  src={house6}
                  alt="Gallery image 6"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--7">
                <img
                  src={house7}
                  alt="Gallery image 7"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--8">
                <img
                  src={house8}
                  alt="Gallery image 8"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--9">
                <img
                  src={house9}
                  alt="Gallery image 9"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--10">
                <img
                  src={house10}
                  alt="Gallery image 10"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--11">
                <img
                  src={house11}
                  alt="Gallery image 11"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--12">
                <img
                  src={house12}
                  alt="Gallery image 12"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--13">
                <img
                  src={house13}
                  alt="Gallery image 13"
                  className="gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--14">
                <img
                  src={house14}
                  alt="Gallery image 14"
                  className="gallery__img"
                />
              </figure>
            </section>

            <footer className="footer">
              <ul className="nav">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Find your dream home 1
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Find your dream home 2
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Find your dream home 3
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Find your dream home 4
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Find your dream home 5
                  </a>
                </li>
              </ul>
              <p className="copyright">&copy; Copyright 2020 by aftoflBig5</p>
            </footer>
            {/* <Header />
            <Route exact path="/"   component={Landing} />
            <Route exact path="/surveys"  component={Dashboard} />
            <Route exact path="/surveys/new"  component={SurveyNew} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//connect method links all actions to the component as Props. so you can reference them like props.
export default connect(null, actions)(App);
