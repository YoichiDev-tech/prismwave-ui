import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Switch } from '../Switch';

describe('Switch', () => {
  it('renders an accessible control', () => {
    render(<Switch label="Enabled" />);
    expect(screen.getByRole('switch', { name: 'Enabled' })).toBeVisible();
  });
});
