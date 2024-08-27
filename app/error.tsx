'use client'
import React from "react";

interface Props {
	error: Error;
    reset: () => void
}

const Error = ({ error, reset }: Props) => {
	console.log(error);
	return (
		<>
			<div>An error on the server has occurred.</div>
            <button className="btn" onClick={reset}>Retry</button>
		</>
	);
};

export default Error;
