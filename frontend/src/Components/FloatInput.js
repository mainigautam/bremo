import React, { useState } from 'react'

const FloatInput = ({ type, setType, memo, title, setMemo, setTitle, fetchData, setLoader }) => {
  const [imgs, setImgs] = useState(undefined);
  const [imageBlob,setImageBlob] = useState();
  const [dispPal, setDispPal] = useState('none')
  const palTog = () => {
    if (dispPal === 'none') {
      setDispPal('block');
    } else {
      setDispPal('none');
    }
  }
  const [color, setColor] = useState('#202124')
  const jData = {
    "title": title,
    "bremo": memo,
    "theme": color,
    "image": imageBlob
  }
  const postImages = (files) => {
    const objectURL = URL.createObjectURL(files[0]);
    setImgs(objectURL)
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
        setImageBlob(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
  }
  const saveNote = () => {
    if (jData.bremo === null && jData.title === null) {
    } else {
      setLoader(true);
      var xhr = new XMLHttpRequest()
      xhr.open('POST', '/bremoSave');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(jData))
      document.getElementById('memo-body').value = null
      document.getElementById('memo-title').value = null
      setMemo(null)
      setTitle(null)
      setType(false)
      setColor("transparent")
      setImgs(undefined);
      setImageBlob(undefined);
      fetchData()
    }
  }
  const colorShades = ['#202124', 'rgba(214, 48, 49,0.35)', 'rgba(232, 67, 147,0.35)', 'rgba(241, 196, 15,0.35)',
    'rgba(255, 99, 72,0.35)', 'rgba(26, 188, 156,0.35)', 'rgba(10, 189, 227,0.35)', 'rgba(52, 31, 151,0.35)']
  return (
    <div className="floatInputContainer" style={{ backgroundColor: color }}>
      <div className="floatInput">
        <div className="floatImageHolder">
          <img src={imgs} alt=""  className="floatImage"/>
        </div>
        <input
          type="text"
          className="memoTitle"
          placeholder="Title"
          id="memo-title"
          style={{ display: type ? "flex" : "none" }}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea
          className="memoInput"
          placeholder="Add a memo"
          onFocus={(e) => { setType(true) }}
          id="memo-body"
          style={{ padding: type ? "10px auto auto 10px" : "10px 5px 5px 5px" }}
          onChange={(e) => { setMemo(e.target.value) }}
          onBlur={(e) => { saveNote() }}
        ></textarea>
        {true ?
          <>
            <div className="floatInputFooter" style={{ display: type ? "flex" : "none" }}>
              <input type="file" accept="image/*" id="memoImageInput" multiple hidden onChangeCapture={(e) => { postImages(e.target.files) }} />
              <div className="memoImageInputFake" onClick={(e) => { document.getElementById('memoImageInput').click() }}>
                <i className="fas fa-2x fa-image"></i>
              </div>
              <div className="colorPalette" style={{ display: dispPal }}>
                {colorShades.map((c, i) => {
                  return (
                    <div className="colorSwotch" style={{ backgroundColor: `${c}` }} onClick={(e) => { setColor(c); palTog() }} key={i}>
                    </div>
                  )
                })
                }
              </div>
              <div className="memoImageInputFake" onClick={(e) => { palTog() }}>
                <i className="fas fa-2x fa-palette"></i>
              </div>
              <div className="closeType" onClick={(e) => { setType(false); setColor("transparent"); setImgs(undefined) }}>Close</div>
            </div>
          </> :
          <div></div>}
      </div>
    </div>
  )
}

export default FloatInput
