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
        {'Что-то пошло не так...'}
      </div>}

      {isLoading && <div>
        <img src = {fetchUser.avatar_url} alt = 'avatar' className = {styles.img}></img>
        <a
          href = {fetchUser.html_url}
          className = {styles.linkUser}
        >
          {fetchUser.name}
        </a>
        <p>{fetchUser.bio}</p>
        <div>
          <div>{'Портфолио:'}</div>
          <a
            href = 'https://heiden88.github.io/TeslaWHSchool/'
            className = {styles.link}
          >
            Tesla landing</a>
          <a
            href = 'https://heiden88.github.io/GameWHSchool/'
            className = {styles.link}
          >
            Game 'Find the bug'
          </a>
        </div>

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