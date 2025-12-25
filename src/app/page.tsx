import { HeroGallerySlider } from "@/components/HeroGallerySlider";
import { detailedNews } from "@/data/newsDetailed";
import { relatedFacilities } from "@/data/relatedFacilities";
import Image from "next/image";
import Link from "next/link";

const heroBackgroundImage = "/images/line_oa_chat_250210_120553.jpg";

const sectionLinks = [
  { id: "news", label: "お知らせ" },
  { id: "philosophy", label: "基本理念" },
  { id: "facilities", label: "施設紹介" },
  { id: "guide", label: "ご利用案内" },
  { id: "disclosure", label: "情報公開" },
  { id: "community", label: "地域公益活動" },
  { id: "recruit", label: "求人" },
  { id: "access", label: "アクセス" },
];

const facilityPolicies = [
  {
    title: "人格を尊重",
    description: "利用者様の意思や人格を尊重し、利用者様の立場に立ったサービスを提供します。",
  },
  {
    title: "自立支援",
    description: "利用者様の持つ能力に応じて自立した日常生活を営むことができるよう支援します。",
  },
  {
    title: "安心した生活",
    description: "利用者様やご家族様が安心して生活できるよう支援します。",
  },
  {
    title: "地域との連携",
    description: "地域との連携及び協力を行い、地域との交流につとめ、地域の福祉サービスの拠点を目指します。",
  },
  {
    title: "働きがいのある職場づくり",
    description: "職員が仕事を通じて成長と達成を実感できる職場環境づくりを目指します。",
  },
];

const staffGuidelines = [
  "私たちは、利用者様本位のサービスを実現するため、研修などを通して自己研鑽に努め、絶えず改善を試み、出来ないと言わずやってみる職員となる。",
  "私たちは、危険や事故等に対し、可能な限り事前予測し予防の取組強化を計ります。",
  "私たちは、相手の立場を尊重し、協調性のある職員となります。",
  "私たちは、常に多職種と情報の共有や連携を図り、共通認識のもとでサービス提供を行います。",
  "私たちは、仕事に対し誇りと責任を持ち、社会人として法令を遵守すると共に、社会のルール、施設のルールを守り行動します。",
  "私たちは、挨拶や礼儀等正しく行い、社会の良識ある一員として誠実に行動します。",
  "地域との交流の推進を図り、安心と信頼で結ばれ、地域に必要とされる施設を目指す。",
];

const facilityCards = [
  {
    name: "特別養護老人ホーム 結の里",
    subName: "（地域密着型介護老人福祉施設）",
    description:
      "在宅での生活が困難になった要介護3以上（特例の要介護1・2）の高齢者が入居でき、原則として終身にわたって介護が受けられる施設です。住み慣れた地域で自分らしく生活を続けることができ、個人のプライバシーを尊重し、少人数の単位で家庭的な雰囲気の中で個別ケアを充実させることを目指しています。",
    image: "/images/yui-gallery-flowers.jpg",
    accentClass: "text-emerald-800",
    tagClass: "bg-emerald-50 text-emerald-700",
    link: "/facilities/yui",
    tags: ["入所定員29名", "ユニットケア", "看取りケア"],
  },
  {
    name: "グループホーム ぬくもり",
    subName: "（認知症対応型共同生活介護）",
    description:
      "認知症と診断された方が、家庭的な環境のもとで家事や清掃などの役割を持ちながら共同で生活するサービスです。自分でできることを大切にし、なじみの人間関係の中で可能な限り自立した日常生活を送ることができるよう支援いたします。",
    image: "/images/nukumori-garden.jpg",
    accentClass: "text-lime-800",
    tagClass: "bg-lime-50 text-lime-700",
    link: "/facilities/nukumori",
    tags: ["2ユニット18人", "認知症チームケア", "24時間オンコール"],
  },
];

