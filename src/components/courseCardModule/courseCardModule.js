import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {Link} from "react-router-dom";
import "./courseCardModule.css";
import {useDispatch} from 'react-redux';
import {addToCart} from '../../features/cartSlice';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function CourseCardModule({id, name, image, description, price, productInCart, product}) {
    const dispatch = useDispatch();

    function handleOnclick() {
        dispatch(addToCart(product));
        alert("add " + name + " to cart success");
    }

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
                        <ButtonBase sx={{width: 450, height: 128}}>
                            <Img alt="complex" src={image}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    <Link to={`/course/${id}`}>{name}</Link>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    id: {id}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{cursor: 'pointer'}} variant="body2">
                                    <button onClick={handleOnclick} disabled={productInCart}>
                                        {productInCart ? 'Already in cart' : 'Add to cart'}
                                    </button>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                {price}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}