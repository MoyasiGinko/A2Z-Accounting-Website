import LoadingSpinner from "../components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="fixed  inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="large" color="#0f3d3a" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
