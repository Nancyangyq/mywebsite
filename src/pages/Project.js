import React from 'react';

const Project = () => {


  return (
    <div className="project" >
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
      2.首頁RWD不同尺寸展示
      <br />
      3.使用JavsScript、JQuery展示動態輪播圖
      </p>
      </div>
      </section>

      <section>
      <h1>Project2
      <br />
        搜尋食譜</h1>
      <div>
        <a target="_blank" rel="noreferrer" href="https://search-foodrecipe.netlify.app">
        <img src={require('../img/foodrecipe.png')} alt="" />
        </a>
      </div>
      <div className="content">
      <p>
      1.使用HTML、CSS切版
      <br />
      2.透過free meal API抓取數據隨機搜尋食譜
      </p>

      </div>
      </section>
      <section>
      <h1>Project3
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
      2.使用JavaScript及JQuery完成頁面互動
      <br />
      3.連接goolge API設定互動操作</p>
      </div>
      </section>
      </div>
  )
}

export default Project