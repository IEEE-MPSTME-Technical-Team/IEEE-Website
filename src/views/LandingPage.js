import React from 'react'
import SplashScreen from '../layout/SplashScreen'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';

const LandingPage = () => {

    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="landingContent">
                        {/*ADD STUFF IN HERE*/}
                        <h1>Landing Page</h1>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default LandingPage
