import { FaShoppingCart } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

type headerProps = {

    setRenderShoppingList: (value: boolean) => void; 
    renderShoppingList: boolean; 

};

const Header = ({renderShoppingList, setRenderShoppingList} : headerProps) => {

    const handleClick = () => {

        setRenderShoppingList(!renderShoppingList); 

    };

    return (
        <header className="flex justify-between w-full pr-6 py-8 font-bold">
            <h1 className="text-3xl">
                <span className="text-[#411DE2]">V(</span>Tech<span className="text-[#411DE2]">)</span>
            </h1>

            <div className="flex gap-10">
                <nav>
                    <ul className="flex gap text-3xl gap-10">
                        <li>
                            <a 
                                href="#home" 
                                className="hover:text-blue-500 hover:underline transition duration-300"
                            >
                                home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#store" 
                                className="hover:text-blue-500 hover:underline transition duration-300"
                            >
                                store
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className="hover:text-blue-500 hover:underline transition duration-300"
                            >
                                about
                            </a>
                        </li>
                    </ul>
                </nav>
                <FaShoppingCart className="text-4xl cursor-pointer" onClick={handleClick}/>
                <CiLight className="text-4xl cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;