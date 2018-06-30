export const handler = (event, context, callback) => {
  const send = body => callback(null, { statusCode: 200, body: JSON.stringify(body) })

  const body = JSON.parse(event.body)
  console.log(JSON.stringify({ body }, null, 2))
  send({ body })
}