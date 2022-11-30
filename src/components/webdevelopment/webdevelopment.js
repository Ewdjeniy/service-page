import React from 'react';
import ReactDOM from 'react-dom';

class WebDevelopment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web1: false,
      web2: true,
      web3: false,
      class: "web move1"
    };
  }
  
  chooseFirst() {
    this.setState({
        web1: true,
        web2: false,
        web3: false,
        class: "web"
      });
    document.getElementById('web1').style.backgroundColor = "rgb(72, 125, 135)";
    document.getElementById('web2').style.backgroundColor = "#3d3d3d";
    document.getElementById('web3').style.backgroundColor = "#3d3d3d";
  }
  
  chooseSecond() {
    this.setState({
        web1: false,
        web2: true,
        web3: false,
        class: "web move1"
    });
    document.getElementById('web1').style.backgroundColor = "#3d3d3d";
    document.getElementById('web2').style.backgroundColor = "rgb(72, 125, 135)";
    document.getElementById('web3').style.backgroundColor = "#3d3d3d";
  }
  
  chooseThird() {
    this.setState({
        web1: false,
        web2: false,
        web3: true,
        class: "web move2"
    });
    document.getElementById('web1').style.backgroundColor = "#3d3d3d";
    document.getElementById('web2').style.backgroundColor = "#3d3d3d";
    document.getElementById('web3').style.backgroundColor = "rgb(72, 125, 135)";
  }
  
  moveRight() {
    if (this.state.web1) {
      this.setState({
        web1: false,
        web2: true,
        web3: false,
        class: "web move1"
      });
      document.getElementById('web1').style.backgroundColor = "#3d3d3d";
      document.getElementById('web2').style.backgroundColor = "rgb(72, 125, 135)";
      document.getElementById('web3').style.backgroundColor = "#3d3d3d";
    } else if (this.state.web2) {
        this.setState({
          web1: false,
          web2: false,
          web3: true,
          class: "web move2"
        });
        document.getElementById('web1').style.backgroundColor = "#3d3d3d";
        document.getElementById('web2').style.backgroundColor = "#3d3d3d";
        document.getElementById('web3').style.backgroundColor = "rgb(72, 125, 135)";
    } else {
        this.setState({
          web1: true,
          web2: false,
          web3: false,
          class: "web"
        });
        document.getElementById('web1').style.backgroundColor = "rgb(72, 125, 135)";
        document.getElementById('web2').style.backgroundColor = "#3d3d3d";
        document.getElementById('web3').style.backgroundColor = "#3d3d3d";
    }
  }
  moveLeft() {
    if (this.state.web1) {
      this.setState({
        web1: false,
        web2: false,
        web3: true,
        class: "web move2"
      });
      document.getElementById('web1').style.backgroundColor = "#3d3d3d";
      document.getElementById('web2').style.backgroundColor = "#3d3d3d";
      document.getElementById('web3').style.backgroundColor = "rgb(72, 125, 135)";
    } else if (this.state.web2) {
        this.setState({
          web1: true,
          web2: false,
          web3: false,
          class: "web"
        });
        document.getElementById('web1').style.backgroundColor = "rgb(72, 125, 135)";
        document.getElementById('web2').style.backgroundColor = "#3d3d3d";
        document.getElementById('web3').style.backgroundColor = "#3d3d3d";
    } else {
        this.setState({
          web1: false,
          web2: true,
          web3: false,
          class: "web move1"
        });
        document.getElementById('web1').style.backgroundColor = "#3d3d3d";
        document.getElementById('web2').style.backgroundColor = "rgb(72, 125, 135)";
        document.getElementById('web3').style.backgroundColor = "#3d3d3d";
    }
  }
  render() {
    return (
      <section>
        <div className={this.state.class}>
          <article id="web1" onClick={() => this.chooseFirst()}>
            <img src={require("./images/web2.png")}/>
            <h2 className="Web_DEVELOPMENT"> Web DEVELOPMENT #1</h2>
            <p className="We_provide_the_best_world_class_web__developmen">
              We provide the best world class web development service
              We provide the best world class web development service
            </p>
            <a className="MORE_DETAILS" href="#">MORE DETAILS</a>
          </article>
          <article id="web2" onClick={() => this.chooseSecond()}>
            <img src={require("./images/web2.png")}/>
            <h2 className="Web_DEVELOPMENT"> Web DEVELOPMENT #2</h2>
            <p className="We_provide_the_best_world_class_web__developmen">
              We provide the best world class web development service
              We provide the best world class web development service
            </p>
            <a className="MORE_DETAILS" href="#">MORE DETAILS</a>
          </article>
          <article id="web3" onClick={() => this.chooseThird()}>
            <img src={require("./images/web2.png")}/>
            <h2 className="Web_DEVELOPMENT"> Web DEVELOPMENT #3</h2>
            <p className="We_provide_the_best_world_class_web__developmen">
              We provide the best world class web development service
              We provide the best world class web development service
            </p>
            <a className="MORE_DETAILS" href="#">MORE DETAILS</a>
          </article>
        </div>
        <div className="webArrows">
          <div className="Rectangle_13">
            <div className="left_arrow" onClick={() => this.moveLeft()}></div>
          </div>
          <div className="Rectangle_13">
            <div className="right_arrow" onClick={() => this.moveRight()}></div>
          </div>
        </div>
      </section>
    );
  }
}

export default WebDevelopment;