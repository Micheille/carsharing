import React, { useCallback } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './style.scss'


export default function LocationStep (props) {

    const onCityChange = useCallback(
        (e) => {
            props.setCity(e.target.value);
        },
        [],
    );

    const onPointChange = useCallback(
        (e) => {
            props.setPoint(e.target.value);
        },
        [],
    );

    return (
        <div className="order-process-content__step location-step">

            <form className="location-step__forms">
                <label>
                    <span className="location-step__label">Город</span>
                    <input className="location-step__input location-step__input_city"
                           placeholder="Начните вводить город..."
                           onChange={onCityChange}
                           value={props.city}
                           type="search">
                    </input>
                </label>
                <label>
                    <span className="location-step__label">Пункт выдачи</span>
                    <input className="location-step__input location-step__input_point"
                           placeholder="Начните вводить пункт..."
                           onChange={onPointChange}
                           value={props.point}
                           type="text">
                    </input>
                </label>                
            </form>

            <div className="location-step__select-point">
                <p>Выбрать на карте:</p>

                <YMaps>
                    <Map defaultState={{ center: [54.31, 48.39], zoom: 13 }}
                         className="location-step__map"
                    >
                        <Placemark geometry={[54.3335,48.384285]} 
                                    options={ {
                                        preset: 'islands#darkGreenCircleDotIcon'}
                                    }
                        />
                        <Placemark geometry={[54.300985,48.288264]} 
                                    options={ {
                                        preset: 'islands#darkGreenCircleDotIcon'}
                                    }
                        />
                        <Placemark geometry={[54.320883,48.399934]} 
                                    options={ {
                                        preset: 'islands#darkGreenCircleDotIcon'}
                                    }
                        />
                    </Map>                    
                </YMaps>
            </div>
        </div>
    )
}