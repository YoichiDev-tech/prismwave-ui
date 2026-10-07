import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders an accessible control', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeVisible();
  });
});
