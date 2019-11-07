import React, {Component} from 'react';
import Navbar from '../../components/navigation/Navbar/Navbar';
import './Layout.module.css';
class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div>Main Content</div>
            </React.Fragment>
        )
    }
}
export default Layout;