import React from 'react';

function Home(){
    return(
<>  
    <navbar class="flex flex-row content-center justify-between bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white font-serif text-lg font-normal">
        <div class="my-5 mx-7 content-center align-middle justify-center">
            Portfólio da Amanda
        </div>

        <div class="my-5 mx-4 flex flex-row content-center justify-center">
            <div class="mx-3">Home</div> 
            <div class="mx-3">Sobre mim</div> 
            <div class="mx-3">Projetos</div> 
            <div class="mx-3">Contato</div>
        </div> 
    </navbar>


    <p class="flex flex-row content-center justify-center font-serif text-2xl font-black my-5">
        Página em construção!
    </p>
    <div class="flex flex-row content-center justify-center">
        <img src="https://i.imgur.com/QdNPRdm.jpeg" alt="Imagem de um beija-flor construindo um ninho" />
    </div>
    {/*<div class="bg-white h-10 text-white text-xs">-</div>*/}


    <footer class="flex flex-row content-center justify-between bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div class="my-3 mx-9 content-center align-middle justify-center font-serif text-lg font-normal">
            2023 © Created by Amanda Giacometti
        </div>
        <div class="my-3 mx-6 flex flex-row content-center justify-center">
            <img src="https://i.imgur.com/DDmw0UO.png" alt="Linkedin" class="mx-3 w-10" />
            <img src="https://i.imgur.com/Mb2a7Ew.png" alt="Github" class="mx-3 w-10 shadow-cyan-500/50" />
            <img src="https://i.imgur.com/khJJ1nx.png" alt="Email" class="mx-3 w-10 shadow-cyan-500/50" />
        </div>
</footer>


</>      
);
}

export default Home;