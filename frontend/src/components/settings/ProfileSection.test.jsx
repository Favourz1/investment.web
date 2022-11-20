import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileSection from './ProfileSection';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    createRoot(div).render(<ProfileSection />);
});
