import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss'
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
          <h1>Tale</h1>
          <div className='nav-profile-container'>
            <div className='nav-profile-pic'style={{backgroundImage:`url(${this.props.profile_pic})`}}></div>
          </div>
          <div className='nav-links'>
            <Link to='/dash'><FontAwesomeIcon className='nav-img' icon={faHome} alt='home'/></Link>
          <Link to='/form'><FontAwesomeIcon className='nav-img' icon={faPlus} alt='add post'/></Link>
         <Link to='/' onClick={this.logout}> <FontAwesomeIcon className='nav-img' icon={faPowerOff} alt='logout'/></Link>
          </div>
        </div>
  }
}

const mapStateToProps= (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, {updateUser, logout})(Nav));