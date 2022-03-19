import './RegisterForm.scss'
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { MailOutlined, CloseCircleOutlined, CheckCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PasswordInput from '../../common/PasswordInput/PasswordInput';
import SectionNameDivider from '../../common/SectionNameDivider/SectionNameDivider';


function RegisterForm() {
  
  const { Option } = Select;

  return (
    <div className="register-form-container">
      <Form
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your Email' }]}
        >
          <Input prefix={<MailOutlined />} />
        </Form.Item>
        <div className="two-column-group">
          <PasswordInput label="" name="password" placeholder="Password" require={true} errorMessage="Please Enter Password"/>
          <PasswordInput label="" name="verify-password" placeholder="Confirm Password" require={true} errorMessage="Please Verify Your Password"/>
        </div>

        {/* เราพยายามจะทำ Validate password ให้นายแล้ว แต่มันยากเกินความสามารถเรา 
        เราสู้ไม่ไหว นั่งทำอยู่สองชั่วโมง ขอบายดีกว่า โชคดีนะจาน */}

        <div className="matching-password">
          <CloseCircleOutlined /> <span>Confirm password doesn't Match</span>
        </div>
        <div className="matching-password not-match">
          <CloseCircleOutlined /> <span>Confirm password doesn't Match</span>
        </div>
        <div className="matching-password match">
          <CheckCircleOutlined /> <span>Password Match</span>
        </div>
        
        <SectionNameDivider name="Your Information" />
        <div className="two-column-group">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your Name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[{ required: true, message: 'Please input your Lastname' }]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item
          label="Organization"
          name="organization"
        >
          <Input />
        </Form.Item>

        <div className="two-column-group">
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: 'Please input your Country' }]}
          >
            <Select
              showSearch
              placeholder="Select Your Country"
            >
              <Option value="1">Country 1</Option>
              <Option value="2">Country 2</Option> 
              <Option value="3">Country 3</Option>
              <Option value="4">Country 4</Option>
              <Option value="5">Country 5</Option>
              <Option value="6">Country 6</Option>
            </Select>
          </Form.Item>

          <Form.Item
          label="Phone No."
          name="phone-no"
          rules={[{ required: true, message: 'Please input your Phone Number' }]}
        >
          <Input prefix={<PhoneOutlined />} />
        </Form.Item>
        </div>

        <div className="checkbox-group">
          <Form.Item>
            <Checkbox>I agree to have my data collected and stored accroding to the <Link to="#">privacy statement</Link></Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox>I would like to be notified of submission review updates.</Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox> I would like to be contacted with requests to review submissions to this journal.</Checkbox>
          </Form.Item>
        </div>
        <Button type="primary">Register</Button>
      </Form>
    </div>
  )
}

export default RegisterForm