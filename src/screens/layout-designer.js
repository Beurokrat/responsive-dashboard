/*
1. grid layout for HR Dashboard
*/

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import HRTabs from '../components/HRTabs';
import JobListing from '../components/JobListing';
import EnhancedTable from '../components/table';
import { PieChartComponent } from '../components/Chart';

const CardContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 1,
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#d7d7d7',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 5,
}));

const Layout = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid md={12} xs={8}>
          <HRTabs />
          {/* <Item>
            tabs
          </Item> */}
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
        <Grid md={2} xs={4}>
          <Item>
            <h1>Add / filter listing</h1>
          </Item>
        </Grid>
        <Grid md={10} xs={4}>
          <CardContainer>
            <JobListing />
            <JobListing />
            <JobListing />
            <JobListing />
          </CardContainer>
        </Grid>
        <Grid justifyContent='center' md={4} sm={0} xs={0}>
          <PieChartComponent />
        </Grid>
        <Grid justify Content='center' md={8} flexGrow={1}>
          <Item>
            <EnhancedTable />
          </Item>
        </Grid>
        <Grid justifyContent='center' md={12} xs={4}>
          <Item>
            <h5>testing component</h5>
            <Button variant='contained' color='primary'>
              hi
            </Button>
            <Button variant='contained' color='secondary'>
              hi
            </Button>
            <Button variant='contained' color='error'>
              hi
            </Button>
            <Button variant='contained' color='warning'>
              hi
            </Button>
            <Button variant='contained' color='success'>
              hi
            </Button>
            <Button href='/' variant='contained' color='info'>
              hi
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
