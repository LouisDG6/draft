import React from "react"
import Bakie from "../components/bakie"
import ImageDisplay from "../components/imageDisplay"


const AllBakies = (props) => {
    // for each bakie in the array, render a bakie component

    return  <>
    <ImageDisplay/>
    { props.bakies.map((bakie) => {
        return <Bakie key={bakie.id} bakie={bakie}/> 
    })} </> 
    
}

export default AllBakies;