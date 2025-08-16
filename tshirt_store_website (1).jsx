import { useState } from "react";
import { motion } from "framer-motion";

// Basit Card ve Button bileşenleri
function Card({ children, className }) {
  return <div className={`bg-white rounded-2xl shadow-md ${className}`}>{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function Button({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={`bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition ${className}`}>
      {children}
    </button>
  );
}

function ShoppingCartIcon() {
  return <span className="material-icons">shopping_cart</span>;
}

function SearchIcon() {
  return <span className="material-icons">search</span>;
}

export default function TshirtStore() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Retro Gevreze Tee", price: 399, image: "/tshirt1.png" },
    { id: 2, name: "Pastel Waves Tee", price: 349, image: "/tshirt2.png" },
    { id: 3, name: "Minimal Line Tee", price: 299, image: "/tshirt3.png" },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Üstte kayan sabit şerit */}
      <div className="fixed top-0 left-0 w-full bg-yellow-300 text-yellow-900 font-medium py-2 shadow z-50 overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="whitespace-nowrap"
        >
          🚧 Sitemiz geliştirme aşamasındadır. Yakında sizlerleyiz! 🚀
        </motion.div>
      </div>

      <div className="p-6 pt-20">
        {/* Modern ve sade site ismi */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl font-semibold tracking-tight text-center mb-10 text-gray-900"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Gevreze
        </motion.h1>

        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Tişört Koleksiyonu</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <SearchIcon className="absolute left-2 top-2.5 text-gray-400" />
              <input
                type="text"
                placeholder="Ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-3 py-2 border rounded-xl text-sm focus:outline-none"
              />
            </div>
            <Button className="rounded-full px-4 py-2 flex items-center gap-2">
              <ShoppingCartIcon /> Sepetim
            </Button>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition">
              <CardContent className="flex flex-col items-center text-center">
                <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded-xl" />
                <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
                <p className="text-gray-500 mb-3">₺{product.price}</p>
                <Button className="w-full">Sepete Ekle</Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
