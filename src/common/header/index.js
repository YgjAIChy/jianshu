import Reacat, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import './style.scss'
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

// 将数据的处理交给人reducer.js文件来处理，此时可以将header组件来当作一个无状态组件

const Header = (props) =>{
  return (
    <HeaderWrapper>
    <Logo />
    <Nav>
      <NavItem className='left active'>首页</NavItem>
      <NavItem className='left'>下载App</NavItem>
      <NavItem className='right'>登录</NavItem>
      <NavItem className='right'>
        <span className="iconfont" style={{ "fontSize": '32px' }}>&#xe600;</span>

      </NavItem>
      <SearchWrapper>
        <CSSTransition
          in={props.focused}
          timeout={200}
          classNames='slide'
        >

          <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.handleInputChangeFocuse} onBlur={props.handleInputChangeBlur}></NavSearch>
        </CSSTransition>

        <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe662;</span>
      </SearchWrapper>
    </Nav>
    <Addition>
      <Button className='writting'>
        <span className="iconfont">&#xe605;</span>

        写文章</Button>
      <Button className='reg'>注册</Button>

    </Addition>
  </HeaderWrapper>
  )

  
}


// class Header extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // focused:false
//     }
//   }
//   // handleInputChangeFocuse = () => {
//   //   console.log(1111)
//   //   this.setState({
//   //     focused: true
//   //   })
//   // }
//   // handleInputChangeBlur = () => {
//   //   this.setState({
//   //     focused: false
//   //   })
//   // }
//   render() {
//     return (
//       <Fragment>
//         <HeaderWrapper>
//           <Logo />
//           <Nav>
//             <NavItem className='left active'>首页</NavItem>
//             <NavItem className='left'>下载App</NavItem>
//             <NavItem className='right'>登录</NavItem>
//             <NavItem className='right'>
//               <span className="iconfont" style={{ "fontSize": '32px' }}>&#xe600;</span>

//             </NavItem>
//             <SearchWrapper>
//               <CSSTransition
//                 in={this.props.focused}
//                 timeout={200}
//                 classNames='slide'
//               >

//                 <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputChangeFocuse} onBlur={this.props.handleInputChangeBlur}></NavSearch>
//               </CSSTransition>

//               <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe662;</span>
//             </SearchWrapper>
//           </Nav>
//           <Addition>
//             <Button className='writting'>
//               <span className="iconfont">&#xe605;</span>

//               写文章</Button>
//             <Button className='reg'>注册</Button>

//           </Addition>
//         </HeaderWrapper>
//       </Fragment>
//     )
//   }
// }
 
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatch1: () => {
    //   dispatch(actionCreator)
    // }
    handleInputChangeFocuse:()=>{
      // console.log(1111)
      const action = {
        type:"search_focuse"
      }
      dispatch(action)
    },

    handleInputChangeBlur:()=>{
      // console.log(1111)
      const action = {
        type:"search_blur"
      }
      dispatch(action)
    }



  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)