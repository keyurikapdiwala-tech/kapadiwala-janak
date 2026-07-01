import { Service, GalleryItem, PriceItem, Testimonial, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: 'Gargi Ladies Tailor',
  owner: 'Janak Kapadiwala',
  phone: '+916352902879',
  formattedPhone: '+91 6352902879',
  category: 'Ladies Tailor | Custom Stitching | Boutique | Fashion Designer',
  address: 'B2, Parekh Mahel Apartment, Near Zapa Bazar, Surat, Gujarat 395003',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3496054230184!2d72.83401567605912!3d21.202061280389366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ee0c634c7ef%3A0xe6bf44b408dfc207!2sZampa%20Bazaar%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1719782800000!5m2!1sen!2sin',
  hours: {
    weekdays: 'Monday - Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: Closed',
    raw: [
      { day: 'Monday', time: '9:00 AM – 8:00 PM' },
      { day: 'Tuesday', time: '9:00 AM – 8:00 PM' },
      { day: 'Wednesday', time: '9:00 AM – 8:00 PM' },
      { day: 'Thursday', time: '9:00 AM – 8:00 PM' },
      { day: 'Friday', time: '9:00 AM – 8:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
      { day: 'Sunday', time: 'Closed' }
    ]
  },
  socials: {
    instagram: 'https://www.instagram.com/p/DOoUcZnCK_3/',
    whatsapp: 'https://wa.me/916352902879?text=Hello%20Gargi%20Ladies%20Tailor%2C%20I%20would%20like%20to%20inquire%20about%20your%20custom%20stitching%20services.',
    call: 'tel:+916352902879'
  },
  images: {
    hero: '/src/assets/images/natural_luxury_boutique_hero_1782888048435.jpg',
    bridalBlouse: '/src/assets/images/bridal_blouse_natural_1782888080538.jpg',
    lehenga: '/src/assets/images/lehenga_natural_tones_1782888093473.jpg',
    about: '/src/assets/images/luxury_lehenga_about_design_1782888623100.jpg'
  }
};

export const SERVICES: Service[] = [
  {
    id: 'blouse-stitching',
    title: 'Blouse Stitching',
    description: 'Perfect daily wear blouse stitching with neat linings and absolute comfort fitting.',
    iconName: 'Scissors',
    category: 'Essential'
  },
  {
    id: 'designer-blouse',
    title: 'Designer Blouse',
    description: 'Sabyasachi style, princess cut, high-neck, backless, halter neck, and modern designer blouses customized for you.',
    iconName: 'Sparkles',
    category: 'Boutique'
  },
  {
    id: 'bridal-blouse',
    title: 'Bridal Blouse',
    description: 'Exquisite custom bridal work featuring heavy hand-embroidery, zardosi, beads, maggam work, and royal tassels.',
    iconName: 'Crown',
    category: 'Bridal'
  },
  {
    id: 'kurti-stitching',
    title: 'Kurti Stitching',
    description: 'Tailored kurtis, A-lines, Anarkalis, and straight cut kurtis designed for sleek college, office, and casual wear.',
    iconName: 'Shirt',
    category: 'Essential'
  },
  {
    id: 'dress-stitching',
    title: 'Dress Stitching',
    description: 'Custom made dresses, western gowns, maxi dresses, and coordinate sets stitched to match your style.',
    iconName: 'Palette',
    category: 'Boutique'
  },
  {
    id: 'lehenga-stitching',
    title: 'Lehenga Stitching',
    description: 'Royal bridal and bridesmaid lehenga cholis stitched with massive flare, can-can layering, and tailored fitting.',
    iconName: 'Gem',
    category: 'Bridal'
  },
  {
    id: 'salwar-suit-stitching',
    title: 'Salwar Suit Stitching',
    description: 'Punjabi suits, Patialas, palazzo sets, and designer salwar kameez with elegant necklines and precise fits.',
    iconName: 'Layers',
    category: 'Essential'
  },
  {
    id: 'alteration',
    title: 'Expert Alterations',
    description: 'Premium resizing, body-fit alterations, boutique restructuring, and shape correction for all ladies outfits.',
    iconName: 'Maximize',
    category: 'Maintenance'
  },
  {
    id: 'fall-pico',
    title: 'Fall Pico & Borders',
    description: 'Seamless saree fall and interlocking pico, along with custom designer lace borders stitching with ultimate neatness.',
    iconName: 'Wind',
    category: 'Maintenance'
  },
  {
    id: 'custom-design',
    title: 'Custom Design Consulting',
    description: 'Consult one-on-one with Janak Kapadiwala to draft modern patterns, neckline sketches, and coordinate perfect fabrics.',
    iconName: 'PenTool',
    category: 'Boutique'
  },
  {
    id: 'wedding-collection',
    title: 'Wedding Collection',
    description: 'Complete trousseau planning and matching sets for brides, mothers, and sisters for all wedding functions.',
    iconName: 'Heart',
    category: 'Bridal'
  },
  {
    id: 'kids-dress',
    title: 'Kids Dress Stitching',
    description: 'Adorable custom pattu pavadais, frocks, lehengas, and ethnic wear for girls with skin-friendly soft linings.',
    iconName: 'Baby',
    category: 'Essential'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Classic Maggam Work Bridal Blouse',
    category: 'Bridal Collection',
    imageUrl: BUSINESS_INFO.images.bridalBlouse
  },
  {
    id: 'g2',
    title: 'Royal Maroon Velvet Lehenga Choli',
    category: 'Lehenga',
    imageUrl: BUSINESS_INFO.images.lehenga
  },
  {
    id: 'g3',
    title: 'Intricate Gold Zardosi Design Blouse',
    category: 'Designer Blouse',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Earthy Linen A-Line Kurti with Lace',
    category: 'Kurti',
    imageUrl: '/src/assets/images/earthy_linen_kurti_1782889021422.jpg'
  },
  {
    id: 'g5',
    title: 'Custom Designer Dress Pattern & Cuts',
    category: 'Designer Dress',
    imageUrl: '/src/assets/images/designer_dress_natural_1782888351068.jpg'
  },
  {
    id: 'g6',
    title: 'Traditional Banarasi Silk Saree Styling',
    category: 'Traditional Wear',
    imageUrl: '/src/assets/images/banarasi_silk_saree_natural_1782888837847.jpg'
  },
  {
    id: 'g7',
    title: 'Anarkali Dress Fitting Reshape',
    category: 'Before & After Alteration',
    imageUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=800',
    beforeImageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    afterImageUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g8',
    title: 'Boutique Deep-Neck Blouse Back Pattern',
    category: 'Designer Blouse',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g9',
    title: 'Pastel Organza Lehenga with Mirror Embellishments',
    category: 'Lehenga',
    imageUrl: '/src/assets/images/pastel_organza_lehenga_natural_1782888853233.jpg'
  },
  {
    id: 'g10',
    title: 'Signature Eco-Friendly Cotton Boutique Bag',
    category: 'Signature Packaging',
    imageUrl: '/src/assets/images/cotton_boutique_bag_1782889036991.jpg'
  }
];

export const PRICING_LIST: PriceItem[] = [
  {
    id: 'p1',
    name: 'Simple Dress',
    stitchingPrice: '₹350',
    timeframe: '3 - 5 Days',
    popular: false
  },
  {
    id: 'p2',
    name: 'Lined Dress',
    stitchingPrice: '₹600',
    timeframe: '5 - 7 Days',
    popular: true
  },
  {
    id: 'p3',
    name: 'Simple Blouse',
    stitchingPrice: '₹300',
    timeframe: '2 - 4 Days',
    popular: false
  },
  {
    id: 'p4',
    name: 'Lined Blouse',
    stitchingPrice: '₹450',
    timeframe: '3 - 5 Days',
    popular: true
  },
  {
    id: 'p5',
    name: 'Princesses Cut Blouse',
    stitchingPrice: '₹600',
    timeframe: '4 - 6 Days',
    popular: true
  }
];

export const REASONS_TO_CHOOSE: { title: string; desc: string; iconName: string }[] = [
  {
    title: 'Experienced Tailor',
    desc: 'Under the guidance of master tailor Janak Kapadiwala, we possess decades of bespoke tailoring expertise.',
    iconName: 'UserCheck'
  },
  {
    title: 'Perfect Fitting',
    desc: 'We follow a rigorous multi-point measurement checklist to guarantee a flawless, comfortable silhouette.',
    iconName: 'Scissors'
  },
  {
    title: 'Affordable Price',
    desc: 'Get premium boutique styling and custom fits at reasonable rates that offer spectacular value.',
    iconName: 'CreditCard'
  },
  {
    title: 'On-Time Delivery',
    desc: 'We respect your special occasions. Every outfit is fully stitched, pressed, and delivered strictly on schedule.',
    iconName: 'Calendar'
  },
  {
    title: 'Premium Finishing',
    desc: 'Neat double linings, pristine interlock stitching, premium zippers, and hand-stitched hem details.',
    iconName: 'Sparkles'
  },
  {
    title: 'Latest Fashion Designs',
    desc: 'We constantly study current Bollywood, couture, and wedding trends to recommend modern necklines and layouts.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Customized Stitching',
    desc: 'Bring your Pinterest screenshots or sketches, and we will bring your exact vision to life down to the millimeter.',
    iconName: 'PenTool'
  },
  {
    title: '100% Satisfaction',
    desc: 'Free post-delivery trial session and minor alterations if needed until you look and feel completely stunning.',
    iconName: 'Heart'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rupal Shah',
    rating: 5,
    review: 'The fitting was absolutely perfect! I gave them a designer blouse reference from Pinterest, and Janak bhai stitched it even better than the image. The hand-embroidery work is extremely detailed and premium.',
    location: 'Vesu, Surat',
    date: '2 weeks ago'
  },
  {
    id: 't2',
    name: 'Anjali Kapadia',
    rating: 5,
    review: 'Very professional stitching and timely delivery. I needed an urgent alteration for a family wedding, and they delivered it in just 4 hours, fitting like a glove. Will always recommend Gargi Tailors!',
    location: 'Ghod Dod Road, Surat',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Priyanka Patel',
    rating: 5,
    review: 'Excellent bridal blouse work with amazing finishing. Stitched my heavy velvet lehenga and 3 wedding blouses. The lining is soft, zippers are high quality, and the fittings made me feel so confident on my wedding day!',
    location: 'Adajan, Surat',
    date: '3 weeks ago'
  },
  {
    id: 't4',
    name: 'Sneha Choksi',
    rating: 5,
    review: 'Best tailor for designer blouses in Surat. Janak Kapadiwala takes detailed measurements and understands the design instantly. Friendly behavior and affordable rates compared to high-end boutiques.',
    location: 'VIP Road, Surat',
    date: '2 months ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How many days does regular stitching take?',
    answer: 'Standard tailoring (regular blouses, kurtis, salwar suits) takes between 3 to 5 business days. Designer blouses and lehengas take 5 to 10 days depending on complexity.'
  },
  {
    id: 'f2',
    question: 'Do you stitch heavy bridal wear and designer blouses?',
    answer: 'Yes! We specialize in premium bridal wear, heavy maggam/zardosi embroidery blouses, high-flare lehengas, and bridal trousseau collections with customized pattern consultation.'
  },
  {
    id: 'f3',
    question: 'Can I bring my own fabric/materials?',
    answer: 'Absolutely. You can bring your own fabric. We will measure, suggest perfect styling patterns, and recommend suitable trims or linings. We can also provide premium lining fabric at a minor additional cost.'
  },
  {
    id: 'f4',
    question: 'Do you provide alterations for outfits bought online/elsewhere?',
    answer: 'Yes! We offer a full range of boutique alteration services. We can resize, restyle, change necklines, or add sleeves/zip support to any of your ready-made outfits.'
  },
  {
    id: 'f5',
    question: 'Do you accept urgent (same day / 24 hours) orders?',
    answer: 'Yes, we do accept express orders for simple blouses, kurtis, and alterations for a small urgent processing fee. Please call or message us via WhatsApp to confirm slot availability before visiting.'
  },
  {
    id: 'f6',
    question: 'Is there a trial available before taking the final delivery?',
    answer: 'Yes, we always recommend a trial in our boutique. If any minor fitting adjustments are required, we perform them immediately on-site to ensure 100% satisfaction.'
  }
];
