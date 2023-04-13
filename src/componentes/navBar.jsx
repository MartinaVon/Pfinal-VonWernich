import { CartWidget } from "./cartWidget"

export const NavBar = ()=>{

    return (
        <nav className="app-navBar">
            <div className="logo-container">
                
            </div>
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    )
      
}
