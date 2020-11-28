import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';
import ProjectsMain from '../components/Projects/ProjectsMain'

export default function Projects() {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="landingContent">
                        <ProjectsMain/>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}