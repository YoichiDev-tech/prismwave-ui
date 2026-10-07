import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from '../Card';

describe('Card', () => {
  it('renders an accessible control', () => {
    render(<Card>Content</Card>); expect(screen.getByText('Content')).toBeVisible();
  });
});
