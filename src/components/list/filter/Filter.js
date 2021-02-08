import React from 'react';
import { carsList, carsFuelType, carsFrom, carsBodyType } from '../../../context';

function Filter() {
  return (
    <>
      <div className="filter">
        <div className="filter-block">
          <h3>ПРИГНАНИЙ З</h3>
          <select className="select">
            {carsFrom.map((from, idx) => {
              return <option key={idx}>{from}</option>
            })}
          </select>
          <button className="gold-button">Filter Vehicles</button>
        </div>
        <div className="filter-block">
          <h3>Марка</h3>
          <select className="select">
            {carsList.map((car, idx) => {
              return <option key={idx}>{car.name}</option>
            })}
          </select>
          <select className="select">
            {carsList.map((car, idx) => {
              return <option key={idx}>{car.model}</option>
            })}
          </select>
        </div>
        <div className="filter-block">
          <h3>Діапазон цін</h3>
          <div className="price-range">
            <input type="text" />
            <span>-</span>
            <input type="text" />
          </div>
        </div>
        <div className="filter-block">
          <h3>Тип кузова</h3>
          <div className="filter-grid">
            {carsBodyType.map((type, idx) => {
              return <img src={type} key={idx} alt={type} />
            })}
          </div>
        </div>
        <div className="filter-block">
          <h3>Тип палива</h3>
          <select className="select">
            {carsFuelType.map((fuel, idx) => {
              return <option key={idx}>{fuel}</option>
            })}
          </select>
          <button className="gold-button">Фільтрувати</button>
        </div>
      </div>
    </>
  )
}

export default Filter;
