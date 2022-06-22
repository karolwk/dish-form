import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';

import { Form, Field } from 'react-final-form';
import {
  TextFieldAdapter,
  SelectFieldAdapter,
  Condition,
  SliderAdapter,
} from '../../components/forms';
import { FormValues } from '../../shared/types';
import { FormApi } from 'final-form';
import {
  normalizeToInt,
  normalizeToFloat,
  normalizePrepTime,
  validateForm,
} from '../../utils';
import axios from 'axios';
import { useState } from 'react';

const MainForm = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const dishTypes = ['pizza', 'soup', 'sandwich'];

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    openSnackBar && setOpenSnackBar(false);
    errMsg && setErrMsg('');
  };

  const onSubmit = async (values: FormValues, form: FormApi<FormValues>) => {
    const frostyServer = 'https://frosty-wood-6558.getsandbox.com:443/dishes';

    //const localJsonServer = 'http://localhost:3001/posts';

    await axios
      .post(frostyServer, values)
      .then((res) => {
        form.restart();
        setOpenSnackBar(true);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.toString());
        setOpenSnackBar(true);
      });
  };

  return (
    <>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={errMsg ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {errMsg ? (
            <>
              An error occurred while submitting your form! Error details:
              <pre>{errMsg}</pre>
            </>
          ) : (
            'Form sent correctly'
          )}
        </Alert>
      </Snackbar>
      <Form
        onSubmit={onSubmit}
        validate={validateForm}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Paper style={{ padding: 16 }} elevation={8}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1rem', md: '2rem' },
                  textAlign: 'center',
                  margin: '1rem 0 2rem 0',
                }}
              >
                🍕🥪🥣 Submit your dish 🍕🥪🥣
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Field
                    name="name"
                    component={TextFieldAdapter}
                    label="Dish Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="preparation_time"
                    component={TextFieldAdapter}
                    label="Preparation time "
                    placeholder="(hh:mm:ss)"
                    parse={normalizePrepTime}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="type"
                    component={SelectFieldAdapter}
                    label="Choose dish type"
                    sx={{ maxWidth: '400px' }}
                    children={dishTypes.map((itemName) => (
                      <MenuItem key={itemName} value={itemName}>
                        {itemName}
                      </MenuItem>
                    ))}
                  />
                </Grid>
                <Condition when="type" is="pizza">
                  <>
                    <Grid item xs={12}>
                      <Field
                        name="no_of_slices"
                        component={TextFieldAdapter}
                        label="Number of slices"
                        type="number"
                        parse={normalizeToInt}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="diameter"
                        component={TextFieldAdapter}
                        label="Diameter"
                        type="number"
                        parse={normalizeToFloat}
                      />
                    </Grid>
                  </>
                </Condition>
                <Condition when="type" is="soup">
                  <Grid item xs={12}>
                    <Typography id="input-slider" gutterBottom>
                      Spiceness scale
                    </Typography>
                    <Field
                      name="spiciness_scale"
                      aria-label="input-slider"
                      component={SliderAdapter}
                      label="Spiceness scale (1-10)"
                      sx={{ maxWidth: '500px' }}
                      defaultValue={1}
                      step={1}
                      marks
                      min={1}
                      max={10}
                    />
                  </Grid>
                </Condition>
                <Condition when="type" is="sandwich">
                  <>
                    <Grid item xs={12}>
                      <Field
                        name="slices_of_bread"
                        component={TextFieldAdapter}
                        label="Slices of bread"
                        type="number"
                        parse={normalizeToInt}
                      />
                    </Grid>
                  </>
                </Condition>

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    {!submitting ? 'Submit' : <CircularProgress size={25} />}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </>
  );
};

export default MainForm;
