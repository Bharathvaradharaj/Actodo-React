import AddTodo from "./AddTodoform"
import Todolist from "./Todolist"
import { useState } from "react"

const TodoCon = () => {

    const [Todaylist, setTodaylist] = useState([{ id: 1, activity: "Go to from walk" }, { id: 2, activity: "Go to school" }, { id: 3, activity: "Return to Home" }])

    return (
        <div className="flex gap-5 my-14 flex-wrap"  >
          <AddTodo Todaylist={Todaylist} setTodaylist={setTodaylist}></AddTodo>

            <Todolist Todaylist={Todaylist} setTodaylist={setTodaylist}></Todolist>


        </div>
    )
}

export default TodoCon