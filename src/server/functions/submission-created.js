export const handler = (event, context, callback) => {
  const send = body => callback(null, { statusCode: 200, body: JSON.stringify(body) })

  const body = JSON.parse(event.body)
  // console.log(JSON.stringify({ body }, null, 2))
  console.log('\nevent.body.payload\n')
  console.log(event.body.payload)
  console.log('\nbody.payload\n')
	console.log(body.payload)
  send({ body })
}