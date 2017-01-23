class TypeMap {
  constructor() {
    this.components = {};
    this.registerComponent = this.registerComponent.bind(this);
  }

  registerComponent(componentName, reactComponent) {
    this.components[componentName] = reactComponent;
  }

  getComponent(componentName) {
    var returnComponent = this.components[componentName];
    if (!returnComponent) {
      console.error("Not a registered Component: ", componentName);
    }
    return returnComponent;
  }
}

var typeMap = new TypeMap;

export default typeMap;
