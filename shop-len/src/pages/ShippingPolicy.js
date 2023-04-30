import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
const ShippingPolicy = () => {
  return (
    <>
    <Meta title="Shipping Policy" />
        <BreadCrumb title="Shipping Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
           
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'>
                          <div>
                          <h1>Chính sách vận chuyển</h1>
                          <br/>
                          </div>
                          <div>
                          <h4>Phương thức vận chuyển của Wool's World</h4>
                          <br/>
                         <h5>Phương thức vận chuyển của NoLi Handmade Shop là gì?</h5>
                          <p>
                          Trong vòng 24h kể từ khi nhận được đơn hàng của quý khách, chúng tôi sẽ tiến hành liên lạc và giao hàng theo địa chỉ yêu cầu của quý khách
                          </p>
                          <p>+ Trung Tâm Thành phố Hà Nội: Trong vòng 24h-48h (trừ trường hợp khách quan chúng tôi sẽ thông báo với quý khách để thay đổi thời gian vận chuyển)</p>
                          <p>+ Các tỉnh thành nằm ngoài khu vực trung tâm thành phố Hà Nội thời gian giao hàng là từ 4-7 ngày (tính từ ngày nhận được thông báo thanh toán đơn hàng của quý khách từ các đối tác Ngân Hàng và Các Cổng Thanh Toán Trực Tuyến</p>
                          <br/>
                          </div>
                          <div>
                            <h5>Phí vận chuyển tính như thế nào?</h5>
                          <p>Tất cả các đơn hàng trên website sẽ được chúng tối chuyển sang bên vận chuyển Giao Hàng Tiết Kiệm và Giao Hàng Nhanh với gói cước nhanh và rẻ nhất để khách hàng cảm thấy thuận tiện nhất khi mua hàng.</p>
                          </div>
                          
                    

                        </div>
                    </div>
                </div>
            
        </Container>
    </>
  )
}

export default ShippingPolicy