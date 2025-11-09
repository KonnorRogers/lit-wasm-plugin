import {render as ssrRender} from '@lit-labs/ssr/lib/render';
import {collectResult} from '@lit-labs/ssr/lib/render-result.js';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

async function render() {
    let elementPaths = Config.get("elementPaths")
    let elementImports: string[] = []
    if (elementPaths) {
        let imports = []
        try {
            imports = JSON.parse(elementPaths)
        } catch (_e) {
            console.error("Improper elementPaths provided")
        }
        if (Array.isArray(imports)) {
            elementImports = elementImports.concat(imports)
        }
    }

    const input = JSON.parse(Host.inputString())

    if (Array.isArray(input.elementPaths) && input.elementPaths?.length > 0) {
        elementImports = elementImports.concat(input.elementPaths)
    }

    await Promise.allSettled(elementImports.map((str) => {
        return import(str)
    }))

    const templ = ssrRender(unsafeHTML(input.content))
    const result = await collectResult(templ)
    Host.outputString(result)
}

module.exports = {
    render
}
