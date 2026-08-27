import { MetadataRoute } from "next";
import { projectsData } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rafanailah.dev";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["projects", "experience", "about"].map((route) => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projectsData.map((project) => ({
      url: `${baseUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
