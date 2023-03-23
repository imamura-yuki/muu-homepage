import React from "react";
import "./blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Blog</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">レビュー</span></a>
            <a href="#"><img src={Image1} alt="" class="blog__img"/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">【駆け出しエンジニア】アプリ開発に最適なツール</h3>
            <div className="blog__meta">
              <span>2023年 3月 1日</span>
              <span className="blog__dot">.</span>
              <span>test</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">レビュー</span></a>
            <a href="#"><img src={Image2} alt="" class="blog__img"/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">【駆け出しエンジニア】おすすめのサブスクリプション</h3>
            <div className="blog__meta">
              <span>2023年 3月 2日</span>
              <span className="blog__dot">.</span>
              <span>test</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#"><span className="blog__category">アプリ開発</span></a>
            <a href="#"><img src={Image3} alt="" class="blog__img"/></a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">【駆け出しエンジニア】アプリ開発について知っておくべき点</h3>
            <div className="blog__meta">
              <span>2023年 3月 3日</span>
              <span className="blog__dot">.</span>
              <span>test</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog