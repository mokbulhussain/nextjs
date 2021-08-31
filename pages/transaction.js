import React, {Component} from 'react';
import ListTransaction from "../components/listTransaction";
import NavMenu from "../components/NavMenu";


class Transaction extends Component {
    render() {
        return (
            <div>
                <NavMenu/>
                <ListTransaction/>

            </div>
        );
    }
}

export default Transaction;