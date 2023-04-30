import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
            
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card w-100 position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className='position-absolute cross img-fluid'
                                />
                                <div className="wishlist-card-image">
                                    <img src="images/nhungdua.webp" alt="nhungdua" className='img-fluid w-100' />
                                </div>
                                <div className="py-3">
                                <h5 className='title'>Len nhung đũa</h5>
                                <h6 className="price">20.000đ</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card w-100 position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className='position-absolute cross img-fluid'
                                />
                                <div className="wishlist-card-image">
                                    <img src="images/bongxu.webp" alt="nhungdua" className='img-fluid w-100' />
                                </div>
                                <div className="py-3">
                                <h5 className='title'>Len bông xù</h5>
                                <h6 className="price">18.000đ</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card w-100 position-relative">
                                <img
                                    src="images/cross.svg"
                                    alt="cross"
                                    className='position-absolute cross img-fluid'
                                />
                                <div className="wishlist-card-image">
                                    <img src="images/milkbo2.webp" alt="nhungdua" className='img-fluid w-100' />
                                </div>
                                <div className="py-3">
                                <h5 className='title'>Len milk bò</h5>
                                <h6 className="price">12.000đ</h6>
                                </div>
                            </div>
                        </div>
                    </div>

              
            </Container>
        </>
    )
}

export default Wishlist