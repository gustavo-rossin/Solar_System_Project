import React from 'react';

const { headline } = this.props;

class Title extends React.Component {
  render() {
    console.log(this.props);
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

export default Title;
