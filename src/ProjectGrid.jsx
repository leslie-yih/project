import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectGrid.css';

const projects = [
  { id: 1, name: '面向在轨服务的弹性杆驱动连续型柔性机械臂', image: '/project1.jpg' },
  { id: 2, name: 'RoboMaster机甲大师机器人赛', image: '/project2.jpg' },
  { id: 3, name: '基于光固化原理的自生长机器人', image: '/project3.jpg' },
  { id: 4, name: '高通过性轮足移动平台', image: '/project4.jpg' },
  { id: 5, name: '航天柔性机械手爪', image: '/project5.jpg' },
  { id: 6, name: '自适应机械夹爪', image: '/project6.jpg' },
  { id: 7, name: '陆空两用轮式机器人', image: '/project7.jpg' },
  { id: 8, name: '自研减速箱、电缸图纸', image: '/project8.jpg' },
];

const ProjectGrid = () => {
  const navigate = useNavigate();
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-tile"
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <img src={project.image} alt={project.name} className="project-img" />
          <div className="project-title">{project.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid; 