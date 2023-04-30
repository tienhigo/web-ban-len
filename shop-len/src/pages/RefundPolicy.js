import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
const RefundPolicy = () => {
  return (
    <>
    <Meta title="Refund Policy" />
        <BreadCrumb title="Refund Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
            
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'>
                          <div>
                            <h1>Chính sách đổi trả hàng và hoàn tiền</h1>
                            <br/>
                          </div>
                          <div>
                            <h5>1. Điều kiện đổi hàng</h5>
                            <p>- Thời gian đổi hàng trong vòng 03 ngày kể từ ngày mua hàng(nhận hàng)</p>
                            <p>- Hàng đổi phải còn nguyên tem, nhãn mác, thẻ bài, chưa qua sử dụng và có hóa đơn mua hàng kèm theo</p>
                            <p>- Khách hàng được đổi sản phẩm do lỗi từ nhà sản xuất.</p>
                          <h5>2. Giá trị hàng đổi: </h5>
                          <p>- Sản phẩm đổi phải có giá trị tương đương hoặc cao hơn giá trị hàng đã mua trước đó.</p>
                          <h5>3. Thời gian giải quyết việc đổi hàng</h5>
                          <p> -  Sản phẩm đổi ngay giải quyết không quá 01 ngày ( 24h)</p>
                          <p> -  Sản phẩm cần thẩm định do lỗi sản xuất giải quyết không quá 03 ngày ( trừ Chủ nhật và  ngày lễ)</p>
                          <h5>5. Phương thức đổi trả:</h5>
                          <p>- Quý Khách hàng vui lòng đóng gói lại hàng hóa và mang ra bưu điện gần nhất để gửi trả hàng.</p>
                                                    </div>

                        </div>
                    </div>
                </div>
          
        </Container>
    </>
  )
}

export default RefundPolicy