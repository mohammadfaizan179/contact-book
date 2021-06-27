import React from 'react'
import Avatar from "react-avatar";

const Contact = ({contact}) => {
    const {name, phone, email} = contact;
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
                <span><i class="fas fa-pencil-alt text-primary" style={{marginRight: "16px"}}></i></span>
                <span><i class="fas fa-trash text-danger"></i></span>
            </td>
        </tr>
    )
}

export default Contact
