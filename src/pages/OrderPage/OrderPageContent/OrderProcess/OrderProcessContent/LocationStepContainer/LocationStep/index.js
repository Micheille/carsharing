import React, { useCallback } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './style.scss';


const placemarks = [
    
];

export default function LocationStep (props) {

    const cities = [
        { title: 'Ульяновск' },
        { title: 'Саранск' },
        { title: 'Казань' },
        { title: 'Краснодар' },
        { title: 'Самара' },
        { title: "Санкт-Петербург" }
    ];

    const points = [];

    const citiesProps = {
        options: cities,
        getOptionLabel: (option) => option.title,
    };

    const pointsProps = {
        options: points,
        getOptionLabel: (option) => option.title,
    };

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

                    <Autocomplete
                        {...citiesProps}
                        forcePopupIcon={false}
                        id="debug"
                        renderInput={(params) => <TextField {...params} placeholder="Начните вводить город..." />}
                    />
                </label>

                <label>
                    <span className="location-step__label">Пункт выдачи</span>

                    <Autocomplete
                        {...pointsProps}
                        forcePopupIcon={false}
                        id="debug"
                        renderInput={(params) => <TextField {...params} placeholder="Начните вводить пункт..." />}
                    />
                    {/* <input className="location-step__input location-step__input_point"
                           placeholder="Начните вводить пункт..."
                           onChange={onPointChange}
                           value={props.point}
                           type="text">
                    </input> */}
                </label>                
            </form>

            <div className="location-step__select-point">
                <p>Выбрать на карте:</p>

                <YMaps>
                    <Map defaultState={{ center: [54.31, 48.39], zoom: 13 }}
                         className={ props.menuActive? "location-step__map location-step__map_disabled" : "location-step__map location-step__map_active"}
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