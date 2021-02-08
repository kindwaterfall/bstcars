import React from 'react';
import Filter from './filter/Filter';
import Car from './car/Car';
import { cars, carsAmountOnPage, carsSort } from '../../context';

function List() {
    return (
        <>
            <div className="cars">
                <div className="cars-render">
                    <div className="row">
                        <div>
                            <p>Показати на сторінці</p>
                            <select className="select">
                                {carsAmountOnPage.map((amount, idx) => {
                                    return <option key={idx}>{amount}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <p>Посортувати</p>
                            <select className="select">
                                {carsSort.map((type, idx) => {
                                    return <option key={idx}>{type}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="render">
                        { cars.map((car, index) => {
                            return <Car car={car} key={index}/>
                        }) }
                    </div>
                </div>
                <div className="cars-filter">
                    <Filter />
                </div>
            </div>
        </>
    )
}

export default List;