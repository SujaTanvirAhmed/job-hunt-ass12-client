import styles from "./NotFound.module.css";

export const NotFound = () => {
    return (
        <div>
            <h1 className={styles['not-found-title']}>404 - Page not found!</h1>
        </div>
    );
}