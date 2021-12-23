import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const gif = <img src="https://i.imgur.com/DcHNFJg.gif" alt="BigMom"/> 

const ImageDisplay = () => {
    if (gif){
        return <div className="gifBigMom">
            {gif}
            </div>
   
    } else {
        return <h3>No Gif Yet</h3>
    }
    
}

export default ImageDisplay;