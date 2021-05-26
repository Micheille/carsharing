import React, { useCallback } from 'react'

import './style.scss'


export default function ModelStep (props) {

    const onModelTypeChange = useCallback(
        (e) => {
            props.setModelType(e.currentTarget.value);
        },
        [props],
    );

    return (
        <div className="order-process-content__step model-step">
            <input type="radio" 
                   name="modelType" 
                   value="all"
                   checked={props.modelType === 'all'}
                   onChange={onModelTypeChange} /> 
            <span>Все модели</span>

            <input type="radio" 
                   name="modelType" 
                   value="economy"
                   checked={props.modelType === 'economy'}
                   onChange={onModelTypeChange} />
            <span>Эконом</span>

            <input type="radio" 
                   name="modelType" 
                   value="premium"
                   checked={props.modelType === 'premium'}
                   onChange={onModelTypeChange} />
            <span>Премиум</span>
        </div>
    )
}