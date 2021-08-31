import React, {Component} from 'react';

import ListReport from "../components/listReport";
import NavMenu from "../components/NavMenu";


class Report extends Component {
    render() {
        return (
            <div>
                <NavMenu/>
                <ListReport/>

            </div>
        );
    }
}

export default Report;