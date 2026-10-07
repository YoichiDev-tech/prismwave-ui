import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Select } from '../Select';

describe('Select', () => {
  it('renders an accessible control', () => {
    render(<Select aria-label="Role"><option>Developer</option></Select>); expect(screen.getByRole('combobox', { name: 'Role' })).toBeVisible();
  });
});
