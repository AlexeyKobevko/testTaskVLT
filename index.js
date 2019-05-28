/*jshint esversion: 6 */

const container = document.querySelector('.users');

fetch('users.json')
    .then(data => {
        return data.json();
    })
    .then(users => {

        users.forEach(item => {

            let user = document.createElement('div');
            user.classList.add('user-block');
            user.innerHTML = `

                <a class="profile-link" href="#">
                    <img class="round" data-id="${item.username}"
                    src="https://dev1.wf10.ru/empersec-emcat/users-photos/${item.picture}" 
                    alt="${item.username}">
                </a>
                <div class="name-block">
                    ${item.title} ${item.first_name} ${item.last_name}
                </div>
                <div class="location">${item.location.city}</div>
                <div class="user-links">
                    <a href="#">Link</a><a href="#">Link</a>
                </div>

            `;
            container.appendChild(user);
        });
        let user = document.querySelectorAll('.round').forEach(elem => {

            elem.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.target.getAttribute('data-id');
                const container = document.querySelector('.content');
                document.querySelector('.users').remove();

                const item = users.find(elem => elem.username == id);
                const block = document.createElement('div');
                block.classList.add('user-block');
                block.innerHTML = `
                    <img class="round-big" data-id="${item.username}"
                        src="https://dev1.wf10.ru/empersec-emcat/users-photos/${item.picture}" 
                        alt="${item.username}">
                    <div class="name-block">
                        ${item.title} ${item.first_name} ${item.last_name}
                    </div>
                    <div class="birthdate">${item.birthdate}</div>
                    <div class="location">${item.location.state}, ${item.location.city}</div>
                    <div class="phone">${item.phone_number}</div>
                    <div class="user-links">
                        <a href="#">Link</a><a href="#">Link</a>
                    </div>
                    <button onclick="location.reload()">Назад</button>
                `;
                container.appendChild(block);
            });
        });
    });