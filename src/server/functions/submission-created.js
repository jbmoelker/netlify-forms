export const handler = (event, context, callback) => {
  const send = body => callback(null, { statusCode: 200, body: JSON.stringify(body) })

  const body = JSON.parse(event.body)
  console.log('method:', event.httpMethod)
  console.log('\nbody.payload\n')
	console.log(body.payload)
  send({ body })
}