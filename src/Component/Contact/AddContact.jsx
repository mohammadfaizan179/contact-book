import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addContact} from "../../Actions/contactActions";
import {useHistory} from "react-router-dom";
import shortid from "shortid";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.number().required().positive().integer().typeError("Not a valid phone number"),
    email: yup.string().email().required(),
});

const AddContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (e) =>{
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
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* onSubmit={(e)=> createContact(e)}> */}
                    <div className="form-group m-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter your Name"
                            value={name}
                            {...register("name", {
                                required: "Required",
                            })}
                            onChange={(e)=> setName(e.target.value)}                        
                        />
                        <span style={{color:"red"}}>{errors.name?.message}</span>
                    </div>
                    <div className="form-group m-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter your Phone"
                            value={phone}
                            {...register("phone", {
                                required: "Required",
                            })}
                            onChange={(e)=> setPhone(e.target.value)}                        
                        />
                        <span style={{color:"red"}}>{errors.phone?.message}</span>
                    </div>
                    <div className="form-group m-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter your Email"
                            value={email}
                            {...register("email", {
                                required: "Required",
                            })}
                            onChange={(e)=> setEmail(e.target.value)}                           
                        />
                       <span style={{color:"red"}}>{errors.email?.message}</span>
                    </div>
                    <button className="btn btn-primary" style={{marginLeft:"16px"}} type="submit">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
