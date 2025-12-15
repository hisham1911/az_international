import { CenteredSpinner } from "./components/spinner-loader";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <CenteredSpinner size="lg" />
    </div>
  );
}