import { useState } from 'react';
import './Login.scss'
import MainLayout from '../../layouts/MainLayout'
import { Input, Button, Modal, Form } from 'antd';
import { Link } from 'react-router-dom';
import PasswordInput from '../../common/PasswordInput/PasswordInput';

function LoginPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="page-login">
      <MainLayout>
        <div className="login-container">
          <div className="set-center">
            <div className="header">
              <img src="/images/main-logo.svg" alt="" />
              <h1>วารสารการส่งเสริมสุขภาพไทย</h1>
              <h2>Thai Health Promotion Journal</h2>
            </div>

            <Form>

              <div className="input-group">
                <Input type="email" placeholder="Email" />
              </div>

              <PasswordInput label="" name="password" placeholder="Password" require={true} errorMessage="Please Enter Password"/>
              
              {/* <div className="forgot-password">
                <a href="#">Forgot Password</a>
              </div> */}
              
              <div className="submit-btn">
                <Button className="submit-btn" onClick={showModal}>Login</Button>
              </div>
            </Form>
            <div className="register-line">
              In case you do not have an accoount, <br/>please <span><Link to="/create-account">Create an Account</Link></span>
            </div>
          </div>         
          <Modal title="Basic Modal"
            visible={isModalVisible}
            footer={null}
            wrapClassName="page-login-modal-select-type"
            centered={true}
          >
            <p className='title'>โปรดเลือกบทบาทที่ต้องการใช้งาน</p>
            <div className="button-group">
              <div className='button'><div>ผู้ส่งบทความ <span>Author</span></div></div>
              <div className='button'><div>ผู้ตรวจบทความ <span>Reviewer</span></div></div>
            </div>
          </Modal>
        </div>
      </MainLayout>
    </div>
  )
}

export default LoginPage