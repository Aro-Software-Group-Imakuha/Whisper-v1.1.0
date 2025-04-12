import React, { useState } from 'react';

const Monetization = () => {
    const [tips, setTips] = useState(0);
    const [nft, setNft] = useState(null);

    const handleTip = (amount) => {
        setTips(tips + amount);
        alert(`You have tipped ${amount} units!`);
    };

    const handleNftUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setNft(URL.createObjectURL(file));
            alert('NFT uploaded successfully!');
        }
    };

    return (
        <div className="monetization">
            <h2>Support Creators</h2>
            <div className="tipping">
                <h3>Tip the Creator</h3>
                <button onClick={() => handleTip(1)}>Tip 1</button>
                <button onClick={() => handleTip(5)}>Tip 5</button>
                <button onClick={() => handleTip(10)}>Tip 10</button>
                <p>Total Tips: {tips}</p>
            </div>
            <div className="nft">
                <h3>Upload NFT</h3>
                <input type="file" accept="image/*" onChange={handleNftUpload} />
                {nft && <img src={nft} alt="NFT" />}
            </div>
        </div>
    );
};

export default Monetization;
