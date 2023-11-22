document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button[type="submit"]')
    const baseUrl = ''
    const title = document.getElementById('title')
    const body = document.getElementById('body')
    const overallBalance = document.getElementById('overall-balance')
    const hidden = document.getElementById('hidden')
    const error = document.getElementById('hidden')
    let titleValue = null
    let bodyValue = null

    title.addEventListener('change', (e) => {
        titleValue = e.target.value
    })

    body.addEventListener('change', (e) => {
        bodyValue = e.target.value
    })

    const fetchFormData = () => {

        fetch(baseUrl + '/overall_balance_get/', {
            method: 'POST',
            body: JSON.stringify({
                title: titleValue,
                body: bodyValue,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                overallBalance.innerText = json.overall_balance.toFixed(2)
                hidden.style.display = 'block'
            })
            .catch(() =>{
                error.style.display = 'block'
            })

    }

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        fetchFormData()
    })
})