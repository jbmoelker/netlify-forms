export const handler = (event, context, callback) => {
  const send = body => callback(null, { statusCode: 200, body: JSON.stringify(body) })
  console.log(JSON.stringify({ event, context }, null, 2))
  send({ event, context })
}