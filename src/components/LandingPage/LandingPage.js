import React from 'react'
import {Container} from "@material-ui/core"
import HomeSection from './HomeSection'
import FeaturesSection from './FeaturesSection'
import DataSection from './DataSection'

const LandingPage=()=> {
    return (
        <Container className="landing-page" maxWidth={false} disableGutters={true}>
            <HomeSection/>
            <FeaturesSection/>
            <DataSection/>
        </Container>
    )
}

export default LandingPage
