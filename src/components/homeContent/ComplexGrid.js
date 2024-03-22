import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from "react-router-dom";
import "./Complex.css";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid({ id, name, description, price }) {
    return (
        <div>
            <Paper className='complex'
                sx={{
                    p: 2,
                    margin: 'auto',
                    marginBottom: 2,
                    maxWidth: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    <Link to={`/product/${id}`}>{name}</Link>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    id: {id}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    Add to cart
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                ${price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}