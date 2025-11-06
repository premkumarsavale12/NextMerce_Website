"use client"
import { useEffect, useState } from "react"

import "../popular/popular.css"

export default function Popular() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
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


    const handleFilterChange = (type, value) => {
        setFilters((prev) => {
            const isChecked = prev[type].includes(value);
            const updated = isChecked
                ? prev[type].filter((item) => item !== value)
                : [...prev[type], value];
            return { ...prev, [type]: updated };
        });
    };


    const handlePriceChange = (e) => {
        const value = Number(e.target.value);
        setFilters((prev) => ({ ...prev, price: [0, value] }));
    };



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

    const handleClearAll = () => {
        setFilters({ category: [], size: [], color: [], price: [0, 10000] });
    };

    return (
        <div className="shop-page">
            {/* Sidebar */}

            {/* Product Grid */}
            <div className="shop-container">
                <h2 className="shop-title">Our Best Products</h2>
                <div className="product-grid">
                    {currentProducts.map((item) => (
                        <div className="product-card" key={item.id}>
                            <img src={item.image} alt={item.name} className="product-image" />
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
            </div>
        </div>
    );
}
