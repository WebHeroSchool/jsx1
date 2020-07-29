import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';


const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    fetchRepos: [],
    fetchUser: [],
    fetchFailure: '',
    fetchRequest: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(answer => this.setState({fetchRequest: answer}))
    .catch(e => console.log('error'));

    octokit.repos.listForUser({
      username: 'Heiden88',
    }).then(({ data }) => {
      this.setState({
        fetchRepos: data,
        isLoading: false,
      });
    });

    octokit.users.getByUsername({
      username: 'Heiden88',
    }).then(({ data }) => {
      this.setState({
        fetchUser: data,
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

    const { isLoading, fetchRepos, fetchUser } = this.state;
    return (
    <div>
      {!isLoading && <div>
        <img src = {fetchUser.avatar_url} alt = 'avatar' className = {styles.img}></img>
        <h2>{fetchUser.login}</h2>
        <h3>{fetchUser.name}</h3>
        <p>{fetchUser.location}</p>
      </div>}
      <h1 className = {styles.title}>{ isLoading ? <Preloader /> : 'My repositories' }</h1>
      {!isLoading && <ol>
        {fetchRepos.map(repo => (<li key = {repo.id}>
          <a href = {repo.html_url} alt = 'htmlUrl'>{repo.name}</a>
        </li>))}
      </ol>}
    </div>
    );
  }
}

export default About;