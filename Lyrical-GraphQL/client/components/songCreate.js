import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link, hashHistory} from 'react-router';
import query from '../queries/fetchSongs';


class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {title: ''}
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{query: query}]
    }).then(() => hashHistory.push('/'))
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create new song.</h3>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <label>Song title:</label>
          <input
            type="text"
            onChange={e => this.setState({title: e.target.value})}
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title:$title){
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
