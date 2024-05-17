import React, { useState } from 'react';

// Component con để nhập tên
function NameInput({ onNameChange123 }) {
  const [name, setName] = useState('');

  // Hàm xử lý khi thay đổi giá trị của input
  const handleChange = (b) => {
    setName(b.target.value);
  };

  // Gửi dữ liệu về component cha khi nhấn Enter
  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      // Gọi callback function truyền từ component cha
      onNameChange123(name);
      // Xóa dữ liệu trong input
      setName('');
    }
  };

  return (
    <input 
      type="text" 
      placeholder="Nhập tên..." 
      value={name} 
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}

// Component cha để hiển thị tên đã nhập
function ParentComponent() {
  const [currentName, setCurrentName] = useState('');

  // Callback function để nhận dữ liệu từ component con
  const handleNameChange = (newName) => {
    setCurrentName(newName);
  };

  return (
    <div>
      <h2>Tên hiện tại: {currentName}</h2>
      {/* Truyền callback function vào component con */}
      <NameInput onNameChange123={handleNameChange} />
    </div>
  );
}

export default ParentComponent;
