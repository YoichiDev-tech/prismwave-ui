import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Toast } from '../Toast';

describe('Toast', () => {
  it('renders an accessible control', () => {
    render(<Toast title="Saved" onClose={() => undefined} />); expect(screen.getByRole('status')).toBeVisible();
  });
});
