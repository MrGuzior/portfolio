import React from 'react'
import {useSelector} from 'react-redux'
import {selectData} from '../../store/AppSlice'

const Footer = () => {
    const data = useSelector(selectData).main
    return (
        <footer>
                <div className="row">
                    <div className="twelve columns">
                    <ul className="social-links">
                        {data.social.map(network => {
                            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
                        })}
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2020 Konrad Guzior</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
                </div>
        </footer>
    )
}

export default Footer
