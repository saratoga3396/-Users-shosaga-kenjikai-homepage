
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "グループホーム ぬくもり | 社会福祉法人健慈会",
  description: "岩手県野田村のグループホームぬくもり。認知症があっても安心して暮らせる共同生活の場。2ユニット18名、家庭的な環境で自立支援を行います。",
  alternates: {
    canonical: "./",
  },
};

export default function NukumoriPage() {
  return (
    <div className="space-y-12">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kenjikai-officialhomepage.vercel.app" },
          { name: "施設紹介", url: "https://kenjikai-officialhomepage.vercel.app/#facilities" },
          { name: "グループホーム ぬくもり", url: "https://kenjikai-officialhomepage.vercel.app/facilities/nukumori" },
        ]}
      />
      <section className="text-center py-16 bg-green-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-green-800 mb-4">グループホーム ぬくもり</h2>
        <p className="text-lg text-gray-700">
          認知症対応型共同生活介護（2ユニット18人）。役割を持ちながら家庭的な暮らしを続けられる住まいです。
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
              <span className="text-green-600">施設の特色</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              認知症の診断を受けた方が少人数で共同生活を送る住まいです。利用者がそれぞれ役割を持ち、家庭的な環境と地域住民との交流の下で日常生活や機能訓練を行うことで、認知症の進行を緩やかにし安心して暮らし続けられるよう支援します。
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              入居対象は、他の利用者と共同生活が可能で自傷他害の恐れがなく、常時医療機関での治療を必要としない方です。体調変化や入院時にも、結の里の看護職員と連携した24時間オンコール体制でサポートします。
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
              <span className="text-green-600">サービス内容</span>
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>入居要件の明確化:</strong> 認知症のある要支援2・要介護の方で、共同生活が可能・自傷他害の恐れがなく、常時医療を必要としない方を受け入れています。
              </li>
              <li>
                <strong>医療連携:</strong> 岩手県立久慈病院・村田歯科医院と連携し、必要時に診療や口腔ケアを受けられる体制を整備。結の里をバックアップ施設として緊急時対応を共有しています。
              </li>
              <li>
                <strong>生活リハと役割づくり:</strong> 料理・掃除・買い物など日常の役割を通じて心身機能を維持し、スタッフも家族のように寄り添います。
              </li>
              <li>
                <strong>地域と共に:</strong> 運営推進会議（年6回）や地域行事への参加を通じ、住民とのつながりを大切にしています。
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-2">
              <span className="text-green-600">施設内の様子</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=800&auto=format&fit=crop" alt="リビング" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop" alt="個室" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop" alt="キッチン" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="https://images.unsplash.com/photo-1523348887946-656d5421e12a?q=80&w=800&auto=format&fit=crop" alt="菜園" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <aside className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">一日の流れ（例）</h3>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-bold">07:30</span> 起床、身支度</li>
              <li><span className="font-bold">08:30</span> 朝食（共同で準備）</li>
              <li><span className="font-bold">10:00</span> 散歩、買い物、趣味活動</li>
              <li><span className="font-bold">12:30</span> 昼食</li>
              <li><span className="font-bold">14:30</span> ティータイム、歓談</li>
              <li><span className="font-bold">16:00</span> 夕食の準備</li>
              <li><span className="font-bold">18:30</span> 夕食</li>
              <li><span className="font-bold">20:00</span> 自由時間、団らん</li>
            </ul>
          </aside>
          <aside className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">アクセス</h3>
            <p className="text-gray-700 leading-relaxed">
              〒028-8202 岩手県九戸郡野田村大字玉川第5地割45-22<br />
              TEL 0194-78-3296 / FAX 0194-78-3297<br />
              三陸鉄道リアス線「野田玉川駅」より徒歩1分
            </p>
          </aside>
          <aside className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">協力体制</h3>
            <p className="text-gray-700 leading-relaxed">
              24時間オンコールで特別養護老人ホーム結の里と連携。急変時は岩手県立久慈病院、口腔ケアは村田歯科医院がサポートします。
            </p>
          </aside>
          <div className="text-center py-4">
            <Link href="/contact" className="bg-green-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-green-700 transition duration-300 shadow-lg">
              見学・ご相談はこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
