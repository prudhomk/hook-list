/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Village from '../containers/Village';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://ac-vill.herokuapp.com/villagers/:id',
    (req, res, ctx) => {
      return res(
        ctx.json(
          [{
            'name':'Admiral',
            'image':'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/Admiral_NH.png/revision/latest?cb=20200802081138',
            'species':'bird',
            'phrase':'aye aye',
            'quote': 'Only quitters give up.',
            'personality': 'cranky',
            'birthday': 'January 27th (Aquarius)',
            'skill': 'Writing about pickles',
          }
          ])
      );
    }
  )
);

describe('Village container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of villagers', async () => {
    render(<MemoryRouter><Village /></MemoryRouter>);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul.children.length).toEqual(25);
  });
});
