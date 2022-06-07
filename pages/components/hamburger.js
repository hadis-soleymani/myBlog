import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './navbar'

const Div = styled.div`
width:2rem;
height: 2rem;
position:fixed;
top:2vh;
left:5vw;
z-index:20;
display:none;
cursor: pointer;

@media(max-width: 768px){
  display:flex;
  justify-content: space-around;
  flex-direction: column;
}
div{
  height:0.25rem;
  width:2rem;
  background:${props => props.open ?  '#42474b' :'rgb(234, 233, 239)' };
  border-radius:10px;
  transform-origin:1px;
  transition: all 0.3s linear;
  &:nth-child(1){
    transform:${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2){
    transform:${props => props.open ? 'translateX(-100%)' : 'translateX(0)'};
    opacity:${props => props.open ? 0 : 1};
  }
  &:nth-child(3){
    transform:${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'}
  }
}
`

export default class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }
  openHandler = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <>
        <Div open={this.state.open} onClick={this.openHandler}>
          <div></div>
          <div></div>
          <div></div>

        </Div>
        <Navbar open={this.state.open} />
      </>
    )
  }
}
