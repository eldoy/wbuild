Promise.resolve()

console.log('hello')

async function bye (status) {
  console.log(status)
}

(async function(status) {
    await bye(status)
})('works')