const accessInfo = {
  address: "〒028-8202 岩手県九戸郡野田村大字玉川第5地割45-22",
  transport: "三陸鉄道リアス線「野田玉川駅」より徒歩1分",
  phone: "TEL 0194-78-3290 / FAX 0194-78-3297",
  officeHours: "受付時間 9:00〜17:30（年末年始を除く）",
  nearest: "JR久慈駅から車で約25分 / 三陸沿岸道路 野田ICから車で約8分",
};

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="relative left-1/2 right-1/2 min-h-[80vh] w-screen -translate-x-1/2 overflow-hidden text-white shadow-2xl md:min-h-screen">
        <Image
          src={heroBackgroundImage}
          alt="施設全景の俯瞰写真"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative flex min-h-[80vh] flex-col justify-center px-6 py-16 pb-[32rem] md:min-h-screen md:px-24 md:pb-[32rem]">
          <div className="max-w-xl space-y-4 rounded-3xl bg-white/70 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-800 md:text-base">社会福祉法人 健慈会</p>
            <h1 className="text-3xl font-semibold leading-relaxed text-emerald-900 md:text-4xl">
              <span className="block">特別養護老人ホーム 結の里</span>
              <span className="block">グループホーム ぬくもり</span>
            </h1>
          </div>
          <nav className="mt-8" aria-label="ページ内ナビゲーション">
            <div className="flex flex-wrap justify-center gap-3 text-base font-semibold">
              {sectionLinks.map((link) => (
                <Link
                  key={link.id}
                  href={`#${link.id}`}
                  className="whitespace-nowrap rounded-full bg-emerald-600/85 px-5 py-2 text-white shadow transition hover:bg-emerald-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section
        id="gallery"
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-emerald-50/40 py-14"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
          <div className="flex justify-center">
            <Link
              href="https://drive.google.com/file/d/1Eh_qMguit4w1RqfKoP3RDeQa62fRrvu5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-emerald-700 shadow"
            >
              入所申込書ダウンロード (PDF)
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Gallery</p>
            <h2 className="mt-2 text-3xl font-bold text-emerald-900">結の里 & ぬくもり Gallery</h2>
          </div>
          <HeroGallerySlider
            images={galleryImages}
            intervalMs={4000}
            className="relative mx-auto h-[520px] w-full max-w-6xl"
            showCaption
          />
        </div>
      </section>

      <section id="news" className="bg-white p-8 rounded-3xl shadow-md">
        <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">News</p>
            <h2 className="text-3xl font-bold text-gray-900">お知らせ</h2>
          </div>
          <p className="text-sm text-emerald-400">最新情報を随時更新しています</p>
        </div>
        <div className="mt-6 space-y-6">
          {detailedNews.map((item) => (
            <article key={`${item.date}-${item.title}`} className="rounded-2xl border border-emerald-50 bg-emerald-50/60 p-6">
              <p className="text-sm font-semibold text-emerald-700">{item.date}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-800 leading-relaxed">{item.body}</p>
              {item.linkUrl && item.linkLabel && (
                <Link
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-emerald-700 underline"
                >
                  {item.linkLabel}
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        id="philosophy"
        className="rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 p-10 text-white shadow-lg"
      >
        <div className="space-y-6 rounded-3xl bg-white/10 p-8 text-center text-white shadow-inner md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-50">Philosophy</p>
          <h2 className="text-3xl font-extrabold md:text-4xl">基本理念</h2>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            明るく家庭的な雰囲気づくりに努め、地域や家庭との結びつきを重視し、利用者様の意志および人格を尊重しながら、常にその立場に立った質の高いサービスを提供します。
          </p>
          <div className="h-1 w-20 rounded-full bg-white/70 mx-auto md:mx-0" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200/40 bg-emerald-900/70 p-6 shadow">
            <h3 className="text-2xl font-semibold text-white">施設の基本方針</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm md:text-base text-emerald-50">
              {facilityPolicies.map((policy) => (
                <li key={policy.title}>
                  <div className="font-semibold text-white mb-1">{policy.title}</div>
                  <div className="text-emerald-50">{policy.description}</div>
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-2xl border border-white/20 bg-emerald-500/80 p-6 shadow">
            <h3 className="text-2xl font-semibold text-white">職員基本姿勢（行動指針）</h3>
            <ul className="mt-4 space-y-3 list-disc pl-5 text-sm md:text-base text-emerald-100">
              {staffGuidelines.map((guideline) => (
                <li key={guideline}>{guideline}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="facilities" className="bg-white p-8 rounded-3xl shadow-md">
        <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Facilities</p>
            <h2 className="text-3xl font-bold text-gray-900">施設紹介</h2>
          </div>
          <p className="text-gray-600">それぞれの暮らし方に寄り添う2つの拠点をご用意しています。</p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {facilityCards.map((facility) => (
            <article key={facility.name} className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <div className="relative h-72 w-full bg-white">
                <Image
                  src={facility.image}
                  alt={`${facility.name}の写真`}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className={`text-2xl font-bold ${facility.accentClass}`}>
                  {facility.name}
                  <span className="block text-lg mt-1">{facility.subName}</span>
                </h3>
                <p className="text-gray-700">{facility.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {facility.tags.map((tag) => (
                    <span key={tag} className={`rounded-full px-2 py-1 text-xs font-semibold ${facility.tagClass}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="facility-gallery"
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-white py-14"
      >
        <div className="mx-auto max-w-6xl px-6">
          <HeroGallerySlider
            images={facilityInteriorImages}
            intervalMs={4500}
            className="relative mx-auto h-[480px] w-full max-w-6xl"
            showCaption={false}
          />
        </div>
      </section>

      <section id="guide" className="rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-500 p-8 text-white shadow-md">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-100">Guidance</p>
        <h2 className="mt-2 text-3xl font-bold">ご利用案内</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">長期入所・グループホーム</h3>
            <ul className="mt-4 space-y-3 text-emerald-50 leading-relaxed">
              <li>・長期入所</li>
              <li>・認知症対応型共同生活介護（グループホーム）入居</li>
            </ul>
            <p className="mt-4 text-sm underline decoration-dotted">施設にお越しのうえ、直接ご利用申し込みをお願いいたします。</p>
          </article>
          <article className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">短期利用・通所サービス</h3>
            <ul className="mt-4 space-y-3 text-emerald-50 leading-relaxed">
              <li>・短期入所生活介護（ショートステイ）</li>
              <li>・認知症対応型短期利用共同生活介護（グループホームショートステイ）</li>
              <li>
                ・共用型認知症対応型通所介護（認知症デイサービス）
                <span className="block text-sm text-yellow-300 pl-4 mt-1">※新規デイ利用受付停止中</span>
              </li>
            </ul>
            <p className="mt-4 text-sm underline decoration-dotted">担当ケアマネジャーにご利用相談をお願いいたします。</p>
          </article>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl bg-white/10 p-6 backdrop-blur md:grid-cols-3">
          <article>
            <h3 className="text-xl font-semibold">パンフレット (PDF)</h3>
            <Link
              href="https://drive.google.com/file/d/16RxdBdIf_sGxJQrfXcFlLZELcXplTrSk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold underline"
            >
              共通パンフレットを開く
            </Link>
          </article>
          <article>
            <h3 className="text-xl font-semibold">重要事項説明書 (PDF)</h3>
            <ul className="mt-3 space-y-2 text-sm text-emerald-50">
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/1aqzRNLGoy3HmPBimUcVbTAhbMxRYV8FL/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  特別養護老人ホーム結の里
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/17DdIE8IomBF1E8mT1mLiqAQ28Pc68lEH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  グループホームぬくもり
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/1FfEt_vptLy88iu-kLtZLpon8oS7Rjske/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  デイサービスぬくもり
                </Link>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-xl font-semibold">料金表 (PDF)</h3>
            <ul className="mt-3 space-y-2 text-sm text-emerald-50">
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/197t-Edq94fAQHbM7b8t5JOBAufxcPS6K/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  特別養護老人ホーム結の里
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/10iGwR1fSiy1l4go50g3t_GYC5r3zmQe3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  グループホームぬくもり
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/1jcTaiYBURgG4uy9HVdEJBkRv34Vqvby-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  デイサービスぬくもり
                </Link>
              </li>
            </ul>
          </article>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1Eh_qMguit4w1RqfKoP3RDeQa62fRrvu5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-emerald-700 shadow-lg"
          >
            入所申込書ダウンロード (PDF)
          </Link>
        </div>
      </section>

      <section id="disclosure" className="bg-white p-8 rounded-3xl shadow-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Information</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">情報公開はこちら</h2>
        <div className="mt-8 space-y-8">
          <article className="rounded-2xl border border-gray-100 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-gray-900">法人情報</h3>
              <Link
                href="https://www.wam.go.jp/wamnet/zaihyoukaiji/pub/PUB0201000E00.do?_FORMID=PUB0219000&vo_headVO_corporationId=1603100883"
                className="text-sm font-semibold text-emerald-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                法人情報（外部リンク）
              </Link>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>・定款</li>
              <li>・役員名簿</li>
              <li>・役員等報酬規定</li>
              <li>・資金収支計算書</li>
              <li>・事業活動計算書</li>
              <li>・貸借対照表</li>
              <li>・附属明細書</li>
              <li>・注記</li>
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/1SMaIbH593NIRHlGfeIH1DWLm80kx3C-0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  財産目録
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/1X9mFXo6YSvkSeDoQVGNLleaJCa8Je3MH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  監査報告書
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://drive.google.com/file/d/1ZH9oEQgiq9AF48c7iC_LT-heXjXoKwUf/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  事業報告
                </Link>
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-100 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-gray-900">外部評価</h3>
              <Link
                href="https://www.wam.go.jp/wamappl/hyoka/003hyoka/hyokekka.nsf/aOpen?OpenAgent&JNO=0393100128&SVC=0001096&BJN=00&OC=01"
                className="text-sm font-semibold text-emerald-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                外部評価（外部リンク）
              </Link>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>・グループホームぬくもり</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-100 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-gray-900">情報公表サービス</h3>
              <Link href="#" className="text-sm font-semibold text-emerald-700 underline" target="_blank" rel="noopener noreferrer">
                情報公表サービス（外部リンク）
              </Link>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                ・
                <Link
                  href="https://www.kaigokensaku.mhlw.go.jp/03/index.php?action_kouhyou_detail_026_kani=true&JigyosyoCd=0393100136-00&ServiceCd=540&Type=search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  結の里
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://www.kaigokensaku.mhlw.go.jp/03/index.php?action_kouhyou_detail_022_kani=true&JigyosyoCd=0393100128-00&ServiceCd=320&Type=search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  グループホームぬくもり
                </Link>
              </li>
              <li>
                ・
                <Link
                  href="https://www.kaigokensaku.mhlw.go.jp/03/index.php?action_kouhyou_detail_007_kani=true&JigyosyoCd=0393100185-00&ServiceCd=720&Type=search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  デイサービスぬくもり
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="community" className="bg-white p-8 rounded-3xl shadow-md">
        <div className="border-b border-gray-100 pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Community</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">地域公益活動</h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-emerald-900">IWATE・あんしんサポート事業</h3>
            <p className="text-gray-700 leading-relaxed">
              社会福祉法人健慈会は、岩手県社会福祉協議会が推進する「IWATE・あんしんサポート事業」に参画し、地域住民の生活相談や緊急時の安心づくりに協力しています。
            </p>
            <div className="mt-6 rounded-xl border-2 border-dotted border-emerald-300 bg-emerald-50/50 p-5">
              <p className="font-bold text-emerald-900">【支援活動の例】</p>
              <ul className="mt-2 space-y-2 text-sm text-emerald-800">
                <li>①困りごとの解決に必要な期間中（就職活動期間・制度利用手続期間等）の衣食住の確保</li>
                <li>②事故・疾病等の理由により生じた一時的な生活困窮状態の軽減</li>
                <li>③子どもの社会的不利益の回避のための援助</li>
              </ul>
            </div>
            <Link
              href="https://www.iwate-shakyo.or.jp/kenmin/anshin.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-700 underline"
            >
              IWATE・あんしんサポート事業（外部リンク）
            </Link>
          </div>
          <div className="relative h-72 rounded-3xl bg-emerald-50">
            <Image src="/images/community-hands.jpg" alt="地域で世代を超えて手を取り合う様子" fill className="rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      <section id="instagram" className="rounded-3xl bg-white p-8 shadow-md">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">SNS</p>
            <h2 className="text-3xl font-bold text-emerald-900">結の里＆ぬくもり 公式Instagram</h2>
            <p className="text-gray-700 leading-relaxed">
              結の里＆ぬくもりの公式インスタグラムを更新しています。施設の日常やイベントの様子、最新情報を不定期で発信していきます。アカウントをお持ちの方はぜひフォローをお願いします！
            </p>
            <p className="text-gray-700">
              固定フィード投稿は
              <a
                href="https://www.instagram.com/p/CfL1B6nP-hH/?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 underline"
              >
                こちら
              </a>
              からご覧ください。
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-lg">
              <Image
                src="/images/instagram-mock.png"
                alt="Instagram投稿のイメージ"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/instagram-qr.png"
                alt="InstagramのQRコード"
                width={220}
                height={220}
                className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="recruit" className="bg-white p-8 rounded-3xl shadow-md">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Recruit</p>
            <h2 className="text-3xl font-bold text-gray-900">求人情報</h2>
            <p className="mt-2 text-gray-700">多様な働き方に対応した制度で、長く安心して働ける環境を整えています。</p>
            <p className="mt-2 text-gray-700">私たちと一緒に働きませんか？結の里・ぬくもりではともに成長できる仲間を募集しています。ママさん世代やレジェンド世代など様々な人材が活躍しています。</p>
          </div>
          <div className="flex flex-col gap-3 text-center md:w-80">
            <Link
              href="https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do?screenId=GECA110010&action=dispDetailBtn&kJNo=0310001928151&kJKbn=1&jGSHNo=hD7QtUXf9aDymi7jHZ5glw%3D%3D&fullPart=1&iNFTeikyoRiyoDtiID=&kSNo=&newArrived=&tatZngy=1&shogaiKbn=0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              結の里 看護師求人はこちら
            </Link>
            <Link
              href="https://www.hellowork.mhlw.go.jp/kensaku/GECA110010.do?screenId=GECA110010&action=dispDetailBtn&kJNo=0310001836751&kJKbn=1&jGSHNo=hD7QtUXf9aDymi7jHZ5glw%3D%3D&fullPart=1&iNFTeikyoRiyoDtiID=&kSNo=&newArrived=&tatZngy=1&shogaiKbn=0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-emerald-500"
            >
              結の里 介護職員の求人はこちら
            </Link>
            <Link
              href="https://forms.gle/8WYptdd6xceZaW4x6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-600 px-6 py-3 font-semibold text-emerald-700 shadow-md hover:bg-emerald-50"
            >
              エントリーフォーム
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <HeroGallerySlider
            images={staffGalleryImages}
            intervalMs={4000}
            className="relative mx-auto h-[380px] w-full max-w-5xl"
            showCaption={false}
          />
        </div>
      </section>

      <section id="related" className="bg-white p-8 rounded-3xl shadow-md">
        <div className="border-b border-gray-100 pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Group</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">関連施設</h2>
        </div>
        <div className="mt-8 space-y-8">
          {relatedFacilities.map((facility) => (
            <article key={facility.name} className="grid gap-6 rounded-3xl border border-emerald-50 bg-emerald-50/40 p-6 md:grid-cols-2">
              <div className="space-y-3">
                <p className="text-sm text-emerald-600">{facility.description}</p>
                <h3 className="text-2xl font-semibold text-emerald-900">{facility.name}</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {facility.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <Link
                  href={facility.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow hover:bg-emerald-500"
                >
                  {facility.name}（外部リンク）
                </Link>
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl bg-white">
                <Image src={facility.image} alt={`${facility.name}の写真`} fill className="object-contain p-4" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="access" className="bg-white p-8 rounded-3xl shadow-md">
        <div className="border-b border-gray-100 pb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Access</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">アクセス</h2>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-gray-800">
            <div>
              <h3 className="text-xl font-semibold text-emerald-800">所在地</h3>
              <p className="mt-2 leading-relaxed">{accessInfo.address}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-800">交通機関</h3>
              <p className="mt-2 leading-relaxed">{accessInfo.transport}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-800">お車でのアクセス</h3>
              <p className="mt-2 leading-relaxed">{accessInfo.nearest}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-800">連絡先</h3>
              <p className="mt-2 leading-relaxed">{accessInfo.phone}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-800">受付時間</h3>
              <p className="mt-2 leading-relaxed">{accessInfo.officeHours}</p>
            </div>

          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-3xl">
            <iframe
              title="Google Map - 特別養護老人ホーム結の里"
              src="https://maps.google.com/maps?q=3RMH%2B58%20%E9%87%8E%E7%94%B0%E6%9D%91%2C%20%E5%B2%A9%E6%89%8B%E7%9C%8C&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1Eh_qMguit4w1RqfKoP3RDeQa62fRrvu5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white shadow hover:bg-emerald-500"
          >
            入所申込書ダウンロード (PDF)
          </Link>
        </div>
      </section>
    </div>
  );
}
const galleryImages = [
  { src: "/images/christmas_event_2025.jpg", alt: "クリスマスイベント" },
  { src: "/images/christmas_event_2025_2.jpg", alt: "クリスマスイベント2" },
  { src: "/images/line_oa_chat_250210_120553.jpg", alt: "施設全景の俯瞰" },
  { src: "/images/line_oa_chat_251014_142023_group_2.jpg", alt: "木々に囲まれた外観" },

  { src: "/images/line_oa_chat_251023_165141.jpg", alt: "共用部の装飾" },
  { src: "/images/IMG_1150.JPG", alt: "季節のイベント" },
  { src: "/images/IMG_1159.JPG", alt: "ダイニングスペース" },
  { src: "/images/IMG_1169.JPG", alt: "居室前の通路" },
  { src: "/images/IMG_1296.JPG", alt: "施設周辺の風景" },
];

const facilityInteriorImages = [
  { src: "/images/002.JPG", alt: "共有スペース" },
  { src: "/images/003.JPG", alt: "談話スペース" },
  { src: "/images/9.JPG", alt: "日当たりの良い廊下" },
  { src: "/images/010.JPG", alt: "車いす対応の廊下" },
  { src: "/images/011.JPG", alt: "季節の飾り付け" },
  { src: "/images/11.JPG", alt: "明るい客間" },
  { src: "/images/14.JPG", alt: "洗面スペース" },
  { src: "/images/15.JPG", alt: "エントランス付近" },
  { src: "/images/16.JPG", alt: "廊下の景観" },
];

const staffGalleryImages = [
  { src: "/images/staff-slider-2.jpg", alt: "お祝いの記念撮影" },
  { src: "/images/staff-slider-3.jpg", alt: "屋外レクリエーション" },
  { src: "/images/staff-slider-4.jpg", alt: "談話スペースでのふれあい" },
  { src: "/images/staff-slider-5.jpg", alt: "手作業のケア" },
  { src: "/images/staff-slider-6.jpg", alt: "メイクアップのサポート" },
];
