
interface LoadingProps {
  message?: string;
}

const Loading = ({ message = "در حال بارگذاری..." }: LoadingProps) => {
  return (
    <div
      className="flex items-center justify-center gap-3 py-8"
      role="status"
      aria-live="polite"
    >
      <div
        className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"
        aria-hidden="true"
      />

      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
};

export default Loading;
