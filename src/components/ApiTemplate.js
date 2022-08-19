import {LitElement,html,css} from 'lit-element';

export class ApiTemplate extends LitElement {
  render () {
    return html`
      <div class="container">
        <h1>The <trong class="title">Rick and Morty</trong>API</h1>

      </div>
    `;
  }
}

customElements.define('api-template', ApiTemplate);
