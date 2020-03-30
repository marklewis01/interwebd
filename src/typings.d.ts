declare module "*.png";
declare module "*.jpg";
declare module "*.json";
declare module "*.svg";

interface IProject {
  label: string;
  description: string;
  keywords?: string[];
  codebase?: string;
  web?: string;
  images?: {
    caption?: string;
    source: {
      download?: string;
      regular: string;
      thumbnail?: string;
    };
  }[];