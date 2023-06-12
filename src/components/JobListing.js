import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function JobListing() {
  return (
    <Card sx={{ minWidth: 275, flex: '1 1 275px', borderRadius: 5, m: 1 }}>
      <CardContent>
        <Box sx={{ display: 'flex' }} justifyContent='space-between'>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            24/07/2023
          </Typography>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            #JD129735
          </Typography>
        </Box>
        <Typography variant='h5' component='div'>
          Sales Executive
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Cochin
        </Typography>
        {/* <Typography variant='body2'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
        <Typography variant='body2'>
          Add notes :
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex' }} justifyContent='space-between'>
        <Button size='small' color='primary'>Description</Button>
        <Button size='small' color='primary'>Applications</Button>
      </CardActions>
    </Card>
  );
}
