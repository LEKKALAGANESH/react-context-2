// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
    <ConfigurationContext.Consumer>
        {value => {
            const {
                showContent,
                showLeftNavbar,
                showRightNavbar,
                onToggleShowContent,
                onToggleShowLeftNavbar,
                onToggleShowRightNavbar,
            } = value

            const onChangeShowContent = event => {
                onToggleShowContent(event.target.checked)
            }
            const onChangeShowLeftNavbat = event => {
                onToggleShowLeftNavbar(event.target.checked)
            }

            const onChangeShowRightNavbar = event => {
                onToggleShowRightNavbar(event.target.checked)
            }

            return (
                <div className="configuration-containter">
                    <h1>Layout</h1>
                    <label onChange={onChangeShowContent}>
                        <input type="checkbox" checked={showContent} /> Content
                    </label>
                    <label onChange={onChangeShowLeftNavbat}>
                        <input type="checkbox" checked={showLeftNavbar} /> Left Navbar
                    </label>
                    <label onChange={onChangeShowRightNavbar}>
                        <input type="checkbox" checked={showRightNavbar} /> Right Navbar
                    </label>
                </div>
            )
        }}
    </ConfigurationContext.Consumer>
)

export default ConfigurationController
