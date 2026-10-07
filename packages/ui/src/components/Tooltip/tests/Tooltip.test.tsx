import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tooltip } from '../Tooltip';

describe('Tooltip', () => {
  it('renders an accessible control', () => {
    render(<Tooltip content="Help"><button>Info</button></Tooltip>); expect(screen.getByRole('button', { name: 'Info' })).toBeVisible();
  });
});
