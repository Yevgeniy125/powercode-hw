const role = prompt('Введіть імя');

switch (role) {
    case "Admin":
        alert('Вітаю ви Адміністратор!');
        break;
    case "User":
        alert('Ви лише юзер!');
        break;
    case "Moderator":
        alert('Маєте права модератора, це вже краще!');
        break;
    case "superAdmin":
        alert('Завжди раді вітати, Великого Адміністратора!');
        break;
    default:
        alert('Такої ролі не існує');
}
