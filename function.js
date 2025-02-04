function adoptPet(petName) {
    alert(`Obrigado por querer adotar o ${petName}!`);
}
function filterPets() {
    const filter = document.getElementById('petFilter').value.toLowerCase();
    const petCards = document.querySelectorAll('.pet-card');

    petCards.forEach(card => {
        const petName = card.querySelector('h3').textContent.toLowerCase();
        if (petName.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    document.getElementById('contatoForm').reset();
}
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('form-adocao').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const animal = document.getElementById('animal').value;
    alert(`Obrigado, ${nome}! Sua solicitação para adotar o ${animal} foi enviada para ${email}.`);
});