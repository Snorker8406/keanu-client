import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImage } from '../actions/actions';
import { RootState } from '../types/types';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Slider, FormControlLabel, Checkbox, Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function PhotoGenerator() {
    const dispatch = useDispatch();
    const imageUrl = useSelector((state: RootState) => state.image);
    const [imageHeight, setImageHeight] = useState(500);
    const [imageWidth, setImageWidth] = useState(500);
    const [greyscale, setGreyscale] = useState(false);
    const [onlyYoung, setOnlyYoung] = useState(false);

    const onChangeWidth = (event: Event, newValue: number | number[]) => {
      setImageWidth(newValue as number);
    }
    const onChangeHeight = (event: Event, newValue: number | number[]) => {
      setImageHeight(newValue as number);
    }
  
    useMemo(() => {
      dispatch(
        fetchImage({ 
          width: imageWidth, 
          height: imageHeight, 
          greyscale: greyscale, 
          youngKeanu: onlyYoung
        })
      );
    }, [dispatch, imageHeight, imageWidth, greyscale, onlyYoung]);
  
    function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
      }
    }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh' }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '50vh' }}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                  Random Image for Keanu fans!!!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel 
                  control={<Checkbox value={greyscale}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGreyscale(event.target.checked)} 
                  />}
                  label="Grey Scale"
                />
                <FormControlLabel 
                  control={<Checkbox value={onlyYoung} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOnlyYoung(event.target.checked)} 
                  />}
                label="Only Young  Photos" />
              </Grid>
              <Grid item xs={12}>
                <Slider 
                  step={100}
                  aria-label="Default" 
                  valueLabelDisplay="auto"
                  value={imageWidth}
                  onChange={onChangeWidth}
                  min={100}
                  max={1000}
                  marks
                />
              </Grid>
              <Grid item xs={2} sx={{ minHeight: '70vh'}}>
                <Slider
                  sx={{
                    '& input[type="range"]': {
                      WebkitAppearance: 'slider-vertical',
                    },
                  }}
                  orientation="vertical"
                  step={100}
                  aria-labelledby="Default"
                  valueLabelDisplay="auto"
                  onKeyDown={preventHorizontalKeyboardNavigation}
                  value={imageHeight}
                  onChange={onChangeHeight}
                  marks
                  min={100}
                  max={1000}
                />
              </Grid>
              <Grid item xs={8}>
                {/* assuming we can trust in the API, otherwise we need to implement logic to handle it locally */}
                {imageUrl ? <div dangerouslySetInnerHTML={{__html: imageUrl}}></div> : <p>Loading...</p>}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}