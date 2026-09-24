// Replace any URL below with a local image, e.g. import shop from './assets/images/shop.jpg'
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`
export const IMG = {
  hero: u('photo-1576602976047-174e57a47881'),
  shelves: u('photo-1587854692152-cbe660dbde88'),
  meds: u('photo-1584308666744-24d5c474f2ae'),
  pharm: u('photo-1631549916768-4119b2e5f926'),
}
export const BIZ = {
  name: 'Kotla Medicals', owner: 'K. Veera Raghavulu', phones: ['9290876450', '9666296766'],
  email: 'kotla.medical@gmail.com', addr: ['Main Road, Opposite Lakshmi Cafe,', 'Kovvur, Andhra Pradesh 534350'],
  map: 'https://www.google.com/search?q=kotla+vari+medical+stores+kovvur+address',
  wa: 'https://wa.me/919290876450?text=' + encodeURIComponent('Hello Kotla Medicals, I would like to enquire about'),
}
export const PRODUCTS = [
  ['Prescription Medicines', 'Medicines', 'Medicines dispensed as advised by your qualified healthcare professional.', 'pharm'],
  ['OTC Medicines', 'Medicines', 'Commonly requested over-the-counter items for everyday needs.', 'meds'],
  ['Pain Relief', 'Medicines', 'Pain relief products available in store. Ask our team for help.', 'shelves'],
  ['Cold & Cough Care', 'Medicines', 'Seasonal care essentials for the whole family.', 'meds'],
  ['Vitamins & Supplements', 'Wellness', 'Daily wellness and nutrition supplements.', 'shelves'],
  ['Health & Wellness', 'Wellness', 'Products that support a healthy everyday routine.', 'hero'],
  ['Personal Care', 'Personal Care', 'Hygiene and everyday personal care products.', 'pharm'],
  ['Baby Care', 'Baby Care', 'Gentle everyday essentials for little ones.', 'hero'],
  ['First Aid Supplies', 'First Aid', 'Basic first-aid supplies to keep at home.', 'meds'],
  ['Medical Accessories', 'Healthcare', 'Everyday healthcare accessories and supplies.', 'shelves'],
].map(([title, cat, desc, img]) => ({ title, cat, desc, img: IMG[img] }))
export const CATS = ['All', 'Medicines', 'Wellness', 'Personal Care', 'Baby Care', 'First Aid', 'Healthcare']
export const SERVICES = [
  ['Pill', 'Medicine Assistance', 'Get help locating commonly requested medicines and healthcare essentials.', 'pharm'],
  ['Package', 'Healthcare Essentials', 'Find everyday healthcare, personal care and wellness products.', 'shelves'],
  ['Droplets', 'Personal Care', 'Explore products for personal hygiene and everyday wellbeing.', 'hero'],
  ['Cross', 'First Aid Essentials', 'Basic first-aid and healthcare supplies for everyday needs.', 'meds'],
  ['HeartHandshake', 'Customer Assistance', 'Our team is available to help customers find suitable store products and information.', 'hero'],
  ['MapPin', 'Local Pharmacy Support', 'Convenient pharmacy access for customers in and around Kovvur.', 'shelves'],
].map(([icon, title, desc, img]) => ({ icon, title, desc, img: IMG[img] }))
export const GALLERY = [
  ['Modern pharmacy interior', 'hero', 'tall'], ['Medicine shelves', 'shelves', ''], ['Healthcare products', 'meds', ''],
  ['Pharmacist helping customer', 'pharm', 'tall'], ['Medical supplies', 'meds', ''], ['Wellness products', 'shelves', 'tall'],
  ['Personal care products', 'pharm', ''], ['Clean pharmacy counter', 'hero', ''],
].map(([title, img, size]) => ({ title, src: IMG[img], size }))
