import React, { useCallback } from 'react'

import './style.scss'


export default function ExtrasStep (props) {

    const onColorChange = useCallback(
        (e) => {
            props.setColor(e.currentTarget.value);
        },
        [],
    );

    const onDateFromChange = useCallback(
        (e) => {
            props.setDateFrom(e.target.value);
        },
        [],
    );

    const onDateToChange = useCallback(
        (e) => {
            props.setDateTo(e.target.value);
        },
        [],
    );

    const onTariffChange = useCallback(
        (e) => {
            props.setTariff(e.currentTarget.value);
        },
        [],
    );
    
    const onFullTankChange = useCallback(
        (e) => {
            props.setFullTank(e.target.checked);
        },
        [],
    );

    const onBabySeatChange = useCallback(
        (e) => {
            props.setBabySeat(e.target.checked);
        },
        [],
    );

    const onRightHandChange = useCallback(
        (e) => {
            props.setRightHand(e.target.checked);
        },
        [],
    );

    return (
        <div className="order-process-content__step extras-step">

            <p>Цвет</p>

            <input type="radio" 
                   name="color" 
                   value="any"
                   checked={props.color === 'any'}
                   onChange={onColorChange} /> 
            <span>Любой</span>

            <input type="radio" 
                   name="color" 
                   value="red"
                   checked={props.color === 'red'}
                   onChange={onColorChange} />
            <span>Красный</span>

            <input type="radio" 
                   name="color" 
                   value="blue"
                   checked={props.color === 'blue'}
                   onChange={onColorChange} />
            <span>Голубой</span>

            <p>Дата аренды</p>

            <span>С</span>
            <input type="datetime-local" 
                   name="datetime-from"
                   value={props.dateFrom}
                   onChange={onDateFromChange} />

            <span>По</span>
            <input type="datetime-local" 
                   name="datetime-to"
                   value={props.dateTo}
                   onChange={onDateToChange} />

            <p>Тариф</p>

            <input type="radio" 
                   name="tariff" 
                   value="per-minute"
                   checked={props.tariff === 'per-minute'}
                   onChange={onTariffChange} /> 
            <span>Поминутно</span>

            <input type="radio" 
                   name="tariff" 
                   value="for-day"
                   checked={props.tariff === 'for-day'}
                   onChange={onTariffChange} />
            <span>На сутки</span>

            <p>Доп. услуги</p>

            <input type="checkbox" 
                   name="full-tank"
                   checked={props.fullTank}
                   onClick={onFullTankChange} /> 
            <span>Полный бак</span>

            <input type="checkbox" 
                   name="baby-seat"
                   checked={props.babySeat}
                   onClick={onBabySeatChange} />
            <span>Детское кресло</span>

            <input type="checkbox" 
                   name="right-hand"
                   checked={props.rightHand}
                   onClick={onRightHandChange} />
            <span>Правый руль</span>
            
        </div>
    )
}