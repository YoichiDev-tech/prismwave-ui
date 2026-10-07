import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Pagination } from '../Pagination';

describe('Pagination', () => {
  it('renders an accessible control', () => {
    render(<Pagination page={1} pageCount={2} onPageChange={() => undefined} />);
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeVisible();
  });
});
