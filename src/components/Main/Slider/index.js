import React, { useState } from 'react'
import { withSize } from 'react-sizeme'
import styled from 'styled-components'

import './style.css'

import jpg1 from "./img/jpg-slider-1.jpg"
import jpg2 from "./img/jpg-slider-2.jpg"
import jpg3 from "./img/jpg-slider-3.jpg"
import jpg4 from "./img/jpg-slider-4.jpg"

const sliderInfo = [
    {
        title: "Бесплатная парковка",
        desc: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",
        background: jpg1
    },
    {
        title: "Страховка",
        desc: "Полная страховка автомобиля",
        background: jpg2
    },
    {
        title: "Бензин",
        desc: "Полный бак на любой заправке города за наш счёт",
        background: jpg3
    },
    {
        title: "Обслуживание",
        desc: "Автомобиль проходит еженедельное ТО",
        background: jpg4
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

const SliderButton = ({index}) => (
    <button className={`slider__button slider__button_${index}`}>Подробнее</button>
)

const Slide = ({title, desc, index, background}) => {
    return (
        <SlideBack background={background}>
            <h2 className="slider__title">{title}</h2>
            <p className="slider__desc">{desc}</p>
            <SliderButton index={index}>Подробнее</SliderButton>
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
            width={width * 4}
        >
            {sliderInfo.map((info, i) => (
                <Slide 
                    title={info.title}
                    desc={info.desc}
                    index={i + 1}
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