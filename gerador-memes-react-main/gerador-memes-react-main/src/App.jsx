import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  function mostrarImg(dados){
    let btn = document.querySelector("#botão")
    btn.addEventListener("click", () => {
        let img = document.querySelector("#img")
        img.src = dados.data.memes[Math.floor(Math.random()*100)].url
        Lista()
    })
}

function req(){
     fetch('https://api.imgflip.com/get_memes').then(res => {
        res.json().then(dados => {
           // console.log("DADOS 1", dados.data)
            mostrarImg(dados)
        });
    }).catch(erro=>{
        console.log(erro + "erro na requisição")
    }) 
}

function Lista(){
    fetch('https://api.quotable.io/random').then(res=>{
        res.json().then(dados2=> {
            let leg = document.querySelector("#legenda")
            leg.innerHTML = `${dados2.content}</br>${dados2.author}`
        })
    })
}

  return (
    <>
        <Header />
      <h1>Meme Generator!</h1>
        <div>
            <button id="botão" onClick={req()}>Click Here</button> 
        </div>
        <div>
            <figure>
                <figcaption id="legenda">olá</figcaption>

                <img id="img" src="" alt=""/>
            </figure>
        </div>
    </>
  )
}

export default App
