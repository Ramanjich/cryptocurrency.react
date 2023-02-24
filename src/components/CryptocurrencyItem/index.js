import './index.css'

const CryptocurrencyItem = props => {
  const {eachList} = props
  const {usdValue, euroValue, currencyName, currencyLogo} = eachList

  return (
    <div className="currency-items">
      <div className="items-coin-type">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="item-type-image"
        />
        <p className="items-type-para">{currencyName}</p>
      </div>

      <div className="items-usd-euro-container">
        <p className="items-usd-para">{usdValue}</p>
        <p className="items-euro-para">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
