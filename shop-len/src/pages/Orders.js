import React, { useEffect } from 'react'
import Container from "../components/Container"
import BreadCrumb from '../components/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../features/user/userSlice'
const Orders = () => {
    const dispatch = useDispatch();
    const orderState = useSelector(state => state.auth.getorderedProduct)
    console.log(orderState)
    useEffect(() => {
        dispatch(getOrders());
    }, [])
    return (
        <>
            <BreadCrumb title="My Orders" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-3">
                                <h5>Order Id</h5>
                            </div>
                            <div className="col-3">
                                <h5>Total Amount</h5>
                            </div>
                            <div className="col-3">
                                <h5>Total Amount After Discount</h5>
                            </div>
                            <div className="col-3">
                                <h5>Status</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="row">
                            <div className="col-3">
                                <p>64385096a29244b58db27dd2</p>
                            </div>
                            <div className="col-3">
                                <p>3</p>
                            </div>
                            <div className="col-3">
                                <p>45000d</p>
                            </div>
                            <div className="col-3">
                                <p>Cash on delivery</p>
                            </div>

                     
                        <div className="col-12">
                            <div className="row bg-secondary p-3">
                                <div className="col-3">
                                    <p>Order Id</p>
                                </div>
                                <div className="col-3">
                                    <p>Total Amount</p>
                                </div>
                                <div className="col-3">
                                    <p>Total Amount After Discount</p>
                                </div>
                                <div className="col-3">
                                    <p>Status</p>
                                </div>
</div>

                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default Orders