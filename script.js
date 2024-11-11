document.addEventListener("DOMContentLoaded", function() {
    // Temukan tombol "Hire Me" dengan id 'hire-me-button'
    var hireMeButton = document.getElementById("hire-me-button");
    
    // Tambahkan event listener untuk klik pada tombol
    hireMeButton.addEventListener("click", function(event) {
        // Hentikan default behavior dari tautan (href="#")
        event.preventDefault();
        
        // Arahkan browser ke halaman kedua
        window.location.href = "";
    });
});
document.getElementById("My Game").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah link default agar tidak reload halaman
    window.open("https://prinzaruhas.github.io/Alfster/", "_blank"); // Ganti dengan link website kamu
});

