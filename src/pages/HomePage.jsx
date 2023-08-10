import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";

const HomePage = () => {
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchBrand, setSearchBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearchBrand = (e) => {
    const brand = e.target.value.toLowerCase();
    setSearchBrand(brand);
    filterProducts(brand, minPrice, maxPrice);
  };

  const handleMinPriceChange = (e) => {
    const price = parseFloat(e.target.value);
    setMinPrice(price);
    filterProducts(searchBrand, price, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const price = parseFloat(e.target.value);
    setMaxPrice(price);
    filterProducts(searchBrand, minPrice, price);
  };

  const filterProducts = (brand, minPrice, maxPrice) => {
    const filtered = products.filter((prod) => {
      const brandMatch = prod.brand.toLowerCase().includes(brand);
      const priceMatch =
        (isNaN(minPrice) || prod.price >= minPrice) &&
        (isNaN(maxPrice) || prod.price <= maxPrice);
      return brandMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search by brand..."
            value={searchBrand}
            onChange={handleSearchBrand}
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <div>
        {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map((prod) => (
       <CardProduct key={prod.id} product={prod} />
        ))
        ) : (
        <p>No products found.</p>
         )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
