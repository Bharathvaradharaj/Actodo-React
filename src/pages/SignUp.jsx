import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const user = props.user
    const  setuser = props.setuser

    const navigate = useNavigate()
    const [eusername, seteusername] = useState('')
    const [epassowrd, setepassword] = useState('')

    function handleuser(event) {
        seteusername(event.target.value)

    }

    function handlepassword(event) {
        setepassword(event.target.value)

    }

    function signupbtn() {
        setuser([...user, {username:eusername,password:epassowrd}])
        navigate("/")

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-12 border rounded">
                <h1 className="font-medium text-2xl">Hey Hello!</h1>
                <p>SignUp here :)</p>

                <div className="flex flex-col gap-4 my-3">
                    <input type="text" placeholder="Username" className="bg-transparent border rounded border-black w-52" onChange={handleuser}></input>
                    <input type="text" placeholder="Password" className="bg-transparent border rounded border-black w-52" onChange={handlepassword}></input>
                    <input type="text" placeholder="Confirm Password" className="bg-transparent border rounded border-black w-52"></input>

                    <button className="bg-[#FCA201] w-24  rounded-md p-1" onClick={signupbtn}> Signup</button>

                    <p>Already have an account? <Link to={'/'} className="underline"> Login</Link> </p>
                </div>


            </div>

        </div>
    )
}
export default Signup