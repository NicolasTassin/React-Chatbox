import React, { Component, createRef } from 'react'
import './App.css'
import './Animations.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import base from './base'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount() {
    base.syncState('/', { context: this, state: 'messages' })
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    //add timestamp
    messages[`message-${Date.now()}`] = message
    //Keep only 10 messages
    Object.keys(messages).slice(0, -10).forEach(key => { messages[key] = null })

    this.setState({ messages })
  }

  isUser = pseudo => pseudo === this.state.pseudo //true or false

  render() {
    const messages = Object.keys(this.state.messages).map(key => (
      <CSSTransition key={key} timeout={200} classNames='fade'>
        <Message  isUser={this.isUser} pseudo={this.state.messages[key].pseudo} message={this.state.messages[key].message} />
      </CSSTransition>

    ))
    return (
      <div className='box'>
        <div className="messages" ref={this.messagesRef}>
          <TransitionGroup className='message'>
            {messages}
          </TransitionGroup>
        </div>
        <Formulaire length={140} pseudo={this.state.pseudo} addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App
