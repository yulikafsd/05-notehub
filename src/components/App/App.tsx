import css from './App.module.css';

// Рекомендуємо створити окремі компоненти для відображення індикатора завантаження під час виконання HTTP-запитів, повідомлень про помилки та інших статусів запиту.

export default function App() {
    return (
        <div className={css.app}>
            <header className={css.toolbar}>
                {/* SearchBox */}
                <button className={css.button}>Create note +</button>
                {/* Pagination */}
            </header>
            {/* Notelist */}
            {/* Modal */}
        </div>
    );
}
