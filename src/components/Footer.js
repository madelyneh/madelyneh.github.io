import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/madelyn-helton-67767b129/" target="_blank" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
            <li><a href="https://github.com/madelyneh" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://stackoverflow.com/users/10336014/madelyn-helton?tab=profile" target="_blank" className="icon fa-stack-overflow"><span className="label">StackOverflow</span></a></li>
        </ul>
        <p className="copyright">&copy; Madelyn Helton 2019</p>
        
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
