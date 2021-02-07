import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        WrappedComponent
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent) {
  return class NewComponent extends PureComponent{
    render() {
      return <WrappedComponent/>
    }
  }
}

const EnhanceComponent = enhanceComponent(App);
export default EnhanceComponent;