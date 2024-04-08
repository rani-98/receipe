import NavBar from "./navbar";

function Header(props) {
    console.log("rendered header");
    const selectedStyle = "bg-black text-white px-4 py-2 border-black rounded-sm"
    const unselectedStyle = "px-4 py-2 border-black rounded-sm cursor-pointer"

    const changeAll = ()=>{
        props.changeRecipe("dinner")
        

    }
    const changestarters = ()=>{
        props.changeRecipe("starters")
    }
    return(
        <>
        <h1 className="text-3xl text-center">Recipes</h1>
        <ul className="border-y-2 py-2 flex gap-3 justify-center">
            <li className={props.type == 'all'? selectedStyle:unselectedStyle} onClick={changeAll}>all items</li>
            <li className={props.type == 'starters'? selectedStyle:unselectedStyle} onClick={changeStarters}>starters</li>
            <li className={props.type == 'breakfast'? selectedStyle:unselectedStyle} onClick={changeBreakfast}>breakfast</li>
            <li className={props.type == 'dinner'? selectedStyle:unselectedStyle} onClick={changeDinner}>dinner</li>
            <li className={props.type == 'lunch'? selectedStyle:unselectedStyle} onClick={changeLunch}>lunch</li>
        </ul>
        </>
    )
}

export default Header