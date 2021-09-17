window.addEventListener('load', async function () {




    const user = document.querySelector('.usuario')
    const counter = document.querySelector('.carritoCounter')

    const data = {
        id : user.value
    }
    await axios.put('http://localhost:3002/product-cart', {data});
    const response = await axios.post('http://localhost:3002/product-cart/count',{data})

    counter.innerHTML = (response.data.count[0].count)




})