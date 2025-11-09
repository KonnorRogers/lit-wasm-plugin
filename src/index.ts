import {render as ssrRender} from '@lit-labs/ssr/lib/render';
import {collectResult} from '@lit-labs/ssr/lib/render-result.js';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

import "@awesome.me/webawesome/dist/components/callout/callout.js"
import "@awesome.me/webawesome/dist/components/rating/rating.js"
import "@awesome.me/webawesome/dist/components/card/card.js"
import "@awesome.me/webawesome/dist/components/relative-time/relative-time.js"
import "@awesome.me/webawesome/dist/components/tag/tag.js"
import "@awesome.me/webawesome/dist/components/divider/divider.js"
import "@awesome.me/webawesome/dist/components/avatar/avatar.js"

export async function render() {
    const input = JSON.parse(Host.inputString())

    const templ = ssrRender(unsafeHTML(input.content))
    const result = await collectResult(templ)
    Host.outputString(result)
}
