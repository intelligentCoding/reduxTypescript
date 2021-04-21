import React, {useState} from 'react';
import {useActions } from '../hooks/useActions'
// import {useSelector} from 'react-redux';
import {useTypedSelector } from '../hooks/useTypeSelector';
const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    const { data, error ,loading} = useTypedSelector((state)=> state.repositories);

    const onSubmit =(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        searchRepositories(term);

    }
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input value ={term} onChange={e=> setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>{loading}</h3>}
        {!error && !loading && data.map((name)=><div key={name}>{name}</div>)}
        {!error && !loading && !data && <h3>No Package Found</h3>}
    </div>
    );
};

export default RepositoriesList;