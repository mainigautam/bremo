import React, { useState } from 'react'
import FloatInput from './FloatInput';
const Reminders = ({ menuExpanded}) => {
  const [title, setTitle] = useState()
  const [memo, setMemo] = useState()
  const [type, setType] = useState(false);
  return (
    <div className={menuExpanded ? "MemoAreaExp" : "MemoArea"}>
      <div className="MemoBackground">
        <i
          className="fas fa-5x fa-bell"
          style={{
            WebkitTextStroke: "5px rgba(255, 255, 255, 0.363)",
            color: "transparent",
          }}
        ></i>
      </div>
      <FloatInput type={type} setType={setType} memo={memo} title={title} setMemo={setMemo} setTitle={setTitle} />
    </div>
  );
}

export default Reminders
