import React , { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import sprite from "./res/img/sprite.svg";

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
            <header className="header">header</header>

            <div class="realtors">Top 3 realtors</div>

            <section className="features">
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-global"} />
                </svg>
                <h4 className="heading-4">World's best luxury homes</h4>
                <p className="feature__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur distinctio necessitatibus pariatur voluptatibus.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-trophy"} />
                </svg>
                <h4 className="heading-4">only the best propreties</h4>
                <p className="feature__text">
                  Voluptatum mollitia quae. Vero ipsum sapiente molestias
                  accusamus rerum sed a eligendi aut quia.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-map-pin"} />
                </svg>
                <h4 className="heading-4">All homes in top locations</h4>
                <p className="feature__text">
                  Tenetur distinctio necessitatibus pariatur voluptatibus quidem
                  consequatur harum.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-key"} />
                </svg>
                <h4 className="heading-4">new home in one week</h4>
                <p className="feature__text">
                  Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-presentation"} />
                </svg>
                <h4 className="heading-4">top realtors</h4>
                <p className="feature__text">
                  Quidem consequatur harum, voluptatum mollitia quae. Tenetur
                  distinctio necessitatibus pariatur voluptatibus.
                </p>
              </div>
              <div className="feature">
                <svg className="feature__icon">
                  <use href={sprite + "#icon-lock"} />
                </svg>
                <h4 className="heading-4">secure payments on Nexter</h4>
                <p className="feature__text">
                  Pariatur voluptatibus quidem consequatur harum, voluptatum
                  mollitia quae.
                </p>
              </div>
            </section>

            <div className="story__pictures">Story pictures</div>

            <div className="story__content">Story content</div>

            <section className="homes">Home</section>

            <section className="gallery">Gallery</section>

            <footer className="footer">Footer</footer>
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
