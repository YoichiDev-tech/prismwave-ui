import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders an accessible control', () => {
    render(<Checkbox label="Accept" />);
    expect(screen.getByRole('checkbox', { name: 'Accept' })).toBeVisible();
  });
});
