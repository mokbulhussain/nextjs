import React, {Component} from 'react';
import NavMenu from "../components/NavMenu";
import UserList from "../components/UserList";


export async function getStaticProps() {
    const data = [
        {
            id: 1,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 2,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 3,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },
        {
            id: 4,
            fullname: 'Rabbil Hasan',
            username: 'Rabbil',
            roll: 'admin',
            lastactivity: '12/12/2021',
        },

    ]

    return {
        props:{
            dataTable:data,
        }
    }


}


class Users extends Component {
    render() {
        return (
            <div>
                <NavMenu/>
                <UserList
                    dataTable={this.props.dataTable}
                />
            </div>
        );
    }
}

export default Users;