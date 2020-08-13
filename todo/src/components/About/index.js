import React from 'react';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';


const octokit = new Octokit();
const name = 'heiden88';

class About extends React.Component {
  state = {
    isLoading: false,
    fetchRepos: [],
    fetchUser: [],
    fetchFailure: false,
    fetchRequest: [],
    fetchTech: [],
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: name,
    }).then(({ data }) => {
      console.log(data);
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

  // onGetObj = url => {
  //   let Httpreq = new XMLHttpRequest();
  //   Httpreq.open("GET",url,false);
  //   Httpreq.send(null);
  //   return Httpreq.responseText;  
  // }

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

    const { isLoading, fetchRepos, fetchUser, fetchFailure, fetchTech } = this.state;
    return (
      <div>
        {fetchFailure && <div>
          {'Что-то пошло не так...'}
        </div>}

        {isLoading && <div className = {styles.infoBlock}>
          <img
            src = {fetchUser.avatar_url}
            alt = 'avatar'
            className = {styles.img}
          ></img>
          <div className = {styles.infoBio}>
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
                Tesla landing
              </a>
              <a
                href = 'https://heiden88.github.io/GameWHSchool/'
                className = {styles.link}
              >
                Game 'Find the bug'
              </a>
            </div>
          </div>
        </div>}
        <h1 className = {styles.title}>{ !isLoading ? <Preloader /> : 'My repositories' }</h1>
        
        {isLoading && <ol>
          {fetchRepos.map(repo => (<li key = {repo.id}>
            <div>
              <div className = {styles.nameAndDate}>
                <a
                  href = {repo.html_url}
                  alt = 'htmlUrl'
                >
                  {repo.name}
                </a>
                <span>{'Updated at ' + new Date(repo.updated_at).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className = {styles.descRep}>
                <span> {
                  fetch(repo.languages_url)
                    .then(response => response.json())
                    .then(result => console.log(result))
                }
                </span>
              </div>
            </div>
          </li>))}
        </ol>}
      </div>
    );
  }
}

export default About;