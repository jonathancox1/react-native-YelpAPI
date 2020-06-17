import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm, // term: term
                    location: 'atlanta'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setError('Somethings Gone Wrong!')
        }
    }

    // calls the api only one time
    useEffect(() => {
        searchApi('pizza');
    }, []);

    return [searchApi, results, error];
};