var ngambiljikadipencetButton = document.querySelectorAll('.btn')
var ngambiltextarea = document.querySelector('textarea')

ngambiljikadipencetButton.forEach(btn => {
    btn.addEventListener('click', () => {
        ngambiltextarea.value += btn.innerText
    })
})
