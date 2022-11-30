import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eMail: "Your email",
    }
  }
  change() {
    this.setState({
      eMail: document.subscribe.eMail.value,
    });
  }
  render() {
    return (
      <section>
        <div className="productItems">
          <h3 className="Product"> Product</h3>
          <div className="line"></div>
          <a href="#" className="Cost___Governance_Security___Complaince_Product">Cost & Governance</a>
          <a href="#" className="Cost___Governance_Security___Complaince_Product">Security & Complaince</a>
          <a href="#" className="Cost___Governance_Security___Complaince_Product">Product N</a>
          <a href="#" className="Cost___Governance_Security___Complaince_Product">Pricing & plans</a>
        </div>
        <div className="learnItems">
          <h3 className="LEARN">LEARN</h3>
          <div className="line"></div>
          <a href="#" className="Articles_Register_a_demo_Webinars_FAQs">Articles</a>
          <a href="#" className="Articles_Register_a_demo_Webinars_FAQs">Register a demo</a>
          <a href="#" className="Articles_Register_a_demo_Webinars_FAQs">Webinars</a>
          <a href="#" className="Articles_Register_a_demo_Webinars_FAQs">FAQs</a>
        </div>
        <div className="companyItems">
          <h3 className="COMPANY">COMPANY</h3>
          <div className="line"></div>
          <a href="#" className="About_Careers_Partners_Contact">About</a>
          <a href="#" className="About_Careers_Partners_Contact">Careers</a>
          <a href="#" className="About_Careers_Partners_Contact">Partners</a>
          <a href="#" className="About_Careers_Partners_Contact">Contact</a>
        </div>
        <div className="mail">
          <form encType="multipart/form-data" name="subscribe">
            <input name="eMail" className="Your_email" type="e-mail" value={this.state.eMail} onChange={() => this.change()}/>
            <input className="Subscribe" type="submit" value="Subscribe"/>
          </form>
          <div className="icons">
            <div className="fb_bg">
              <div className="fb_icon"></div>
            </div>
            <div className="tw_bg">
              <div className="tw_icon"></div>
            </div>
            <div className="g__bg">
              <div className="g__icon"> </div>
            </div>
            <div className="ball_bg">
              <div className="ball_icon"></div>
            </div>
            <div className="be_bg">
              <div className="be_icon"></div>
            </div>
            <div className="insta__bg">
              <div className="insta__icon"> </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;