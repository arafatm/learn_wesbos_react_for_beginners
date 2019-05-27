import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Fragments allow returning sibling elements</p>
        <form className="store-selector">
          <h2>Please Enter a Store</h2>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;