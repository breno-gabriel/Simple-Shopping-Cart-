import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import product from "./type/product";

// Importações das imagens
import ps5Image from "./assets/productsImage/playstation5.jpeg";
import xboxImage from "./assets/productsImage/xbox_one.jpeg";
import switchImage from "./assets/productsImage/nintendo-switch.jpeg";
import eldenRingImage from "./assets/productsImage/elden-ring-ps4.jpeg";
import fifaImage from "./assets/productsImage/fifa-23-xbox-one.jpeg";
import dualsenseImage from "./assets/productsImage/dualsense.jpeg";
import steamDeckImage from "./assets/productsImage/steam-deck.jpeg";
import godOfWarImage from "./assets/productsImage/god-of-war-ragnarok.jpeg";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [products, setProducts] = useState<product[]>([
    {
      id: 1, 
      productImage: ps5Image,
      productName: "PlayStation 5",
      productDescription: "O console definitivo da Sony...",
      cardPrice: 4499.90
    },
    {
      id: 2, 
      productImage: xboxImage,
      productName: "Xbox Series X",
      productDescription: "O mais potente console da Microsoft...",
      cardPrice: 4299.90
    },
    {
      id: 3,
      productImage: switchImage,
      productName: "Nintendo Switch OLED",
      productDescription: "Versatilidade reinventada...",
      cardPrice: 2799.90
    },
    {
      id: 4,
      productImage: eldenRingImage,
      productName: "Elden Ring - Edição Premium",
      productDescription: "Obra-prima da FromSoftware...",
      cardPrice: 299.90
    },
    {
      id: 5, 
      productImage: fifaImage,
      productName: "EA Sports FC 24",
      productDescription: "A evolução do futebol virtual...",
      cardPrice: 349.90
    },
    {
      id: 6,
      productImage: dualsenseImage,
      productName: "Controle DualSense Edge",
      productDescription: "Controle premium para PS5...",
      cardPrice: 499.90
    },
    {
      id: 7, 
      productImage: steamDeckImage,
      productName: "Steam Deck 512GB",
      productDescription: "PC gaming portátil...",
      cardPrice: 3999.90
    },
    {
      id: 8, 
      productImage: godOfWarImage,
      productName: "God of War Ragnarök - Edição de Colecionador",
      productDescription: "A épica conclusão da saga nórdica...",
      cardPrice: 349.90
    }
  ]);

  const [shoppingList, setShoppingList] = useState<product[]>([]);
  const [renderShoppingList, setRenderShoppingList] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen px-20">
      <Header setRenderShoppingList={setRenderShoppingList} renderShoppingList = {renderShoppingList}/>
      <ShoppingList renderShoppingList = {renderShoppingList} shoppingList={shoppingList} setRenderShoppingList={setRenderShoppingList}></ShoppingList>
      <div className="flex flex-wrap gap-5 mb-40">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            setShoppingList = {setShoppingList}
            shoppingList = {shoppingList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;