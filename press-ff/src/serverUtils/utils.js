export const callBackendAPI = async () => {
  const response = await fetch('express_backend');
  const body = await response.json()

  if (response.status !== 200) {
    throw Error(body.message)
  }

  return body
}

export const getMyData = async () => {
  const response = await fetch('my-data');
  const body = await response.json()

  if (response.status !== 200) {
    throw Error(body.message)
  }

  return body
}

export const sendMyData = async (myData) => {
  const responseBody = { ...myData }
  responseBody.now = new Date().toLocaleDateString()
  const bodyStringified = JSON.stringify(responseBody)
  console.log(typeof bodyStringified, bodyStringified)

  const response = await fetch('my-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyStringified
  });
  const data = await response.json()

  if (response.status !== 200) {
    throw Error(data.message)
  }

  return
}