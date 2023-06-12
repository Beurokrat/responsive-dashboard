/*
1. grid layout for HR Dashboard
2. added basic components
3. added grid layout toolkit
*/

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#d7d7d7',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 30,
}));

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid md={12} xs={8}>
          <Item>tabs</Item>
        </Grid>
        <Grid md={8} xs={8}>
          <Item>
            <h1>Intro</h1>
          </Item>
        </Grid>
        <Grid md={4} xs={8}>
          <Item>
            <h1>Latest feed</h1>
          </Item>
        </Grid>
        <Grid md={3} xs={4}>
          <Item>
            <h1>Add / filter listing</h1>
          </Item>
        </Grid>
        <Grid md={9} xs={4}>
          <Item>
            <h1>Joblisting Cards</h1>
          </Item>
        </Grid>
        <Grid md={12} xs={4}>
          <Item>
            <h5>testing component</h5>
            <Button variant='contained' color='error'>
              hi
            </Button>
            <Button href='/layout' variant='contained' color='warning'>
              hi
            </Button>
        </Item>
        </Grid>
      </Grid>
      {/* <Typography variant='h3'>Theming Example</Typography>
      <Typography
        variant='myVariant'
        sx={{ color: 'customRibRed.superLight', m: 2, p: 2 }}
      >
        Hello World
      </Typography>
      <h3>Start editing to see some magic happen!</h3>
      <h1>Start editing to see some magic happen!</h1> */}
    </div>
  );
};

export default Home;
