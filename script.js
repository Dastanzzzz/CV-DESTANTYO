document.addEventListener("DOMContentLoaded", function() {
    // Modal untuk selamat datang
    var modal = document.getElementById("welcomeModal");
    var closeBtn = document.querySelector(".close-btn");

    // Menampilkan modal
    modal.style.display = "block";

    // Menutup modal saat tombol close diklik
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Menutup modal jika mengklik di luar modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Efek scroll untuk fade-in pada elemen-elemen
    document.addEventListener("scroll", function() {
        var sections = document.querySelectorAll('.fade-in');
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('fade-in');
            }
        });
    });
});
