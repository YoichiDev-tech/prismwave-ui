import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from '../Input';

describe('Input', () => {
  it('renders an accessible control', () => {
    render(<Input aria-label="Email" />); expect(screen.getByRole('textbox', { name: 'Email' })).toBeVisible();
  });
});
