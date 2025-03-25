import product from "@/type/product";
import ShoppingProductCard from "./ShoppingProductCard";
import { Button } from "./ui/button";
import { SetStateAction } from "react";

type ShoppingListProps = {
    renderShoppingList: boolean;
    shoppingList: product[];
    setRenderShoppingList: React.Dispatch<SetStateAction<boolean>>;
    setShoppingList: React.Dispatch<SetStateAction<product[]>>;
    setProducts: React.Dispatch<SetStateAction<product[]>>;
    products: product[]; 
  };
  
const ShoppingList = ({renderShoppingList, shoppingList, setRenderShoppingList, setShoppingList, setProducts, products} : ShoppingListProps) => {

    const handleFinishSale = () => {

        setRenderShoppingList(false); 
        setProducts(products.filter((p) => 
            !shoppingList.some((prod) => prod.id === p.id)
        ));
        setShoppingList([]); 


    };

    const handleCloseList = () => {

        setRenderShoppingList(!renderShoppingList);

    };

    return (
        <>
            {renderShoppingList ? (
                <div className="h-screen bg-white w-sm absolute right-0 top-0 bottom-0 flex flex-col gap-4 border-2 border-b-gray-300">
                    <div className="flex justify-between">

                        <h2 className="font-semibold text-xl p-6">Seu carrinho de compras</h2>
                        <Button onClick={handleCloseList} className="bg-transparent cursor-pointer text-black text-2xl font-bold self-center hover:bg-transparent hover:text-red-500">X</Button>

                    </div>
                    <div className="overflow-y-auto">
                    {shoppingList.length == 0 
                    ? <p className="text-center">Você ainda não adicionou nada ao carrinho :(</p>
                    : 
                    shoppingList.map((product, index) => (
                        <ShoppingProductCard
                            key={index}
                            product={product}
                            shoppingList={shoppingList}
                            setShoppingList={setShoppingList}
                        />
                    ))}
                    </div>
                    <div className="p-8">
                        {shoppingList.length > 0 ? 
                        <><div className="flex  justify-between mb-3 text-xl">
                            <p>Valor total</p>
                            <p>R$ {shoppingList.reduce((acc, product) => acc + product.cardPrice, 0).toFixed(2)}</p>
                        </div><Button onClick={handleFinishSale} className="bg-[#411DE2] w-full text-xl cursor-pointer hover:bg-[#411DE2]">Encerrar compra</Button></>
                        : null}
                    </div>
                </div>
            ) : null}
        </>
    );

}; 

export default ShoppingList; 