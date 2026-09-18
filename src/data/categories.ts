import type { Category } from './types';
const categoryModules = import.meta.glob<Category>('./categories/*.ts', { eager: true, import: 'default' });
export const categories = Object.values(categoryModules).sort((a, b) => a.name.localeCompare(b.name));
