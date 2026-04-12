
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "特別養護老人ホーム 結の里 | 社会福祉法人健慈会",
  description: "岩手県野田村の特別養護老人ホーム結の里。ユニットケアによる家庭的な雰囲気の中で、個人の尊厳を重視した介護サービスを提供します。入所定員29名、全室個室。",
  alternates: {
    canonical: "./",
  },
};

export default function YuiPage() {
  return (
    <div className="space-y-12">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kenjikai-officialhomepage.vercel.app" },
          { name: "施設紹介", url: "https://kenjikai-officialhomepage.vercel.app/#facilities" },
          { name: "特別養護老人ホーム 結の里", url: "https://kenjikai-officialhomepage.vercel.app/facilities/yui" },
        ]}
      />
      <section className="text-center py-16 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">特別養護老人ホーム 結の里</h2>
        <p className="text-lg text-gray-700">
          地域密着型介護老人福祉施設入所者生活介護（定員29人）として、ユニット型個室で暮らしを支えています。
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
              <span className="text-blue-600">施設の特色</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              岩手県野田村に位置する「結の里」は、入所前の生活と入所後の生活が継続するようユニット単位での家庭的な暮らしを整えています。利用者の意思と人格を尊重し、地域やご家族との結び付きを重視した運営を行うことで、自立的な日常生活を歩めるよう支援しています。
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
              <span className="text-blue-600">サービス内容</span>
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>地域密着型特養:</strong> 居室はユニット型個室のみ（入所定員29人）。プライバシーを守りながらも共有スペースで交流できるレイアウトです。
              </li>
              <li>
                <strong>医療・看護体制:</strong> 看護師が日中常駐し、夜間は24時間オンコール。岩手県立久慈病院・村田歯科医院と連携し、急変時や口腔ケアにも迅速に対応します。
              </li>
              <li>
                <strong>ケアマネジメント:</strong> ケアマネジャーが生活歴を踏まえた個別プランを作成し、運営推進会議（年6回）や定期面談でご家族と情報共有します。
              </li>
              <li>
                <strong>生活支援:</strong> 管理栄養士監修の手作り料理、季節行事、音楽・園芸などのプログラムで、心身機能の維持と楽しみの両立を図ります。
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
              <span className="text-blue-600">施設内の様子</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="/images/yui-hinamatsuri.jpg" alt="ひな祭り集合" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="/images/yui-activity-pan.jpg" alt="パン作りレクリエーション" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="/images/yui-activity-balloon.jpg" alt="風船バレーレクリエーション" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden shadow-sm">
                <Image src="/images/yui-activity-ballgame.jpg" alt="ボール投げレクリエーション" layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <aside className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">一日の流れ</h3>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-bold">07:00</span> 起床</li>
              <li><span className="font-bold">08:00</span> 朝食</li>
              <li><span className="font-bold">10:00</span> 健康体操・入浴</li>
              <li><span className="font-bold">12:00</span> 昼食</li>
              <li><span className="font-bold">14:00</span> レクリエーション</li>
              <li><span className="font-bold">15:00</span> ティータイム</li>
              <li><span className="font-bold">18:00</span> 夕食</li>
              <li><span className="font-bold">21:00</span> 就寝</li>
            </ul>
          </aside>
          <aside className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">アクセス</h3>
            <p className="text-gray-700 leading-relaxed">
              〒028-8202 岩手県九戸郡野田村大字玉川第5地割45-22<br />
              TEL 0194-78-3290 / FAX 0194-78-3297<br />
              三陸鉄道リアス線「野田玉川駅」より徒歩1分
            </p>
          </aside>
          <aside className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">協力医療機関</h3>
            <p className="text-gray-700 leading-relaxed">
              岩手県立久慈病院（医科）<br />
              村田歯科医院（歯科）<br />
              24時間オンコール体制でグループホームぬくもりとも連携しています。
            </p>
          </aside>
          <div className="text-center py-4">
            <Link href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
              見学・ご相談はこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
