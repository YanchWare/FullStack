import Relay from 'react-relay';

export default class AppHomeRoute extends Relay.Route {
  static get queries(){
    return {
      viewer: () => Relay.QL`query {viewer}`
    };
  }

  static get routeName(){
    return 'AppHomeRoute';
  }
}
