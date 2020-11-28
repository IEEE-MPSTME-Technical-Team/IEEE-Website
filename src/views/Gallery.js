import React from 'react'
import SimpleBottomNavigation from '../layout/bottomNav'
import Grid from '@material-ui/core/Grid';
import GalleryMain from '../components/Gallery/GalleryMain'

export default function Gallery() {
    return (
        <div>
            <div className="mainLand">
                <Grid container spacing={3}>
                    <Grid item xs={12} className="landingContent">
                        <GalleryMain className="MainGallery"/>
                    </Grid>
                    <Grid item xs={12} className="nav">
                        <SimpleBottomNavigation />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}