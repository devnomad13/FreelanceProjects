import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderTracker from '@/components/track/OrderTracker';
import { Suspense } from 'react';

export const metadata = {
  title: 'Track Your Order - Jalalabad Mutton',
  description: 'Track your Jalalabad Mutton order in real-time. Get updates on your authentic Punjabi mutton dish delivery.',
};

// A simple loading skeleton for the tracker
function OrderTrackerSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="bg-gray-200 h-24 rounded-lg"></div>
      <div className="bg-gray-200 h-64 rounded-lg"></div>
      <div className="bg-gray-200 h-80 rounded-lg"></div>
    </div>
  );
}

export default function TrackPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-red-900 mb-4">
              Track Your Order
            </h1>
            <p className="text-lg text-gray-700">
              Stay updated with your order status in real-time
            </p>
          </div>
          <Suspense fallback={<OrderTrackerSkeleton />}>
            <OrderTracker />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}