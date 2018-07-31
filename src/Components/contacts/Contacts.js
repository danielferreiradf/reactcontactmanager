import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {


    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <Fragment>
                            <h2 className="py-4">
                                <span className="text-secondary">Contact List</span>
                            </h2>
                            {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
                        </Fragment>
                    )
                }}
            </Consumer>
        )

    }
}

export default Contacts;