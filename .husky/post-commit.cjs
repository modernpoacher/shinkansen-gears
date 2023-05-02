module.exports = (
  import('@modernpoacher/hooks')
    .then(({
      postCommit
    }) => (
      postCommit()
    ))
)
