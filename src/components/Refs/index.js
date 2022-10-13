import React from 'react';
import Header from '../Common/Header';

class Refs extends React.Component {
    constructor(props) {
      super(props);
  
      this.textInput = null;
  
      this.setTextInputRef = element => {
        this.textInput = element;
      };
  
      this.focusTextInput = () => {
        // Focus the text input using the raw DOM API
        if (this.textInput) this.textInput.focus();
      };
    }
  
    componentDidMount() {
      // autofocus the input on mount
      this.focusTextInput();
    }
  
    render() {
      // Use the `ref` callback to store a reference to the text input DOM
      // element in an instance field (for example, this.textInput).
      return (
        <>
          <Header />
          <section>
            <div className="container">
                <h2 className="bg-info m-auto my-5 text-center text-dark w-50">React Refs</h2>
                <div className="col-md-6 offset-3">
                  <h5>Focus the text input using the Refs</h5>
                  <div className='input-group'>
                    <input
                      className='form-control'
                      type="text"
                      ref={this.setTextInputRef}
                    />
                  </div>
                  <br />
                  <div className='input-group'>
                    <input
                      type="button"
                      className='btn btn-info'
                      value="Focus the text input"
                      onClick={this.focusTextInput}
                    />
                  </div>
                </div>
            </div>
          </section>
        </>
      );
    }
  }

export default Refs;