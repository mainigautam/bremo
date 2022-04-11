import React, { useState, useEffect } from 'react'
const Linkpad = ({ menuExpanded, setLoader }) => {
  const [fetchedData, setFD] = useState();
  const fetchData = async () => {
    const result = await Promise.all([
      fetch('/getLinks')
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    })
    setFD(result[0]);
    setLoader(false);
  };
  useEffect(() => {
    setInterval(() => { fetchData() }, 1000)
    //eslint-disable-next-line
  }, [])
  const [dLink, setdLink] = useState('')
  var jData = {
    "body": dLink,
  }
  const saveLink = () => {
    if (jData.body === "") {
    } else {
      setLoader(true);
      var xhr = new XMLHttpRequest()
      xhr.open('POST', '/linkSave');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(jData))
      document.getElementById('Link').value = ""
      fetchData();
    }
  }
  const deleteReq = (deleteLink) => {
    setLoader(true);
    var xhr = new XMLHttpRequest()
    xhr.open('DELETE', '/deleteLink');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ "ref": deleteLink }))
    fetchData();
  }
  return (
    <div className={menuExpanded ? "MemoAreaExp" : "MemoArea"}>
      <div className="MemoBackground">
        <i
          className="fas fa-5x fa-link"
          style={{
            WebkitTextStroke: "5px rgba(255, 255, 255, 0.363)",
            color: "transparent",
          }}
        ></i>
      </div>
      <div className="floatInputContainer">
        <div className="linkInputHolder">
          <input type="text" className="linkInput" name="Link" id="Link" placeholder="Paste a Link To Save" style={{ display: true ? "flex" : "none" }} onBlur={(e) => { saveLink() }} onChange={(eC) => { setdLink(eC.target.value) }} />
        </div>
      </div>
      <div className="linksDisplay">
        {fetchedData === undefined ? "Type or Paste a Link To Add Here" :
          fetchedData.map((e, i) => {
            return (
              <div className="linkHref" key={i}>
                <input value={e.link[0] === "h" ? e.link : `https://${e.link}`} className="textDeco-none" readOnly id={e._id} onClick={()=>{window.location=e.link}} />
                <div className="copy-btn" onClick={() => {
                  const linkVal = document.getElementById(e._id);
                  linkVal.select();
                  linkVal.setSelectionRange(0, 999999);
                  document.execCommand('copy');
                }}><i className="fas fa-copy"></i></div>
                <div className="copy-btn" onClick={() => { deleteReq(e._id); }}>
                  <i className="fas fa-trash"></i>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default Linkpad;
