import { render, screen } from '@testing-library/react';
import GithubApp from './GithubApp';

test('renders learn react link', () => {
  render(<GithubApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
