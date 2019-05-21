import React from 'react'
import PropTypes from 'prop-types'

import resume from '../images/resumeWord.png'
import resumeEdu from '../images/resumeEdu.png'
import resumePicture from '../images/DSC_1168.jpg'
import computerClose from '../images/computerClose.jpg'
import meSmiling from '../images/meSmiling.jpg'

import hangMan from '../images/HangMan.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <span className="image main"><img src={resumePicture} alt="Madelyn Helton" /></span>
          <span className="image fit">
            <img src={resume} alt="Madelyn Helton's Resume" />
            <img src={resumeEdu} alt="Madelyn Helton's Education" />
          </span>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <span className="image main"><img src={computerClose} alt="" /></span>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Word Guess</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="https://madelyneh.github.io/Word-Guess-Game/" target="_blank" rel="noreferrer"><img src={hangMan} alt="Word Guess"/></a>
                    </td>
                    <td>
                      <a href="https://www.linkedin.com/in/madelyn-helton-67767b129/" target="_blank" rel="noreferrer" className="icon fa-linkedin"><span className="label">linkedIn</span></a>

                    </td>
                    </tr>
                </tbody>
               
              </table>

            </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={meSmiling} alt="" /></span>
          {/* <blockquote> */}
            <p>Front end developer who has simplifying the user experience in mind. Recently graduated from the UT coding bootcamp where I learned JavaScript, jQuery... etc.</p>

            <p>Starting my first job at 15 and working through high school and college helped to refine my work ethic and time management skills.</p> 

            <p> Over 8 years in leadership positions, from being a customer service manager at a retail store to the store manager of a pet store. All of these positions were achieved because of my determination, leadership, problem solving, communication, and organizational skills.</p>
            {/* </blockquote> */}
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/madelyn-helton-67767b129/" target="_blank" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
            <li><a href="https://github.com/madelyneh" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://stackoverflow.com/users/10336014/madelyn-helton?tab=profile" target="_blank" className="icon fa-stack-overflow"><span className="label">StackOverflow</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main