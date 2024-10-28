import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const NavBar = () => {
const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" },
      ];
      

    return (
        <nav className="text-black bg-yellow-200 p-6 ">
                <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <MdClose></MdClose> : <RiMenu2Fill></RiMenu2Fill>
                    }
                </div>
            <div>
                <ul className={`md:flex gap-10 duration-1000 absolute md:static ${open ? 'top-16' : '-top-60'} bg-yellow-200 px-6`}>
                    {
                        routes.map(route => <Link key={route.id} route = {route}></Link>)
                    }
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;