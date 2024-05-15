import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
const LoginForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Thực hiện xử lý đăng nhập ở đây
    };
  
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className='text-login'>ĐĂNG NHẬP TÀI KHOẢN</h2>
        <div className='login-fb'>
<FacebookIcon/>
<div> Đăng nhập bằng Facebook </div>
        </div>
        <div className="header-logo">
                <img
                  src="https://sys.tmso1.co/images/image-5d36a956-a557-457a-97c2-f5eec632d41e.png"
                  alt="logo"
                />
              </div>
        <div className="form-group">
          <input type="text" id="username" name="username" placeholder='Tên đăng nhập'/>
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder='Mật khẩu'/>
        </div>
        <button type="submit" className="btn btn-primary">Đăng Nhập</button>
        <button className="btn">Đăng kí</button>
      </form>
    );
  }
  
  export default LoginForm;