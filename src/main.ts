import Number from './Class/Number'

const num = new Number()

function generate(): void {
  num
    .randomNumber()
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

setInterval(generate, 5000)
