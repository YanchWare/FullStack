import React from 'react';
import Relay from 'react-relay';

class Title extends React.Component
{
  render(){
    return(
      <h2 className="ui header">
        <i className="announcement icon"></i>
        <div className="content">
          Hello {this.props.viewer.widgets.edges[0].node.name}
        </div>
      </h2>
    );
  }
}

export default Relay.createContainer(Title, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
});
