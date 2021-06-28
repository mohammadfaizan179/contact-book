import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {selectAllContact,clearAllContact, deleteAllContact} from "../../Actions/contactActions";
import Contact from "./Contact";
import {motion} from "framer-motion";

const Contacts = () => {
    const [selectAll, setSelectAll] = useState(false);
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const selectedContacts = useSelector(state => state.contacts.selectedContacts);
                                                            
    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)))  
        }else{
            dispatch(clearAllContact());
        }
    }, [selectAll])

    return (
        <>
            {
                // selectedContacts.length > 0 ? (
                    selectAll 
                    ? <button className="btn btn-danger mb-3" onClick={()=> dispatch(deleteAllContact())}>Delete All</button>
                    : null
            }
            <table className="table shadow">
                <motion.thead
                    // initial={{y:"100vh"}}
                    // animate={{y:0}}
                >
                    <tr className="bg-warning">
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input 
                                id="selectAll" 
                                type="checkbox" 
                                value={selectAll}
                                onClick={()=> setSelectAll(!selectAll)}
                                className="custom-control-input" 
                            />
                            <label htmlFor="selectAll" className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Actions</th>
                    </tr>
                </motion.thead>
                <tbody>
                    {
                        contacts.map( contact => (
                            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
                        ))
                    }

                </tbody>
                </table>
        </>
    )
}

export default Contacts
