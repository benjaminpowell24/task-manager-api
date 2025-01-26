const notFound = (req, res) => {
  res.status(404).json({ msg: `Route not found: ${req.originalUrl}` })
}

export default notFound
