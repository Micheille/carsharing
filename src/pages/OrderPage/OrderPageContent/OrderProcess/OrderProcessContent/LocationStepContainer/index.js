import React from 'react'
import { connect } from 'react-redux'

import LocationStep from './LocationStep'
import { setCity, setPoint } from '../../../../../../store/location/actions'


function LocationStepContainer (props) {
    const { city, point, setCity, setPoint} = props;
    return (
        <LocationStep setCity={setCity} 
                      setPoint={setPoint} 
                      city={city}
                      point={point}
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
