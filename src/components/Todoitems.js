const Todoitems = (props) => {

    const Todaylist = props.Todaylist
    const setTodaylist = props.setTodaylist

    function deletebtn(removedid) {

        var temparr = Todaylist.filter(function (items) {
            if (items.id == removedid) {

                return false
            }
            else {
                return true
            }

        })
        setTodaylist(temparr)

    }



    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.activity}</p>
            <button className="text-red-600" onClick={() => deletebtn(props.id)}> Delete</button>
        </div>
    )
}
export default Todoitems