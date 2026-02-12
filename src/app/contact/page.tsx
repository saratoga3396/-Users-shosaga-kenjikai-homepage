
import ContactForm from './ContactForm';
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "お問い合わせ | 社会福祉法人健慈会",
  description: "社会福祉法人健慈会へのお問い合わせページです。施設見学、ご利用相談、求人へのご応募など、お気軽にご連絡ください。",
  alternates: {
    canonical: "./",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kenjikai-officialhomepage.vercel.app" },
          { name: "お問い合わせ", url: "https://kenjikai-officialhomepage.vercel.app/contact" },
        ]}
      />
      <ContactForm />
    </>
  );
}
