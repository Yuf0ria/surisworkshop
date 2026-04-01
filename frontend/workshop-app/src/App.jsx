import { useEffect } from 'react';
import axios from 'axios';

function App() {
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => console.log(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    return <h1>Hello MERN Vite!</h1>;
}

export default App;