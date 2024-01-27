import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  render() {
    return html`
      <input type="file" id="fileInput">
      <button @click="${this.uploadFile}">Upload</button>
    `;
  }

    async uploadFile() {
        const fileInput = this.shadowRoot.querySelector('#fileInput');
        const file = fileInput.files[0];

        if (!file) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        // const targetUrl = 'https://b2b.loupefy.com/b2b/similarity';
        const targetUrl = 'https://declaration.acb.gov.ge/Api/Declarations?Key=მერსედესი'

        try {
            const response = await fetch(targetUrl, {
                method: 'GET',
                // headers: {
                //     'x-access-key': 'c94a79a7-0508-432b-8402-60e4c9e42f89',
                //     // Include any other headers required by the API
                // },
                // body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
}

customElements.define('my-element', MyElement);
