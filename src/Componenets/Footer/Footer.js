import React from "react";


import "./Footer.css";


const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="footer_list">
                <ul className="footer_list_one">
                    <li>© Copyright - TastEat | Designed by</li>
                    <li>VictorFlow -</li>
                    <li>Powered by</li>
                    <li>Webflow</li>
                </ul>
                <ul className="footer_list_two">
                    <li>Styleguide</li>
                    <li>Licenses</li>
                    <li>Protected</li>
                    <li>Not Found</li>
                </ul>
            </div>
        </footer>
    )
}



export default Footer;