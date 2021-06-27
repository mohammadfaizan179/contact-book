import React from 'react'
import Avatar from "react-avatar";
import {Link} from "react-router-dom";
import {deleteContact} from "../../Actions/contactActions";
import { useSelector, useDispatch } from 'react-redux';

const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const {name, phone, email, id} = contact;

    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"/>
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar style={{marginRight: "16px"}} name={name} size={40}  round={true} />{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span><i className="fas fa-pencil-alt text-primary" style={{marginRight: "16px"}}></i></span>
                </Link>
                <span onClick={()=> dispatch(deleteContact(id))}><i className="fas fa-trash text-danger"></i></span>
            </td>
        </tr>
    )
}

export default Contact
