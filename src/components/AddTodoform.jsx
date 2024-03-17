import { useState } from "react"

const AddTodo = (props) => {
    var Todaylist = props.Todaylist
    var setTodaylist = props.setTodaylist

    const [evalue, setevalue] = useState("")

    function enteredvalue(event) {

        setevalue(event.target.value)
    }

    function addbtn() {
        setTodaylist([...Todaylist, { id: Todaylist.length + 1, activity: evalue }])
        setevalue('')

    }

    return (
        <>
            <div className=" flex flex-col gap-5">

                <h1 className="font-medium text-2xl">Manage Activities</h1>
                <div>
                    <input className="border  border-black  bg-transparent p-1" placeholder="Next Activiy?" type="text" onChange={enteredvalue} value={evalue}></input>
                    <button className="bg-black text-white border border-black p-1" onClick={addbtn}>Add</button>
                </div>

            </div>
        </>
    )
}
export default AddTodo