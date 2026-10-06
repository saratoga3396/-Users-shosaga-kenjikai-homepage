import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ApplyConsent from "./ApplyConsent";

export const metadata = {
  title: "オンライン入所申し込み",
  description:
    "特別養護老人ホーム結の里・グループホームぬくもりなどへの入所・利用のお申し込みをオンラインで受け付けています。個人情報の取り扱いをご確認のうえお申し込みください。",
  alternates: {
    canonical: "./",
  },
};

export default function ApplyPage() {
  return (
    <div className="space-y-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kenjikai-officialhomepage.vercel.app" },
          { name: "オンライン入所申し込み", url: "https://kenjikai-officialhomepage.vercel.app/apply" },
        ]}
      />
      <section className="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-500 px-6 py-12 text-center text-white shadow-md">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-100">Online Application</p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">オンライン入所申し込み</h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-emerald-50">
          お申し込みの前に、個人情報の取り扱いについてご確認ください。
          <br className="hidden md:block" />
          同意いただいた方のみ、申込フォームを開くことができます。
        </p>
      </section>
      <ApplyConsent />
    </div>
  );
}
