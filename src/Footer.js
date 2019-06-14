import React from 'react';
import './footer.css';


class Footer extends React.Component {
    render() {
        return (
            <div className="logo">
                <hr />
                <footer>
                    <div className="footer">
                        <p className="copyright">Copyright © 2019 <a href="mailto:l.besil@gmail.com">Luis Besil</a> - All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;