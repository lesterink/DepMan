// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DepMan title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DepMan/i);
    expect(titleElement).toBeInTheDocument();
});
