import type { FileCategory } from '../types';


const categorylist : FileCategory[] = []
const leverarchfile: FileCategory = {
  slug: 'Lever Arch File', name: 'Lever Arch File', description: 'A selection of practical file products.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.' },
    { name: 'Premium File', description: 'A durable option with a refined finish.' },
  ],
};
categorylist.push(leverarchfile);

const cobrafile: FileCategory = {
  slug: 'Cobra File', name: 'Cobra File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.' },
    { name: 'Premium File', description: 'A durable option with a refined finish.' },
  ],
};
categorylist.push(cobrafile);

const ringbinderfile: FileCategory = {
  slug: 'Ring Binder File', name: 'Ring Binder File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.' },
    { name: 'Premium File', description: 'A durable option with a refined finish.' },
  ],
};
categorylist.push(ringbinderfile);

const reportfile: FileCategory = {
  slug: 'Report File', name: 'Report File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.' },
    { name: 'Premium File', description: 'A durable option with a refined finish.' },
  ],
};
categorylist.push(reportfile);

const u_o_pad: FileCategory = {
  slug: 'U-O Pad', name: 'U/O Pad', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.' },
    { name: 'Premium File', description: 'A durable option with a refined finish.' },
  ],
};
categorylist.push(u_o_pad);

const lacefile: FileCategory = {
  slug: 'Lace File', name: 'Lace File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.' },
    { name: 'Premium File', description: 'A durable option with a refined finish.' },
  ],
};
categorylist.push(lacefile);

const eyelitefile: FileCategory = {
  slug: 'Eyelite File', name: 'Eyelite File', description: 'A selection of practical file products for school use.',
  products: [
    { name: 'Standard File', description: 'Reliable everyday file for documents.' },
    { name: 'Premium File', description: 'A durable option with a refined finish.' },
  ],
};
categorylist.push(eyelitefile);

export default categorylist;
