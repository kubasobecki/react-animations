import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import { Transition } from 'react-transition-group';

class App extends Component {
    state = {
        modalIsOpen: false
    };

    showModal = () => {
        this.setState({ modalIsOpen: true });
    };

    hideModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <Transition
                    in={this.state.modalIsOpen}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => (
                        <>
                            <Modal show={state} closed={this.hideModal} />
                            <Backdrop show={state} />
                        </>
                    )}
                </Transition>
                <button className="Button" onClick={this.showModal}>
                    Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List />
            </div>
        );
    }
}

export default App;
