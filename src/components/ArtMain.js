import React, { useContext, useState } from 'react';
import ArtContext from '../context/ArtContext';
import './ArtMain.css';
<<<<<<< HEAD
import {v1 as uuid} from 'uuid'
=======
import { v1 as uuid } from 'uuid'
>>>>>>> a37b83bdbb6e59fc72d318c5825c795b11913922
import Bid from './Bid'

function ArtMain(props) {
    const [name, setName] = useState([
<<<<<<< HEAD
        {name: 'radovan', bid: '4 cows', id: 25}
    ]);

    const addBidder = (bidder, bid) => {
        setName([...name,{name :bidder, bid , id: uuid()}]);
    }
    const { art } = useContext(ArtContext);

    const priceGenerator = () => {
=======
        { name: 'Lodovico', bid: '4 cows', id: 25, img: "https://images.ctfassets.net/f60q1anpxzid/asset-a2eb547d37246e8e2b8fe03ae0d4c8e0/b53893208d2a22cfeb33bff57a0d0524/ren-name-1.jpg?fm=jpg&fl=progressive&q=50&w=1200" },
        { name: 'Isabetta', bid: '8 goats', id: uuid(), img: "https://images.ctfassets.net/f60q1anpxzid/asset-9efb03179fa7de2d4ec6275c9496fc5d/1fad94e75807d83d005c46b28b46d445/ren-name-7.jpg?fm=jpg&fl=progressive&q=50&w=1200" },
        { name: 'Galileo', bid: '25 chickens', id: uuid(), img:"https://images.ctfassets.net/f60q1anpxzid/asset-e8da6a19520b43a960b37caafa6bc606/6346a1c569b9c748cdcb22b97709085f/ren-name-2.jpg?fm=jpg&fl=progressive&q=50&w=1200"}
    ]);

    const addBidder = (bidder, bid) => {
        setName([...name, { name : bidder, bid, id: uuid(), img: "https://images.ctfassets.net/f60q1anpxzid/asset-018ee8552d40f140d606f574de6bc10c/57c9a73496a681a93263fe33016b8fc9/ren-name-6.jpg?fm=jpg&fl=progressive&q=50&w=1200" }]);
    }
    const { art } = useContext(ArtContext);

    const priceGenerator = (e) => {
>>>>>>> a37b83bdbb6e59fc72d318c5825c795b11913922
        const cow = Math.floor((Math.random() * 10) + 1);
        return (cow)
    }

<<<<<<< HEAD

    return (
        <div className="artPiece">
            <h1>Name of artpiece</h1>
            <div className="image">
                Image here
            </div>
            <div className="price">
                <h3>Price</h3>
                <img alt="cow" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2012/04/16/11/21/cow-35561_960_720.png" />
                <h4> X {priceGenerator()}</h4>
                <img alt="chicken" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2014/04/02/14/05/chicken-306110_960_720.png" />
                <h4> X {priceGenerator() * 5}</h4>
                <img alt="goat" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2012/04/26/19/56/goat-42973_960_720.png" />
                <h4> X {priceGenerator() * 2}</h4>
                <img alt="stone" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2013/07/13/01/23/crystals-155644_960_720.png" />
                <h4> X {priceGenerator() / 2}</h4>
            </div>
            <div className="bids">
                <ul>
                    {name.map(e => <li style={{listStyle:"none"}} key={e.id}>{e.name} bids {e.bid} </li>)}
                    </ul>   
            </div>
        <Bid addBidder={addBidder}/>
        </div>
=======

    return (
        <div>

            <h1 style={{display:'flex', marginTop: '20px', marginLeft: '20px'}}>Name of artpiece</h1>

            <div className="imgPrice">
                <div className="image">
                    Image here
                   
            </div>
            <p className="info">Info</p>
         
            </div>
                <div className="price">
                    <h3>Price</h3>
                    <img alt="cow" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2012/04/16/11/21/cow-35561_960_720.png" />
                    <h4> X {priceGenerator()}</h4>
                    <img alt="chicken" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2014/04/02/14/05/chicken-306110_960_720.png" />
                    <h4> X {priceGenerator() * 5}</h4>
                    <img alt="goat" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2012/04/26/19/56/goat-42973_960_720.png" />
                    <h4> X {priceGenerator() * 2}</h4>
                    <img alt="stone" style={{ width: '50px', height: '50px' }} src="https://cdn.pixabay.com/photo/2013/07/13/01/23/crystals-155644_960_720.png" />
                    <h4> X {priceGenerator() / 2}</h4>
                </div>
                <div className="bidsForm">
                    <div className="bids">
                        <ul>
                            {name.map(e => {
                                return (
                                    <div style={{height:'120px'}}>
                                        <li style={{ listStyle: "none" }} key={e.id}>
                                            <img style={{ width: '10%', height: '5%' }} src={e.img} alt={e.id} /> {e.name} bids {e.bid} </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <Bid addBidder={addBidder} />
                </div>
            </div>
       
>>>>>>> a37b83bdbb6e59fc72d318c5825c795b11913922
    )
}

export default ArtMain;