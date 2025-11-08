export type RelatedFacility = {
  name: string;
  description: string;
  services: string[];
  image: string;
  url: string;
};

export const relatedFacilities: RelatedFacility[] = [
  {
    name: "介護老人保健施設 リハビリタウンくじ",
    description: "医療法人 健生会",
    services: [
      "介護老人保健施設",
      "ショートステイ（短期入所療養介護）",
      "通所リハビリテーション",
      "訪問リハビリテーション",
      "訪問看護ステーション",
      "居宅介護支援事業所",
    ],
    image: "/images/related-rehabitown.jpg",
    url: "https://rehabilitown-kuji.jimdofree.com/",
  },
  {
    name: "竹下医院",
    description: "医療法人 健生会",
    services: [
      "内科・産婦人科",
      "訪問診療",
      "ショートステイ（短期入所療養介護）",
      "通所リハビリテーション",
    ],
    image: "/images/related-takeshita.jpg",
    url: "http://www.takesita-iin.com/index.html",
  },
  {
    name: "看護小規模多機能 までっこ",
    description: "医療法人 健生会",
    services: [
      "通い／宿泊サービス",
      "訪問看護・訪問介護",
      "ケアマネジャーとの連携"
    ],
    image: "/images/related-madekko.png",
    url: "https://kantaki-madekko.jimdofree.com/",
  },
];
