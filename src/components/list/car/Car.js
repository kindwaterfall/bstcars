import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Details from './details/Details';

function Car({ car }) {
  return (
    <>
      <Router>
        <div className="car">
          <div className="car-block">
            <Link to="/:id"><img src={car.picture} alt={car.name} /></Link>
          </div>
          <div className="car-block">
            <Link to="/:id"><h2>{car.name}</h2></Link>
            <div className="car-details">
              { car.details.map(detail => {
                return <p className="car-detail">{detail.name}:<span>{detail.value}</span></p>
              }) }
            </div>
          </div>
          <div className="car-block">
            <p className="car-price gold">{car.price}</p>
          </div>
        </div>

        <Switch>
          <Route path="/:id" children={<Details car={car} />} />
        </Switch>
      </Router>
    </>
  )
}

export default Car;
