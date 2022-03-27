import React, { Fragment } from 'react'
import './style.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render() {
    return (
      // <Fragment>
      //   <div className={this.state.show ? 'show' : 'hide'}>hello</div>
      //   <button onClick={this.handleToggle}>toggle</button>
      // </Fragment>

      <Fragment>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => el.style.color = 'blue'}
          appear={true}
        > */}
          {/* <div>hello</div> */}

          <TransitionGroup>
            
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => el.style.color = 'blue'}
                    appear={true}
                    key={index}
                  > 
                    <div>{item}</div>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
          
        {/* </CSSTransition> */}
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>

    )
  }

  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }

  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}