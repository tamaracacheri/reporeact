const data = [
        {
            "id": 1,
            "title": "Imperial Golden Lata",
            "description": "Imperial Golden 473 ml",
            "price": 130,
            "stock": 200,
            "pictureUrl": "https://d3ugyf2ht6aenh.cloudfront.net/stores/251/225/products/19904-f11-49769fbbff85d15f9d15879969265723-1024-1024.jpg",
            "category": "Cervezas"
        },
        {
            "id": 2,
            "title": "Salta Cautiva Roja ",
            "description": "Salta Cautiva Roja 473 ml",
            "price": 130,
            "stock": 500,
            "pictureUrl": "https://lh3.googleusercontent.com/proxy/6kF9Qgo1gILJznNLzhLc7NA5mEsV5fn2GcL1OK9W9OUKLs3Yvl54cx6snTqvoWabwNUFfcqpsH9D4_vdDXrEnTeMxmIeXJE-Tzpq5NxtSTnHthZAdhmmKYQ7_-c",
            "category": "Cervezas"
        },
        {
            "id": 3,
            "title": "Rabieta Red",
            "description": "Rabieta Red Irish Ale 473 ml",
            "price": 230,
            "stock": 100,
            "pictureUrl": "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/058/870/products/rabi03_1-37ca7e9aab28fc8b1716277820724003-640-0.jpg",
            "category": "Cervezas"
        },
        {
            "id": 4,
            "title": "Coctelera",
            "description": "Coctelera Bahia con Filtro de Acero Inoxidable 750 ml",
            "price":1680,
            "stock":10,
            "pictureUrl": "https://www.hosteljiel.com/images/stories/virtuemart/product/COCTELERA-INOX-75-CL-MIL9940.jpg",
            "category": "Tragos"
        },
        {
            "id": 5,
            "title": "Cuchara removedor",
            "description": "Cuchara Removedor Coctelería de Acero Inoxidable",
            "price":420,
            "stock":10,
            "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_616020-MLA48066826541_102021-W.jpg",
            "category": "Tragos"
        },
        {
            "id": 6,
            "title": "Pulpa Stapler Frutilla",
            "description": "Pulpa Meredith-Stapler Frutilla 880 gr",
            "price":230,
            "stock":5,
            "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_854105-MLA44802932579_022021-O.jpg",
            "category": "Tragos"
        },
        {
            "id": 7,
            "title": "Chandon Aperitif",
            "description": "Chandon Aperitif 187",
            "price":300,
            "stock":100,
            "pictureUrl": "https://www.fullescabio.com/img/Producto/643/01-1619535745-61793161e49eb.jpeg",
            "category": "Espumantes"
        },
        {
            "id": 8,
            "title": "Mumm Léger",
            "description": "Mumm Léger 750 ml",
            "price": 650,
            "stock": 100,
            "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_839227-MLA43706246666_102020-O.jpg",
            "category": "Espumantes"
        },
        {
            "id": 9,
            "title": "Salentein Brut Nature con Estuche",
            "description": "Salentein Brut Nature 750 ml con Estuche",
            "price": 980,
            "stock": 20,
            "pictureUrl": "https://www.fullescabio.com/img/Producto/954/01-1633625267-617932b79d5d0.jpeg",
            "category": "Espumantes"
        },
        {
            "id": 10,
            "title": "Saint Felicien",
            "description": "Saint Felicien Colección Francis Mallmann x 3 Malbec",
            "price":10500,
            "stock":5,
            "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_795554-MLA47219137002_082021-O.webp",
            "category": "Vinos"
        },
        {
            "id": 11,
            "title": "Portillo Salentein Wines Malbec",
            "description": "Portillo Salentein Wines Malbec 750 ml",
            "price":370,
            "stock":120,
            "pictureUrl": "https://www.espaciovino.com.ar/media/default/0001/59/thumb_58921_default_big.jpeg",
            "category": "Vinos"
        },
        {
            "id": 12,
            "title": "Santa Julia Organica Malbec Rosé ",
            "description": "Santa Julia Organica Malbec Rosé 269 ml",
            "price":170,
            "stock":600,
            "pictureUrl": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/104/products/kvj21-8dcd431fae582c84ab16181790192225-1024-1024.jpg",
            "category": "Vinos"
        },
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
        reject("Algo falló")
    }, 2000);
});

export default getProducts;