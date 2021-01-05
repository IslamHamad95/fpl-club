import React from 'react'
import {Container} from "@material-ui/core"
import HomeSection from './HomeSection'
import FeaturesSection from './FeaturesSection'

const LandingPage=()=> {
    return (
        <Container className="landing-page" maxWidth={false} disableGutters={true}>
            <HomeSection/>
            <FeaturesSection/>
        </Container>
    )
}

export default LandingPage
