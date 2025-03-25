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
      productImage: ps5Image,
      productName: "PlayStation 5",
      productDescription: "O console definitivo da Sony: experimente carregamentos ultrarrápidos com SSD NVMe, gráficos 4K HDR com ray tracing e feedback tátil imersivo no revolucionário controle DualSense. Inclui leitor de Blu-ray Ultra HD e compatibilidade com todos os jogos PS4.",
      cardPrice: "R$ 4.499,90"
    },
    {
      productImage: xboxImage,
      productName: "Xbox Series X",
      productDescription: "O mais potente console da Microsoft: desempenho em 12 TFLOPS, resolução verdadeira em 4K a 60 FPS (com suporte a 120 FPS), Quick Resume para múltiplos jogos e acesso ao Xbox Game Pass. Arquitetura Zen 2 e RDNA 2 para performance de última geração.",
      cardPrice: "R$ 4.299,90"
    },
    {
      productImage: switchImage,
      productName: "Nintendo Switch OLED",
      productDescription: "Versatilidade reinventada: tela OLED vibrante de 7'', modo portátil, dock para TV e controles Joy-Con removíveis. Biblioteca exclusiva com Mario, Zelda e Pokémon. Bateria com até 9 horas de autonomia e 64GB de armazenamento interno.",
      cardPrice: "R$ 2.799,90"
    },
    {
      productImage: eldenRingImage,
      productName: "Elden Ring - Edição Premium",
      productDescription: "Obra-prima da FromSoftware: mundo aberto vasto e interconectado, combate estratégico com classes variadas, história rica escrita por George R.R. Martin. Inclui conteúdo digital exclusivo: artebook, OST e mapa físico do Lands Between.",
      cardPrice: "R$ 299,90"
    },
    {
      productImage: fifaImage,
      productName: "EA Sports FC 24",
      productDescription: "A evolução do futebol virtual: tecnologia HyperMotion2, inteligência artificial avançada, mais de 19.000 jogadores licenciados e 700 times. Modos Career, Volta e Ultimate Team com cross-play entre plataformas.",
      cardPrice: "R$ 349,90"
    },
    {
      productImage: dualsenseImage,
      productName: "Controle DualSense Edge",
      productDescription: "Controle premium para PS5: gatilhos adaptáveis com ajuste de curso, alavancas traseiras programáveis, módulos de sticks substituíveis, bateria de longa duração e feedback háptico de precisão. Case de carregamento e cabos incluídos.",
      cardPrice: "R$ 499,90"
    },
    {
      productImage: steamDeckImage,
      productName: "Steam Deck 512GB",
      productDescription: "PC gaming portátil: tela touch 7'' 1280x800px 60Hz, armazenamento NVMe de 512GB, controles integrados com trackpads, sistema SteamOS 3.0. Compatível com toda sua biblioteca Steam e emuladores. Performance equivalente a um Ryzen 5 3600 + RX 570.",
      cardPrice: "R$ 3.999,90"
    },
    {
      productImage: godOfWarImage,
      productName: "God of War Ragnarök - Edição de Colecionador",
      productDescription: "A épica conclusão da saga nórdica: gráficos em 4K/60FPS, combate visceral com machado e espadas, exploração dos Nove Reinos com Kratos e Atreus. Edição inclui estátua de 16cm, pingente de Mjölnir, Steelbook e DLCs exclusivos.",
      cardPrice: "R$ 349,90"
    }
  ]);

  const [shoppingList, setShoppingList] = useState<product[]>([
    {
      productImage: ps5Image,
      productName: "PlayStation 5",
      productDescription: "O console definitivo da Sony: experimente carregamentos ultrarrápidos com SSD NVMe, gráficos 4K HDR com ray tracing e feedback tátil imersivo no revolucionário controle DualSense. Inclui leitor de Blu-ray Ultra HD e compatibilidade com todos os jogos PS4.",
      cardPrice: "R$ 4.499,90"
    },
    {
      productImage: xboxImage,
      productName: "Xbox Series X",
      productDescription: "O mais potente console da Microsoft: desempenho em 12 TFLOPS, resolução verdadeira em 4K a 60 FPS (com suporte a 120 FPS), Quick Resume para múltiplos jogos e acesso ao Xbox Game Pass. Arquitetura Zen 2 e RDNA 2 para performance de última geração.",
      cardPrice: "R$ 4.299,90"
    },
    {
      productImage: switchImage,
      productName: "Nintendo Switch OLED",
      productDescription: "Versatilidade reinventada: tela OLED vibrante de 7'', modo portátil, dock para TV e controles Joy-Con removíveis. Biblioteca exclusiva com Mario, Zelda e Pokémon. Bateria com até 9 horas de autonomia e 64GB de armazenamento interno.",
      cardPrice: "R$ 2.799,90"
    }
  ]);
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
          />
        ))}
      </div>
    </div>
  );
}

export default App;