import React from 'react';
import ReactDOM from 'react-dom';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture1: true,
      picture2: false,
      picture3: false,
      class: "pictures",
      number: 1,
    }
  }
  
  chooseFirstPicture() {
    this.setState({
      picture1: true,
      picture2: false,
      picture3: false,
      class: "pictures",
      number: 1,
    });
  }
  
  chooseSecondPicture() {
    this.setState({
      picture1: false,
      picture2: true,
      picture3: false,
      class: "pictures picturesMove1",
      number: 2,
    });
  }
  
  chooseThirdPicture() {
    this.setState({
      picture1: false,
      picture2: false,
      picture3: true,
      class: "pictures picturesMove2",
      number: 3,
    });
  }
  changePictureRight() {
    if (this.state.picture1) {
      this.setState({
        picture1: false,
        picture2: true,
        picture3: false,
        class: "pictures picturesMove1",
        number: 2
      });
    } else if (this.state.picture2) {
      this.setState({
        picture1: false,
        picture2: false,
        picture3: true,
        class: "pictures picturesMove2",
        number: 3
      });
    } else if (this.state.picture3) {
      this.setState({
        picture1: true,
        picture2: false,
        picture3: false,
        class: "pictures",
        number: 1
      });
    }
  }
  changePictureLeft() {
    if (this.state.picture1) {
      this.setState({
        picture1: false,
        picture2: false,
        picture3: true,
        class: "pictures picturesMove2",
        number: 3
      });
    } else if (this.state.picture2) {
      this.setState({
        picture1: true,
        picture2: false,
        picture3: false,
        class: "pictures",
        number: 1
      });
    } else if (this.state.picture3) {
      this.setState({
        picture1: false,
        picture2: true,
        picture3: false,
        class: "pictures picturesMove1",
        number: 2
      });
    }
  }
  render() {
    return (
      <section>
        <div className={"people"}>
          <p className="It_was_always_a_pleasure__doing_bussiness_with_">
            It was always a pleasure doing bussiness with them. I love the quality of work.
          </p>
          <div className="Shape_5"></div>
          <div className="peopleArrow">
            <div className="left-arrow" onClick={() => this.changePictureLeft()}></div>
            <span className="_1_10"> {this.state.number}/10</span>
            <div className="right-arrow" onClick={() => this.changePictureRight()}></div>
          </div>
        </div>
        <div className={this.state.class}>
          <div className="model1" onClick={() => this.chooseFirstPicture()}>
            <span className="_01">01</span>
            <div className="Rectangle_10">
              <span className="Imran_Khan">Imran Khan</span><br/>
              <span className="CEO__Vesso">CEO, Vesso</span>
          </div>
          </div>
          <div className="model2" onClick={() => this.chooseSecondPicture()}>
            <span className="_01"> 02</span>
            <div className="Rectangle_10">
              <span className="Imran_Khan">Imran Khan</span><br/>
              <span className="CEO__Vesso">CEO, Vesso</span>
          </div>
          </div>
          <div className="model3" onClick={() => this.chooseThirdPicture()}>
            <span className="_01"> 03</span>
            <div className="Rectangle_10">
              <span className="Imran_Khan">Imran Khan</span><br/>
              <span className="CEO__Vesso">CEO, Vesso</span>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default People;