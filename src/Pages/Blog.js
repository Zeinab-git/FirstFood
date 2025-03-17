import React from "react";



const Blog = () => {
    return (
        <div className="container_blog">
            <h1>Blog</h1>
            <hr/>
                <h2>Be First Who Read News</h2>
                <p className="discription_blog">Explore the latest stories about our dishes, offers,events and future plans here.</p>
                <div className="picture_blog">
                    <div className="delicious">
                        <div className="view_more blog_one">
                            <img alt="food" src={require("../Images/IMAGE (29).png")}/>
                                <button>View More</button>
                        </div>
                        <div className="delicious_text">
                            <div className="span_blog">
                                <span>Delicious</span>
                                <span>March 19, 2022</span>
                            </div>
                            <h3>The Legend of US Cuisine: The Story of Hungry People</h3>
                            <p>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>
                        </div>
                    </div>
                    <div className="cooking">
                        <div className="view_more blog_two">
                            <img alt="food" src={require("../Images/IMAGE (28).png")}/>
                                <button>View More</button>
                        </div>
                        <div className="delicious_text">
                            <div className="span_blog">
                                <span>Cooking</span>
                                <span>March 19, 2022</span>
                            </div>
                            <h3>The Most Popular Delicious Food of Mediterranean Cuisine</h3>
                            <p>Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.</p>
                        </div>
                    </div>
                </div>
                <hr/>
        </div>
    )
}


export default Blog;