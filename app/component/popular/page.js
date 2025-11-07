"use client"
import { useEffect, useState } from "react"
import "../popular/popular.css"
 import ProductDetails from "../productDetails/page"

export default function Popular() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null); // selected product
    const productsPerPage = 6;

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        };
        getData();
    }, []);

    // Pagination
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="shop-page">
            <div className="shop-container">
                {!selectedProduct ? (
                    <>
                        <h2 className="shop-title">Our Best Products</h2>
                        <div className="product-grid">
                            {currentProducts.map((item) => (
                                <div
                                    className="product-card"
                                    key={item.id}
                                    onClick={() => setSelectedProduct(item)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="product-image"
                                    />
                                    <h4 className="product-name">{item.name}</h4>
                                    <p className="product-price">${item.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="pagination">
                            <button onClick={handlePrev} disabled={currentPage === 1}>
                                ◀ Previous
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button onClick={handleNext} disabled={currentPage === totalPages}>
                                Next ▶
                            </button>
                        </div>
                    </>
                ) : (
                    <ProductDetails
                        product={selectedProduct}
                        onBack={() => setSelectedProduct(null)}
                        
                    />
                )}
            </div>
        </div>
    );
}
