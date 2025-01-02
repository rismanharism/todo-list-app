// Optional: Tambahkan JavaScript jika ada fitur interaktif di masa depan.
// Misalnya, untuk konfirmasi sebelum menghapus tugas:
document.addEventListener('DOMContentLoaded', () => {
    const deleteLinks = document.querySelectorAll('a[href^="/delete/"]');
    deleteLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (!confirm('Are you sure you want to delete this task?')) {
                event.preventDefault();
            }
        });
    });
});
