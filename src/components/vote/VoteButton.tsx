"use client";

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Icon Up and Down for votes

interface VoteButtonProps {
    initialVotes: number;
    onVoteChange: (votes: number) => void;
}

const VoteButton: React.FC<VoteButtonProps> = ({
    initialVotes,
    onVoteChange,
}) => {
    const [votes, setVotes] = useState(initialVotes);

    const handleUpVote = () => {
        const newVotes = votes + 1;
        setVotes(newVotes);
        onVoteChange(newVotes); // Notify parent about the vote change
    };

    const handleDownVote = () => {
        const newVotes = votes - 1;
        setVotes(newVotes);
        onVoteChange(newVotes); // Notify parent about the vote change
    };

    return (
        <div className="d-flex flex-column align-items-center me-3">
            <Button variant="outline-primary" onClick={handleUpVote}>
                <FaArrowUp />
            </Button>
            <span className="my-2">{votes}</span>
            <Button variant="outline-primary" onClick={handleDownVote}>
                <FaArrowDown />
            </Button>
        </div>
    );
};

export default VoteButton;
