import React from 'react';
import ReactDOM from 'react-dom';
import './navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "HEADER",
      status: true
    };
  }
  changeStatus() {
    this.setState({
      class: this.state.status ? 'HEADER menu_state_open' : 'HEADER',
      status: !this.state.status,
    });
  }
  openLink() {
    if (document.documentElement.clientWidth < 768) {
      this.setState({
        class: 'HEADER',
        status: !this.state.status,
      });
    }
  }
  changeStatus() {
    this.setState({
      class: this.state.status ? 'HEADER menu_state_open' : 'HEADER',
      status: !this.state.status,
    });
  }
  render() {
    return (
      <nav className={this.state.class}>
        <a className="LOGO" href="#" onClick={() => this.openLink()}>
          lo<span> go</span>
        </a>
        <div className="Home_About_Service" onClick={() => this.openLink()}>
          <div className="follow_us">
            <div className="fbBg">
              <a href="#">
                <div className="fbIcon"></div>
              </a>
            </div>
            <div className="twBg">
              <a href="#">
                <div className="twIcon"></div>
              </a>
            </div>
            <div className="gBg">
              <a href="#">
                <div className="gIcon"></div>
              </a>
            </div>
          </div>
            <a className="menu__links-item" href="#">Home</a>
            <a className="menu__links-item" href="#aboutUs">About</a>
            <a className="menu__links-item" href="#ourServices">Services</a>
            <a className="menu__links-item" href="#">Portfolio</a>
            <a className="menu__links-item" href="#">Shop</a>
            <a className="menu__links-item" href="#contacts">Contact</a>
            <a className="menu__links-item" href="#">Pages</a>
        </div>
        <div className="menu__icon" onClick={() => this.changeStatus()}><span></span><span></span><span></span></div>
      </nav>
    );
  }
}

export default Navigation;