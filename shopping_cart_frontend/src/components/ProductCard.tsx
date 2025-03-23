import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "./ui/button";
  
  

const ProductCard = () => {

    return (

        <Card className="w-80 min-w-80">

            <CardHeader>

                <CardTitle>
                    <img className="w-2/3 mx-auto" src="src\assets\controle preto ps4.jpeg" alt="" />
                </CardTitle>

                <CardDescription>
                    <h2 className="text-center font-bold text-2xl">Controle sem fio Dualshock 4</h2>
                </CardDescription>

            </CardHeader>   

            <CardContent>
                
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-light text-gray-400 cursor-pointer">Descrição do produto</AccordionTrigger>
                    <AccordionContent>
                    Revolucionário, intuitivo e preciso: o controle sem fio DualShock4 para o sistema PlayStation4 define esta geração de jogos, 
                    combinando recursos revolucionários e conforto com controles precisos e intuitivos.                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            </CardContent> 

            <CardFooter>

                <div className="flex place-content-between w-full">
                    <p className="font-bold text-xl">R$ 294,60</p>
                    <Button className="bg-[#411DE2] text-white cursor-pointer">+</Button>
                </div>

            </CardFooter>
        </Card>

    );

};

export default ProductCard; 