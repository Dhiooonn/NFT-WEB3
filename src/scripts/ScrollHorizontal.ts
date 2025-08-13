document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("nftContainer");

    if (!container) return;

    // Konversi scroll vertical touchpad jadi horizontal
    container.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            // Kalau scroll lebih dominan di vertical, ubah jadi horizontal
            e.preventDefault();
            container.scrollBy({
                left: e.deltaY,
                behavior: "smooth",
            });
        }
    });

    // Opsional: tetap biarkan horizontal asli dari touchpad
    container.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaX) > 0) {
            container.scrollBy({
                left: e.deltaX,
                behavior: "smooth",
            });
        }
    });
});
