import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ListCoins from '../component/CoinList';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component', () => {
    useSelector.mockReturnValue({ isLoading: true, coinList: [] });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListCoins />
        </MemoryRouter>
      </Provider>,
    );
    expect(
      screen.getByText('loading...'),
    ).toBeInTheDocument();
  });

  test('should display coins', () => {
    const mockCoins = [
      { id: 1, symbol: 'BTC', percent_change_1h: 5 },
      { id: 2, symbol: 'ETH', percent_change_1h: -2 },
    ];
    useSelector.mockReturnValue({ isLoading: false, coinList: { data: mockCoins } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListCoins />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('ETH')).toBeInTheDocument();
  });
});