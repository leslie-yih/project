import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ProjectDetail.css';

const patentTable = `
| 类型         | 公开号       | 申请号           | 申请时间   | 名称                                             | 身份           |
| ------------ | ------------ | ---------------- | ---------- | ------------------------------------------------ | -------------- |
| 发明专利     | CN119704616A | CN202411924936.3 | 2024.12.25 | 一种受植物启发的基于发泡胶的尖端自生长避障机器人 | 学生第一发明人 |
| 发明专利     | CN119734288A | CN202411924727.9 | 2024.12.25 | 一种受植物启发的光固化原理尖端自生长避障机器人   | 学生第一发明人 |
| 发明专利     | CN119748476A | CN202411924442.5 | 2024.12.25 | 一种基于光固化原理的尖端自生长避障机器人         | 学生第一发明人 |
| 发明专利     | CN118528318A | CN202410866215.5 | 2024.07.01 | 基于弹性杆驱动柔性机械臂的充电机器人             | 学生第一发明人 |
| 发明专利     | CN118528319A | CN202410866705.5 | 2024.07.01 | 基于弹性杆驱动的柔性机械臂                       | 学生第一发明人 |
| 发明专利     | CN118528311A | CN202410866550.5 | 2024.07.01 | 一种双自由度联动柔性机器人关节组                 | 学生第一发明人 |
| 发明专利     | CN118636191A | CN202410866339.3 | 2024.07.01 | 模块化弹性杆驱动的柔性机械臂                     | 学生第一发明人 |
| 发明专利     | CN118928814A | CN202410869934.2 | 2024.07.01 | 太空超长臂展柔性机械臂                           | 学生第一发明人 |
| 发明专利     | CN115534602A | CN202211181204.0 | 2022.09.27 | 一种陆空两用轮式机器人                           | 学生第一发明人 |
| 发明专利     | CN113715053A | CN202111144021.7 | 2021.09.28 | 自适应夹取结构及机器人                           | 学生第一发明人 |
| 实用新型专利 | CN218966685U | CN202222558478.9 | 2022.09.27 | 一种机器人行走装置以及机器人                     | 学生第一发明人 |
`;

const PatentList = () => (
  <div className="project-detail" style={{maxWidth: '1000px'}}>
    <h1 className="project-title-detail">专利列表</h1>
    <div className="markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{patentTable}</ReactMarkdown>
    </div>
  </div>
);

export default PatentList; 