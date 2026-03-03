const database = {
    "quynhtien": {
        pass: "2008",
        name: "Quỳnh Tiên",
        wish: "Chào Tiên, chúc cậu 8/3 rực rỡ và luôn là vì sao sáng nhất lớp mình nhé! ✨",
        images: ["img/tien1.jpg", "img/tien2.jpg"]
    }
};

function checkAccess() {
    const user = document.getElementById('username').value.toLowerCase().trim();
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error-msg');

    if (database[user] && database[user].pass === pass) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('private-content').style.display = 'block';
        document.getElementById('welcome-name').innerText = "Hệ thống nhận diện: " + database[user].name;
        document.getElementById('personal-wish').innerText = database[user].wish;
        
        const gallery = document.getElementById('photo-gallery');
        gallery.innerHTML = "";
        database[user].images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            gallery.appendChild(img);
        });
    } else {
        error.style.display = 'block';
    }
}
