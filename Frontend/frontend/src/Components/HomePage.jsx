import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import AllPeeps from './AllPeeps';

const HomePage = ({ peeps, setUser, user }) => {
    // console.log(peeps)

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:4000/logout');
            if (response.status === 200) {
                window.location.href = `http://localhost:4000/login`;
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <h1> Connect and Chirp with Chitter,{user.username}!</h1>
            <br />
            <AllPeeps peeps={peeps} />
            <button onClick={handleLogout}>Logout</button>
            <Footer />


        </>
    )
}


export default HomePage;