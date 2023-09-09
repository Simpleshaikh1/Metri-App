import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaBitcoin } from 'react-icons/fa';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const home = () => {
    navigate('/');
  };

  const { coins } = location.state || { coins: {} };
  const { price_btc } = coins;

  return (
    <div className="container">
      <div className="info">
        <BiArrowBack className="arrow-back" onClick={() => home()} />
        <h2 className="info-title">
          { coins.name }
          { ' ' }
          { coins.symbol }
        </h2>
        <div className="info-body">
          <p className="market-cap d-flex-space-be">
            Market Cap:
            <span>
              $
              { Number(coins.market_cap_usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="price d-flex-space-be">
            <span>
              Price(Btc):
              { ' ' }
              <FaBitcoin />
              { ' ' }
            </span>
            { ' ' }
            { Math.abs(price_btc).toFixed(5)}
          </p>
          <p className="24hr d-flex-space-be">
            24h %:
            { ' ' }
            <span>
              { ' ' }
              { Number(coins.msupply).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="volume d-flex-space-be">
            Volume(24h):
            <span>
              $
              { ' ' }
              { Number(coins.volume24).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="volume d-flex-space-be">
            Price(Usd):
            <span>
              $
              { ' ' }
              { Number(coins.price_usd).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="volume d-flex-space-be">
            Total Supply:
            <span>
              $
              { ' ' }
              { Number(coins.tsupply).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
