import styles from "./Amount.module.css";
import { useState } from "react";

interface Props {
  onSubmit: (amount: string, name: string, bankName: string) => void;
  onBack: () => void;
}

const Amount: React.FC<Props> = ({ onSubmit, onBack }) => {
  const [amount, setAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let finalName = name;

    if (!name.trim()) {
      const words = bankName.trim().split(" ");
      if (words.length > 2) {
        finalName = words[0] + " " + words[2]; 
      } else if (words.length === 2) {
        finalName = words[0];
      } else {
        finalName = bankName;
      }
    }

    if (amount && !isNaN(Number(amount))) {
      onSubmit(amount, finalName, bankName);
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>MyPay Logs</h1>
      </div>
      <div className={styles.body}>
        <h4 className={styles.title}>Enter Details</h4>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="number"
            placeholder="Enter amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Enter bank name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Enter payee name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <label className={styles.inputHint}>leave blank for auto-fill</label>
          <button type="submit" className={styles.button}>
            Generate Log
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.navBtn} onClick={onBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Amount;
