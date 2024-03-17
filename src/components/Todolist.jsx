import { useState } from "react"
import Todoitems from "./Todoitems"

const Todolist = (props) => {

    var Todaylist = props.Todaylist
    var setTodaylist = props.setTodaylist


    return (
        <>

            <div className="bg-[#9990BD] p-3 flex-grow border rounded-md" >
                <h1 className="font-medium text-2xl"> Today's Activity</h1>


                {Todaylist.length===0?<p>you haven't added any activity yet</p> :""}
                {/* <p>you haven't added any activity yet</p> */}
                {

                    Todaylist.map(function (items , index) {

                        return (
                           <Todoitems  id={items.id} activity={items.activity} index={index} Todaylist={Todaylist} setTodaylist={setTodaylist}></Todoitems>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todolist