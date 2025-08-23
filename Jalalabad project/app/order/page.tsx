import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderForm from '@/components/order/OrderForm';

export const metadata = {
  title: 'Order Online - Jalalabad Mutton',
  description: 'Order authentic Punjabi mutton dishes online from Jalalabad Mutton. Fast delivery, fresh ingredients, traditional recipes.',
};

export default function OrderPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-red-900 mb-4">
              Order Online
            </h1>
            <p className="text-lg text-gray-700">
              Place your order and enjoy authentic Punjabi mutton dishes delivered to your doorstep
            </p>
          </div>
          <OrderForm />
        </div>
      </main>
      <Footer />
    </>
  );
}