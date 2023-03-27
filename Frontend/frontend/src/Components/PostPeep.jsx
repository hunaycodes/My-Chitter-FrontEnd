import axios from "axios";
import { useState } from "react";

const PostPeep = ({ user }) => {
    const [peep, setPeep] = useState({
        username: user.username,
        peepContent: '',
        date: new Date().toISOString()
    });

    const handleChange = (e) => {
        setPeep({ ...peep, peepContent: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const newPeep = {
    //         ...peep,
    //         date: new Date().toISOString(),
    //         username: peep.username
    //     };
    //     const response = await axios.post(`http://localhost:4000/post`, newPeep)
    //     alert(response.data.message);
    //     setPeep({ ...peep, peepContent: '' });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPeep = {
            ...peep,
            date: new Date().toISOString(),
            username: peep.username
        };
        try {
            const response = await axios.post(`http://localhost:4000/post`, newPeep)
            alert(response.data.message);
            // Clear the input field
            setPeep({ ...peep, peepContent: '' });
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <div className="container">
            <h1>What's on your mind? Post a peep!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" className="form-control" value={peep.username} onChange={handleChange} placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="peep">Peep:</label>
                    <input type="text" id="peep" name="peep" className="form-control" value={peep.peepContent} onChange={handleChange} placeholder="Type peep here..." />
                </div>
                <button type="submit" className="btn btn-primary">Peep!</button>
            </form>
        </div>
    );
};

export default PostPeep;
