import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Amount from './components/Amount/Amount';
import Payment from './components/Payment/Payment';

function App() {
  const [step, setStep] = useState<'home' | 'amount' | 'confirm'>('home');
  const [amount, setAmount] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");

  const handleAmountSubmit = (amount: string, name: string, bankName: string) => {
    console.log('Amount submitted:', amount);
    setAmount(amount);
    setName(name);
    setBankName(bankName);
    setStep('confirm');
  };

  const handleProceed = () => {
    console.log('Proceeding to the next step');
    setStep('amount');
  };

  const handleBack = () => {
    console.log('Going back to the previous step');
    if (step === 'confirm') {
      setStep('amount');
    } else if (step === 'amount') {
      setStep('home');
    }
  };

  const handleDone = () => {
    if (step === 'confirm') {
      setStep('home');
      setAmount(null);
      setName("");
      setBankName("");
    }
  };

  return (
    <div className="mobile-wrapper">
      <div className="mobile-frame">
        {step === 'home' && <Home onProceed={handleProceed} />}
        {step === 'amount' && <Amount onSubmit={handleAmountSubmit} onBack={handleBack} />}
        {step === 'confirm' && (
          <Payment
            amount={amount}
            name={name}
            bankName={bankName}
            handleDone={handleDone}
          />
        )}
      </div>
    </div>
  );
}

export default App;
