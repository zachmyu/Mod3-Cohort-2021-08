if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

// const body = JSON.stringify({ color: "green" });
// fetch('/colors/1', { method: 'PUT', body })
//   .then(res => res.json())
//   .then(resBody => console.log(resBody))


// fetch("/colors/1", {
//   method: "PUT",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     color: "green"
//   })
// })
//   .then(res => res.json())
//   .then(resBody => console.log(resBody))

async function updateColors() {
  const response = await fetch("/colors/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      {
        color: "green"
      }
    )
  })
  const resBody = await response.json()
  console.log(resBody)
}


updateColors()
