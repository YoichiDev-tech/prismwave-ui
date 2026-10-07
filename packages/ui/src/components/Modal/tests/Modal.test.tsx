import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Modal } from '../Modal';

describe('Modal', () => {
  it('renders an accessible control', () => {
    render(
      <Modal open onClose={() => undefined} title="Details">
        Content
      </Modal>,
    );
    expect(screen.getByRole('dialog', { name: 'Details' })).toBeVisible();
  });
});
