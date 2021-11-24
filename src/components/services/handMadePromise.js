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
            "title": "Coctelera",
            "description": "Coctelera Bahia con Filtro de Acero Inoxidable 750 ml",
            "price":1680,
            "stock":10,
            "pictureUrl": "https://www.hosteljiel.com/images/stories/virtuemart/product/COCTELERA-INOX-75-CL-MIL9940.jpg",
            "category": "Tragos"
        },
        {
            "id": 3,
            "title": "Mumm Léger",
            "description": "Mumm Léger 750 ml",
            "price": 650,
            "stock": 100,
            "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_839227-MLA43706246666_102020-O.jpg",
            "category": "Espumantes"
        },
        {
            "id": 4,
            "title": "Saint Felicien",
            "description": "Saint Felicien Colección Francis Mallmann x 3 Malbec",
            "price":10500,
            "stock":5,
            "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_795554-MLA47219137002_082021-O.webp",
            "category": "Tragos"
        },
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
        reject("Algo falló")
    }, 2000);
});

export default getProducts;