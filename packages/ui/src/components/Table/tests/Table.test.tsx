import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table } from '../Table';

describe('Table', () => {
  it('renders an accessible control', () => {
    render(<Table columns={[{ key: 'name', header: 'Name' }]} data={[{ name: 'A' }]} />);
    expect(screen.getByRole('cell', { name: 'A' })).toBeVisible();
  });
});
