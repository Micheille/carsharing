import React from 'react'
import { connect } from 'react-redux'

import LocationStep from './LocationStep'
import { setCity, setPoint } from '../../../../../../store/location/actions'


function LocationStepContainer (props) {
    return (
        <LocationStep setCity={props.setCity} 
                      setPoint={props.setPoint} 
                      city={props.city}
                      point={props.point}
                      menuActive={props.menuActive}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.location.city,
        point: state.location.point
    }
}

const mapDispatchToProps = {
    setCity,
    setPoint
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationStepContainer)
