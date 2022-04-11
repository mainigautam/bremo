import React,{useState,useEffect} from "react";
import FloatInput from "./FloatInput";
import MemoLeaf from "./MemoLeaf";
import MemoLeafImage from "./MemoLeafImage";
import ModalMemo from "./ModalMemo";

const MemoArea = ({ menuExpanded ,setLoader}) => {
  const [fetchedData, setFD] = useState();
  const fetchData = async () => {
    const result = await Promise.all([
      fetch('/getBremos')
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    })
    setFD(result[0]);
    setLoader(false);
  };
  useEffect(() => {
    setInterval(()=>{fetchData()},1000)
    //eslint-disable-next-line
  }, [])
  const [modalOpen , setModalOpen] = useState(false);
  const [modalData,setModalData] = useState(" ");
  const [title, setTitle] = useState(null);
  const [memo, setMemo] = useState(null);
  const[type,setType] = useState(false);
  const handleModal = ()=>{
    if(modalOpen===true){
      setModalOpen(false);
      setModalData(" ")
    }else{
      setModalOpen(true);
    }
  }
  return (
    <div className={menuExpanded ? "MemoAreaExp" : "MemoArea"}>
      <div className="MemoBackground">
        <i
          className="fas fa-5x fa-sticky-note"
          style={{
            WebkitTextStroke: "5px rgba(255, 255, 255, 0.363)",
            color: "transparent",
          }}
        ></i>
      </div>
      <FloatInput type={type} setType={setType} memo={memo} title={title} setMemo={setMemo} setTitle={setTitle} fetchData={fetchData} setLoader={setLoader}/>
      <div className="MemoCollection">
        {fetchedData === undefined?"" :fetchedData.map((d,i)=>{
          if(d.image===undefined){
            return(<MemoLeaf d={d} key={i} i={i} fetchData={fetchData} delPath='/deleteBremos' handleModal={handleModal} setModalData={setModalData} setLoader={setLoader}/>)
          }else{
            return(<MemoLeafImage d={d} key={i} i={i} fetchData={fetchData} delPath='/deleteBremos' handleModal={handleModal} setModalData={setModalData} setLoader={setLoader}/>)
          }
        })}
      </div>
      <ModalMemo modalOpen={modalOpen} handleModal={handleModal} data={modalData}/>
    </div>
  );
};
export default MemoArea;
