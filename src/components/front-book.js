import React from 'react'
import FrontBook from '../../static/books/book_01.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">
                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="content-wraps">

                            <span className="italic-tag">Read, listen, and learn in various formats</span>

                            <h1>Featured Book</h1>

                            <p>
                                Nora Fletcher, wife, mom of three boys, and part-time librarian, has her idyllic small-town life thrown for a loop when her husband learns he has a teenage daughter from his first marriage, which didn’t last longer than the honeymoon. 
                            </p>

                            <Accordions/>
                            
                        </div>

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

               
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook