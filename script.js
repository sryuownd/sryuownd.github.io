document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы записи
    const form = document.getElementById('appointmentForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const phone = document.getElementById('phone').value;
            const name = document.getElementById('name').value;

            // Валидация
            if (!phone || !name) {
                showModal('Ошибка', 'Заполните все обязательные поля!', 'danger');
                return;
            }

            // Проверка телефона (минимум 10 цифр)
            const phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length < 10) {
                showModal('Ошибка', 'Номер телефона должен содержать минимум 10 цифр!', 'danger');
                return;
            }

            console.log('Данные формы:', { phone, name });
            showModal('Успех', 'Данные отправлены! Мы свяжемся с вами в ближайшее время.', 'success');
            form.reset();
        });
    }

    // Поиск на странице услуг
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const items = document.querySelectorAll('#servicesList .list-group-item');

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }
});

// Функция для модального окна
function showModal(title, message, type = 'success') {
    const modal = new bootstrap.Modal(document.getElementById('resultModal'));
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').textContent = message;
    document.getElementById('modalBody').className = `alert alert-${type}`;
    modal.show();
}