import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import NightSvg from "./svg/night"
import LightSvg from "./svg/light"
import { ThemeContext } from "../context/themeContext"
import { AuthContext } from "../context/authContext"

function NavBar() {
    // useState is a hook that allows you to hold state in a functional component
    // useState returns an array with two elements:
    // 1. The current state value
    // 2. A function that lets you update the state
    // when you call the function, the component will re-render with the new state value
    const [currentPage, setCurrentPage] = useState("Home")
    const {theme, toggleTheme} = useContext(ThemeContext)
    const {logout} = useContext(AuthContext)
    

    const pageStyle = "cursor-pointer border-b-4 border-indigo-300"
    const pointer = "cursor-pointer"
  
    const darkTheme = "bg-gray-800 text-white flex gap-2 p-2"
    const lightTheme = "bg-white text-black flex gap-2 p-2"

    function handleClick(page) {
      setCurrentPage(page)
    }
  
    const homeClick = () => {
      handleClick("Home")
    }
  
    const recipesClick = () => {
      handleClick("Recipes")
    }
  
    const addClick = () => {
      handleClick("Add")
    }
  
    console.log("Rendered NavBar");
    return (
      <>
        <div className="flex justify-between p-4">
  
          <h1>React Recipes</h1>
          <ul className="flex gap-2 items-center">
            <li className={ currentPage === "Home" ? pageStyle : pointer  } onClick={homeClick} >
              <Link to="/home">Home</Link>
            </li>
            <li className={ currentPage === "Recipes" ? pageStyle : pointer  }  onClick={recipesClick} >
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className={ currentPage === "Add" ? pageStyle : pointer  }  onClick={addClick}>
              <Link to="/add">Add Recipes</Link>
            </li>

            {/* toggle button for dark and light */}
            <li className="border rounded-md overflow-hidden">

              <button className={theme === "dark" ? darkTheme : lightTheme} onClick={toggleTheme} >
                {
                  theme === "dark" ? 
                  <NightSvg/>   :
                  <LightSvg/>
                }
                Toggle
                
                </button>
            </li>
            <li>
              <button className="bg-red-500 text-white p-2 rounded-md" onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
  
      </>
    )
  }




  export default NavBar