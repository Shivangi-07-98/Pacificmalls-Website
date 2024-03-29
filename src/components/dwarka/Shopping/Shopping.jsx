import React, { useState, useEffect } from 'react';
import shopping from '../../../Shopping.json';

function Shopping() {
    const [shoppingBrands, setShoppingBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);

    useEffect(() => {
        const filteredBrands = shopping.brands.map(brand => ({
            id: brand.id,
            name: brand.name,
            filter: brand.filter
        }));
        setShoppingBrands(filteredBrands);
    }, []);

    // Handle brand click
    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        const brandNameSlug = brand.toLowerCase().replace(/\s+/g, '-');
        window.history.pushState(null, null, `/shopping/${brandNameSlug}`);
    };

    const renderBrandDetails = () => {
        if (!selectedBrand) return null;
        
        const selectedBrandData = shopping.brands.find(brand => brand.name === selectedBrand);

        if (!selectedBrandData) {
            return <p>Brand details not found</p>;
        }

        return (
            <div>
                <h2>{selectedBrand}</h2>
                <img src={selectedBrandData.logo} alt={`${selectedBrand} Logo`} />
                <img src={selectedBrandData.images[0]} alt={`${selectedBrand} Image`} />
                <p>{selectedBrandData.description}</p>
                <p>Contact: {selectedBrandData.storeDetails.contact}</p>
                <p>Address: {selectedBrandData.storeDetails.address}</p>
            </div>
        );
    };

    return (
        <>
            <h2>Brands</h2>
            <p>The undisputed hub to offer you an unmatched shopping experience from top Indian & International Brands.</p>
            <ul>
                {shoppingBrands.map(brand => (
                    <li key={brand.id} onClick={() => handleBrandClick(brand.name)}>
                        {brand.name}, {brand.filter}
                    </li>
                ))}
            </ul>
            {renderBrandDetails()}
        </>
    );
}

export default Shopping;