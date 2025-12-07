import { useState, useEffect } from "react";

export default function SaveRun() {
  const [runs, setRuns] = useState([]);

  async function saveRun() {
    const numbers = [1,2,3,4,5,6]; // replace with generator output
    const ev = 0.12;               // replace with EV calculation
    await fetch("http://localhost:5000/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ numbers, ev })
    });
    fetchRuns();
  }

  async function fetchRuns() {
    const res = await fetch("http://localhost:5000/api/runs");
    const data = await res.json();
    setRuns(data);
  }

  useEffect(() => { fetchRuns(); }, []);

  return (
    <div>
      <button onClick={saveRun}>Save Run</button>
      <ul>
        {runs.map(run => (
          <li key={run.id}>
            {run.numbers.join(", ")} | EV: {run.ev}
          </li>
        ))}
      </ul>
    </div>
  );
}
