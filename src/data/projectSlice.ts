import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfigue";
import { projectFromMap } from "./projectType";
import { Project } from "../types";

export const getProjects = async (): Promise<Project[]> => {
    const projectRef = collection(db, "projects");
    const snapshot = await getDocs(projectRef);
    const projects = snapshot.docs.map((doc) => doc.data());
    return projects.map(projectFromMap);
}
