import './CreateAccount.scss'
import MainLayout from '../../layouts/MainLayout'
import Titlebar from '../../common/Titlebar/Titlebar'
import { PlusCircleOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
function CreateAccount() {
  return (
    <div className="page-create-account">
      <MainLayout>
        <div className="create-account-container">
          <div className="container">
            
            <div className="breadcrumb-container">
              <Breadcrumb>
                <Breadcrumb.Item><Link to="/login">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/login">Register - Login</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Create a New Account</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Titlebar
              // backButton={true}
              // backLinkTo="/"
              pageName="Create a New Account"
              // rightButtonIcon={<PlusCircleOutlined />}
              // rightButtonText="New Submission"
              // rightButtonLinkTo="/"
            />
            
            <RegisterForm />
            
          </div>
        </div>
      </MainLayout>
    </div>  
  )
}

export default CreateAccount