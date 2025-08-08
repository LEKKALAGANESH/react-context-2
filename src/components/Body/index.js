// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
    <ConfigurationContext.Consumer>
        {value => {
            const { showContent, showLeftNavbar, showRightNavbar } = value

            return (
                <div className="body-container">
                    {showLeftNavbar && (
                        <div className="body-card left-navbar">
                            <h1 className="heading">Left Navbar Menu</h1>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                                <li>Item 4</li>
                            </ul>
                        </div>
                    )}

                    {showContent && (
                        <div className="body-card content-card">
                            <h1 className="heading">Content</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam.
                            </p>
                        </div>
                    )}

                    {showRightNavbar && (
                        <div className="body-card right-navbar">
                            <h1 className="heading">Right Navbar</h1>
                            <p className="right-navbar-description">Ad 1</p>
                            <p className="right-navbar-description">Ad 2</p>
                        </div>
                    )}
                </div>
            )
        }}
    </ConfigurationContext.Consumer>
)

export default Body
