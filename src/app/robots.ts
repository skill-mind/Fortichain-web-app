// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/fortichain-metrics/",
        "/researcher/",
        "/projects",
        "/my-reports/",
        "/ranking/",
        "/researcher-profile/",
        "/validator/",
        "/assigned-projects/",
        "/ranking/",
        "/validator-profile/",
        "/fortichain-projects/",
        "/fortichain-researchers/",
        "/fortichain-validators/",
        "/fortichain-blog/",
        "/help-desk/",
        "/suspension/",
        "/overview/",
        "/upload-project/",
        "/projects/",
        "/ranking/",
        "/profile/",
      ],
    },
    sitemap: "https://forti-chain.xyz/sitemap.xml",
  };
}
