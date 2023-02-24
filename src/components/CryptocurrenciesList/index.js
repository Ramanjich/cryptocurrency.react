import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const camelCase = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({currencyList: camelCase, isLoading: false})
  }

  rendercurrencyItems = () => {
    const {currencyList} = this.state

    return (
      <div className="currency-list-container">
        <h2 className="currency-heading">Cryptocurrency Tracker</h2>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <div className="tabel-container">
          <div className="currency-items-header">
            <p className="type-para">Coin Type</p>
            <div className="usd-euro-container">
              <p className="usd-para">USD</p>
              <p className="euro-para">EURO</p>
            </div>
          </div>
          {currencyList.map(eachList => (
            <CryptocurrencyItem eachList={eachList} key={eachList.id} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader-con">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.rendercurrencyItems()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
