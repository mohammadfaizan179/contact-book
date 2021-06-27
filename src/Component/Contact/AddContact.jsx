import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addContact} from "../../Actions/contactActions";
import {useHistory} from "react-router-dom";
import shortid from "shortid";

const AddContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const createContact = (e) =>{
        e.preventDefault();
        const newContact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        dispatch(addContact(newContact));
        history.push("/");
    }
    return (
        <div className="card border-0 shadow"> 
            <div className="card-header">Add to Contact</div>
            <div className="card-body">
                <form onSubmit={(e)=> createContact(e)}>
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
                    <button className="btn btn-primary" style={{marginLeft:"16px"}} type="submit">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
