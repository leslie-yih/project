import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <img src="/avatar.jpg" alt="头像" className="avatar" />
      <h2>易昊为</h2>
      <p>哈尔滨工业大学（深圳）本硕</p>
      <p>年龄：23</p>
      <p>电话：18180720812</p>
      <p>邮箱：<a href="mailto:haowei.yi@outlook.com">haowei.yi@outlook.com</a></p>
      <a href="/project/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">个人简历 PDF</a>
      <button className="patent-link" onClick={() => navigate('/patents')}>专利列表</button>
    </div>
  );
};

export default Sidebar; 
