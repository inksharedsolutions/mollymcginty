import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-image-container">
                        <img src={AuthorImg}/>
                     </div>

                     <div className="grid-child" id="author-contents">
                        <span>Author & Writer</span>
                        <h1>
                            <span>Molly</span>
                            <span>McGinty</span>
                        </h1>
                        <p>
                            Full time librarian, Molly McGinty, received her Master’s in Library and Information Science in 2018.   She has lived in eight states and is the founder of Auntie M’s Children’s Theater....
                        </p>

                        <div className="button-container">
                            <Link to="/about-the-author">
                                Read More
                            </Link>
                        </div>

                     </div>
                </div>
            </section>
        </>
    )
}

export default Author;