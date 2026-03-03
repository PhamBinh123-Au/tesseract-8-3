const database = {
    "quynhtien": {
        pass: "2008",
        name: "Quỳnh Tiên",
        wish: "Chúc Tiên luôn rạng rỡ và đỗ vào trường đại học mơ ước nhé! ✨",
        images: ["img/tien1.jpg", "img/tien2.jpg"]
    }
    // Em cứ copy mẫu trên để thêm các bạn khác vào đây
};

function checkAccess() {
    const user = document.getElementById('username').value.toLowerCase().trim();
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error-msg');

    if (database[user] && database[user].pass === pass) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('private-content').style.display = 'block';
        document.getElementById('welcome-name').innerText = "Chào " + database[user].name;
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
