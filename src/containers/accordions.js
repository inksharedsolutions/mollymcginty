import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
import './accordion.scss'
const { Panel } = Collapse
const { Option } = Select


const text = `
  Now Nora is trying to balance life, work, and family while learning to accept this new addition to their life: a teenage daughter who has a few surprises of her own. 
`;


class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

  iconChanger = ()=>{
    console.log('clicks')
  }

   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                onClick={event => {
                    event.stopPropagation();
                }}
            />
            )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
  }

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel 
          className="panel" 
            header="About The Book"
            key="1"
            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/books">read more</Link></span>
            </div>
          </Panel>

          <Panel
          className="panel" 
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton : 'https://www.stratton-press.com/books/fun-run-a-novel/',
                          barnes: 'https://www.barnesandnoble.com/w/fun-run-molly-mcginty/1133492292?ean=9781643457178',
                          amazon :'https://www.amazon.com/Fun-Run-Novel-Molly-McGinty-ebook/dp/B07XLD6H8K/ref=sr_1_1?keywords=9781643457178&qid=1568650644&s=gateway&sr=8-1',  
                        },
                        reviews:{},
                        isNonfront:false,
                        paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
          className="panel" 
            header="Purchase PaperBack" 
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                        data={{
                            ebooks:{},
                            isNonfront:false,
                            reviews:{},
                            paperback:{
                                amazon:'https://www.amazon.com/Fun-Run-Novel-Molly-McGinty/dp/1643453890/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1568650644&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/fun-run-molly-mcginty/1133492292?ean=9781643453897',
                                booksamillion:'https://www.booksamillion.com/p/Fun-Run/Molly-McGinty/9781643453897?id=8009965417365&_ga=2.155459835.1905326297.1602216593-1770015116.1600996550',
                          }
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions