import React from 'react'
import ReactDOM from 'react-dom'
// import { renderToString } from 'react-dom/server'
// import { renderStatic } from 'glamor/server'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


// const { css } = renderStatic(() => {
// 	return React.renderToString(<App />)
// })

// const html = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>GCF</title>
//   // <style>${css}</style>
// </head>
// <body>
//   ${renderToString(<App />)}
// </body>
// </html>
// `
// export default html


ReactDOM.render(
 <App />,
 document.getElementById('root')
)
registerServiceWorker()
