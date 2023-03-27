// // import { render, screen } from '@testing-library/react';
// // import AllPeeps from '../Components/AllPeeps';

// // const mockData = [
// //     {
// //         id: '1',
// //         username: 'hunaycomb',
// //         peepContent: 'Feeling excited!',
// //         date: '2022-01-17',
// //     },
// //     {
// //         id: '2',
// //         username: 'nanaama12',
// //         peepContent: 'Happy new year',
// //         date: '2023-01-01',
// //     },
// // ];

// // describe('AllPeeps', () => {
// //     it('renders a list of peeps with correct props', () => {
// //         const { getAllByTestId } = render(<AllPeeps />);
// //         const peepElements = screen.getAllByTestId('single-peep');
// //         expect(peepElements).toHaveLength(mockData.length);

// //         peepElements.forEach((element, index) => {
// //             const { username, peepContent, date } = mockData[index];
// //             expect(element).toHaveTextContent(username);
// //             expect(element).toHaveTextContent(peepContent);
// //             expect(element).toHaveTextContent(date);
// //         });
// //     });
// // });

// import { render, screen } from '@testing-library/react';
// import testPeeps from '../../mockPeep.json';
// import AllPeeps from './AllPeeps';

// jest.mock("../Components/SinglePeep", () => {
//     return function mockPeepCard() {
//         return <span data-testid="mockPeep">All Peep Component</span>
//     }
// })

// describe(`AllPeeps tests`, () => {
//     it(`should render same number of PeepCard component as in the samplePeep array`, () => {

//         const samplePeepCard = testPeeps.peeps;

//         render(<AllPeeps peepData={testPeeps.peeps} />)

//         const result = screen.getAllByTestId("mockPeep")

//         expect(result.length).toBe(samplePeepCard.length);
//     })
// })