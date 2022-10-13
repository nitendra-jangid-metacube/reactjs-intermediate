import React from "react";
import BuggyCounter from "./BuggyCounter"
import ErrorBoundary from "./ErrorBoundary"
import Header from "../Common/Header"

function ErrorBoundaryApp() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h2 className="bg-info m-auto my-5 text-center text-dark w-50">Error Boundaries</h2>
          <p className="text-center">
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5.
            <br />
            This simulates a JavaScript error in a component.
          </p>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
              <ErrorBoundary>
                <BuggyCounter />
                <BuggyCounter />
              </ErrorBoundary>
            </div>
            <div className="col-md-6">
              <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
              <ErrorBoundary><BuggyCounter /></ErrorBoundary>
              <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ErrorBoundaryApp;