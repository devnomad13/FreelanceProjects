import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us - Jalalabad Mutton Restaurant',
  description: 'Get in touch with Jalalabad Mutton restaurant. Visit us in Jalalabad, Punjab or contact us for orders, feedback, and inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}