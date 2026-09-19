import { FileCategory } from "./types";
const filecategoryModules = import.meta.glob<FileCategory[]>('./categories/*.ts', { eager: true, import: 'default' });
export const filecategories = Object.values(filecategoryModules).flat().sort((a, b) => a.name.localeCompare(b.name));
