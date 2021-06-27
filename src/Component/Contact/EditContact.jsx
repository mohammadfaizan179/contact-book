import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getContact, updateContact} from "../../Actions/contactActions";
import {useHistory} from "react-router-dom";
import shortid from "shortid";
import {useParams} from "react-router-dom";

const EditContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const contact = useSelector(state => state.contacts.contact);

    let history = useHistory();
    let {id} = useParams();

    
    useEffect(() => {
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id))
    }, [contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();
        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email,
        });
        dispatch(updateContact(update_contact));
        history.push("/")
    };
    return (
        <div className="card border-0 shadow"> 
            <div className="card-header">Edit the Contact</div>
            <div className="card-body">
                <form onSubmit={(e)=> onUpdateContact(e)}>
                    <div className="form-group m-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e)=> setName(e.target.value)}                        
                        />
                    </div>
                    <div className="form-group m-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter your Phone"
                            value={phone}
                            onChange={(e)=> setPhone(e.target.value)}                        
                        />
                    </div>
                    <div className="form-group m-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                                                    
                        />
                    </div>
                    <button className="btn btn-warning" style={{marginLeft:"16px"}} type="submit">Edit Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
