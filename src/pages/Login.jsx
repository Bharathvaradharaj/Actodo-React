import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {

    const navigate = useNavigate()
    const user = props.user
    const setuser = props.setuser

    const [eusername, seteusername] = useState('')
    const [epassowrd, setepassword] = useState('')
    const [euser, seteuser] = useState(true)


    function handleuser(event) {
        seteusername(event.target.value)

    }

    function handlepassword(event) {
        setepassword(event.target.value)

    }

    function loginbtn() {
        var userfound = false
        user.forEach(function (items) {

            // console.log(user)
            if (items.username === eusername && items.password === epassowrd) {
                console.log('Success')
                userfound = true
                seteuser(true)
                navigate("/landing" ,{state:{user:eusername}})
            }
        })

        if (userfound === false) {

            console.log("Failed")
            seteuser(false)
        }

    }


    return (
        <div className="bg-black p-10">
            <div className="bg-white p-12 border rounded">
                <h1 className="font-medium text-2xl">Hey Hello!</h1>

                {euser ? <p> I help you manage your activities after you login:)</p> : <p className="text-red-700">"Please Signup before you login"</p>}


                <div className="flex flex-col gap-4 my-3">
                    <input type="text" placeholder="Username" className="bg-transparent border rounded border-black w-52" onChange={handleuser}></input>
                    <input type="text" placeholder="Password" className="bg-transparent border rounded border-black w-52" onChange={handlepassword}></input>

                    <button className="bg-[#8272DA] w-24  rounded-md p-1" onClick={loginbtn}> Login</button>

                    <p>Don't have an account? <Link to={'/signup'} className="underline"> Sign Up</Link> </p>
                </div>


            </div>

        </div>
    )
}
export default Login