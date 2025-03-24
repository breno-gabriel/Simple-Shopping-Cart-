import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-20 justify-center min-h-screen px-20">
      <Header></Header>
      <div className="flex flex-wrap gap-5">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  )
}

export default App