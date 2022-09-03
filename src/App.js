import React from 'react';
import './App.css';

function App() {
  return (
    <div className='home'>
      <img src='https://imgs.search.brave.com/EeyuMrQRGdkOmVcOJUwX5olU5cH27GTc7H-4IlUzxk8/rs:fit:860:452:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzgzLTgz/NDQ5MV9vZmZpY2lh/bC1zdHVkaW8tZ2hp/YmxpLWxvZ28taGQt/cG5nLWRvd25sb2Fk/LnBuZw' alt='Studio Ghibli Logo'/>
      <p>Studio Ghibli Inc. is a Japanese animation film studio, 
      and previously was a subsidiary of Tokuma Shoten. 
      Its provocative and emotional anime films are widely praised all 
      over the world. Its name derives from the nickname the Italians 
      which derived from the Libyan word for hot wind blowing through 
      the Sahara Desert. The theory behind the name was that the 
      studio was blowing a new wind into the Japanese anime industry. 
      The company's logo features the character Totoro from the film 
      My Neighbor Totoro.</p>
      <p>
      Founded in 1985, it is headed by the acclaimed director Hayao
       Miyazaki (left/top picture) along with his colleague and mentor Isao Takahata (middle picture),
        as well as the studio's executive managing director and 
        long-time producer Toshio Suzuki(right/bottom picture). Its origins date back to
         1983, with the film Nausicaä of the Valley of Wind, which 
         was popularised as a serialized manga in a publication of 
         Tokuma Shoten's Animage magazine after the original 
         screenplay was rejected. The film was eventually produced 
         by Topcraft and the film's success spurred the formation 
         of Ghibli. Tokuma is the parent company of Studio Ghibli, 
         and has provided Disney with the video rights to eight of 
         the films and global distribution rights to Princess 
         Mononoke and Spirited Away.
      </p>
      <div className='creators'>
      <img className='hayao' src='https://imgs.search.brave.com/7aFHkl9meKHw5HPQrvBEz3yS9JVoRuw3jvtWVXTn7Tg/rs:fit:1024:577:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuaG9sbHl3b29k/cmVwb3J0ZXIuY29t/L3NpdGVzL2RlZmF1/bHQvZmlsZXMvMjAx/Ni8xMS9oYXlhb19t/aXlhemFraV8tX21v/dGlvbl9waWN0dXJl/X2FjYWRlbXlzXzZ0/aF9hbm51YWxfZ292/ZXJub3JzX2F3YXJk/c18tX2dldHR5Xy1f/aF8tXzIwMTYtMTAy/NHg1NzcuanBn' alt='Studio Ghibli Director' />
      <img className='isao' src='https://imgs.search.brave.com/gRiyu2EjwPSh6nX-3dIk-p_lf2UJvEM7gDWvu-Xvyfg/rs:fit:1140:839:1/g:ce/aHR0cHM6Ly9haGVn/YW8uYi1jZG4ubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA0L0lzYW8tVGFr/YWhhdGEtMTE0MHg4/MzkucG5n' alt='Studio Ghibli Director' />
      <img className='toshio' src='https://imgs.search.brave.com/KhH8uD8N9G2wYBN63j360mUnaz62NOmSrTD6XPJ0ftk/rs:fit:960:480:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q3L2Yw/LzMzL2Q3ZjAzM2Uw/ZGMwYzY0Y2E0YjNm/NTg0MTQ3YTA1NGM2/LmpwZw' alt='Studio Ghibli Producer' />
      </div>
    </div>
  );
}

export default App;
