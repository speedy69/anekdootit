import { useState } from "react";


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const clickHandleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const clickHandleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes <br/>
      <button onClick={clickHandleVote} >vote</button>
      <button onClick={clickHandleNext} >next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
    </div>
  );
}

export default App;
