beforeEach(() => {
  const {
    body
  } = document

  Array.from(body.children)
    .forEach((child) => {
      body.removeChild(child)
    })
})
