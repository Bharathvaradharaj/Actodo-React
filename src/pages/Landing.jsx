import Header from "../components/Header";
import Cards from "../components/Cards";
import TodoCon from "../components/TodoContainer";
import { useLocation } from "react-router-dom"


function Landing() {
    const data = useLocation()
    return (
        <div className="bg-black p-16">
            <div className="bg-white p-8 border rounded-md">

                <Header name={data.state.user}></Header>
                <div className="flex justify-between  gap-7 my-5 flex-wrap">
                    <Cards bgcolor={"#695AAF"} title={"23"} subtitle={"Chennai"}></Cards>
                    <Cards bgcolor={"#CA524F"} title={"20 December"} subtitle={"12:00:33"}></Cards>
                    <Cards bgcolor={"#CA8202"} title={"Built Using"} subtitle={"React"}  ></Cards>
                </div>
                <TodoCon></TodoCon>


            </div>
        </div>
    )
}
export default Landing