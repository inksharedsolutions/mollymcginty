import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/book_01.png'
import SecondBook from '../../static/books/book_02.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'molly-mcginty',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Fun Run`,
                                    spanFirst: ``,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                    Nora Fletcher, wife, mom of three boys, and part-time librarian, has her idyllic small-town life thrown for a loop when her husband learns he has a teenage daughter from his first marriage, which didn’t last longer than the honeymoon. Now Nora is trying to balance life, work, and family while learning to accept this new addition to their life: a teenage daughter who has a few surprises of her own. With the library fun run coming up and Nora as head of the entertainment, she recruits her new stepdaughter’s help and hopes to use this opportunity to get to know one another.
                                    </p> 
                                    
                                    <p>
                                    Ruth Davis is the new library director of small-town Pineridge’s library. She is excited about her new job, her new home, and her new life, although she can’t figure out why the assistant librarian seems to hate her. Then in walks the handsome local doctor, Peter Anderson, who is also the president of the Friends of the Library committee. He proposes a 5K fun run as the library’s fund-raiser to get new computers, with Ruth as the lead runner. Suddenly, Ruth feels like she’s walked into a cheesy romance novel, but she is very happy about it.
                                    </p>
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/fun-run-a-novel/',
                                        barnes: 'https://www.barnesandnoble.com/w/fun-run-molly-mcginty/1133492292?ean=9781643457178',
                                        amazon :'https://www.amazon.com/Fun-Run-Novel-Molly-McGinty-ebook/dp/B07XLD6H8K/ref=sr_1_1?keywords=9781643457178&qid=1568650644&s=gateway&sr=8-1',  
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Fun-Run-Novel-Molly-McGinty/dp/1643453890/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1568650644&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/fun-run-molly-mcginty/1133492292?ean=9781643453897',
                                        booksamillion:'https://www.booksamillion.com/p/Fun-Run/Molly-McGinty/9781643453897?id=8009965417365&_ga=2.155459835.1905326297.1602216593-1770015116.1600996550',
                                    }
                                }} 
                            />
                            <div className="columns book-container-ft">
                
                                <div className="column">
                                    <div className="bookImgContainer">
                                        <img alt="main-book" src={SecondBook} />
                                    </div>
                                </div>
                                
                                <div className="column">
                                    <section className="contentBook">
                                        <h1>
                                            Social Hour
                                        </h1>

                                        <p className="sub-heading">
                                            
                                        </p>
                                        
                                        <span>
                                            
                                        </span> 

                                        <div className="content-body" 
                                            >
                                            <p>After the death of her husband. Maggie bought a bed and breakfast as a way to provide and income for herself while still being a stay-at-home mom for her two young children. She provided free lodging to anyone who had wounded soldier in the local hospital, but after three  years with many free guests and few paying ones. Maggie is on the verge of shutting her doors.</p>
                                            <p>Hoping she can keep her bed and breakfast ope through Christmas, Maggie takes in one final guest, whose sister is in the hospital. But Bryan Connolly isn't the usual guest; he sees here struggling to run the B&B all alone. Impressed by her generous nature, kind heart, and the best cookies he's ever tasted. Bryan is a determined to help Maggie. Through the B&B's nightly social hour of tea and cookies. Maggie and Bryan learn to push beyond past hurts and find love again.</p>
                                            </ div>
                                    </section>

                                    <section className="fullSection">
                                        <nav className="booklinkBlocks">
                                            <span>Ebooks :</span>
                                            <span>Soon...</span>
                                        </nav>

                                        <nav className="booklinkBlocks">
                                            <span>Purchase Paperback :</span>
                                            <span>Soon...</span>
                                        </nav>
                                    </section>

                                </div>	
                            </div>
                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;