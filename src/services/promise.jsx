import data from "../Json/data.json";

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data)
        reject("Algo falló")
    }, 2000);
});

export default getProducts