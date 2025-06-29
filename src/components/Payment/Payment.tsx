import Tick from "../Tick/Tick";
import styles from "./Payment.module.css";
import html2canvas from "html2canvas";

interface Props {
  amount: string | null;
  name: string;
  bankName: string;
  handleDone: () => void;
}

const Payment: React.FC<Props> = ({ amount, name, bankName, handleDone }) => {
const handleScreenshot = () => {
  const element = document.getElementById("screenshot");
  if (!element) return;

  html2canvas(element, {
    scale: window.devicePixelRatio,
    useCORS: true,
    backgroundColor: "#131314", // your actual app background color
  }).then((canvas) => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `payment_log_${Date.now()}.png`;
    link.href = image;
    link.click();
  });
};

  return (
    <div id="screenshot" className={styles.screenshotWrapper}>
      <Tick />

      <div className={styles.amountContainer}>
        ₹
        {Number(amount ?? "0").toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>

      <div className={styles.paymentDetails}>
        <div className={styles.paidTo}>Paid to</div>
        <div className={styles.bankName}>{name}</div>
        <div className={styles.bankDetails}>
          <img src="./Shield.png" alt="Shield icon" />
          <div style={{ letterSpacing: "0.05em" }}>Banking name:</div>
          <div style={{ letterSpacing: "0.06em" }}>
            {bankName.toUpperCase()}
          </div>
        </div>
        <div className={styles.dateTime}>
          {new Date()
            .toLocaleString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
            .replace(" at ", ", ")}
        </div>
      </div>

      <div className={styles.upiContainer}>
        <div className={styles.upiText}>POWERED BY</div>
        <img src="./UPI.png" alt="UPI Logo" />
      </div>

      <div className={styles.actionBtns}>
        <div className={styles.ssBtn} onClick={handleScreenshot}>
          <img src="./Share.png" alt="Share Button" />
          Share screenshot
        </div>
        <div className={styles.doneBtn} onClick={handleDone}>
          Done
        </div>
      </div>
    </div>
  );
};

export default Payment;
