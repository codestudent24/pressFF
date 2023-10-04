export const calculateIndex = (height, weight) => {
  const myHeight = Number(height) / 100
  const myWeight = Number(weight)

  return (myWeight / (myHeight * myHeight)).toFixed(2)
}

export const calculateColor = (value) => {
  if (value < 16) return {color: "#6699cc"}
  if (value < 18.5) return {color: "#339966"}
  if (value < 25) return {color: "#33cc66"}
  if (value < 30) return {color: "#00cc00"}
  if (value < 35) return {color: "#ff6600"}
  if (value < 40) return {color: "#ff3300"}
  return {color: "#FF0000"}
}