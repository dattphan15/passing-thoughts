import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    // calculates time until thought expires
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id)
    }, timeRemaining)
    // clears timeout
    return () => {clearTimeout(timeout)}
    // re-renders the effect everytime the thought is different
  }, [thought])

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}