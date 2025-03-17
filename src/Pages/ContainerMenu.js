import { useEffect, useState } from 'react';

import { MenuFood } from '../Componenets/MenuFood/MenuFood';

import { PopularDishes } from '../Componenets/MenuFood/MenuFood';

import { SpecialDishes } from "../Componenets/MenuFood/MenuFood";



// CartItem  Components
export const CartItem = ({ component }) => {
    return (
        <div className='cart_container'>
            <img alt={component.title} src={component.src} className='cart_image' />
            <p className='cart_title'>{component.title}</p>
            <span className='cart_price'>${component.price}</span>
        </div>
    )
}



const ContainerMenu = () => {

    const [product, setProduct] = useState([])
    const [popular, setPopular] = useState([])
    const [special, setSpecial] = useState([])
    const [cartProduct, setCartProduct] = useState([])


    // MenuFood
    useEffect(() => {
        const sendRequest = async () => {
            const respons = await fetch("http://localhost:3000/MenuFood");

            const data = await respons.json()

            setProduct(data)
        }

        sendRequest()
    }, [])


    // PopularDishes
    useEffect(() => {
        const sendRequest = async () => {
            const respons = await fetch("http://localhost:3000/PopularDishes");

            const data = await respons.json()

            setPopular(data)
        }

        sendRequest()
    }, [])


    // SpecialDishes
    useEffect(() => {
        const sendRequest = async () => {
            const respons = await fetch("http://localhost:3000/SpecialDishes");

            const data = await respons.json()

            setSpecial(data)
        }

        sendRequest()
    }, [])


    // CartProducts
    useEffect(() => {
        const sendRequest = async () => {
            const respons = await fetch("http://localhost:3000/CartProducts");

            const data = await respons.json()

            setCartProduct(data)
        }

        sendRequest()

    }, [])

    // Function Show All
    const showAll = () => {
        let SpecialDishes = document.querySelector(".Special_dishes")
        let SpecialDishesAll = document.querySelector(".special_dishes_all")

        SpecialDishes.style.display = "none"
        SpecialDishesAll.style.display = "flex"
    }


    // DeleteHandler Function
    const deletHandler = async (id) => {
        await fetch(`http://localhost:3000/CartProducts/${id}`, {
            method: "DELETE"
        })

        setCartProduct(cartProduct.filter((item) => item.id !== id))
    }


    // CalculateHandler Function
    const calculateHandler = () => {
        let arrayPrice = []
        let cartTotalPrice = document.querySelector(".cart_total_price")
        cartProduct.map((item) => {
            arrayPrice.push(Number(item.price))
            let totalPrice = arrayPrice.reduce((prevPrice, currentPrice) => {
                return prevPrice + currentPrice
            })
            cartTotalPrice.innerHTML = `$${totalPrice}`
        })
    }








    return (
        <section className='cotainer_menu'>
            <h1>Menu</h1>
            <hr />
            <h2>Starters</h2>



            {/* Menu Food */}
            <div className='menu'>
                {
                    product.map((item) => {
                        return (
                            <MenuFood product={item}/>
                        )
                    })
                }
            </div>



            {/* Popular Dishes */}
            <div className='Popular_dishes'>
                <h2>Popular Dishes</h2>
                <p className="discription_text">There is a game between the waiters in restaurant to see who serves the food to each table fastest. That led to attempting the Guinness Record.</p>
                <div className='Popular_dishes_menu'>
                    {
                        popular.map((item) => {
                            return (
                                <PopularDishes product={item} />
                            )
                        })
                    }
                </div>
            </div>
            <button className="Popular_dishes_btn">See all dishes</button>



            {/* Special Dishes */}
            <h2>Try Our Special dishes</h2>
            <div className="Special_dishes">
                <img src="https://www.bettycrocker.co.uk/wp-content/uploads/2023/07/banana-cake-hero-original-500x460.jpg" alt="Special dishes" />
                <p>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
                <button className="Special_dishes_btn" onClick={showAll}>See all dishes</button>
            </div>



            {/* Special Dishes All */}
            <div className='special_dishes_all'>
                {
                    special.map((item) => {
                        return (
                            <SpecialDishes product={item} />
                        )
                    })
                }
            </div>




            {/* Cart Items */}
            <div className="contents_section">
                <h2 className="section_header">CART</h2>
                <div className="cart_row">
                    <span className="cartItem_item">ITEM</span>
                    <span className="cartItem_title">Title</span>
                    <span className="cartItem_price">PRICE</span>
                </div>
                <hr />
                <div className='parent_cart'>
                    {
                        cartProduct.map((item) => {
                            return (
                                <div>
                                    <CartItem component={item} />
                                    <button className='remove_item' onClick={() => deletHandler(item.id)} >Remove</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart_total">
                    <strong className="cart_total_title">Total</strong>
                    <span className="cart_total_price">$0</span>
                </div>
                <button className="calculate_btn" id="go_to_count" type="button" onClick={calculateHandler}>CALCULATE</button>
            </div>
        </section>
    )
}



export default ContainerMenu;