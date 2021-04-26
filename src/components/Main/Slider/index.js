import React, { useState } from 'react'
import { withSize } from 'react-sizeme'
import styled from 'styled-components'
import './style.css'

const SliderContent = styled.div `
    display: flex;
    box-sizing: border-box;

    transform: translateX(-${ props => props.translate }px);
    transition: transform ease-out ${ props => props.transition }s;

    height: 100%;
    width: ${props => props.width}px;
`

const Slide = ({ classNum }) => (
    <div className={`slider__slide ${classNum}`}>
    </div>
)

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
            <Slide classNum="slider__slide_1" />
            <Slide classNum="slider__slide_2" />
            <Slide classNum="slider__slide_3" />
            <Slide classNum="slider__slide_4" />
        </SliderContent>

        <Arrow direction='left' handleClick={prevSlide} start={start}/>
        <Arrow direction='right' handleClick={nextSlide} end={end}/>

        <Dots activeIndex={activeIndex} />
    </div>
    )    
}

export default withSize()(Slider)