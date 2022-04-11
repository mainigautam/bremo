import React ,{useState,useEffect}from 'react'
import MemoLeaf from './MemoLeaf'
import MemoLeafImage from './MemoLeafImage';
const Trash = ({menuExpanded,setLoader}) => {
  const [fetchedData, setFD] = useState([]);
  const fetchData = async () => {
    const result = await Promise.all([
      fetch('/getTrashes')
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    })
    setFD(result[0]);
    setLoader(false);
  };
  useEffect(() => {
    fetchData()
    //eslint-disable-next-line
  }, [])
  var fetchedDataRev = [...fetchedData];
    return (
        <div className={menuExpanded?"MemoAreaExp":"MemoArea"}>
          <div className="MemoBackground">
            <i
              className="fas fa-5x fa-trash"
              style={{
                WebkitTextStroke: "5px rgba(255, 255, 255, 0.363)",
                color: "transparent",
              }}
            ></i>
            <br />
          </div>
          <div className="MemoCollection">
        {fetchedData === undefined?"" :fetchedDataRev.reverse().map((d,i)=>{
          if(d.image===undefined){
            return(
              <MemoLeaf d={d} key={i} i={i} fetchData={fetchData} delPath='/deleteForever' setLoader={setLoader}/>
              )
          }else{
            return(
              <MemoLeafImage d={d} key={i} i={i} fetchData={fetchData} delPath='/deleteForever' setLoader={setLoader}/>
              )
          }
        })}
       </div>
        </div>
      );
}

export default Trash
