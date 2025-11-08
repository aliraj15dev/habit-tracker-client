import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
    const {user} = use(AuthContext)
    return (
        <div>
            {user.displayName}
        </div>
    );
};

export default Home;