import { LitElement, html, css } from 'lit';
import './components/GetData';

export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
    this.addEventListener('Api-data', (e) => {
      console.log(e);
      // this.data = e.detail.data;
    })
  }

  render() {
    return html`
      <get-data
        url="https://rickandmortyapi.com/api/character"
        method="GET"
      >
      </get-data>
    `;
  }
}
