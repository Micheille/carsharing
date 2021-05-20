import React from 'react'
import { connect } from 'react-redux'

import ModelStep from './ModelStep'
import { setModelType } from '../../../../../../store/model/actions'


function ModelStepContainer (props) {
    return (
        <ModelStep setModelType={props.setModelType} 
                   modelType={props.modelType}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        modelType: state.model.modelType
    }
}

const mapDispatchToProps = {
    setModelType
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelStepContainer)