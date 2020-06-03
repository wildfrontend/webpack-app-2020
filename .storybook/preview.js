import { addParameters } from '@storybook/client-api'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { setConsoleOptions } from '@storybook/addon-console'

/**
 * view port
 */
const ADDTIONAL_VIEWPORT = {
    ...INITIAL_VIEWPORTS,
    desktop1920: {
        name: '1920 x 1090',
        styles: {
            width: '1920px',
            height: '1080px',
        },
    },
}

addParameters({
    viewport: {
        viewports: ADDTIONAL_VIEWPORT, // newViewports would be an ViewportMap. (see below for examples)
        defaultViewport: 'iphone5',
    },
})

/**
 * console.log
 */

const panelExclude = setConsoleOptions({}).panelExclude

setConsoleOptions({
    panelExclude: [...panelExclude, /deprecated/],
})
