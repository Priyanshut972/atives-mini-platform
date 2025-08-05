import React, { useState } from "react";

const Onboarding: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Onboarding - Step {step}</h2>

      {step === 1 && (
        <>
          <p>Welcome! What's your creative focus?</p>
          <input type="text" placeholder="e.g., Designer, Writer, etc." />
        </>
      )}

      {step === 2 && (
        <>
          <p>What tools or platforms do you use?</p>
          <input type="text" placeholder="e.g., Figma, Behance, etc." />
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        {step < 2 && (
          <button onClick={() => setStep(step + 1)} style={{ padding: "10px 20px" }}>
            Next
          </button>
        )}

        {step === 2 && (
          <button
            onClick={() => alert("You're onboarded! 🎉")}
            style={{ padding: "10px 20px" }}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
