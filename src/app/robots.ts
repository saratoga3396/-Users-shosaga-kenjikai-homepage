import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://kenjikai-officialhomepage.vercel.app"; // 本番ドメイン確定後に更新

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
