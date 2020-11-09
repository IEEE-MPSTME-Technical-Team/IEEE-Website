import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';

export default function About() {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="landingContent">
                        {/*ADD STUFF IN HERE*/}
                        <h1>About</h1>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation value="0"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
