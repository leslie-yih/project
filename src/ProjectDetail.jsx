import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ProjectDetail.css';

const projectDetails = [
  {
    id: 1,
    name: '面向在轨服务的弹性杆驱动连续型柔性机械臂',
    markdown: `\n## 项目内容:\n
面向在轨服务需求，设计了一种弹性杆驱动连续型柔性机器人。相比该领域现有研究，在具有高灵活度和柔顺性的前提下，具有较高的控制精度和负载能力。自研一款电缸推杆，大幅缩小驱动箱的体积和重量，使驱动箱与机械臂直径相等（传统结构驱动箱是机械臂直径的5-10倍）。\n
\n## 项目成果:\n
 参与军科委重点项目指南编制工作，成功获批军科委基金项目。作为核心成员以学生第一发明人申请发明专利5项。\n
    \n## 申请专利：\n| 类型     | 公开号       | 申请号           | 申请时间   | 名称                                 | 身份           |
| -------- | ------------ | ---------------- | ---------- | ------------------------------------ | -------------- |
| 发明专利 | CN118528318A | CN202410866215.5 | 2024.07.01 | 基于弹性杆驱动柔性机械臂的充电机器人 | 学生第一发明人 |
| 发明专利 | CN118528319A | CN202410866705.5 | 2024.07.01 | 基于弹性杆驱动的柔性机械臂           | 学生第一发明人 |
| 发明专利 | CN118528311A | CN202410866550.5 | 2024.07.01 | 一种双自由度联动柔性机器人关节组     | 学生第一发明人 |
| 发明专利 | CN118636191A | CN202410866339.3 | 2024.07.01 | 模块化弹性杆驱动的柔性机械臂         | 学生第一发明人 |
| 发明专利 | CN118928814A | CN202410869934.2 | 2024.07.01 | 太空超长臂展柔性机械臂               | 学生第一发明人 |\n
    \n![项目图片](/project1.jpg)\n
    \n![项目图片](/rodarm.jpg)\n
    \n![项目图片](/rodarmload.jpg)\n
    \n![项目图片](/rodarmcharge.jpg)\n
    \n![项目图片](/cylinder.jpg)\n`,
    video: '/rodarm.mp4',
    videoPoster: '/cover1.jpg',
  },
  {
    id: 2,
    name: 'RoboMaster机甲大师机器人赛',
    markdown: `\n## 项目内容:\n
        \n**职责：**\n连续三年代表校机器人队参赛，2021赛季担任英雄机器人组长，领导10余人小组，自主研制机器人参赛。\n
        \n**研发：**\n主导设计了3台20kg高机动性全向移动自瞄射击机器人，负责机器人结构设计、加工制造和测试工作。\n   
        \n**团队：**\n协调硬件、电控和视觉组进行机电一体化设计，推动项目进度。积累了许多项目开发和团队合作经验。\n
        \n## 项目成果:\n
• 2021赛季作为核心成员帮助团队取得建队以来历史最佳成绩：全国八强。\n
• 2021赛季个人负责的机器人获组别一等奖，开源技术报告获优秀奖，开源的设计方案被超过三所学校采用。\n
• 自主设计的机器人底盘和发射机构在队伍内作为通用平台沿用三年至今。\n
• 建立队内机械标准件库、库存管理系统和供应商名录。\n    
• 负责新队员培训工作，制定机械组培训大纲以及课程内容。\n    
        \n![项目图片](/herodesign.jpg)\n`,
    video: '/hero.mp4',
    videoPoster: '/cover2.jpg',
  },
  {
    id: 3,
    name: '基于光固化原理的自生长机器人',
    markdown: `\n**项目内容:**\n本人硕士课题。提出一种基于光固化原理的自生长机器人，通过光敏树脂液压驱动机器人尖端自主延伸生长。通过动态导向机构精准控制生长路径。支持狭小空间探测及管道铺设。进行柔性机器人前沿领域研究，主导结构设计、PCB和FPC设计、嵌入式设计和调试、实验等。
    \n**项目成果:**\n以学生第一发明人身份申请3项发明专利。\n
    \n## 申请专利：\n| 类型     | 公开号       | 申请号           | 申请时间   | 名称                                             | 身份           |
| -------- | ------------ | ---------------- | ---------- | ------------------------------------------------ | -------------- |
| 发明专利 | CN119704616A | CN202411924936.3 | 2024.12.25 | 一种受植物启发的基于发泡胶的尖端自生长避障机器人 | 学生第一发明人 |
| 发明专利 | CN119734288A | CN202411924727.9 | 2024.12.25 | 一种受植物启发的光固化原理尖端自生长避障机器人   | 学生第一发明人 |
| 发明专利 | CN119748476A | CN202411924442.5 | 2024.12.25 | 一种基于光固化原理的尖端自生长避障机器人         | 学生第一发明人 |\n
    \n![项目图片](/project3.jpg)\n`,
    videos: [
        { src: '/GR01.mp4', poster: '/cover32.jpg' },
        { src: '/GR01grow.mp4', poster: '/cover31.jpg' }
      ]
  },
  {
    id: 4,
    name: '高通过性轮足移动平台',
    markdown: `\n## 项目内容：\n本人本科毕业设计。设计并研制了一种高通过性轮足式移动平台，通过主动控制四轮摇臂转角实现对复杂地形的适应能力，对移动平台进行运动学建模，并开展性能测试及姿态控制研究。设计集中式模块化电器架构，每个轮足模块仅以一个连接器实现动力电源和信号线的连接。自主设计了一套关节电机的行星减速器。用PCB滑环解决了关节无限旋转的问题。
    \n## 项目成果：\n基于本研究以第二作者身份投稿的论文被 IROS 2025（机器人领域顶会）录用。\n\nDesian and Active Stability Control of a Wheel-foot Mobile Platform with Hiah Trafficability\n
    \n![项目图片](/project4.jpg)\n`,
    video: '/chassis.mp4',
    videoPoster: '/cover4.jpg',
  },
  {
    id: 5,
    name: '航天柔性机械手爪',
    markdown: `\n## 项目内容：\n设计并研制一种针对非合作目标空间飞行器的大容差抓取柔性机械手爪，并利用Adams进行高容错夹取场景的动力学仿真分析。\n
    \n## 项目成果：\n提出的线切割弹簧钢柔性手爪方案被引入正式设计，最终作为空间柔性臂的末端执行器搭载于未公开航天器进入太空执行太空任务。\n
    \n![项目图片](/project5.jpg)\n`,
    videos: [
        { src: '/spacegrip1.mp4', poster: '/cover51.jpg' },
        { src: '/spacegrip2.mp4', poster: '/cover52.jpg' }
      ]
  },
  {
    id: 6,
    name: '自适应机械夹爪',
    markdown: `\n## 项目内容：\n参加2020年全国大学生机械产品数字化设计大赛，设计了一种自适应机械夹爪以及配套机械臂和全向移动平台，制作运动学演示动画，对关键零件进行有限元分析。
    \n## 项目成果：\n担任组长，主导结构设计，制作演示动画，并对关键零件进行有限元分析。作为学生第一发明人取得发明专利1项。\n
    \n## 申请专利：\n公开号CN113715053A	申请号：CN202111144021.7    申请时间：2021.09.28	专利名称：自适应夹取结构及机器人\n`,
    video: '/adaptgrip.mp4',
    videoPoster: '/project6.jpg',
  },
  {
    id: 7,
    name: '陆空两用轮式机器人',
    markdown: `\n## 项目内容：\n设计了一种可在四轴飞行器和轮式小车之间切换模式的机器人，螺旋桨和车轮通过切换机构共用一套电机的动力源。
    \n## 项目成果：\n负责性能参数计算，结构设计，加工装配以及测试，作为学生第一发明人取得发明专利1项，实用新型专利1项。\n
    \n## 申请专利：\n| 类型         | 公开号       | 申请号           | 申请时间   | 名称                         | 身份           |
| ------------ | ------------ | ---------------- | ---------- | ---------------------------- | -------------- |
| 发明专利     | CN115534602A | CN202211181204.0 | 2022.09.27 | 一种陆空两用轮式机器人       | 学生第一发明人 |
| 实用新型专利 | CN218966685U | CN202222558478.9 | 2022.09.27 | 一种机器人行走装置以及机器人 | 学生第一发明人 |\n`,
    videos: [
        { src: '/ropter1.mp4', poster: '/project7.jpg' },
        { src: '/ropter2.mp4', poster: '/cover7.jpg' }
      ]
},
  {
    id: 8,
    name: '自研减速箱、电缸图纸',
    markdown: `\n## 项目简介：\n\n展示本人绘制的各类工程图纸，涵盖机械结构、零部件等。\n
    \n![项目图片](/project8.jpg)\n
    \n![项目图片](/wheelgearbox.jpg)\n
    \n![项目图片](/cylinderdrawing.jpg)\n
    \n![项目图片](/wheelgearboxdrawing.jpg)\n
    \n![项目图片](/GB04XX001.jpg)\n`,
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails.find((p) => p.id === Number(id));
  const [showVideos, setShowVideos] = useState(
    project && project.videos ? Array(project.videos.length).fill(false) : []
  );
  if (!project) return <div>未找到该项目</div>;
  return (
    <div className="project-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>← 返回</button>
      <h1 className="project-title-detail">{project.name}</h1>
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.markdown}</ReactMarkdown>
        {project.videos && project.videos.map((video, idx) => (
          <div className="video-section" key={idx}>
            {!showVideos[idx] ? (
              <img
                src={video.poster}
                alt={`视频封面${idx+1}`}
                className="video-poster"
                onClick={() => setShowVideos(showVideos.map((v, i) => i === idx ? true : v))}
                style={{ cursor: 'pointer', maxWidth: '100%', borderRadius: 8, margin: '24px 0' }}
              />
            ) : (
              <video
                src={video.src}
                controls
                autoPlay
                style={{ width: '100%', borderRadius: 8, margin: '24px 0' }}
              />
            )}
            {!showVideos[idx] && <div style={{textAlign:'center',color:'#888'}}>点击播放视频</div>}
          </div>
        ))}
        {project.video && !project.videos && (
          <div className="video-section">
            {!showVideos[0] ? (
              <img
                src={project.videoPoster}
                alt="视频封面"
                className="video-poster"
                onClick={() => setShowVideos([true])}
                style={{ cursor: 'pointer', maxWidth: '100%', borderRadius: 8, margin: '24px 0' }}
              />
            ) : (
              <video
                src={project.video}
                controls
                autoPlay
                style={{ width: '100%', borderRadius: 8, margin: '24px 0' }}
              />
            )}
            {!showVideos[0] && <div style={{textAlign:'center',color:'#888'}}>点击播放视频</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail; 