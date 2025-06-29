import styles from './Tick.module.css'; 



const Tick: React.FC = () => {
  return (
    <div className={styles.tickContainer}>
        <div className={styles.tick}>
          <img src="/blue_tick.png" alt="Success Tick" className={styles.tickIcon} />
        </div>
    </div>
  );
}

export default Tick;