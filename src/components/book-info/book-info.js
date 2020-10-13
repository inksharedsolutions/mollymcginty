import React from 'react'
import BookLink from '../book-link/book-link'


const BookInfo = (props)=>{
    return(
        <>
            <div className="columns book-container-ft">
                
                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>
                
                <div className="column" id={props.data.id}>
                    <section className="contentBook">
                        <h1>
                            {props.data.title}
                        </h1>

                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>
                        
                        <span>
                            {props.data.spanTitle}
                        </span> 

                        <div className="content-body" 
                             dangerouslySetInnerHTML={{__html: `${props.data.content}`}} />
                    </section>

                    <BookLink
                        data={{
                            ebooks:{
                                stratton : 'https://www.stratton-press.com/books/fun-run-a-novel/',
                                barnes: 'https://www.barnesandnoble.com/w/fun-run-molly-mcginty/1133492292?ean=9781643457178',
                                amazon :'https://www.amazon.com/Fun-Run-Novel-Molly-McGinty-ebook/dp/B07XLD6H8K/ref=sr_1_1?keywords=9781643457178&qid=1568650644&s=gateway&sr=8-1',  
                            },
                            paperback:{
                                amazon:'https://www.amazon.com/Fun-Run-Novel-Molly-McGinty/dp/1643453890/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1568650644&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/fun-run-molly-mcginty/1133492292?ean=9781643453897',
                                booksamillion:'https://www.booksamillion.com/p/Fun-Run/Molly-McGinty/9781643453897?id=8009965417365&_ga=2.155459835.1905326297.1602216593-1770015116.1600996550',
                            },
                            reviews:{},
                            isNonfront:true,
                        }}
                    />

                </div>	
            </div>
        </>
    )
} 

export default BookInfo;