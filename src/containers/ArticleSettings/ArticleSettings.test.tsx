import { render, screen } from '@testing-library/react';
import ArticleSettings from './ArticleSettings';

describe('ArticleSettings component', () => {
    it('renders component & all its props', async () => {
        render(<ArticleSettings label="ABCD" name="abcd" formData={{}} subOf="" setFormData={() => {}} />);
        const labelElem = screen.getByText(/ABCD/i);
        expect(labelElem).toBeInTheDocument();
    });
})