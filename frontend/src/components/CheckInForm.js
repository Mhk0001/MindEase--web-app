import { useState } from 'react';

export default function CheckInForm() {
  const [mood, setMood] = useState(5);
  const [stressLevel, setStressLevel] = useState(5);
  const [journal, setJournal] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token'); // JWT

    const payload = { mood, stressLevel, journal };

    try {
      // Save check-in
      const saveRes = await fetch('http://localhost:5000/api/checkin', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(payload),
      });
      const savedData = await saveRes.json();
      if (!saveRes.ok) throw new Error(savedData.message);

      // Get AI feedback
      const aiRes = await fetch('http://localhost:5000/api/ai-analysis/analyze', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });
      const aiData = await aiRes.json();
      if (!aiRes.ok) throw new Error(aiData.message);

      setFeedback(aiData.feedback);
    } catch (err) {
      console.error(err.message);
      setFeedback('Error analyzing mood. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Mood (1-10):
          <input type="number" value={mood} onChange={e => setMood(Number(e.target.value))} min="1" max="10" />
        </label>
        <label>Stress Level (1-10):
          <input type="number" value={stressLevel} onChange={e => setStressLevel(Number(e.target.value))} min="1" max="10" />
        </label>
        <label>Journal Entry:
          <textarea value={journal} onChange={e => setJournal(e.target.value)} />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Check-in'}</button>
      </form>

      {feedback && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>AI Feedback:</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}
