import React, { useCallback } from 'react'

import './style.scss'


export default function ModelStep (props) {
    const {modelType, setModelType} = props;

    const onModelTypeChange = useCallback(
        (e) => {
            setModelType(e.currentTarget.value);
        },
        [props],
    );

    return (
        <div className="order-process-content__step model-step">
            <input type="radio" 
                   name="modelType" 
                   value="all"
                   checked={modelType === 'all'}
                   onChange={onModelTypeChange} /> 
            <span>Все модели</span>

            <input type="radio" 
                   name="modelType" 
                   value="economy"
                   checked={modelType === 'economy'}
                   onChange={onModelTypeChange} />
            <span>Эконом</span>

            <input type="radio" 
                   name="modelType" 
                   value="premium"
                   checked={modelType === 'premium'}
                   onChange={onModelTypeChange} />
            <span>Премиум</span>
        </div>
    )
}