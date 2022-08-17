import { LitElement } from 'lit-element';

export class GetData extends LitElement {

  static get properties() {
    return {
      url: { type: String },
      method : { type: String },
    };
  }

  constructor() {
    super();
    console.log("Hola desde Get Data ");;
  }

  _sendData() {

  }
}

customElements.define('get-data', GetData);
