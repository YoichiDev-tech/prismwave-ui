import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from '../Skeleton';

describe('Skeleton', () => {
  it('renders an accessible control', () => {
    render(<Skeleton data-testid="skeleton" />); expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true');
  });
});
