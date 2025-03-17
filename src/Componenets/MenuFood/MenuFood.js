import "./MenuFood.css"

const CartFunc = async (products) => {
    const request = await fetch("http://localhost:3000/CartProducts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(products)
    })
    const responsData = await request.json()
    console.log(responsData)
}

export const MenuFood = ({ product }) => {
    return (
        <div className="food" key={product.id}>
            <img alt={product.title} src={product.src} />
            <div className="food_text">
                <h3>{product.title}</h3>
                <p>{product.decription}</p>
                <span>${product.price}</span>
                <button className="add_btn" onClick={() => CartFunc(product)}>Add to cart</button>
            </div>
        </div>
    )
}

export const PopularDishes = ({ product }) => {
    return (
        <div className="Popular_dishes_menu_child" key={product.id}>
            <div className="Popular_dishes_menu_picture">
                <img alt={product.title} src={product.src} />
            </div>
            <div className="Popular_dishes_menu_text">
                <div className="price">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
                <hr />
                <p>{product.description}</p>
            </div>
            <button className="add_btn" onClick={() => CartFunc(product)}>Add To Cart</button>
        </div>
    )
}



export const SpecialDishes = ({ product }) => {
    return (
        <div key={product.id}>
            <img alt="" src={product.src} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button className="add_btn" onClick={() => CartFunc(product)}>Add To Cart</button>
        </div>
    )
}