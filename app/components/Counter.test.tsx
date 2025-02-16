import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('should increment the counter when clicking the button', () => {
    // Arrange
    render(<Counter />);
    const button = screen.getByText('Increment');
    const initialCount = screen.getByText('Counter: 0');
    
    // Act
    fireEvent.click(button);
    
    // Assert
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();
  });
});
