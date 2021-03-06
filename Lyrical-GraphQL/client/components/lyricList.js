import React, {Component} from 'react';

class LyricList extends Component {
  handleOnLike = id => {
    console.log(id)
  };

  renderLyrics() {
    return this.props.lyrics.map(({id, content}) => {
      return (
        <li
          className="collection-item"
          key={id}
        >
          {content}
          <i
            className="material-icons"
            onClick={e => this.handleOnLike(id)}
          >
            thumb_up
          </i>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="collection">{this.renderLyrics()}</ul>
    )
  }
}

export default LyricList;
