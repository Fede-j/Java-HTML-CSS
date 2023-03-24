

const usuarios = document.getElementById ('usuarios')

fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => {
        // Sincronizar las acciones
        console.log (data) 
        data.forEach(post => {
            const li = document.createElement('li')
            li.innerHTML = `
            <h4>${post.name}</h4>
            <p>${post.email}</p>
            `
            usuarios.append(li)

        })
    })