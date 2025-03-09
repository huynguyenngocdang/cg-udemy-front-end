import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Confirmation.css"
import { useDispatch } from 'react-redux';
import { clearCart } from '../../slice';

function Confirmation() {
    const cart = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(clearCart());
    }

    return (
        <div>
            <div class="container mt-5 mb-5">

                <div class="row d-flex justify-content-center">

                    <div class="col-md-8">

                        <div class="card">


                            <div class="text-left logo p-2 px-5">

                                <img src="https://i.imgur.com/2zDU056.png" width="50"></img>

                            </div>

                            <div class="invoice p-5">

                                <h5>Your order Confirmed!</h5>

                                <span class="font-weight-bold d-block mt-4">Hello, Chris</span>
                                <span>You order has been confirmed and will be shipped in next two days!</span>

                                <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">

                                    <table class="table table-borderless">

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="py-2">

                                                        <span class="d-block text-muted">Order Date</span>
                                                        <span>12 Jan,2018</span>

                                                    </div>
                                                </td>

                                                <td>
                                                    <div class="py-2">

                                                        <span class="d-block text-muted">Order No</span>
                                                        <span>MT12332345</span>

                                                    </div>
                                                </td>

                                                <td>
                                                    <div class="py-2">

                                                        <span class="d-block text-muted">Payment</span>
                                                        <span><img src="https://img.icons8.com/color/48/000000/mastercard.png" width="20" /></span>

                                                    </div>
                                                </td>

                                                <td>
                                                    <div class="py-2">

                                                        <span class="d-block text-muted">Shiping Address</span>
                                                        <span>414 Advert Avenue, NY,USA</span>

                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </div>
                                {cart.map((product, index) => (
                                    <div class="product border-bottom table-responsive">

                                        <table class="table table-borderless">

                                            <tbody>
                                                <tr>
                                                    <td width="20%">

                                                        <img src={product.video} width="90"></img>

                                                    </td>

                                                    <td width="60%">
                                                        <span class="font-weight-bold">{product.name}</span>
                                                        <div class="product-qty">
                                                            <span>Color:Dark</span>
                                                        </div>
                                                    </td>
                                                    <td width="20%">
                                                        <div class="text-right">
                                                            <span class="font-weight-bold">{product.price}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>

                                    </div>
                                ))}
                                <div class="row d-flex justify-content-end">

                                    <div class="col-md-5">

                                        <table class="table table-borderless">

                                            <tbody class="totals">

                                                <tr>
                                                    <td>
                                                        <div class="text-left">

                                                            <span class="text-muted">Subtotal</span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-right">
                                                            <span>$168.50</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="text-left">

                                                            <span class="text-muted">Shipping Fee</span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-right">
                                                            <span>$22</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="text-left">

                                                            <span class="text-muted">Tax Fee</span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-right">
                                                            <span>$7.65</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="text-left">

                                                            <span class="text-muted">Discount</span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-right">
                                                            <span class="text-success">$168.50</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr class="border-top border-bottom">
                                                    <td>
                                                        <div class="text-left">

                                                            <span class="font-weight-bold">Total price</span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-right">
                                                            <span class="font-weight-bold">${totalPrice}</span>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>

                                </div>

                                <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                                <p class="font-weight-bold mb-0">Thanks for shopping with us!</p>
                                <span>Nike Team</span>

                            </div>

                            <div class="d-flex justify-content-between footer p-3">

                                <span>Need Help? visit our <a href="#"> help center</a></span>
                                <span>12 June, 2020</span>

                            </div>

                            <button onClick={handleClick}><Link to={"/thanks"}>Confirm payment</Link></button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Confirmation;








