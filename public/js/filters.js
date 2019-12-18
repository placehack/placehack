function cardSelected(event) {
    console.log(event.target.id)
    const id = event.target.id
    const classNam = document.getElementById(`${id}`).className
    if(classNam == 'filter-card') {
        document.getElementById(`${id}`).className += ' filter-selected'
        //console.log(document.getElementById(`${id}`).previousSibling.previousSibling)
        document.getElementById(`${id}`).previousSibling.previousSibling.checked = true

    } else {
        document.getElementById(`${id}`).className = 'filter-card'
        //console.log(document.getElementById(`${id}`).previousSibling.previousSibling)
        document.getElementById(`${id}`).previousSibling.previousSibling.checked = false     
    }
}