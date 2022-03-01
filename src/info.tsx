/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component } from "react";

class Info extends Component<{ titulo: string, texto: string }> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.props.texto}</p>
      </div>
    );
  }
}
export default Info

