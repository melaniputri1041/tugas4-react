import { useState } from 'react'
import './App.css'
import Tombol from "./Components/Person"

const App = () => {
const people = [
  {
  nama : "Tulus",
  gambar : "https://akcdn.detik.net.id/community/media/visual/2023/03/01/lagu-tulus-paling-favorit-di-spotify_169.jpeg?w=700&q=90",
  deskripsi : "Dia Penyanyi lelaki favorite saya",
},
{
  nama : "bernadya",
  gambar : "https://dmm0a91a1r04e.cloudfront.net/PtRBgXgaepFD8qPFfp4FWzMsZoA=/1280x849/https%3A%2F%2Fasset.kgnewsroom.com%2Fphoto%2Fpre%2F2023%2F04%2F04%2F2a8a5fe8-94a9-43da-a615-3029f580df72_jpg.jpg",
  deskripsi : "dia memiliki lagu favorite saya",
},
{
  nama : "nadine amizah",
  gambar : "https://www.dailysia.com/wp-content/uploads/2020/01/Nadin_co-660x400.jpg?x62393",
  deskripsi : "lagu nya bagus bagus",
}
]

return(
  <div>
      {
          people.map((value,index) => {
              return <Tombol key={index} nama={value.nama} gambar={value.gambar} deskripsi={value.deskripsi}/>
          })
      } 
  </div>
)
}
export default App
