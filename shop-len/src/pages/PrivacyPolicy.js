import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
const PrivacyPolicy = () => {
  return (
    <>
    <Meta title="Privacy Policy" />
        <BreadCrumb title="Privacy Policy" />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
            
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'>
                          <div>
                            <h1>Chính sách bảo mật</h1>
                            <br/>
                          </div>
                          <div>
                            <h5>1. Mục đích và phạm vi thu thập</h5>
                          <p>Cảm ơn Quý khách đã truy cập vào website của chúng tôi, để sử dụng dịch vụ tại website, Quý khách có thể được yêu cầu đăng ký thông tin cá nhân với chúng tôi như:</p>
                          <p>- Họ và tên, địa chỉ liên lạc</p>
                          <p>- Email, số điện thoại di dộng</p>
                          <h5>2. Phạm vi sử dụng thông tin</h5>
                          <p>http://shop.noli.vn/ thu thập và sử dụng thông tin cá nhân với mục đích phù hợp và hoàn toàn tuân thủ “chính sách bảo mật” này. Chúng tôi chỉ sử dụng thông tin của Quý khách trong nội bộ công ty hoặc có thể công bố cho bên thứ 3 như các đại lý, các nhà cung cấp dịch vụ khác nhằm cung cấp dịch vụ tốt nhất, tối ưu nhất cho Quý khách.</p>
                      <h5>3. Thời gian lưu trữ thông tin</h5>
                      <p>Các thông tin của Quý khách hàng sẽ được lưu trữ  trong hệ thống nội bộ của công ty chúng tôi cho đến khi Quý khách có yêu cầu hủy bỏ các thông tin đã cung cấp.</p>
                          </div>
                          

                        </div>
                    </div>
                </div>
      
        </Container>
    </>
  )
}

export default PrivacyPolicy