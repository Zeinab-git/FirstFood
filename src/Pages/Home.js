import React from "react";

import Rectangle from "../Images/Rectangle.png";
import Rectangle2 from "../Images/Rectangle(2).png";



const Home = () => {

    const titleMenuImg = document.querySelector(".title_menu_img")
    const hiddenDiv = document.querySelector(".hidden")
    const crossImg = document.querySelector(".cross")
    const welcomeDiv = document.querySelector(".welcome")
    const showLeft = document.querySelector("#show_left")
    const showright = document.querySelector("#whyNull")
    const parentComent = document.querySelectorAll(".parent_coment")

    const changeTitle = () => {
        hiddenDiv.style.display = "flex";
        titleMenuImg.style.transition = "all 250ms ease-in-out";
        welcomeDiv.style.marginTop = "-584px";
    }

    console.log(crossImg);
    

    const changeCroos = () => {
        hiddenDiv.style.display = "none";
        crossImg.style.transition = "all 250ms ease-in-out";
        welcomeDiv.style.marginTop = "26px"
    }


    const showFunc = (event) => {

        event.target.setAttribute("src", `${Rectangle}`)

        if (event.target.id === "show_left") {
            showright.src = `${Rectangle2}`
            parentComent.forEach(item => {
                item.style.left = "450px"
            })
            console.log(showright);

        } else if (event.target.id === "whyNull") {
            showLeft.setAttribute("src", `${Rectangle2}`)
            parentComent.forEach(item => {
                item.style.left = "-450px"
            })
        }

    }



    return (
        <section className="home_container">
            <div className="title">
                <div className="number_title">
                    <p>Call - 123 456 789</p>
                </div>
                <div className="image_title">
                    <img src={require("../Images/IMAGE.png")} alt="title" />
                </div>
                <div className="button_title">
                    <button className="reserve">Reservation</button>
                </div>
                <img src={require("../Images/menu.png")} alt="menu" className="title_menu_img" onClick={changeTitle} />
            </div>


            <header>
                <div className="header_link">
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/menu">Our Menu</a>
                    <a href="/">Pages</a>
                    <a href="/blog">Blog</a>
                    <a href="/">Contact Us</a>
                </div>
                <div className="header_images">
                    <img src={require("../Images/IMAGE (1).png")} alt="Instagram" />
                    <img src={require("../Images/Vector.png")} alt="FaceBook" />
                    <img src={require("../Images/Vector (1).png")} alt="Twiter" />
                    <img src={require("../Images/IMAGE (2).png")} alt="Pinterest" />
                </div>
                <div className="hidden">
                    <img src="../Images/menu.png" alt="cross" className="cross" onClick={changeCroos} />
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/menu">Our Menu</a>
                    <a href="/">Pages</a>
                    <a href="/blog">Blog</a>
                    <a href="/">Contact Us</a>
                </div>
            </header>


            <main>
                <div className="welcome">
                    <div className="welcome_text">
                        <h2>Welcome to</h2>
                        <h2>Restaurant</h2>
                        <p>The people, food and the prime locations make the perfect place good friends & family to come
                            together and have great time.</p>
                        <button className="view_menu">View Menu</button>
                    </div>
                    <div className="welcome_image">
                        <img src={require("../Images/Frame.png")} alt="Restaurant" />
                    </div>
                </div>
                <div className="location">
                    <div className="locate">
                        <img src={require("../Images/Frame (3).png")} alt="location" />
                        <div className="locate_text">
                            <p>Locate Us</p>
                            <span>Riverside 25, San Diego, California</span>
                        </div>
                    </div>
                    <div className="open">
                        <img src={require("../Images/Frame (2).png")} alt="location" />
                        <div className="open_text">
                            <p>Open Hours</p>
                            <span>Mon To Fri 9:00 AM - 9:00 PM</span>
                        </div>
                    </div>
                    <div className="reservation">
                        <img src={require("../Images/Frame (1).png")} alt="location" />
                        <div className="reservation_text">
                            <p>Reservation</p>
                            <span>restaurantate@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="story">
                    <div className="story_child">
                        <div className="story_image">
                            <img src={require("../Images/IMAGE (6).png")} alt="Restaurant" />
                        </div>
                        <div className="story_text">
                            <h3>The Delicious Story</h3>
                            <p>The people, food and the prime locations make the perfect place for the friends & family to
                                come together and have great time.</p>
                            <div className="story_time">
                                <div className="time_one">
                                    <h3>2018</h3>
                                    <p>Plan for this restaurant to deliver healthy food.</p>
                                </div>
                                <div className="time_two">
                                    <h3>2022</h3>
                                    <p>Happily in the fourth year by fulfill the motto.</p>
                                </div>
                            </div>
                            <p>JOSEFINE</p>
                            <img src={require("../Images/IMAGE (5).png")} alt="signature" />
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testimonial_text">
                        <p>Testimonial</p>
                        <h3>our clients say</h3>
                        <p>We love to hear from customers, so please leave a comment or say hello in an email.</p>
                    </div>
                    <div className="testimonial_coment">
                        <div className="parent_coment">
                            <div className="testimonial_coment_image">
                                <img src={require("../Images/IMAGE (18).png")} alt="photopicture" />
                                <div>
                                    <p>Natasha D</p>
                                    <p>Newyork</p>
                                </div>
                            </div>
                            <hr />
                            <div className="testimonial_coment_text">
                                <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The
                                    best chicken & burgers those are yummy.</p>
                            </div>
                        </div>
                        <div className="parent_coment">
                            <div className="testimonial_coment_image">
                                <img src={require("../Images/IMAGE (19).png")} alt="photopicture" />
                                <div>
                                    <p>Jack Sparrow</p>
                                    <p>Salt Lake City</p>
                                </div>
                            </div>
                            <hr />
                            <div className="testimonial_coment_text">
                                <p>I have visited this fantastic restaurant on several occasions, food is absolutely
                                    outstanding & attention to detail is in league of its own.</p>
                            </div>
                        </div>
                        <div className="parent_coment">
                            <div className="testimonial_coment_image">
                                <img src={require("../Images/IMAGE (20).png")} alt="photopicture" />
                                <div>
                                    <p>Martin</p>
                                    <p>San Diego</p>
                                </div>
                            </div>
                            <hr />
                            <div className="testimonial_coment_text">
                                <p>Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They
                                    give best fried chicken and burgers those are yummy.</p>
                            </div>
                        </div>
                        <div className="parent_coment">
                            <div className="testimonial_coment_image">
                                <img src={require("../Images/IMAGE (18).png")} alt="photopicture" />
                                <div>
                                    <p>Natasha D</p>
                                    <p>Newyork</p>
                                </div>
                            </div>
                            <hr />
                            <div className="testimonial_coment_text">
                                <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The
                                    best chicken & burgers those are yummy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial_vecture">
                        <img src={require("../Images/Rectangle(2).png")} alt="Rectangle" id="show_left" onClick={(event) => showFunc(event)} />
                        <img src={require("../Images/Rectangle.png")} alt="Rectangle" id="whyNull" onClick={(event) => showFunc(event)} />
                    </div>
                </div>
                <div className="image">
                    <img src={require("../Images/IMAGE (21).png")} alt="Restaurant" />
                </div>
                <div className="offer">
                    <div className="offer_text">
                        <p>offers</p>
                        <h2>Our Offer dishes</h2>
                        <p>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now the
                            dishes are in offers use it based on hunger.</p>
                    </div>
                    <div className="offer_food">
                        <div className="offer_food_box number_one">
                            <div className="offer_food_text">
                                <img src={require("../Images/Offer.png")} alt="offer" />
                                <p className="offer_befor_after">50% Offer Going</p>
                                <h2>Chicken Burger</h2>
                                <p>Chicken burger with the tasty toppings and leaves.</p>
                            </div>
                            <div className="offer_food_picture">
                                <img src={require("../Images/IMAGE (22).png")} alt="Burger" />
                            </div>
                        </div>
                        <div className="offer_food_box number_two">
                            <div className="offer_food_text">
                                <img src={require("../Images/Offer(2).png")} alt="offer" />
                                <p className="offer_befor_after">50% Offer Going</p>
                                <h2>Chicken Pizza</h2>
                                <p>Pizza with multiple flavor and the toping are mixed.</p>
                            </div>
                            <div className="offer_food_picture">
                                <img src={require("../Images/IMAGE (23).png")} alt="Pizza" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="what_we_offer">
                    <div className="what_we_offer_text">
                        <p>What we offer</p>
                        <h2>Our Great Services</h2>
                        <p>The atmosphere set the stage. It’s about more than just a dining room away from your home. food
                            takes the spotlight as guests.</p>
                    </div>
                    <div className="what_we_offer_picture">
                        <div className="when">
                            <img src={require("../Images/Vector (3).png")} alt="Opened" />
                            <p>Opened 24/7</p>
                        </div>
                        <div className="special">
                            <img src={require("../Images/Vector (4).png")} alt="Menus" />
                            <p>Special Menus</p>
                        </div>
                        <div className="delivery">
                            <img src={require("../Images/Vector (5).png")} alt="Delivery" />
                            <p>Home Delivery</p>
                        </div>
                    </div>
                </div>
            </main>


            <div className="footer_picture">
                <div className="faceInsta">
                    <img src={require("../Images/IMAGE (1).png")} alt="Instagram" />
                    <img src={require("../Images/Vector.png")} alt="FaceBook" />
                </div>
                <img src={require("../Images/IMAGE.png")} alt="title" />
                <div className="twitpinter">
                    <img src={require("../Images/IMAGE (2).png")} alt="Pinterest" />
                    <img src={require("../Images/Vector (1).png")} alt="Twiter" />
                </div>
            </div>
            <div className="footer_text">
                <div className="contact">
                    <p>Contact</p>
                    <p>5 Rue Dalou, 75015 Paris</p>
                    <p>+123 456 789</p>
                    <p>josefin@mail.com</p>
                </div>
                <div className="gmail">
                    <p>Join our mailing list for updates,Get news & offers events.</p>
                    <div>
                        <input type="email" placeholder="Email" className="email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="working_hours">
                    <p>Working Hours</p>
                    <div><span className="weekdays">Mon – Fri: </span><span className="hours">7.00am – 6.00pm</span></div>
                    <div><span className="weekdays">Sat: </span><span className="hours">7.00am – 6.00pm</span></div>
                    <div><span className="weekdays">Sun: </span><span className="hours">8.00am – 6.00pm</span></div>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default Home;