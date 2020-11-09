import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';

export default function Projects() {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="landingContent">
                        {/*ADD STUFF IN HERE*/}
                        <h1>Projects</h1>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation value="1"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}