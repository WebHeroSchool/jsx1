import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';


const octokit = new Octokit();
const name = 'Heiden88';

class About extends React.Component {
  state = {
    isLoading: false,
    fetchRepos: [],
    fetchUser: [],
    fetchFailure: false,
    fetchRequest: [],
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: name,
    }).then(({ data }) => {
      this.setState({
        fetchRepos: data,
        isLoading: true,
      });
    })
      .catch(error => {
        this.setState({
          fetchFailure: true,
        });
      });

    octokit.users.getByUsername({
      username: name,
    }).then(({ data }) => {
      this.setState({
        fetchUser: data,
        isLoading: true,
      });
    })
      .catch(error => {
        this.setState({
          fetchFailure: true,
        });
      });
  }

  render() {
    const Preloader = () => (<div className = {styles.loadWrapp}>
      <div className = {styles.load}>
        <div className = {styles.letterHolder}>
          <div className = {styles.letter}>L</div>
          <div className = {styles.letter}>o</div>
          <div className = {styles.letter}>a</div>
          <div className = {styles.letter}>d</div>
          <div className = {styles.letter}>i</div>
          <div className = {styles.letter}>n</div>
          <div className = {styles.letter}>g</div>
          <div className = {styles.letter}>.</div>
          <div className = {styles.letter}>.</div>
          <div className = {styles.letter}>.</div>
        </div>
      </div>
    </div>);

    const { isLoading, fetchRepos, fetchUser, fetchFailure } = this.state;
    return (
    <div>
      {fetchFailure && <div>
        {'error: Пользователь не найден'}
      </div>}

      {isLoading && <div>
        <img src = {fetchUser.avatar_url} alt = 'avatar' className = {styles.img}></img>
        <h2>{fetchUser.login}</h2>
        <h3>{fetchUser.name}</h3>
        <p>{fetchUser.location}</p>
      </div>}
      <h1 className = {styles.title}>{ !isLoading ? <Preloader /> : 'My repositories' }</h1>
      
      {isLoading && <ol>
        {fetchRepos.map(repo => (<li key = {repo.id}>
          <a href = {repo.html_url} alt = 'htmlUrl'>{repo.name}</a>
        </li>))}
      </ol>}
    </div>
    );
  }
}

export default About;