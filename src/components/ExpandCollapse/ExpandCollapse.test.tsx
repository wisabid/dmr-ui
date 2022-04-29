import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import ExpandCollapse from './ExpandCollapse';

describe('ExpandCollapse component', () => {
    it('renders component & all its props', async () => {
        render(<ExpandCollapse handleClick={() => {}} expand={false} />);
        const linkElement = screen.getByText(/▼/i);
        expect(linkElement).toBeInTheDocument();
    });
})