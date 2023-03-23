import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">お問い合わせはこちら</h3>
          <p className="contact__details">お気軽にご相談ください👋</p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="名前" />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder="メールアドレス" />
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder="件名を書いてください" />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder="お問合せ内容を書いてください"></textarea>
          </div>
          <button className="btn">メッセージ送信</button>
        </form>
      </div>
    </section>
  )
}

export default Contact