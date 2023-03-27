
import SinglePeep from './SinglePeep';
import { v4 as uuidv4 } from 'uuid';

const AllPeeps = ({ peeps }) => {
    const reversedPeeps = Array.from(peeps).reverse();

    const peepElements = reversedPeeps.map((peep) => {
        const peepWithId = {
            ...peep,
            id: uuidv4()
        };
        return <SinglePeep peep={peepWithId} key={peepWithId.id} />;
    });

    return <div>{peepElements}</div>;
};

export default AllPeeps;
