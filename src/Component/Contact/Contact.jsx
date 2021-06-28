import React from 'react'
import Avatar from "react-avatar";
import {Link} from "react-router-dom";
import {deleteContact} from "../../Actions/contactActions";
import { useSelector, useDispatch } from 'react-redux';
import {motion} from "framer-motion";

const Contact = ({contact, selectAll}) => {
    const dispatch = useDispatch();
    const {name, phone, email, id} = contact;

    return (
        <motion.tr
            initial={{x: "100vw", transition: {type:"spring", duration:2}}}
            animate={{x: 0, transition: {type:"spring", duration:2}}}
            transition={{type:"spring", duration:0.1}}

            whileHover={{
                scale: 1.009,
                transition: {type: "spring", duration: 0.8},
            }}
        >
            <td>
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input"/>
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
        </motion.tr>
    )
}

export default Contact
