import { html, css, LitElement } from "lit"

export class MyElement extends LitElement {
    static styles = css`div { color: red; }`

    static properties = {
        name: {}
    }

    static {
        globalThis.customElements.define("my-element", this)
    }

    constructor () {
        super()
        this.name = "foo"
    }


    render () {
        return html`<div>Hello ${this.name}</div>`
    }
}
