/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerDetail from './VillagerDetail';
import { MemoryRouter } from 'react-router-dom';

describe('Villager Detail component', () => {
  afterEach(() => cleanup());
  it('renders Villager Details', () => {
    const { asFragment } = render(<MemoryRouter><VillagerDetail /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
