import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Dropdown } from '../Dropdown';

describe('Dropdown', () => {
  it('renders an accessible control', () => {
    render(<Dropdown trigger="Actions" items={[{ id: 'one', label: 'One' }]} />); expect(screen.getByRole('button', { name: 'Actions' })).toBeVisible();
  });
});
