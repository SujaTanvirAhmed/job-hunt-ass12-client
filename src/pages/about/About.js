import styles from "./About.module.css";

export const About = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <h1 className={styles['about-title']}>About Us</h1>
                <div className={styles.main}>
                    <div>
                        <img className={styles['about-img']} src="" alt="" />
                    </div>
                    <div>
                        <p className={styles['about-info']}>A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.</p>
                        <p>Hello there! How are you? I'm fine. Thank you. Did you have your dinner tonight? I must say that I've already had my meal few minutes ago. Today I ate rice with tiny fish curry and a vegetable we call it lalshak. I don't know the english word for lalshak. So, do not blame me for this.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}