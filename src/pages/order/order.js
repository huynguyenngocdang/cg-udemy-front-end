import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import "./order.css"
import {useDispatch} from 'react-redux';
import {clearCart} from '../../features/cartSlice';

function Order() {
    const cart = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(clearCart());
    }

    return (
        <div>
            <div className="container mt-5 mb-5">

                <div className="row d-flex justify-content-center">

                    <div className="col-md-8">

                        <div className="card">


                            <div className="text-left logo p-2 px-5">

                                <img src="https://i.imgur.com/2zDU056.png" width="50" alt=""/>

                            </div>

                            <div className="invoice p-5">

                                <h5>Your order Confirmed!</h5>

                                <span className="font-weight-bold d-block mt-4">Hello, Chris</span>
                                <span>You order has been confirmed and will be shipped in next two days!</span>

                                <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">

                                    <table className="table table-borderless">

                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="py-2">

                                                    <span className="d-block text-muted">Order Date</span>
                                                    <span>12 Jan,2018</span>

                                                </div>
                                            </td>

                                            <td>
                                                <div className="py-2">

                                                    <span className="d-block text-muted">Order No</span>
                                                    <span>MT12332345</span>

                                                </div>
                                            </td>

                                            <td>
                                                <div className="py-2">

                                                    <span className="d-block text-muted">Payment</span>
                                                    <span><img
                                                        src="https://img.icons8.com/color/48/000000/mastercard.png"
                                                        width="20" alt=""/></span>

                                                </div>
                                            </td>

                                            <td>
                                                <div className="py-2">

                                                    <span className="d-block text-muted">Shipping Address</span>
                                                    <span>414 Advert Avenue, NY,USA</span>

                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>

                                    </table>

                                </div>
                                {cart.map((product) => (
                                    <div className="product border-bottom table-responsive">

                                        <table className="table table-borderless">

                                            <tbody>
                                            <tr>
                                                <td width="20%">

                                                    <img src={product.video} width="90" alt=""/>

                                                </td>

                                                <td width="60%">
                                                    <span className="font-weight-bold">{product.name}</span>
                                                    <div className="product-qty">
                                                        <span>Color:Dark</span>
                                                    </div>
                                                </td>
                                                <td width="20%">
                                                    <div className="text-right">
                                                        <span className="font-weight-bold">{product.price}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>

                                        </table>

                                    </div>
                                ))}
                                <div className="row d-flex justify-content-end">

                                    <div className="col-md-5">

                                        <table className="table table-borderless">

                                            <tbody className="totals">

                                            <tr>
                                                <td>
                                                    <div className="text-left">

                                                        <span className="text-muted">Subtotal</span>

                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-right">
                                                        <span>$168.50</span>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="text-left">

                                                        <span className="text-muted">Shipping Fee</span>

                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-right">
                                                        <span>$22</span>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="text-left">

                                                        <span className="text-muted">Tax Fee</span>

                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-right">
                                                        <span>$7.65</span>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="text-left">

                                                        <span className="text-muted">Discount</span>

                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-right">
                                                        <span className="text-success">$168.50</span>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr className="border-top border-bottom">
                                                <td>
                                                    <div className="text-left">

                                                        <span className="font-weight-bold">Total price</span>

                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-right">
                                                        <span className="font-weight-bold">${totalPrice}</span>
                                                    </div>
                                                </td>
                                            </tr>

                                            </tbody>

                                        </table>

                                    </div>

                                </div>

                                <p>We will be sending shipping confirmation email when the item shipped
                                    successfully!</p>
                                <p className="font-weight-bold mb-0">Thanks for shopping with us!</p>
                                <span>Nike Team</span>

                            </div>

                            <div className="d-flex justify-content-between footer p-3">

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

export default Order;








