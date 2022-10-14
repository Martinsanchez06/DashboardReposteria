export const GetProducts = async () => {
    const url = `https://san-jose-reposteria.herokuapp.com/api/products`
    try {
        const resp = await fetch(url)
        const{data} = await resp.json()
        const products = data.map(product => {
            return(console.log(product))
            
        })

        return products
    } catch (error) {
        console.log(error);
    }
}