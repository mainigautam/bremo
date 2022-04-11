import React from 'react'

const ModalMemo = ({ modalOpen, handleModal, data }) => {
    const clock = new Date(data.timeStamp);
    const time = clock.toLocaleTimeString();
    const date = clock.toLocaleDateString();
    return (
        <div className={modalOpen ? "ModalMemoBlur" : "ModalMemoBlurHidden"} >
            <div className="floatInput floatInputModal" style={{backgroundColor : data.theme}}>
            {data.image === undefined ? null : <img src={new Buffer.from(data.image).toString("ascii")} alt="" className="memoLeafImage"/>}
                <input type="text" value={data.title} className="memoTitle memoTitleModal" style={{ display: "flex" }} />
                <textarea value={data.bremo} className="memoInput memoInputModal" style={{ display: "flex" }}></textarea>
                <div className="footer">
                    {time}<br/>
                    {date}<br/>
                    <button onClick={(e)=>{handleModal()}}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalMemo
