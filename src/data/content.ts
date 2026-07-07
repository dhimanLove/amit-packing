export const SITE_META = {
  title: "Amit Packaging Industries | Premium Packaging Solutions, Kota",
  description:
    "Amit Packaging Industries offers high-quality corrugated boxes, e-commerce packaging, and industrial containers from Kota, Rajasthan. 4.9★ rated. Serving Rajasthan & Central India.",
  keywords: [
    "packaging company kota rajasthan",
    "corrugated box manufacturer kota",
    "e-commerce packaging kota",
    "industrial packaging rajasthan",
    "quality packaging solutions",
    "amit packaging industries",
    "box manufacturer chambal industrial area",
  ],
  og: {
    title: "Amit Packaging Industries — Precision Packaging from Kota",
    description:
      "4.9★ rated packaging manufacturer. Corrugated boxes, e-commerce solutions, and industrial packaging. F-24A, Chambal Industrial Area, Kota.",
    image: "/og-image.jpg",
    url: "https://amitpackaging.in",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Amit Packaging Industries",
    alternateName: "अमित पैकेजिंग इंडस्ट्रीज",
    image: "https://amitpackaging.in/og-image.jpg",
    telephone: "+91xxxxxxxxxx",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F-24 (A), Chambal Industrial Area, Kota Industrial Area",
      addressLocality: "Kota",
      addressRegion: "Rajasthan",
      postalCode: "324003",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.1842, longitude: 75.8558 },
    url: "https://amitpackaging.in",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "65" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "18:00" }
    ],
    priceRange: "₹₹",
  },
};

export const NAV = {
  logo: "Amit Packaging",
  links: ["Services", "About", "Process", "Reviews", "Contact"],
};

export const HERO = {
  label: "CHAMBAL INDUSTRIAL AREA, KOTA",
  headline: "Every box is\na promise\ndelivered.",
  sub: "Precision packaging engineered for garlic, agriculture,\ne-commerce, and industrial applications.",
  cta: { primary: "Explore Services", secondary: "Contact Us" },
};

export const ABOUT = {
  label: "ABOUT",
  headline: "Built in Kota.\nTrusted across\nRajasthan.",
  body: [
    "Amit Packaging Industries operates from the heart of Chambal Industrial Area, Kota — manufacturing corrugated boxes, specialised agricultural packaging, and e-commerce-ready containers for clients across Rajasthan and Central India.",
    "With a 4.9-star rating across 65 verified reviews, our reputation is built on a single principle: material quality that protects what matters most to our clients, delivered on time, every time.",
  ],
  stats: [
    { value: "4.9★", label: "Google Rating" },
    { value: "65+", label: "Verified Reviews" },
    { value: "15+", label: "Years in Operation" },
    { value: "500+", label: "Clients Served" },
  ],
};

export const SERVICES = {
  label: "SERVICES",
  headline: "Packaging solutions\nfor every application.",
  items: [
    {
      image: "/images/corrugated-boxes.jpg",
      alt: "Corrugated cardboard boxes stacked in facility",
      title: "Corrugated Boxes",
      body: "Multi-ply corrugated cartons for agricultural produce, FMCG, and bulk industrial shipment. Custom dimensions, print-ready surfaces.",
    },
    {
      image: "/images/ecommerce-packaging.jpg",
      alt: "E-commerce ready packaging boxes",
      title: "E-Commerce Packaging",
      body: "Mailer boxes, shipper cartons, and poly-lined containers purpose-built for last-mile delivery. Tamper-evident seals available.",
    },
    {
      image: "/images/industrial-drums.jpg",
      alt: "Industrial bulk packaging containers",
      title: "Agricultural & Bulk",
      body: "Fresh garlic, produce, and dry commodity boxes engineered to maintain product integrity across long-haul supply chains.",
    },
  ],
};

export const WHY_US = {
  label: "WHY AMIT PACKAGING",
  headline: "The detail others\nskip — we\nspecify.",
  points: [
    { icon: "ShieldCheck", title: "Quality Material", body: "Premium multi-ply corrugated board with moisture resistance treatment as standard." },
    { icon: "Truck", title: "On-Time Delivery", body: "Production scheduling aligned to your dispatch timeline — not ours." },
    { icon: "ChartLine", title: "Reasonable Pricing", body: "Factory-direct rates with no intermediary markups. Volume discounts available." },
    { icon: "HeadCircuit", title: "Expert Consultation", body: "Our owner-operators walk every client through material specs, print options, and load ratings." },
  ],
};

export const PROCESS = {
  label: "PROCESS",
  headline: "From requirement\nto dispatch.",
  steps: [
    { title: "Requirement Discussion", body: "We discuss dimensions, material grade, expected load, and delivery volume. No generic catalogue quoting." },
    { title: "Sample & Approval", body: "A physical prototype is produced within 2–3 working days for your sign-off before production begins." },
    { title: "Manufacturing", body: "Production runs at our Chambal Industrial Area facility under direct quality supervision." },
    { title: "Quality Check", body: "Each batch is inspected for dimensional accuracy, board integrity, and print registration before dispatch." },
    { title: "Delivery", body: "Factory-direct delivery across Kota, Rajasthan, and Central India. Transport coordination on request." },
  ],
};

export const REVIEWS = {
  label: "REVIEWS",
  headline: "4.9 stars.\n65 clients.\nOne standard.",
  items: [
    { name: "Shreya Goyal", rating: 5, date: "8 months ago", text: "Impressive quality — sturdy, well-designed, and perfect for professional use. They pay close attention to detail and deliver on time." },
    { name: "Abhishek Goyal", rating: 5, date: "5 months ago", text: "Good company and better response. Provides good quality product and the rate is very reasonable." },
    { name: "SastaKabir", rating: 5, date: "1 month ago", text: "Well-behaved owner, supportive, and provides multiple detailed information about all products." },
  ],
  aggregate: { rating: 4.9, count: 65 },
  highlights: ["Good service and good quality", "Great place for complete packing solutions", "Best services in Kota"],
};

export const CONTACT = {
  label: "CONTACT",
  headline: "Let's build your\nnext packaging\nsolution.",
  address: "F-24 (A), Chambal Industrial Area\nKota Industrial Area, Kota\nRajasthan 324003",
  phone: "+91xxxxxxxxxx",
  hours: "Monday – Saturday: 8:00 AM – 6:00 PM",
  cta: "Call Now",
};

export const FOOTER = {
  tagline: "Precision packaging from the heart of Rajasthan.",
  nav: ["Services", "About", "Process", "Reviews", "Contact"],
  legal: "© 2025 Amit Packaging Industries. All rights reserved.",
  address: "F-24A, Chambal Industrial Area, Kota, Rajasthan 324003",
};
