//import { fireEvent } from '@testing-library/react';
import { renderWithRouter } from './integRTLHeplers';

describe('Sample test', () => {
    it('Validate the login Button Text', async () => {
        const {
            getByText
        } = renderWithRouter();
        expect(getByText('Welcome to VodQA')).toBeDefined();
    });
    it('Validate vodqa 2019 schedule', async () => {

    });

    it('Validate error message on incorrect credentials', async () => {

    });




});

