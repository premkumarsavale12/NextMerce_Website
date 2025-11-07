"use client";
import { useEffect, useState } from "react";
import "../shop/shop.css";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const [filters, setFilters] = useState({
        Category: [],
        Size: [],
        Color: [],
        Price: [0, 10000],
    });

    // Fetch API Data
    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:3001/products");
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        };
        getData();
    }, []);

    // Handle checkbox filter
    const handleFilterChange = (type, value) => {
        setFilters((prev) => {
            const isChecked = prev[type].includes(value);
            const updated = isChecked
                ? prev[type].filter((item) => item !== value)
                : [...prev[type], value];
            return { ...prev, [type]: updated };
        });
    };

    // Handle price range
    const handlePriceChange = (e) => {
        const value = Number(e.target.value);
        setFilters((prev) => ({ ...prev, Price: [0, value] }));
    };

    // Apply filters
    useEffect(() => {
        let filtered = [...products];

        if (filters.Category.length > 0) {
            filtered = filtered.filter((item) =>
                filters.Category.includes(item.Category)
            );
        }

        if (filters.Size.length > 0) {
            filtered = filtered.filter(
                (item) => item.Size && filters.Size.includes(item.Size)
            );
        }

        if (filters.Color.length > 0) {
            filtered = filtered.filter(
                (item) => item.color && filters.Color.includes(item.color)
            );
        }

        filtered = filtered.filter(
            (item) => item.price >= filters.Price[0] && item.price <= filters.Price[1]
        );

        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [filters, products]);

    // Pagination logic
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
        setFilters({ Category: [], Size: [], Color: [], Price: [0, 10000] });
    };

    return (
        <div className="shop-page">
            {/* Sidebar */}
            <div className="filter-sidebar">
                <div className="filter-header">
                    <h3>Filters</h3>
                    <button onClick={handleClearAll}>Clear All</button>
                </div>

                {/* Category Filter */}
                <div className="filter-section">
                    <h4>Category</h4>
                    {[
                        "Laptop & PC",
                        "Watches",
                        "Mobile & Tablets",
                        "Health & Sports",
                        "Home Appliances",
                        "Games & Videos",
                        "Televisions",
                    ].map((cat) => (
                        <label key={cat}>
                            <input
                                type="checkbox"
                                checked={filters.Category.includes(cat)}
                                onChange={() => handleFilterChange("Category", cat)}
                            />
                            {cat}
                        </label>
                    ))}
                </div>

                {/* Size Filter */}
                <div className="filter-section">
                    <h4>Size</h4>
                    {["XL", "XXL", "SM", "XM"].map((size) => (
                        <label key={size}>
                            <input
                                type="checkbox"
                                checked={filters.Size.includes(size)}
                                onChange={() => handleFilterChange("Size", size)}
                            />
                            {size}
                        </label>
                    ))}
                </div>

                {/* Color Filter */}
                <div className="filter-section">
                    <h4>Color</h4>
                    {["Black", "White", "Red", "Blue"].map((color) => (
                        <label key={color}>
                            <input
                                type="checkbox"
                                checked={filters.Color.includes(color)}
                                onChange={() => handleFilterChange("Color", color)}
                            />
                            {color}
                        </label>
                    ))}
                </div>

                {/* Price Filter */}
                <div className="filter-section">
                    <h4>Price</h4>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={filters.Price[1]}
                        onChange={handlePriceChange}
                    />
                    <p>Up to ${filters.Price[1]}</p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="shop-container">
                <h2 className="shop-title">Explore All Products</h2>

                <div className="product-grid">
                    {currentProducts.length > 0 ? (
                        currentProducts.map((item) => (
                            <div className="product-card" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="product-image"
                                />
                                <h4 className="product-name">{item.name}</h4>
                                <p className="product-price">${item.price}</p>
                            </div>
                        ))
                    ) : (
                        <p className="no-products">No products found.</p>
                    )}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button onClick={handlePrev} disabled={currentPage === 1}>
                        ◀ Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages || 1}
                    </span>
                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                        Next ▶
                    </button>
                </div>
            </div>
        </div>
    );
}
