import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../Images/logo.png";
import {motion} from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav 
            className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary"
            initial={{y:"-100vh"}}
            animate={{y:0}}
            transition={{type:"spring", duration:0.5}}
        >
            <div className="container">
            <motion.a 
                href="https://mohammadfaizan179.github.io/portfolio/" 
                style={{fontSize:"24px", color:"#000"}}
                whileHover={{scale: 1.4}}
                whileTap={{scale: 0.9}}
            >
                <i class="fas fa-arrow-left"></i>
            </motion.a>
                <Link to="/" className="navbar-brand">
                    <motion.img  whileHover={{scale: 1.3}} whileTap={{scale: 0.9}}src={logo} alt="logo" height={40}/>
                </Link>
                <div>
                    <Link to="/contacts/add" className="btn btn-light ml-auto" style={{backgroundColor:"#fff"}}>Create Contact</Link>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
