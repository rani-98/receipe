import { useState } from "react"


function NavBar() {

    //

    const [currentPage, setCurrentPage]=useState("Home")
    const pageStyle="cursor-pointer border-b-4 border-indigo-400"
    const pointer="cursor-pointer"

    function handleclick(page) {
        setCurrentPage(page)
    }
    console.log("currentPage:",currentPage)
    

    return(
        <>
            <div className="flex justify-between p-4">
                <h1>react recipes</h1>
    
                <ul className="flex gap-2 p-3">
                    <li className={currentPage === "Home"? pageStyle : pointer} onClick={()=>handleclick("Home")}>
                        home</li>
                    <li className={currentPage === "recipes"? pageStyle : pointer} onClick={()=>handleclick("recipes")}>
                        recipes</li>
                    <li className={currentPage === "add"? pageStyle : pointer} onClick={()=>handleclick("add")}>
                        add items</li>
                </ul>
            </div>
            
        </>
    )

   
}
export default NavBar