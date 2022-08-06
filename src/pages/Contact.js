import React from 'react';


const Contact = () => {

  return (
    <div className="contact" style={{height:"100vh"}}>
     <section className="contact">
     <h1 class="h1">Contact</h1>
      <p class="p">感謝您耐心觀看，期待與您正式會面!</p>
      <ul>
        <li>
          <a href="tel:0988093227">            <i class="fa-solid fa-phone icon-contact"></i>0988093227</a>
        </li>
        <li>
          <a href="mailto:enegentic25468@gmail.com">            <i class="fa-solid fa-envelope icon-contact"></i>enegentic25468@gmail.com</a>
        </li>
      </ul>
     </section>
     <section className="msg">
       <label htmlFor="name">* 姓名：</label>
       <input id="name" name="name" type="text" placeholder="請輸入姓名" required/>
       <label htmlFor="phone">* 電話：</label>
       <input id="phone" name="phone" type="text" placeholder="請輸入電話" required/>
       <label htmlFor="email">* 電子信箱：</label>
       <input id="email" name="email" type="text" placeholder="請輸入信箱" required/>
       <label for="textarea">* 留言：</label>
       <input id="textarea" className="textarea" type="textarea"/>
       <button id="btn" type="submit">送出</button>

     </section>
    </div>
  )
}

export default Contact