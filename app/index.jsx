import _ from 'lodash';
import './index.scss';

class Hello extends React.Component {
  render() {
    var moment = require('moment');
    console.log(moment().format());
    return (
      <h1> Hello World </h1>
    );
  }
}


export default Hello;
