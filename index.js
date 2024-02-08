document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault()
    }
})