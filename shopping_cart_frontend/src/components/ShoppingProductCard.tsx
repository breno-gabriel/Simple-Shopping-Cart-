import product from "@/type/product";
import { FaTrashCan } from "react-icons/fa6";
import { Button } from "./ui/button";

const ShoppingProductCard = (product: product) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-white w-full max-w-md">
            <img 
                src={product.productImage} 
                alt={product.productName} 
                className="w-32 h-32 object-contain"
            />
            <div className="flex flex-col justify-center">
                <h3 className="text-lg font-bold">{product.productName}</h3>
                <p className="text-gray-700">{product.cardPrice}</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-600 cursor-pointer"><FaTrashCan /></Button>
        </div>
    );
}; 

export default ShoppingProductCard;
