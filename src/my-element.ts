import { html, css, LitElement } from "lit"

export class MyElement extends LitElement {
    static styles = css`div { color: red; }`

    static properties = {
        name: {}
    }

    static {
        (globalThis as any).customElements.define("my-element", this)
    }

    name: string = ""

    render () {
        return html`<div>Hello ${this.name}</div>`
    }
}
