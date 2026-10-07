import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Accordion } from '../Accordion';

describe('Accordion', () => {
  it('renders an accessible control', () => {
    render(<Accordion items={[{ id: 'one', title: 'One', content: 'Content' }]} />); expect(screen.getByRole('button', { name: /One/ })).toBeVisible();
  });
});
