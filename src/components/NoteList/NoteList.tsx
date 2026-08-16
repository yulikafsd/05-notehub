import css from './NoteList.module.css';

// Для отримання списку нотаток з бекенда, всіх інших запитів по роботі з колекцією нотаток та збереження серверних даних використовуйте TanStack Query.

// Додайте умову, щоб компонент NoteList рендерився лише в тому випадку, якщо в колекції нотаток є хоча б один елемент.

// При натисканні на кнопку Delete в елементі списку нотаток, відповідна нотатка має видалятися на бекенді та оновлюватись збережені серверні дані.

export default function NoteList() {
    return (
        <ul className={css.list}>
            {/* Набір елементів списку нотаток */}
            <li className={css.listItem}>
                <h2 className={css.title}>Note title</h2>
                <p className={css.content}>Note content</p>
                <div className={css.footer}>
                    <span className={css.tag}>Note tag</span>
                    <button className={css.button}>Delete</button>
                </div>
            </li>
        </ul>
    );
}
