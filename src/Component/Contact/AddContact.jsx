import React,{useState} from 'react'

const AddContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    const createContact = (e) =>{
        e.preventDefault();
        console.log(name, phone, email);
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
