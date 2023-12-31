import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  Typography,
  Select,
  MenuItem,
  Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedWorkoutTypes, setSelectedWorkoutTypes] = useState([]);
  const [selectedFormsOfWorkout, setSelectedFormsOfWorkout] = useState([]);

  const handleWorkoutTypeChange = (event) => {
    setSelectedWorkoutTypes(event.target.value);
  };

  const handleFormsOfWorkoutChange = (event) => {
    setSelectedFormsOfWorkout(event.target.value);
  };

  return (
    <>
      <Link to='/' className='signin-button'>
        Return Home
      </Link>
      <Container>
        <Paper>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12}>
              <Typography variant='h6'>Add Workout</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label='Date' fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Form of Workout'
                fullWidth
                select
                SelectProps={{
                  multiple: true,
                  value: selectedFormsOfWorkout,
                  onChange: handleFormsOfWorkoutChange,
                  renderValue: (selected) => selected.join(', '),
                }}
              >
                <MenuItem value='running'>
                  <Checkbox checked={selectedFormsOfWorkout.includes('running')} />
                  Running
                </MenuItem>
                <MenuItem value='weightlifting'>
                  <Checkbox checked={selectedFormsOfWorkout.includes('weightlifting')} />
                  Weightlifting
                </MenuItem>
                <MenuItem value='yoga'>
                  <Checkbox checked={selectedFormsOfWorkout.includes('yoga')} />
                  Yoga
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Form of Workout'
                fullWidth
                select
                SelectProps={{
                  multiple: true,
                  value: selectedFormsOfWorkout,
                  onChange: handleFormsOfWorkoutChange,
                  renderValue: (selected) => selected.join(', '),
                }}
              >
                <MenuItem value='running'>
                  <Checkbox checked={selectedFormsOfWorkout.includes('running')} />
                  Running
                </MenuItem>
                <MenuItem value='weightlifting'>
                  <Checkbox checked={selectedFormsOfWorkout.includes('weightlifting')} />
                  Weightlifting
                </MenuItem>
                <MenuItem value='yoga'>
                  <Checkbox checked={selectedFormsOfWorkout.includes('yoga')} />
                  Yoga
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary'>
                Add
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Dashboard;
