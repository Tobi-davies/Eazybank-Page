import React from "react";
import "./article.styles.css";

const Article = () => (
  <div className="article">
    <div className="article-container container">
      <h1> Latest Articles</h1>
      <div className="box">
        <div className="art">
          <div className="img-div currency"></div>
          <div className="claire">
            <span>By Claire Robinson</span>
            <h3> Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>

        <div className="art">
          <div className="img-div restaurant"></div>
          <div className="claire">
            <span>By Wilson Hutton</span>
            <h3> Treat yourself without worrying about money</h3>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>

        <div className="art">
          <div className="img-div plane"></div>
          <div className="claire">
            <span>By Wilson Hutton</span>
            <h3>Take your Easybank card wherever you go</h3>
            <p>
              {" "}
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>

        <div className="art">
          <div className="img-div confetti"></div>
          <div className="claire">
            <span>By Claire Robinson</span>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Article;
