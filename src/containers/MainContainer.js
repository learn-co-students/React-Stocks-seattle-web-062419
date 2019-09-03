import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state={
    stocks:[],
    portfolios:[],
    priceChecked:false,
    alphaChecked:false,
    filterstocks:[]
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks").then(res=>res.json())
    .then(data=> {
      this.setState({
        stocks:data,
        filterstocks:data
      })
    })
  }
  handleaddPortfolio=(id)=> {
    this.state.stocks.map(stock=>{
      if(stock.id===id && !this.state.portfolios.includes(stock)) {
        this.setState({
          portfolios:[...this.state.portfolios,stock]
        })
      }
    })
  }
  handlesellStock=(id)=> {
    const newPortfolios=this.state.portfolios.filter(stock=>{
      return stock.id !==id
    })
    this.setState({
      portfolios:newPortfolios
    })
  }
  

  handleSortByAlpha=()=>{
     
     let newstocks=this.state.filterstocks.sort((stock1,stock2)=>{
       return (stock1.name[0] > stock2.name[0])? 1:((stock1.name[0] < stock2.name[0])? -1:0)
     })
     this.setState({
       filterstocks:newstocks,
       alphaChecked:!this.state.alphaChecked
     })
  }

  handleSortByPrice=()=> {
    let newstocks=this.state.filterstocks.sort((stock1,stock2)=>{
      return (stock1.price > stock2.price)? 1:((stock1.price < stock2.price)? -1:0)
    })
    this.setState({
      filterstocks:newstocks,
      priceChecked:!this.state.priceChecked
    })
  }

  handleFilter=(e)=>{
     const newstocks=this.state.stocks.filter(stock=>{
       return stock.type===e.target.value
     })
     this.setState({
      filterstocks:newstocks
    })

  }
  

  render() {
    return (
      <div>
        <SearchBar stocks={this.state.filterstocks}
        sortByAlpha={this.handleSortByAlpha}
        sortByPrice={this.handleSortByPrice}
        priceChecked={this.state.priceChecked}
        alphaChecked={this.state.alphaChecked}
        stockFilter={this.handleFilter}

        />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.filterstocks}
              addPortfolio={this.handleaddPortfolio}
              clickHanlder={this.handleaddPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolios}
              sellStock={this.handlesellStock}
              clickHanlder={this.handlesellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
