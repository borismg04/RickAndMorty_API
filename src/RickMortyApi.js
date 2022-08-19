import { LitElement, html, css } from 'lit';
import './components/GetData';

export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
    };
  }

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
    this.addEventListener('Api-data', (e) => {
      this._dataFormat(e.detail.data);
    })
  }

  _dataFormat(data) {
    let characters=[];

    data['results'].forEach(character => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
      });
    });
    this.wiki = characters;
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

  getTemplate() {
    return html`
      ${this.wiki.map(character =>html `
        <div class="card">
          <div class="">
          </div>
        </div>
      `)}
    `;
  }
}
