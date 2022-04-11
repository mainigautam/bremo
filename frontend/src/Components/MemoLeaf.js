import React from 'react'

const MemoLeaf = ({ d, i, fetchData, delPath,handleModal,setModalData,setLoader}) => {
    const footer = (fut) => {
        var element = document.getElementById(`footer${fut}`);
        var element2 = document.getElementById(`footer2${fut}`);
        var element3= document.getElementById(`footer3${fut}`)
        var element4= document.getElementById(`footer4${fut}`)
        if(delPath === '/restoreArchive'){

        }else if(delPath==='/deleteForever'){
            element.classList.add('visible');
        }else{
            element.classList.add('visible');
            element3.classList.add('visible');

        }
        if(element2!=null){
            element2.classList.add('visible');
        }
        if(element4!=null){
            element4.classList.add('visible')
        }
        
    }
    const removeFooter = (fut) => {
        var element = document.getElementById(`footer${fut}`);
        var element2 = document.getElementById(`footer2${fut}`);
        var element3= document.getElementById(`footer3${fut}`)
        var element4= document.getElementById(`footer4${fut}`)
        element3.classList.remove('visible');
        element.classList.remove('visible');
        if(element2!=null){
            element2.classList.remove('visible')

        }
        if(element4!=null){
            element4.classList.remove('visible')
        }
    }
    const deleteReq = (deleteLink) => {
        setLoader(true);
        var xhr = new XMLHttpRequest()
        xhr.open('DELETE', delPath);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ "ref": deleteLink }))
        setTimeout(() => { fetchData() }, 200)
    }
    const restoreReq = (restoreLink)=>{
        setLoader(true);
        var xhr = new XMLHttpRequest()
        xhr.open('DELETE', '/restore');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ "ref": restoreLink }))
        setTimeout(() => { fetchData() }, 200)    
    }
    const archiveReq = (archiveId) =>{
        setLoader(true);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/archiveBremos');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ "ref": archiveId }))
        setTimeout(() => { fetchData() }, 200)  
    }
    const restoreReqArchive=(restoreId)=>{
        setLoader(true);
        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/restoreArchive');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ "ref": restoreId }))
        setTimeout(() => { fetchData() }, 200)  
    }
    return (
        <div className="memoLeafContainer" onMouseEnter={(e) => { footer(i) }} onMouseLeave={(e) => { removeFooter(i) }} style={{backgroundColor:d.theme}}> 
            <div className="memoLeafTitle">
                {d.title}
            </div>
            <div className="memoLeafBremo" onClick={(e)=>{handleModal();setModalData(d);}}>
                {d.bremo}
            </div>
            <div className="memoLeafFooter" >
                <div className="memoImageInputFake" style={{ display: "none" }} id={`footer${i}`} onClick={() => { deleteReq(d._id); }}>
                    <i className="fas fa-2x fa-trash"></i>
                </div>
                <div className="memoImageInputFake" style={{ display: "none" }} id={`footer3${i}`} onClick={() => { archiveReq(d._id); }}>
                    <i className="fas fa-2x fa-archive"></i>
                </div>
                {delPath==='/deleteForever' ?
                    <div className="memoImageInputFake" style={{ display: "none" }} id={`footer2${i}`} onClick={() => { restoreReq(d._id); }}>
                        <i className="fas fa-2x fa-trash-restore"></i>
                    </div>
                    : delPath==='/restoreArchive'?
                    <div className="memoImageInputFake" style={{ display: "none" }} id={`footer4${i}`} onClick={() => { restoreReqArchive(d._id); }}>
                        <i className="fas fa-2x fa-caret-square-up"></i>
                    </div>
                :<div></div>}
            </div>
        </div>
    )
}

export default MemoLeaf
