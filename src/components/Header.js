import React from 'react'
import PropTypes from 'prop-types'
import headShot from '../images/headShot.jpg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <span className="icon fa-code"></span> */}
            <span className="main-logo" ><img src={headShot} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Madelyn Helton</h1>
                <h2>Full Stack Developer</h2>
                <h4>with a background in business leadership and customer relations.</h4>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Resume</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
