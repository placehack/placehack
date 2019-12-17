function savePlace(event) {
    const button = event.target
  
    axios.get(`/place/${button.id}/save`)
    .then(response => {
        console.log("todo ok")
    })
    .catch(console.error)
}