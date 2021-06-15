import React, { Component } from 'react';
import axios from 'axios';
import homeLogo from '../../images/home_logo.png'
import newLogo from './../../images/new_logo.png';
import logoutLogo from './../../images/shut_down.png';
import {Link, withRouter} from 'react-router-dom'
import {connect } from 'react-redux'
import {updateUser, logout} from '../../redux/reducer'
class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
    .then(res => this.props.updateUser(res.data))
    .catch(err=>console.log(err))
  }
  
  logout() {
    axios.delete('/api/auth/logout')
      .then(_ => this.props.logout())
      .catch(err => console.log(err))
  }
  
  render() {
    // console.log(this.props)
      return this.props.location.pathname !== '/' &&
        <div className='nav'>
          <div className='nav-profile-container'>
            <div className='nav-profile-pic'style={{backgroundImage:`url(${this.props.profile_pic})`}}></div>
            <p>{this.props.username}</p>
          </div>
          <div className='nav-links'>
            <Link to='/dash'><img className='nav-img' src={homeLogo} alt='home' /></Link>
          <Link to='/form'><img className='nav-img' src={newLogo} alt='new post' /></Link>
          </div>
         <Link to='/' onClick={this.logout}> <img className='nav-img logout' src={logoutLogo} alt='logout' /></Link>
        </div>
  }
}

const mapStateToProps= (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, {updateUser, logout})(Nav));