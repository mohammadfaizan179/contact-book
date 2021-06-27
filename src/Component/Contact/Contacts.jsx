import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    return (
        <>
            <table class="table shadow">
                <thead>
                    <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input"/>
                            <label className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map( contact => (
                            <Contact contact={contact} />
                        ))
                    }

                </tbody>
                </table>
        </>
    )
}

export default Contacts
