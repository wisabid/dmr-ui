import { render } from '@testing-library/react';
import ToggleSwitch from './ToggleSwitch';

describe('ToggleSwitch component', () => {
    it('renders component & all its props', async () => {
        const { container } = render(<ToggleSwitch name="abcd" formData={{}} subOf="" setFormData={() => {}} />);
        const checkbox = container.querySelector('input[type="checkbox"]')
        expect(checkbox).toBeInTheDocument();
    });
})