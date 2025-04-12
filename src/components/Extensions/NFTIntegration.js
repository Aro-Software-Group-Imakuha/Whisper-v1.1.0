import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db } from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const NFTIntegration = () => {
    const user = useSelector(selectUser);
    const [nfts, setNfts] = useState([]);
    const [newNft, setNewNft] = useState({ title: '', description: '', imageUrl: '' });

    useEffect(() => {
        const fetchNfts = async () => {
            const nftsSnapshot = await db.collection('nfts').where('user', '==', user.uid).get();
            const nftsData = nftsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNfts(nftsData);
        };

        fetchNfts();
    }, [user]);

    const handleAddNft = async () => {
        if (newNft.title && newNft.description && newNft.imageUrl) {
            await db.collection('nfts').add({
                user: user.uid,
                title: newNft.title,
                description: newNft.description,
                imageUrl: newNft.imageUrl,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            setNewNft({ title: '', description: '', imageUrl: '' });
            const nftsSnapshot = await db.collection('nfts').where('user', '==', user.uid).get();
            const nftsData = nftsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setNfts(nftsData);
        }
    };

    return (
        <div className="nft-integration">
            <h2>Your NFTs</h2>
            <div className="nft-list">
                {nfts.map(nft => (
                    <div key={nft.id} className="nft-item">
                        <img src={nft.imageUrl} alt={nft.title} />
                        <h3>{nft.title}</h3>
                        <p>{nft.description}</p>
                    </div>
                ))}
            </div>
            <div className="nft-form">
                <h2>Add New NFT</h2>
                <input
                    type="text"
                    value={newNft.title}
                    onChange={(e) => setNewNft({ ...newNft, title: e.target.value })}
                    placeholder="Title"
                />
                <textarea
                    value={newNft.description}
                    onChange={(e) => setNewNft({ ...newNft, description: e.target.value })}
                    placeholder="Description"
                ></textarea>
                <input
                    type="text"
                    value={newNft.imageUrl}
                    onChange={(e) => setNewNft({ ...newNft, imageUrl: e.target.value })}
                    placeholder="Image URL"
                />
                <button onClick={handleAddNft}>Add NFT</button>
            </div>
        </div>
    );
};

export default NFTIntegration;
