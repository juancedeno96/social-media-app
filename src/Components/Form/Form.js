import React, { Component } from 'react';
import axios from 'axios';
import noImage from '../../images/no_image.jpg'
import './Form.scss'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: ''
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    axios.post('/api/post', this.state)
      .then(() => {this.props.history.push('/dash')})
      .catch((err) => console.log(err))
      
  }
  
  render() {
    let imgSrc = this.state.img ? this.state.img : noImage;

    return (
      <div className='Form'>
        <div className='form-content-box'>
        <h2 className='title'>New Post</h2>
            <p>Title:</p>
            <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
          <img className='form-img-prev' src={imgSrc} alt='preview'/>
            <p>Image URL:</p>
            <input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
            <p>Content:</p>
            <textarea value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
        <button onClick={this.submit} className='dark-button'>Post</button>
          </div>
        </div>
    );
  }
}

export default Form;