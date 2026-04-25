import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Personal Notes MCP Server",
    problem: "Needed a way to expose standard SQLite data and personal notes natively to AI assistants via the Model Context Protocol (MCP) securely.",
    desc: "A shared memory layer for AI assistants using MCP. Includes Stytch for authentication & authorization.",
    img: "/static/projects/mcp-server.svg",
    github: "https://github.com/dipscoder",
    tags: ["Python", "React", "SQLite", "Stytch", "MCP"],
  }
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects