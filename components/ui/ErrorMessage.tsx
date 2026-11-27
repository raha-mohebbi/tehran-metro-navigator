interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div
      className="flex flex-col items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-5 text-center"
      role="alert"
    >
      <p className="text-sm text-red-700">{message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          تلاش مجدد
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;