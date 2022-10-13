import React, { useState } from "react";
import { Portal } from "react-portal";
import Header from "../Common/Header"
const MyModal = (props) => (
  <Portal>
    <div class="modalx">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
          </div>
          <div class="modal-body">
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>
          <div class="modal-footer">
            <button type="button" onClick={() => props.setIsOpen(!props.isOpen)} class="btn btn-primary">Close modal</button>
          </div>
        </div>
      </div>
    </div>
  </Portal>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <Header />
      <section>
        <div className="container" style={{position: 'relative'}}>
            <div className="col-md-6 offset-3 text-center">
            <div>Parent container</div>
            <button className="btn btn-info" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Close modal" : "Open modal"}
            </button>
            {isOpen && <MyModal setIsOpen={setIsOpen} isOpen={isOpen}/>}
            </div>
        </div>
      </section>
    </>
  );
}