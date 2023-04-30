import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color';
import Meta from '../components/Meta';
import Container from '../components/Container';
const CompareProduct = () => {
  return <>
    <Meta title={"Compare Products"} />
    <BreadCrumb title="Compare Products" />
    <Container class1='compare-product-wrapper py-5 home-wrapper-2'>

      <div className='row'>
        <div className='col-3'>
          <div className='compare-product-card position-relative'>
            <img
              src="images/cross.svg"
              alt="cross"
              className='position-absolute cross'
            />
            <div className='compare-product-image'>
              <img src="images/milkbo-1.jpg" alt="watch" />
            </div>
            <div className='compare-product-details'>
              <h5 className="title">
                Len milk bò mềm mại thích hợp cho người mới tập móc
              </h5>
              <h6 className="price">15.000đ</h6>
              <div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Milk Cow</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Wool</p>
                </div>

                <div className="product-detail">
                  <h5>Colors:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Availability:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>25g</p>
                    <p>50g</p>
                    <p>125g</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='compare-product-card position-relative'>
            <img
              src="images/cross.svg"
              alt="cross"
              className='position-absolute cross img-fluid'
            />
            <div className='compare-product-image'>
              <img src="images/bongxu.webp" alt="watch" />
            </div>
            <div className='compare-product-details'>
              <h5 className="title">
                Len bông xù thích hợp móc mũ túi xinh đẹp
              </h5>
              <h6 className="price">20.000đ</h6>
              <div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>YARN PLUS</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Wool</p>
                </div>

                <div className="product-detail">
                  <h5>Colors:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Availability:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>25g</p>
                    <p>50g</p>
                    <p>125g</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </Container>
  </>
}

export default CompareProduct