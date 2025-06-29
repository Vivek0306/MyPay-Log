import styles from "./Home.module.css";

interface Props {
  onProceed: () => void;
}

const Home: React.FC<Props> = ({ onProceed }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>MyPay Logs</h1>
      </div>
      <div className={styles.body}>
        <p className={styles.description}>
          Welcome to MyPay Logs! You're companion to manage your payment logs efficiently.
        </p>
        <p className={styles.instructions}>
          Click the button below to proceed to the next step.
        </p>
        <p>
          <button className={styles.button} onClick={onProceed}>
            Proceed
          </button>
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} MyPay Logs.
        </p>
      </div>
    </div>
  );
};

export default Home;
