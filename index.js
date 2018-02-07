import html from './src/index'

// module.exports.test1 = (req, res) => {
module.exports.test1 = (event, context, callback) => {
  const response = {
		statusCode: 200,
		headers: {
			'Content-type': 'text/html'
		},
		body: html
  }

  callback(null, response)
}

// module.exports.test1 = (request, response) => {
//   if (req.url === '') {
//     res.send('FUCK YOU')
//     return
//     req.url = '/'
//   }

//   return app.prepare()
//     .then(() => handle(req,res))
//     .catch(ex => {
//       console.error(ex.stack)
//       process.exit(1)
//     })
// }
