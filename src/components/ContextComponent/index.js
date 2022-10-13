import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import React from 'react';
import Header from "../Common/Header";
import ParaComponent from './ParaComponent';

export default class ContextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state 
    return (<>
        <Header />
        <section>
            <div className="container">
                <h2 className="bg-info m-auto my-5 text-center text-dark w-50">Context</h2>
                <div className="col-md-6 offset-3">
                  <ThemeContext.Provider value={this.state.theme}>
                    <ThemedButton onClick={this.toggleTheme}>
                      Change Theme
                    </ThemedButton>
                    <br />
                    <br />
                    <ParaComponent />
                  </ThemeContext.Provider>
                </div>
            </div>
        </section>
        </>
    );
  }
}