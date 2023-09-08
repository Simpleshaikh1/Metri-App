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
  const { priceUsd } = coins;

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
              { Number(coins.marketUsd).toLocaleString(undefined, {
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
            { Math.abs(priceUsd).toFixed(5)}
          </p>
          <p className="24hr d-flex-space-be">
            24h %:
            { ' ' }
            <span>
              { ' ' }
              { Number(coins.maxSupply).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="volume d-flex-space-be">
            Volume(24h):
            <span>
              $
              { ' ' }
              { Number(coins.volumeUsd24hr).toLocaleString(undefined, {
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
