import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import product from "@/type/product";

type productCardProps = {
    product: product;
    setShoppingList: React.Dispatch<React.SetStateAction<product[]>>;
    shoppingList: product[];
  };

const ProductCard = ({ product, setShoppingList, shoppingList }: productCardProps) => {

    const handleAddProduct = () => {

        setShoppingList([product, ...shoppingList]);
        console.log(shoppingList[0].cardPrice)

    };

    return (
        <Card className="w-80 min-w-80 min-h-[500px] flex flex-col justify-between shadow-md">
            {/* Cabeçalho do Card */}
            <CardHeader>
                <CardTitle>
                    <img
                        className="w-2/3 h-40 object-contain mx-auto"
                        src={product.productImage}
                        alt={product.productName}
                    />
                </CardTitle>

                <CardDescription>
                    <h2 className="text-center font-bold text-2xl line-clamp-2">
                        {product.productName}
                    </h2>
                </CardDescription>
            </CardHeader>

            {/* Conteúdo do Card */}
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-light text-gray-400 cursor-pointer">
                            Descrição do produto
                        </AccordionTrigger>
                        <AccordionContent>{product.productDescription}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>

            {/* Rodapé do Card */}
            <CardFooter>
                <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-xl">{product.cardPrice}</p>
                    <Button onClick={handleAddProduct} className="bg-[#411DE2] text-white cursor-pointer">+</Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
