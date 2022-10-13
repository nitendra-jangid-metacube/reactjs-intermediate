import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Wrapper from '../../assets/wrappers/FancyBorder'

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
            {props.title}
        </h1>
        <p className="Dialog-message">
            {props.message}
        </p>
        {props.children}
        </FancyBorder>
    );
}

class CompositionInheritance extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <>
        <Header />
        <Wrapper>
        <section>
            <div className="container">
                <h2 className="bg-info m-auto my-5 text-center text-dark w-50">Composition vs Inheritance</h2>
                <div className="col-md-6 offset-3">
                    <Dialog title="Mars Exploration Program"
                            message="How should we refer to you?">
                        <input className="form-control m-2" value={this.state.login}
                                onChange={this.handleChange} />
                        <button className="btn btn-info" onClick={this.handleSignUp}>
                        Sign Me Up!
                        </button>
                    </Dialog>
                </div>
            </div>
        </section>
        </Wrapper>
        </>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

export default CompositionInheritance;