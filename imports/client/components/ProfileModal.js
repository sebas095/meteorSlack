import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class ProfileModal extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const userModal = ReactDOM.findDOMNode(this.refs.userModal);
    $(userModal).modal();
  }

  handleChange() {
    const imageView = ReactDOM.findDOMNode(this.refs.imageView);
    const fileEle = ReactDOM.findDOMNode(this.refs.pic);
    const imagePath = fileEle.files[0];
    const reader = new FileReader();

    reader.onload = (fileLoad) => {
      imageView.src = reader.result;
      this.props.onInsertImage(imagePath.name, reader.result);
    }

    reader.readAsDataURL(imagePath);
  }

  render() {
    let url_photo;
    if (Meteor.user().profile) {
      url_photo = Meteor.user().profile.url_photo;
      if (!url_photo) {
        url_photo = '/images/coco.jpg';
      }
    } else {
      url_photo = '/images/coco.jpg';
    }

    return (
      <div ref='userModal' className='ui modal'>
        <h1>{this.props.user}</h1>
        <img ref='imageView' src={url_photo} alt={url_photo} />
        <input
          onChange={this.handleChange.bind(this)}
          type='file'
          ref='pic'
          accept='image/x-png'/>
      </div>
    );
  }
}
