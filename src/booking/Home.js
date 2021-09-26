import {useSelector} from 'react-redux';

const Home = () => {
    const {user} = useSelector((state) => ({...state})); //user is destructured off of state, which is spread onto an object and then returned

    return (
        <div className="container-fluid h1 p-5 text-center">
            Home Page
        </div>
    );
}

export default Home;