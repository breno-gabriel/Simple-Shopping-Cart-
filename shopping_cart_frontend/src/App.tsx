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
      productDescription: "O PlayStation 5 redefine o conceito de gaming com seu SSD ultrarrápido que elimina tempos de carregamento, gráficos em 4K HDR com ray tracing para iluminação realista, e o inovador controle DualSense com feedback háptico que transmite a sensação de cada movimento. Experimente a próxima geração de jogos com 120 FPS, áudio 3D imersivo e compatibilidade retroativa com a vasta biblioteca PS4. Inclui leitor de Blu-ray Ultra HD para colecionadores.",
      cardPrice: 4499.90
    },
    {
      id: 2, 
      productImage: xboxImage,
      productName: "Xbox Series X",
      productDescription: "Com 12 TFLOPS de poder de processamento, o Xbox Series X oferece performance verdadeira em 4K a 60 FPS (com suporte a 120 FPS), Quick Resume para alternar instantaneamente entre vários jogos, e arquitetura Zen 2 + RDNA 2. Inclui 1TB de armazenamento NVMe e acesso ao Xbox Game Pass, o Netflix dos jogos, com mais de 100 títulos premium. O console definitivo para quem valoriza desempenho bruto e valor agregado.",
      cardPrice: 4299.90
    },
    {
      id: 3,
      productImage: switchImage,
      productName: "Nintendo Switch OLED",
      productDescription: "A versão premium do console híbrido da Nintendo apresenta uma deslumbrante tela OLED de 7'' com cores vibrantes, dock com porta LAN integrada, 64GB de armazenamento e audio aprimorado. Perfeito para jogar na TV ou em modo portátil, com os versáteis controles Joy-Con que oferecem experiências multiplayer únicas. Inclui acesso às franquias exclusivas como Mario, Zelda, Pokémon e Animal Crossing - o companheiro ideal para gamers de todas as idades.",
      cardPrice: 2799.90
    },
    {
      id: 4,
      productImage: eldenRingImage,
      productName: "Elden Ring - Edição Premium",
      productDescription: "Aclamado como um dos melhores jogos da década, este RPG de mundo aberto da FromSoftware (criadores de Dark Souls) em colaboração com George R.R. Martin oferece um vasto reino para explorar com combate estratégico, builds personalizáveis e desafios épicos. A Edição Premium inclui: artebook digital de 40 páginas, trilha sonora original, mapa físico do Lands Between e bônus exclusivos de cosméticos - um must-have para fãs de RPGs profundos.",
      cardPrice: 299.90
    },
    {
      id: 5, 
      productImage: fifaImage,
      productName: "EA Sports FC 24",
      productDescription: "A nova era do futebol virtual chega com tecnologia HyperMotion2 que captura movimentos reais de atletas, IA avançada que revoluciona o posicionamento tático, e mais de 19.000 jogadores licenciados. Modo Career com sistemas de desenvolvimento profundos, Volta Football para partidas rápidas e o popular Ultimate Team com cross-play completo. Inclui as principais ligas mundiais e estádios icônicos - a experiência de futebol mais autêntica já criada.",
      cardPrice: 349.90
    },
    {
      id: 6,
      productImage: dualsenseImage,
      productName: "Controle DualSense Edge",
      productDescription: "O controle premium do PS5 eleva a precisão com gatilhos adaptáveis (ajuste de curso e resistência), alavancas traseiras programáveis e módulos de analógicos substituíveis. Design ergonômico com grip antibacteriano, bateria de longa duração e feedback háptico de última geração que traduz texturas e impactos em vibrações realistas. Inclui case de transporte premium, cabos USB-C e acessórios exclusivos - a ferramenta definitiva para jogadores competitivos.",
      cardPrice: 499.90
    },
    {
      id: 7, 
      productImage: steamDeckImage,
      productName: "Steam Deck 512GB",
      productDescription: "Leve sua biblioteca Steam para qualquer lugar com este PC portátil que executa jogos AAA com performance equivalente a um desktop Ryzen 5 + RX 570. Tela touch anti-reflexo de 7'', controles precisos com trackpads HD, armazenamento NVMe de 512GB e sistema SteamOS 3.0 otimizado. Compatível com Windows via dual-boot e emuladores - o dispositivo perfeito para quem quer jogar seus títulos favoritos em qualquer lugar sem comprometer qualidade.",
      cardPrice: 3999.90
    },
    {
      id: 8, 
      productImage: godOfWarImage,
      productName: "God of War Ragnarök - Edição de Colecionador",
      productDescription: "A emocionante conclusão da saga nórdica de Kratos e Atreus apresenta combates viscerais com armas lendárias, exploração dos Nove Reinos em gráficos deslumbrantes 4K/60FPS, e narrativa profunda que redefine o conceito de mitologia. Esta edição premium inclui: estátua de 16cm dos protagonistas, pingente de Mjölnir em metal, Steelbook exclusivo, conjunto de adesivos e DLCs cosméticos - um tesouro para fãs da franquia.",
      cardPrice: 349.90
    }
  ]);

  const [shoppingList, setShoppingList] = useState<product[]>([]);
  const [renderShoppingList, setRenderShoppingList] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen px-20">
      <Header setRenderShoppingList={setRenderShoppingList} renderShoppingList = {renderShoppingList}/>
      <ShoppingList renderShoppingList={renderShoppingList} shoppingList={shoppingList} setRenderShoppingList={setRenderShoppingList} setShoppingList={setShoppingList} setProducts={setProducts} products={products}></ShoppingList>
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