import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function Register() {

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");

    const history = useHistory();

    const submitHandle = ()=>{

    }

    return (
    <div className="container">
        <h1>Register</h1>
        <form className="add-form">
            <div className="form-control">
                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Enter Your Full name"
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <input type="submit" value="Sign Up" className="btn btn-block" onClick={submitHandle}/>
            <h3>Already have a account. <button onClick={()=>{history.goBack()}}>Sign In</button></h3>
        </form>
    </div>
    )
}
