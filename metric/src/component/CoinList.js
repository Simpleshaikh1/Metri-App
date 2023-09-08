import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/coinlore/CoinSlice';

const ListCoins = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const coinLists = useSelector((store) => store.coin);
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const [search, setSearch] = useState(' ');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  const detailPage = (coins) => {
    navigate(`details/${coins.id}`, { state: { coins } });
  };

  // console.log(detailPage(), 'detail-page');

  return (
    <>
      <form className="container my5" onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
            placeholder="Enter Currency Name"
            className="search-bar"
          />
        </div>
        <BsSearch className="search-icon" />
      </form>
      <div className="container grid my5s">
        {coinLists.isLoading && <div>loading...</div>}
        {
          !coinLists.isLoading && coinLists.coinList
            .filter((coin) => {
              const { symbol } = coin;
              console.log(symbol);
              return search.toLocaleLowerCase() === '' ? coin : symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase());
            })
            .map((coin) => {
              const { changePercent } = coin;
              return (
                <button
                  type="button"
                  key={coin.id}
                  className="card"
                  onClick={() => detailPage(coin)}
                >
                  <h3>{coin.symbol}</h3>
                  <div className="statistic">
                    <div className="face-up">
                      {changePercent < 0 ? (
                        <span>
                          <FaChevronDown color="red" />
                          {Math.abs(changePercent).toFixed(2)}
                        </span>
                      ) : (
                        <span>
                          <FaChevronUp color="green" />
                          {Math.abs(changePercent).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })
        }
      </div>
    </>
  );
};

export default ListCoins;
