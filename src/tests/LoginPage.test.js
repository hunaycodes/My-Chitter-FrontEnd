// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import LoginPage from '../Components/LoginPage';
// import axios from 'axios';

// jest.mock('axios');

// describe('Login component', () => {

//     beforeEach(() => {
//         jest.clearAllMocks();
//     });

//     it('renders the form and input fields', () => {
//         const { getByText, getByPlaceholderText } = render(<LoginPage />);
//         expect(screen.getByText('Log in to your chitter account')).toBeInTheDocument();
//         expect(screen.getByPlaceholderText('Your username')).toBeInTheDocument();
//         expect(screen.getByPlaceholderText('Your password')).toBeInTheDocument();
//         expect(screen.getByText('Login')).toBeInTheDocument();
//         expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
//         expect(screen.getByText('Register now!')).toHaveAttribute('href', '/register');
//     });



//     it('displays an error message when login fails', async () => {
//         const { getByText, getByPlaceholderText } = render(<LoginPage />);
//         axios.post.mockRejectedValue({ response: { data: { message: 'Invalid credentials' } } });
//         fireEvent.submit(screen.getByText('Login'));
//         await waitFor(() => {
//             expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
//         });
//         expect(screen.getByPlaceholderText('Your username')).toHaveValue('');
//         expect(screen.getByPlaceholderText('Your password')).toHaveValue('');
//     });

//     it('logs in successfully and navigates to home page', async () => {
//         const { getByText, getByPlaceholderText, getByRole } = render(<LoginPage setUser={() => { }} />);
//         axios.post.mockResolvedValue({ data: { message: 'Login successful', user: { username: 'testuser' } } });
//         fireEvent.change(screen.getByPlaceholderText('Your username'), { target: { value: 'testuser' } });
//         fireEvent.change(screen.getByPlaceholderText('Your password'), { target: { value: 'testpassword' } });
//         fireEvent.submit(screen.getByText('Login'));
//         await waitFor(() => {
//             expect(screen.getByText('Login successful')).toBeInTheDocument();
//         });
//         expect(screen.getByPlaceholderText('Your username')).toHaveValue('');
//         expect(screen.getByPlaceholderText('Your password')).toHaveValue('');
//         expect(screen.getByRole('navigation')).toHaveTextContent('Home');
//     });

// });

