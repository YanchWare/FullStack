import React from 'react';
import Relay from 'react-relay';

class Title extends React.Component
{
  render(){
    return(
      <h2 className="ui header">
        <i className="announcement icon"></i>
        <div className="content">
          Hello {this.props.viewer.name} your id is {this.props.viewer.id}
        </div>
      </h2>
    );
  }
}

export default Relay.createContainer(Title, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        id,
        name
      }
    `,
  },
});
