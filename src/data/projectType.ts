import { Project } from "../types";

export const projectFromMap = (data: any): Project => {
  return {
    id: data.id || "",
    title: data.title || "",
    description: data.description || "",
    image: data.image || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    category: data.category || "",
    playstoreLink: data.playstoreLink || "",
    appstoreLink: data.appstoreLink || "",
    collaboratedWith: data.collaboratedWith || "",
    createdAt: data.createdAt || null,
    index: typeof data.index === "number" ? data.index : 0,
    enabled: typeof data.enabled === "boolean" ? data.enabled : true,
  };
};

export const projectToMap = (project: Project) => {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    tags: project.tags,
    category: project.category,
    playstoreLink: project.playstoreLink,
    appstoreLink: project.appstoreLink,
    collaboratedWith: project.collaboratedWith,
    createdAt: project.createdAt || null,
    index: project.index,
    enabled: project.enabled,
  };
};
