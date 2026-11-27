"use client";

import Header from "@/components/layout/Header";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import RouteForm from "@/components/route/RouteForm";
import { useStations } from "@/hooks/useStations";

export default function Home() {
  const { stations, isLoading, error, fetchStations } = useStations();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {isLoading && <Loading message="در حال دریافت ایستگاه‌های مترو..." />}

        {error && <ErrorMessage message={error} onRetry={fetchStations} />}

        {!isLoading && !error && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              مسیریابی هوشمند مترو تهران
            </h2>

            <p className="mt-2 text-gray-600">
              مسیر مناسب خودت رو بین ایستگاه‌های مترو پیدا کن.
            </p>
            <div className="mt-8 max-w-xl">
              <RouteForm />
            </div>
            <p className="mt-6 text-sm text-gray-500">
              تعداد ایستگاه‌های دریافت‌شده: {stations.length}
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
