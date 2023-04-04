import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <main className="main-container">
        <div className="txt">
          <h2 className="title">Learn to code by watching others</h2>
          <p className="text">
            see how experienced developers solve problems in real-time. watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="offer">
          <p>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>
        <div className="form">
          <input className="input first" type="text" placeholder="First Name" />
          <input className="input last" type="text" placeholder="Last Name" />
          <input
            className="input email"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="input password"
            type="text"
            placeholder="Password"
          />
          <button className="btn">claim your free trial</button>
          <p className="terms-txt">
            By clicking the button you are agreeing to our
            <a href="" className="link">
              Terms and Services
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
