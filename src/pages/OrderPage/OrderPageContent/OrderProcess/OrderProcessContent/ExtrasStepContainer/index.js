import React from 'react'
import { connect } from 'react-redux'

import ExtrasStep from './ExtrasStep'
import { setColor, 
         setDateFrom,
         setDateTo,
         setTariff, 
         setFullTank, 
         setBabySeat, 
         setRightHand } from '../../../../../../store/extras/actions'


function ExtrasStepContainer (props) {
    return (
        <ExtrasStep setColor={props.setColor}
                    setDateFrom={props.setDateFrom} 
                    setDateTo={props.setDateTo}
                    setTariff={props.setTariff}
                    setFullTank={props.setFullTank} 
                    setBabySeat={props.setBabySeat} 
                    setRightHand={props.setRightHand} 
                    color={props.color}
                    dateFrom={props.dateFrom}
                    dateTo={props.dateTo}
                    tariff={props.tariff}
                    fullTank={props.fullTank}
                    babySeat={props.babySeat}
                    rightHand={props.rightHand}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        color: state.extras.color,
        dateFrom: state.extras.dateFrom,
        dateTo: state.extras.dateTo,
        tariff: state.extras.tariff,
        fullTank: state.extras.fullTank,
        babySeat: state.extras.babySeat,
        rightHand: state.extras.rightHand
    }
}

const mapDispatchToProps = {
    setColor,
    setDateFrom,
    setDateTo,
    setTariff,
    setFullTank,
    setBabySeat,
    setRightHand
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtrasStepContainer)