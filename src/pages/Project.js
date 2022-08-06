import React from 'react';

const Project = () => {


  return (
    <div className="project" style={{height:"100vh"}}>
      <section>
      <h1>Project1
      <br />
        首頁切版</h1>
      <div>
        <a target="_blank" rel="noreferrer" href="http://glass-project.netlify.app">
        <img src={require('../img/jins.png')} alt="" />
        </a>
      </div>
      <div className="content">
      <p>
      1.使用HTML、CSS切版
      <br />
      2.加入RWD手機版首頁漢堡選單切換
      <br />
      3.JQuery設計網頁動態
      <br />
      (輪播圖及RWD頁尾下拉選單呈現)</p>
      </div>
      </section>

      <section>
      <h1>Project2
      <br />
        報名表單</h1>
      <div>
        <a target="_blank" rel="noreferrer" href="http://register-form-project.netlify.app">
        <img src={require('../img/form.png')} alt="" />
        </a>
      </div>
      <div className="content">
      <p>
      1.使用HTML5及CSS3手刻頁面
      <br />
      2.使用Js及Jquery完成頁面互動
      <br />
      3.連接goolge API設定互動操作</p>

      </div>
      </section>
      </div>
  )
}

export default Project