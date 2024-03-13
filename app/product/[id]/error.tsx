"use client";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <>
      <h1>Oups</h1>
      <p>{error.name}</p>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </>
  );
};

export default Error;
