"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <p
      style={{
        color: "tomato",
      }}
    >
      {error.name}
      {error.message}
      <button onClick={reset}>Retry</button>
    </p>
  );
};

export default ErrorBoundary;
