import MOCK_PRODUCTOS from "../data/productos"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_PRODUCTOS)
        }, 1000)
    })
}