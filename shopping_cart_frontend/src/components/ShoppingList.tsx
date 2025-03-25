import product from "@/type/product";
import ShoppingProductCard from "./ShoppingProductCard";
import { Button } from "./ui/button";

type ShoppingListProps = {
    renderShoppingList: boolean;
    shoppingList: product[];
    setRenderShoppingList: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
const ShoppingList = ({renderShoppingList, shoppingList, setRenderShoppingList} : ShoppingListProps) => {

    const handleCloseList = () => {

        setRenderShoppingList(!renderShoppingList);

    };

    return (
        <>
            {renderShoppingList ? (
                <div className="h-screen bg-white w-sm absolute right-0 top-0 bottom-0 flex flex-col gap-4 border-2 border-b-gray-300 ">
                    <div className="flex justify-between">

                        <h2 className="font-semibold text-xl p-6">Seu carrinho de compras</h2>
                        <Button onClick={handleCloseList} className="bg-transparent cursor-pointer text-black text-2xl font-light self-center hover:bg-transparent hover:text-red-500">X</Button>

                    </div>
                    <div className="">
                        {shoppingList.map((product, index) => (
                            <ShoppingProductCard key={index} {...product} />
                        ))}
                    </div>
                    <div className="p-8">
                        <div className="flex  justify-between mb-3 text-xl">
                            <p>Valor total</p>
                            <p>R$ 200.00</p>
                        </div>
                        <Button className="bg-[#411DE2] w-full text-xl cursor-pointer hover:bg-[#411DE2]">Encerrar compra</Button>
                    </div>
                </div>
            ) : null}
        </>
    );

}; 

export default ShoppingList; 