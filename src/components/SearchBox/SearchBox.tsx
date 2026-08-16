import css from './SearchBox.module.css';

// Користувач може шукати нотатки за допомогою текстового поля, при зміні значення якого на бекенд відправляється запит для отримання нотаток, які підходять під пошук. Для цього до запиту потрібно додати параметр search із текстовим значенням для пошуку:

// GET https://notehub-public.goit.study/api/notes?search=mysearchtext

// Обов’язково зробіть відкладений пошук з use-debounce, щоб не виконувати запит на кожний введений символ. Хук useDebouncedCallback варто використовувати саме в Арр.

export default function SearchBox() {
    return (
        <input className={css.input} type="text" placeholder="Search notes" />
    );
}
