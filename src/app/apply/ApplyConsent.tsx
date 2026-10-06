"use client";

import { useState } from "react";
import Link from "next/link";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScvvfF6bwyJQKoGZu3_LlBxhHd8bUQWtr_yEjetrd2rEjvHIQ/viewform";

const PDF_URL = "https://drive.google.com/file/d/1Eh_qMguit4w1RqfKoP3RDeQa62fRrvu5/view?usp=sharing";

const facilities = [
  "介護老人保健施設 リハビリタウンくじ",
  "特別養護老人ホーム 結の里",
  "グループホーム ぬくもり",
  "看護小規模多機能型居宅介護 までっこ",
];

export default function ApplyConsent() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="mx-auto max-w-3xl space-y-8 rounded-3xl bg-white p-6 shadow-md md:p-10">
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 text-gray-800">
          <p className="font-semibold text-amber-800">お申し込み後のご連絡について</p>
          <p className="mt-2 leading-relaxed">
            ご入力いただいた後、担当者よりお電話またはメールにてご連絡させていただくことがございます。
          </p>
        </div>

        <div>
          <h2 className="border-b-2 border-emerald-500 pb-2 text-2xl font-bold text-gray-900">
            個人情報の取り扱いについて
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            社会福祉法人健慈会（以下「当法人」）は、オンライン入所申し込みでお預かりする個人情報を、以下のとおり適切に取り扱います。
          </p>

          <ol className="mt-6 space-y-6 text-gray-700">
            <li>
              <h3 className="font-semibold text-emerald-800">1. 取得する情報</h3>
              <p className="mt-1 leading-relaxed">
                お申し込みされる方およびご本人様の氏名・生年月日・住所・電話番号・メールアドレス、介護保険の認定状況、現在の心身の状況や生活のご様子など、入所・利用のご相談に必要な情報をお預かりします。
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-800">2. 利用目的</h3>
              <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                <li>入所・利用のお申し込みの受付および入所の検討</li>
                <li>面談・見学の日程調整など、お申し込みに関するご連絡</li>
                <li>入所待機状況の管理</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-800">3. 介護認定情報の取り寄せについて</h3>
              <p className="mt-1 leading-relaxed">
                ご入力いただいた情報をもとに、保険者（市町村・広域連合）から要介護認定に関する情報を取り寄せる場合がございます。
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-800">4. 共同利用について</h3>
              <p className="mt-1 leading-relaxed">
                本フォームは、医療法人健生会と社会福祉法人健慈会が運営する下記4施設の共通申込窓口です。ご希望の施設で入所を検討するため、お預かりした情報を下記施設の間で共同利用いたします。
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {facilities.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="mt-2 leading-relaxed">共同利用の管理責任者：社会福祉法人健慈会</p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-800">5. 第三者への提供</h3>
              <p className="mt-1 leading-relaxed">
                法令に基づく場合を除き、ご本人様またはお申し込みされた方の同意なく、上記以外の第三者に提供することはありません。
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-800">6. 安全管理</h3>
              <p className="mt-1 leading-relaxed">
                お預かりした個人情報は、漏えい・紛失・改ざんなどが起こらないよう適切に管理し、閲覧できる職員を必要な範囲に限ります。
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-800">7. ご家族などが代理でお申し込みされる場合</h3>
              <p className="mt-1 leading-relaxed">
                ご本人様に本内容をご説明いただいたうえでお申し込みください。
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-800">8. お問い合わせ窓口</h3>
              <p className="mt-1 leading-relaxed">
                個人情報の開示・訂正・利用停止などのご請求、その他お問い合わせは下記までご連絡ください。
              </p>
              <ul className="mt-2 space-y-1 pl-1">
                <li>
                  特別養護老人ホーム 結の里：
                  <a href="tel:0194783290" className="text-emerald-700 underline">
                    0194-78-3290
                  </a>
                </li>
                <li>
                  グループホーム ぬくもり：
                  <a href="tel:0194783296" className="text-emerald-700 underline">
                    0194-78-3296
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="space-y-5 rounded-2xl bg-emerald-50 p-5 md:p-6">
          <label className="flex cursor-pointer items-start gap-3 text-lg font-semibold text-gray-900">
            <input
              type="checkbox"
              className="mt-1 h-6 w-6 shrink-0 accent-emerald-600"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            上記の個人情報の取り扱いに同意します
          </label>
          <div className="text-center">
            {agreed ? (
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-md transition hover:bg-emerald-500 sm:w-auto"
              >
                同意して申込フォームを開く
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-block w-full cursor-not-allowed rounded-full bg-gray-300 px-8 py-4 text-lg font-bold text-gray-500 sm:w-auto"
              >
                同意して申込フォームを開く
              </span>
            )}
            <p className="mt-3 text-sm text-gray-600">申込フォームは新しいタブで開きます。</p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600">
          紙でのお申し込みをご希望の方は
          <Link href={PDF_URL} target="_blank" rel="noopener noreferrer" className="mx-1 text-emerald-700 underline">
            入所申込書 (PDF)
          </Link>
          をご利用ください。
        </p>
      </section>
  );
}
