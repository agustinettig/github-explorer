import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories, Error } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repoSearch, setRepoSearch] = useState('');
  const [inputError, setInputError] = useState('');

  async function handleRepositorySearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!repoSearch) {
      setInputError('Please inform the repository');
      return;
    }

    try {
      const apiResponse = await api.get<Repository>(`repos/${repoSearch}`);
      setRepositories([...repositories, apiResponse.data]);
      setRepoSearch('');
      setInputError('');
    } catch (err) {
      setInputError('There was an error searching for the repository');
    }
  }

  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Explore repositories on Github.</Title>
      <Form hasError={!!inputError} onSubmit={handleRepositorySearch}>
        <input value={repoSearch} onChange={event => setRepoSearch(event.target.value)} placeholder="Type here" />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="/">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
