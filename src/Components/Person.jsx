import React from "react";
import { useState } from "react";

const Person = (props) => {
    const[suka,setTema] = useState(true);
    const [des,Setdes]=useState(false);
    const Like = () => {
    setTema(!suka)
    }
    const desk = () => {
        Setdes(!des)
    }
    return(
    <div style={{
        height: 350,
        width: 300,
        backgroundColor: 'grey',
        borderRadius: 4,
        padding: 5,
        color: 'white',
        marginBottom: 5,
        display:"inline-flex",
        flexWrap: "wrap",
        marginLeft : 8,
        
    }}>
        <p >{props.nama}</p>
        <img src={props.gambar} alt="Gambar" width ="300" height= "200"/>
        {des && <p style={{textAlign: 'justify'}}>{props.deskripsi}</p>}        
        <button style={{background : suka?'blue':'green'}} onClick={()=>Like()}>{suka?'suka':'tidak suka'}</button>
        <button onClick={desk}> {des?'sembunyikan':'Selengkapnya'} </button>
    </div>
    )
}

export default Person