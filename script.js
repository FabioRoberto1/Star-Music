document.addEventListener('DOMContentLoaded', () => {


    const musicaData = [
                { name: "Abracadabra", artist: "Lady Gaga", image: "https://s2-gshow.glbimg.com/RG6jQ1Gb0chSLmYx3AB7ediB8ns=/0x0:1100x825/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2025/n/M/4IA6fjQz23SGqPV8MAtA/lady-gaga.jpeg" },
                { name: "Pais e Filhos", artist: "Legião Urbana", image: "https://upload.wikimedia.org/wikipedia/pt/7/72/Legi%C3%A3o_Urbana_-_Dois.jpg" },
                { name: "The Emptiness Machine", artist: "Linkin Park", image: "https://www.vagalume.com.br/linkin-park/discografia/from-zero-(deluxe-edition).webp" },
                { name: "Manchild", artist: "Sabrina Carpenter", image: "https://linkstorage.linkfire.com/medialinks/images/5db83db7-2d94-42f7-b35e-87abf42507f6/artwork-440x440.jpg" },
                { name: "Bad Guy", artist: "Billie Eilish", image: "https://m.media-amazon.com/images/I/81idxQqxTlL._AC_SX679_.jpg" },
                { name: "Thriller", artist: "Michael Jackson", image: "https://m.media-amazon.com/images/I/619wcyJTM6L._UF1000,1000_QL80_.jpg" },
                { name: "Negro Drama", artist: "Racionais", image: "https://upload.wikimedia.org/wikipedia/pt/6/62/Nada_como_um_dia_ap%C3%B3s_o_outro_dia.jpg" },
                { name: "So Sick", artist: "Ne-yo", image: "https://i.scdn.co/image/ab67616d0000b2730cff07ab9cd865a6c4cabc72" }
    ]

    const artitasData = [
        { name: 'Paramore', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0iwazwgVq2Tle8S1Uqt8S6bc_q7-EZKTx5A&s" },
        { name: 'System of a Down', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIv5Acp1vwAdrN3aMlE7gf6irWZI86Xew1A&s" },
        { name: 'Elvis Presley', image: "https://cdn-images.dzcdn.net/images/artist/935d35a45e061e7640a0becfa42cef6e/1900x1900-000000-81-0-0.jpg" },
        { name: 'Lady Gaga', image: "https://portalpopline.com.br/wp-content/uploads/2026/02/lady-gaga-grammy-2.jpg" },
        { name: 'Sabrina Carpenter', image: "https://phantom.estaticos-marca.com/74be61d6d57acc6cfdcf909a757d2b4d/resize/828/f/jpg/assets/multimedia/imagenes/2025/02/04/17386835231309.jpg" },
        { name: 'The Weeknd', image: "https://musicnonstop.uol.com.br/wp-content/uploads/2024/01/The-Weeknd.webp" },
        { name: 'Kendrick Lamar', image: "https://cdn-images.dzcdn.net/images/artist/be0a7c550567f4af0ed202d7235b74d6/1900x1900-000000-81-0-0.jpg" },
        { name: '2Pac', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN1uSL0kpIrbmmg-ICSFs0JuOpbHepSy5YQ&s" }
    ];

    const albumData = [
        { name: "After Hours", artist: "The Weeknd", image: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Weeknd_-_After_Hours.png" },
        { name: "Man's Best Friend", artist: "Sabrina Carpenter", image: "https://s2-gshow.glbimg.com/d0d9mfdU7DDXZiM5c1VUUOEKSVs=/0x0:980x978/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2025/A/B/ydZt8BSNu2kzfkmDVBqg/sabrina-carpenter-capa.avif" },
        { name: "4", artist: "Beyoce", image: "https://m.media-amazon.com/images/I/71WqJdErEJL.jpg" },
        { name: "Mezmerize", artist: "System of a Down", image: "https://cdn-images.dzcdn.net/images/cover/4954f43cc6033ddfa0fa3ee5514a26ca/0x1900-000000-80-0-0.jpg" },
        { name: "The Fame Monster", artist: "Lady Gaga", image: "https://s2-oglobo.glbimg.com/oA4oS3WcjN7cumDjOL1cwPB9Ee0=/0x0:1200x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/H/g/WIZUmSQ6uQvJXitoKLVw/the-fame-monster.jpg" },
        { name: "The Dark Side of the Moon", artist: "Pink FLoyd", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Dark_Side_of_the_Moon.png/250px-Dark_Side_of_the_Moon.png" },
        { name: "Bad", artist: "Michael Jackson", image: "https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png" },
        { name: "Nuestro Amor", artist: "RBD", image: "https://www.vagalume.com.br/rbd/discografia/nuestro-amor.webp" }
    ];


const musicGrid = document.querySelector('.music-grid');
const artistsGrid = document.querySelector('.artists-grid');
const albumsGrid = document.querySelector('.albuns-grid');

    
    musicaData.forEach(music => {
        const musicCard = document.createElement('div');
        musicCard.classList.add('music-card');

        musicCard.innerHTML = `
            <img src="${music.image}" alt="imagem do ${music.name}">
            <h3>${music.name}</h3>
            <p>${music.artist}</p>
        `;
        musicGrid.appendChild(musicCard);
    });


    artitasData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artits-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            
        `;
        artistsGrid.appendChild(artistCard);
    });


    albumData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="Capa do álbum ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;
        albumsGrid.appendChild(albumCard);
    });
});