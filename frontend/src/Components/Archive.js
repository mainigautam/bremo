import React, { useState, useEffect } from 'react'
import MemoLeaf from './MemoLeaf';
import MemoLeafImage from './MemoLeafImage'
import ModalMemo from './ModalMemo'
const Archive = ({menuExpanded,setLoader}) => {
  const [fetchedData, setFD] = useState();
  const fetchData = async () => {
    const result = await Promise.all([
      fetch('/getArchives')
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    })
    setFD(result[0]);
    setLoader(false);
  };
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [])
  const [modalOpen , setModalOpen] = useState(false);
  const [modalData,setModalData] = useState(" ");
  const handleModal = ()=>{
    if(modalOpen===true){
      setModalOpen(false);
      setModalData(" ")
    }else{
      setModalOpen(true);
    }
  }
    return (
        <div className={menuExpanded?"MemoAreaExp":"MemoArea"}>
          <div className="MemoBackground">
            <i
              className="fas fa-5x fa-archive"
              style={{
                WebkitTextStroke: "5px rgba(255, 255, 255, 0.363)",
                color: "transparent",
              }}
            ></i>
            <br />
          </div>
          <div className="MemoCollection">
          {fetchedData === undefined ? "No Archives To Show ":fetchedData.map((d,i)=>{
           if(d.image===undefined){
            return(<MemoLeaf d={d} key={i} i={i} fetchData={fetchData} delPath='/restoreArchive' handleModal={handleModal} setModalData={setModalData} setLoader={setLoader}/>)
          }else{
            return(<MemoLeafImage d={d} key={i} i={i} fetchData={fetchData} delPath='/restoreArchive' handleModal={handleModal} setModalData={setModalData} setLoader={setLoader}/>)
          }
          })}
          </div>
          <ModalMemo modalOpen={modalOpen} handleModal={handleModal} data={modalData}/>
        </div>
      );
}

export default Archive
