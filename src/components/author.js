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
                            <span>Mcginty</span>
                        </h1>
                        <p>
                            Molly McGinty is a librarian for a small-town library in Vermont.  She has five children, who are all incredibly talented, funny, and brilliant, in her opinion.  An avid writer since a young child, Molly has written juvenile fiction, children's plays, and many short stories, as well as women's romance.  
                        </p>

                        <div className="button-container">
                            <Link to="">
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