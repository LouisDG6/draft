import React from "react"
import {Link, useParams} from "react-router-dom"
import Modal from "../components/modal"
import { useState } from "react"

const SingleBakie = ({ bakies, edit, deleteBakery }) => {
    // get the params from the url
    const params = useParams()
    const id = parseInt(params.id)

    // find the particular post the user wants to see based on the param
    const bakie = bakies.find((b) => b.id === id)
    console.log(bakie)

    ////////////////////
    // Style Object
    /////////////////////
    const div = {
        textAlign: "center",
        border: "3px solid purple",
        width: "80%",
        margin: "30px auto"
    }
    const [show, setShow] = useState(false)
    const deleteButton = () => <button className="buttonShow" onClick={(event)=> deleteBakery(bakie)}>Yes</button>

    return <div style={div}>
        <h1>{bakie?.name}</h1>
        <h2>{bakie?.details}</h2>
        <button onClick={() => edit(bakie)}>Edit</button><br></br>
        <button className="buttonShow" onClick = {()=> {setShow(true)}}>Delete</button>
        <Modal onClose={()=> setShow(false)} show={show} delButton={deleteButton()}/>
        <Link to="/bigmomscakies">
            <button>Go Back</button>
        </Link>
    </div>
}

export default SingleBakie;