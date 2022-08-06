import React from 'react'
import { Link } from 'react-router-dom';



const Homepage = () => {
  return (
    <section className="homepage" style={{height:"100vh"}}>
        <div className="img"></div>
        <div className="intro">
            <h1>Hello!</h1>
            <p>你好，我是Nancy
            <br />
            喜歡嘗試新事物，勇於接受挑戰
            <br />
            獨立思考，培養自我解決的能力
            <br />
            目前在學習網頁設計
            <br />
            <br />
            </p>

        <div className="circle">
        <Link to="/Project">Project</Link>
        </div>
        <div className="circle">
        <Link to="/Contact">Contact</Link>
        </div>
    </div>
    </section>
  )
}

export default Homepage;