import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
    it('renders component & all its props', async () => {
        render(<Dropdown data={["10", "20", "30", "40", "50", "60"]} setFormData={() => {}} formData={{}} name="trial" subOf=''/>);
        const linkElement = screen.getByText(/▼/i);
        expect(linkElement).toBeInTheDocument();
    });
})