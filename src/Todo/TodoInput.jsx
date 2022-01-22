import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [state, setState] = useState("");

  return (
    <div>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="ADD"
      />
      <button
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
