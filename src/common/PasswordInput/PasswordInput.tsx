import { useState } from 'react';
import { Input, Button, Form } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import './PasswordInput.scss'

function PasswordInput({label, name, placeholder, require, errorMessage }:any) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  function handlePasswordState() {
    setIsShowPassword(!isShowPassword)
  }

  let inputType, eyeIcon;
  if (name == null) {
    name = "password"
  }
  if (errorMessage == null) {
    errorMessage = "Error"
  }

  if (isShowPassword) {
    inputType = "text"
    eyeIcon = <EyeOutlined />
  } else {
    inputType = "password"
    eyeIcon = <EyeInvisibleOutlined />
  }

  return (
    <div className="password-input-container input-group">
      <Form.Item
          label={label}
          name={name}
          rules={[{ required: require, message: errorMessage }]}
        >
        <Input
          type={inputType}
          placeholder={placeholder}
          name={name}
          id={name}

          suffix={
            <Button onClick={handlePasswordState}>{eyeIcon}</Button>
          }
          />
      </Form.Item>
    </div>
  )
}

export default PasswordInput