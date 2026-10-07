import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tabs } from '../Tabs';

describe('Tabs', () => {
  it('renders an accessible control', () => {
    render(<Tabs items={[{ id: 'one', label: 'One', content: 'Content' }]} />);
    expect(screen.getByRole('tab', { name: 'One' })).toBeVisible();
  });
});
