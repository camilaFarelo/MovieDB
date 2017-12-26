import React from 'react';
import MovieList from '../../components/MovieList';
import { shallow } from 'enzyme';

function mockMovies() {
  return [
    {
      id: 34,
      title: 'movie title 1',
      release_date: '2017-09-05',
      poster_path: '/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
      overview: 'In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.',
    },
    {
      id: 43,
      title: 'movie title 2',
      release_date: '2017-09-03',
      poster_path: '/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
      overview: 'In a small town in Maine, seven children known as The Losers.',
    }
  ]
}
describe('<MovieList />', () => {
  it('Render movie', () => {
    const movies = mockMovies();
    const wrapper = shallow(
      <MovieList movies={movies} />
    );
    expect(wrapper.find('Movie').length).toEqual(2);
  });
});
