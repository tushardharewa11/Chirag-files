import type { FileCategory } from '../types';

const categorylist: FileCategory[] = [];
const leverarchfile: FileCategory = {
  slug: 'Lever Arch File', name: 'Lever Arch File', description: 'A selection of practical file products.',
  products: [
    { name: 'CFS-2700', description: 'Reliable everyday file for documents.', pagesperfile: 300, size: 'A4', cliptype: 'Stainless Steel Clip', materialtype: 'PP board', product_images: [] },
    { name: 'CFS-1800', description: 'A durable option with a refined finish.', pagesperfile: 500, size: 'A4', cliptype: 'Stainless Steel Clip', materialtype: 'Laminated board', product_images: [] },
    { name: 'CFS-1700', description: 'A durable option with a refined finish.', pagesperfile: 500, size: 'A4', cliptype: 'Stainless Steel Clip', materialtype: 'Laminated board', product_images: [] },
    { name: 'CFS-1600', description: 'A durable option with a refined finish.', pagesperfile: 500, size: 'A4', cliptype: 'Stainless Steel Clip', materialtype: 'Laminated board', product_images: [] }
  ],
};
categorylist.push(leverarchfile);

const cobrafile: FileCategory = {
  slug: 'Cobra File', name: 'Cobra File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.', pagesperfile: 100, size: 'A4', cliptype: 'Cobra clip', materialtype: 'PP board', product_images: [] },
    { name: 'Premium File', description: 'A durable option with a refined finish.', pagesperfile: 200, size: 'A4', cliptype: 'Cobra clip', materialtype: 'Laminated board', product_images: [] },
  ],
};
categorylist.push(cobrafile);

const ringbinderfile: FileCategory = {
  slug: 'Ring Binder File', name: 'Ring Binder File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.', pagesperfile: 200, size: 'A4', cliptype: '2-ring binder', materialtype: 'PP board', product_images: [] },
    { name: 'Premium File', description: 'A durable option with a refined finish.', pagesperfile: 300, size: 'A4', cliptype: '4-ring binder', materialtype: 'Laminated board', product_images: [] },
  ],
};
categorylist.push(ringbinderfile);

const reportfile: FileCategory = {
  slug: 'Report File', name: 'Report File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.', pagesperfile: 80, size: 'A4', cliptype: 'Spring clip', materialtype: 'PVC', product_images: [] },
    { name: 'Premium File', description: 'A durable option with a refined finish.', pagesperfile: 120, size: 'A4', cliptype: 'Spring clip', materialtype: 'Laminated card', product_images: [] },
  ],
};
categorylist.push(reportfile);

const u_o_pad: FileCategory = {
  slug: 'U-O Pad', name: 'U/O Pad', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.', pagesperfile: 80, size: 'A4', cliptype: 'U/O clip', materialtype: 'PP board', product_images: [] },
    { name: 'Premium File', description: 'A durable option with a refined finish.', pagesperfile: 120, size: 'A4', cliptype: 'U/O clip', materialtype: 'Laminated board', product_images: [] },
  ],
};
categorylist.push(u_o_pad);

const lacefile: FileCategory = {
  slug: 'Lace File', name: 'Lace File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.', pagesperfile: 60, size: 'A4', cliptype: 'Lace tie', materialtype: 'Kraft board', product_images: [] },
    { name: 'Premium File', description: 'A durable option with a refined finish.', pagesperfile: 100, size: 'A4', cliptype: 'Lace tie', materialtype: 'Laminated board', product_images: [] },
  ],
};
categorylist.push(lacefile);

const eyelitefile: FileCategory = {
  slug: 'Eyelite File', name: 'Eyelite File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.', pagesperfile: 100, size: 'A4', cliptype: 'Eyelite clip', materialtype: 'PP board', product_images: [] },
    { name: 'Premium File', description: 'A durable option with a refined finish.', pagesperfile: 150, size: 'A4', cliptype: 'Eyelite clip', materialtype: 'Laminated board', product_images: [] },
  ],
};
categorylist.push(eyelitefile);

export default categorylist;
