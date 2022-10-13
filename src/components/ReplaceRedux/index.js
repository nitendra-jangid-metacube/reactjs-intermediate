import React from "react";
import CounterView from "../../views/counter-view";
import ContactView from "../../views/contact-view";
import Header from "../Common/Header";

export default function ReplaceRedux() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h1 className="text-center">React Hooks Context Demo</h1>
          <hr />
          <div className="row">
            <div className="col-md-4">
                <CounterView />
            </div>
            <div className="col-md-8" style={{borderLeft: '3px solid #eee'}}>
                <ContactView />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}