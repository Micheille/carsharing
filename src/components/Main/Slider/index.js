import React, { useState } from 'react'
import { withSize } from 'react-sizeme'
import styled from 'styled-components'

import './style.css'

import png1 from "./img/png-slider-1.png"
import png2 from "./img/png-slider-2.png"
import png3 from "./img/png-slider-3.png"
import png4 from "./img/png-slider-4.png"

const sliderInfo = [
    {
        title: "Бесплатная парковка",
        desc: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",
        button: {
            colorFrom: '#13493F',
            colorTo: '#0C7B1B'
        },
        background: png1
    },
    {
        title: "Страховка",
        desc: "Полная страховка автомобиля",
        button: {
            colorFrom: "#132949",
            colorTo: "#0C7B67"
        },
        background: png2
    },
    {
        title: "Бензин",
        desc: "Полный бак на любой заправке города за наш счёт",
        button: {
            colorFrom: "#493013",
            colorTo: "#7B0C3B"
        },
        background: png3
    },
    {
        title: "Обслуживание",
        desc: "Автомобиль проходит еженедельное ТО",
        button: {
            colorFrom: "#281349",
            colorTo: "#720C7B"
        },
        background: png4
    }
]

const SlideBack = styled.div `
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 96px;

    background-image: url(${props => props.background});
    background-size: cover;
    background-repear: no-repeat;
    background-position: center;

    @media screen and (max-device-width: 1439px), screen and (max-width: 1439px) {
        padding: 0 64px;
    }
`
const SliderButton = styled.button `
    background: linear-gradient(to right, 
                                ${props => props.colorFrom}, 
                                ${props => props.colorTo});
    height: 48px;
    padding: 0 36px;
    margin-top: 32px;
    border: none;
    border-radius: 4px;
    font: 500 18px "Roboto", "Arial", sans-serif;
    color: #eeeeee;
`

const Slide = ({title, desc, colorFrom, colorTo, background}) => {
    return (
        <SlideBack background={background}>
            <h2 className="slider__title">{title}</h2>
            <p className="slider__desc">{desc}</p>
            <SliderButton colorFrom={colorFrom} colorTo={colorTo}>Подробнее</SliderButton>
        </SlideBack>
    )
}

const SliderContent = styled.div `
    display: flex;
    box-sizing: border-box;

    transform: translateX(-${ props => props.translate }px);
    transition: transform ease-out ${ props => props.transition }s;

    height: 100%;
    width: ${props => props.width}px;
`

const Arrow = ({ direction, handleClick, start, end }) => {
    const classDir = (direction === 'right') ? 'slider__arrow_right' : 'slider__arrow_left';
    const classDisable = (start || end) ? 'slider__arrow_disabled' : '';

    return(
    <div className={`slider__arrow ${classDir} ${classDisable}`} 
        onClick={handleClick}>
    </div>)
}

const Dot = ({ active }) => (
    <span className={active ? "slider__dot slider__dot_active" : "slider__dot"}></span>
)

const Dots = ({ activeIndex }) => (
    <div className="slider__dots">
        <Dot key={0} active={activeIndex === 0} />
        <Dot key={1} active={activeIndex === 1} />
        <Dot key={2} active={activeIndex === 2} />
        <Dot key={3} active={activeIndex === 3} />
    </div>
)

const Slider = (props) => {
    const { width } = props.size;
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.5,
        start: true,
        end: false
    });
    const { activeIndex, translate, transition, start, end } = state;

    const nextSlide = () => {
        if (activeIndex === 3) {
            return;
        }
        if (activeIndex === 2){
            setState({
                ...state,
                activeIndex: activeIndex + 1,
                translate: (activeIndex + 1) * width,
                end: true
            })
            return;
        }
        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width,
            start: false
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return;
        }
        if (activeIndex === 1) {
            setState({
                ...state,
                activeIndex: activeIndex - 1,
                translate: (activeIndex - 1) * width,
                start: true
            });
            return;
        }      
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width,
            end: false
        })
    }

    return (
    <div className="slider">
        <SliderContent 
            translate={translate} 
            transition={transition} 
            width={width*4}
        >
            {sliderInfo.map((info, i) => (
                <Slide 
                    title={info.title}
                    desc={info.desc}
                    colorFrom={info.button.colorFrom}
                    colorTo={info.button.colorTo}
                    background={info.background} />
            ))}
        </SliderContent>

        <Arrow direction='left' handleClick={prevSlide} start={start}/>
        <Arrow direction='right' handleClick={nextSlide} end={end}/>

        <Dots activeIndex={activeIndex} />
    </div>
    )    
}

export default withSize()(Slider)