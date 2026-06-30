export interface Project {
  slug: string;
  name: string;
  location: string;
  type: "Residential" | "Commercial" | "Township" | "NA Plots";
  status: "Available" | "Sold Out" | "Coming Soon";
  price: string;
  description: string;
  brochureUrl: string;
  images: {
    hero: string;
    masterPlan: string;
    amenitiesMap: string;
    locationMap: string;
    gallery: string[];
  };
  highlights: string[];
  amenities: { name: string; icon: string }[];
  pricingTable: { plotNo: string; area: string; price: string; status: "Available" | "Reserved" | "Sold Out" }[];
  landmarks: { name: string; distance: string }[];
  videoUrl: string; // YouTube or mock direct video link
  mapEmbedUrl: string; // Google Maps mock location coordinate
}

export const projects: Project[] = [
  {
    slug: "ample-adwayam-residency",
    name: "Ample Adwayam Residency",
    location: "Beed Bypass Road, Zalta, Chhatrapati Sambhajinagar",
    type: "Residential",
    status: "Available",
    price: "₹45 Lakhs",
    description: "Ample Adwayam Residency is an elite residential development designed for upscale living. Set in a fast-growing tech corridor, this development combines cutting-edge architecture with massive open spaces, premium clubhouses, and robust security, making it the perfect setting for families seeking comfort and a premium neighborhood.",
    brochureUrl: "/brochure/AMPLE .pdf",
    images: {
      hero: "/extracted/ample-adwayam-residency/hero.png",
      masterPlan: "/extracted/ample-adwayam-residency/master-plan.png",
      amenitiesMap: "/extracted/ample-adwayam-residency/amenities-map.png",
      locationMap: "/extracted/ample-adwayam-residency/location-map.png",
      gallery: [
        "/extracted/ample-adwayam-residency/gate.png",
        "/extracted/ample-adwayam-residency/playground.png",
        "/extracted/ample-adwayam-residency/temple.png",
        "/extracted/ample-adwayam-residency/roads.png"
      ]
    },
    highlights: [
      "NA Approved",
      "Wide Internal Roads",
      "Gated Community Wall",
      "Separate Transformer",
      "Water Pipelines Connected",
      "LED Street Lights",
      "Bank Loan Approved",
      "Children's Play Area"
    ],
    amenities: [
      { name: "Entry Gate with Security Cabin", icon: "Shield" },
      { name: "Community Temple", icon: "Sparkles" },
      { name: "Children's Playground", icon: "Smile" },
      { name: "Underground Drainage System", icon: "Droplet" },
      { name: "9m Wide Tar Roads", icon: "Compass" },
      { name: "Jogging & Walking Track", icon: "MapPin" }
    ],
    pricingTable: [
      { plotNo: "A-101", area: "1,200 Sq Ft", price: "₹45,00,000", status: "Available" },
      { plotNo: "A-102", area: "1,200 Sq Ft", price: "₹45,00,000", status: "Available" },
      { plotNo: "A-103", area: "1,500 Sq Ft", price: "₹56,25,000", status: "Reserved" },
      { plotNo: "B-201", area: "1,800 Sq Ft", price: "₹67,50,000", status: "Available" },
      { plotNo: "B-202", area: "2,000 Sq Ft", price: "₹75,00,000", status: "Sold Out" }
    ],
    landmarks: [
      { name: "New Hedgewar Hospital", distance: "1.5 km" },
      { name: "Zalta Phata Junction", distance: "800 m" },
      { name: "Cambridge International School", distance: "2.0 km" },
      { name: "Chhatrapati Sambhajinagar Station", distance: "7.5 km" }
    ],
    videoUrl: "", // No video uploaded yet
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.66699313627!2d75.37895392683935!3d19.8434685002573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9942d93e110b%3A0xc34cc59aa59f13c2!2sZalta%2C%20Maharashtra%20431007!5e0!3m2!1sen!2sin!4v1655900000000!5m2!1sen!2sin"
  },
  {
    slug: "vc-ora-park",
    name: "VC Ora Park",
    location: "Zalta Phata, Beed Bypass, Chhatrapati Sambhajinagar",
    type: "Township",
    status: "Available",
    price: "₹85 Lakhs",
    description: "VC Ora Park is a master-planned lifestyle township set amidst the pristine hills. Designed for those who value privacy, serenity, and active community living, the property features panoramic valleys, individual villa plots, organic agricultural gardens, and a grand community temple. Ideal as a secondary vacation residence or a permanent peaceful haven.",
    brochureUrl: "/brochure/V C ORA BROCHURE.pdf",
    images: {
      hero: "/extracted/vc-ora-park/hero.png",
      masterPlan: "/extracted/vc-ora-park/master-plan.png",
      amenitiesMap: "/extracted/vc-ora-park/amenities-map.png",
      locationMap: "/extracted/vc-ora-park/location-map.png",
      gallery: [
        "/extracted/vc-ora-park/gate.png",
        "/extracted/vc-ora-park/wall-compond.png",
        "/extracted/vc-ora-park/street-lights.png",
        "/extracted/vc-ora-park/roads.png"
      ]
    },
    highlights: [
      "Collector NA Sanctioned",
      "Premium Hillside Views",
      "Wide Concrete Roads",
      "Temple & Meditation Zone",
      "Independent Electricity Transformer",
      "Individual Water Connection",
      "Perimeter Fencing & Guard Guarded",
      "100% Clean Title"
    ],
    amenities: [
      { name: "Hilltop Clubhouse & Lounge", icon: "Building2" },
      { name: "Ganesha Temple", icon: "Sparkles" },
      { name: "Children's Activity Play park", icon: "Smile" },
      { name: "Underground Cabling & Sewage", icon: "Droplet" },
      { name: "Landscape Botanical Garden", icon: "Leaf" },
      { name: "Jogging & Cycle Tracks", icon: "Compass" }
    ],
    pricingTable: [
      { plotNo: "Plot-01", area: "2,000 Sq Ft", price: "₹85,00,000", status: "Available" },
      { plotNo: "Plot-02", area: "2,200 Sq Ft", price: "₹93,50,000", status: "Available" },
      { plotNo: "Plot-05", area: "2,500 Sq Ft", price: "₹1,06,25,000", status: "Reserved" },
      { plotNo: "Plot-12", area: "3,000 Sq Ft", price: "₹1,27,50,000", status: "Available" },
      { plotNo: "Plot-15", area: "4,000 Sq Ft", price: "₹1,70,00,000", status: "Sold Out" }
    ],
    landmarks: [
      { name: "New Hedgewar Hospital", distance: "3.0 km" },
      { name: "Zalta Phata Highway Touch", distance: "200 m" },
      { name: "Cambridge High School", distance: "1.8 km" },
      { name: "Chhatrapati Sambhajinagar Airport", distance: "5.5 km" }
    ],
    videoUrl: "", // No video uploaded yet
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.66699313627!2d75.37895392683935!3d19.8434685002573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9942d93e110b%3A0xc34cc59aa59f13c2!2sZalta%2C%20Maharashtra%20431007!5e0!3m2!1sen!2sin!4v1655900000000!5m2!1sen!2sin"
  },
  {
    slug: "hindustan-residency",
    name: "Hindustan Residency",
    location: "Paithan Road, Bidkin DMIC, Chhatrapati Sambhajinagar",
    type: "NA Plots",
    status: "Available",
    price: "₹30 Lakhs",
    description: "Hindustan Residency offers premium collector NA plots optimized for custom independent villa builds. Located directly off the National Highway bypass, this project provides top-tier infrastructure, concrete roads, decorative compound wall, and immediate registration capabilities. Ideal for smart investment or immediate construction.",
    brochureUrl: "/brochure/Hindustan Residency Brochure.pdf",
    images: {
      hero: "/extracted/hindustan-residency/hero.png",
      masterPlan: "/extracted/hindustan-residency/master-plan.png",
      amenitiesMap: "/extracted/hindustan-residency/amenities-map.png",
      locationMap: "/extracted/hindustan-residency/location-map.png",
      gallery: [
        "/extracted/hindustan-residency/gate.png",
        "/extracted/hindustan-residency/playground.png",
        "/extracted/hindustan-residency/street-lights.png",
        "/extracted/hindustan-residency/roads.png"
      ]
    },
    highlights: [
      "PMRDA NA Approved",
      "Immediate Registration",
      "Direct Highway Access",
      "Individual 7/12 Extract",
      "Concrete Stormwater Drains",
      "Individual Compound Wall",
      "Street Lights on Every Plot",
      "9m Concrete Roads"
    ],
    amenities: [
      { name: "Grand Entry Gate & Arch", icon: "Shield" },
      { name: "Sai Baba Temple", icon: "Sparkles" },
      { name: "Open Play Gym Area", icon: "Smile" },
      { name: "Internal Rainwater Drainage", icon: "Droplet" },
      { name: "Internal WBM & Tar Roads", icon: "Compass" },
      { name: "24/7 Security Cabin", icon: "MapPin" }
    ],
    pricingTable: [
      { plotNo: "Plot-A", area: "1,000 Sq Ft", price: "₹30,00,000", status: "Available" },
      { plotNo: "Plot-B", area: "1,000 Sq Ft", price: "₹30,00,000", status: "Available" },
      { plotNo: "Plot-C", area: "1,200 Sq Ft", price: "₹36,00,000", status: "Reserved" },
      { plotNo: "Plot-H", area: "1,500 Sq Ft", price: "₹45,00,000", status: "Available" },
      { plotNo: "Plot-M", area: "2,000 Sq Ft", price: "₹60,00,000", status: "Sold Out" }
    ],
    landmarks: [
      { name: "Bidkin DMIC Industrial Hub", distance: "1.0 km" },
      { name: "GST Colony", distance: "500 m" },
      { name: "Bidkin Bus Stand", distance: "2.2 km" },
      { name: "Chhatrapati Sambhajinagar Bypass", distance: "8.0 km" }
    ],
    videoUrl: "/videos/hindustan.mp4",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30058.07722646215!2d75.29367746816578!3d19.658933207860485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb89953d61b369%3A0x6b4421b7df026d37!2sBidkin%2C%20Maharashtra%20431105!5e0!3m2!1sen!2sin!4v1655900200000!5m2!1sen!2sin"
  },
  {
    slug: "palm-paradise",
    name: "Palm Paradise",
    location: "Gat No. 63 (PT), Mahal Pimpri, Naregaon-Shendra-Varud Road (150 Ft Highway), Chhatrapati Sambhajinagar - 431006",
    type: "NA Plots",
    status: "Coming Soon",
    price: "Price on Request",
    description: "Welcome to Palm Paradise, an upcoming residential and commercial marvel designed to offer a blend of luxury and nature. Featuring NA-44 Plots, this township connects Cambridge-Pisadevi bypass to five-star Shendra MIDC.",
    brochureUrl: "/brochure/PALM PARADISE BROCHURE.pdf",
    images: {
      hero: "/extracted/palm-paradise/hero.png",
      masterPlan: "/extracted/palm-paradise/master-plan.png",
      amenitiesMap: "/extracted/palm-paradise/amenities-map.png",
      locationMap: "/extracted/palm-paradise/location-map.png",
      gallery: [
        "/extracted/palm-paradise/gate.png",
        "/extracted/palm-paradise/playground.png",
        "/extracted/palm-paradise/CCTV.png",
        "/extracted/palm-paradise/roads.png"
      ]
    },
    highlights: [
      "NA-44 Plots",
      "Commercial & Residential",
      "Gated Community",
      "Wide Internal Roads",
      "24/7 Security",
      "Water Supply",
      "Electricity Connection"
    ],
    amenities: [
      { name: "Entry Gate with Security Cabin", icon: "Shield" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "Landscaped Garden", icon: "Leaf" },
      { name: "Jogging Track", icon: "Compass" }
    ],
    pricingTable: [
      { plotNo: "Plot-1", area: "1,000 Sq Ft", price: "On Request", status: "Available" },
      { plotNo: "Plot-2", area: "1,200 Sq Ft", price: "On Request", status: "Available" }
    ],
    landmarks: [
      { name: "Shendra MIDC", distance: "Nearby" },
      { name: "Cambridge-Pisadevi Bypass", distance: "Connected" }
    ],
    videoUrl: "",
    mapEmbedUrl: "https://maps.google.com/maps?q=Mahal%20Pimpri,%20Chhatrapati%20Sambhajinagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    slug: "radha-nawal-city",
    name: "Radha Nawal City",
    location: "Chhatrapati Sambhajinagar",
    type: "Township",
    status: "Coming Soon",
    price: "Price on Request",
    description: "Radha Nawal City is an ambitious township project offering world-class amenities and a serene living environment.",
    brochureUrl: "/brochure/RADHA NAWAL CITY BROCHURE.pdf",
    images: {
      hero: "/extracted/radha-nawal-city/hero.png",
      masterPlan: "/extracted/radha-nawal-city/master-plan.png",
      amenitiesMap: "/extracted/radha-nawal-city/amenities-map.png",
      locationMap: "/extracted/radha-nawal-city/location-map.png",
      gallery: [
        "/extracted/radha-nawal-city/gate.png",
        "/extracted/radha-nawal-city/playground.png",
        "/extracted/radha-nawal-city/street-lights.png",
        "/extracted/radha-nawal-city/roads.png"
      ]
    },
    highlights: [
      "Premium Township",
      "Gated Community",
      "Wide Internal Roads",
      "24/7 Security",
      "Water Supply",
      "Electricity Connection"
    ],
    amenities: [
      { name: "Entry Gate with Security Cabin", icon: "Shield" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "Landscaped Garden", icon: "Leaf" },
      { name: "Jogging Track", icon: "Compass" }
    ],
    pricingTable: [
      { plotNo: "Plot-1", area: "1,000 Sq Ft", price: "On Request", status: "Available" },
      { plotNo: "Plot-2", area: "1,200 Sq Ft", price: "On Request", status: "Available" }
    ],
    landmarks: [
      { name: "City Center", distance: "5.0 km" },
      { name: "Local Hospital", distance: "2.0 km" },
      { name: "School", distance: "1.5 km" }
    ],
    videoUrl: "",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.66699313627!2d75.37895392683935!3d19.8434685002573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9942d93e110b%3A0xc34cc59aa59f13c2!2sZalta%2C%20Maharashtra%20431007!5e0!3m2!1sen!2sin!4v1655900000000!5m2!1sen!2sin"
  },
  {
    slug: "vyanktesh-nagar",
    name: "Vyanktesh Nagar",
    location: "Chhatrapati Sambhajinagar",
    type: "NA Plots",
    status: "Coming Soon",
    price: "Price on Request",
    description: "Vyanktesh Nagar provides prime NA plots suitable for constructing your dream independent home in a well-planned community.",
    brochureUrl: "/brochure/VYANKTESH NAGAR BROCHURE - 04 05 2026.pdf",
    images: {
      hero: "/extracted/vyanktesh-nagar/hero.png",
      masterPlan: "/extracted/vyanktesh-nagar/master-plan.png",
      amenitiesMap: "/extracted/vyanktesh-nagar/amenities-map.png",
      locationMap: "/extracted/vyanktesh-nagar/location-map.png",
      gallery: [
        "/extracted/vyanktesh-nagar/gate.png",
        "/extracted/vyanktesh-nagar/playground.png",
        "/extracted/vyanktesh-nagar/street-lights.png",
        "/extracted/vyanktesh-nagar/roads.png"
      ]
    },
    highlights: [
      "NA Approved Plots",
      "Immediate Registration",
      "Wide Internal Roads",
      "24/7 Security",
      "Water Supply",
      "Electricity Connection"
    ],
    amenities: [
      { name: "Entry Gate with Security Cabin", icon: "Shield" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "Landscaped Garden", icon: "Leaf" },
      { name: "Jogging Track", icon: "Compass" }
    ],
    pricingTable: [
      { plotNo: "Plot-1", area: "1,000 Sq Ft", price: "On Request", status: "Available" },
      { plotNo: "Plot-2", area: "1,200 Sq Ft", price: "On Request", status: "Available" }
    ],
    landmarks: [
      { name: "City Center", distance: "5.0 km" },
      { name: "Local Hospital", distance: "2.0 km" },
      { name: "School", distance: "1.5 km" }
    ],
    videoUrl: "",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15011.66699313627!2d75.37895392683935!3d19.8434685002573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9942d93e110b%3A0xc34cc59aa59f13c2!2sZalta%2C%20Maharashtra%20431007!5e0!3m2!1sen!2sin!4v1655900000000!5m2!1sen!2sin"
  },
  {
    slug: "vyanktesh-park",
    name: "Vyanktesh Park",
    location: "Gat No. 10, Tisgaon, Waluj Mahanagar Parisar, Chhatrapati Sambhajinagar",
    type: "Township",
    status: "Coming Soon",
    price: "Price on Request",
    description: "Vyanktesh Park is a grand township offering NA-44 plots in the highly demanded A.S. Club area, Waluj Mahanagar Parisar. It is conveniently located near the Chhatrapati Sambhajinagar - Nagar Pune Highway, providing excellent connectivity.",
    brochureUrl: "/brochure/VYANKTESH PARK BROCHURE - 04 05 2026.pdf",
    images: {
      hero: "/extracted/vyanktesh-park/hero.png",
      masterPlan: "/extracted/vyanktesh-park/master-plan.png",
      amenitiesMap: "/extracted/vyanktesh-park/amenities-map.png",
      locationMap: "/extracted/vyanktesh-park/location-map.png",
      gallery: [
        "/extracted/vyanktesh-park/gate.png",
        "/extracted/vyanktesh-park/wall-compound.png",
        "/extracted/vyanktesh-park/street-lights.png",
        "/extracted/vyanktesh-park/roads.png"
      ]
    },
    highlights: [
      "NA-44 Plots",
      "Grand Township",
      "Near A.S. Club",
      "Highway Connectivity",
      "Wide Internal Roads",
      "24/7 Security"
    ],
    amenities: [
      { name: "Entry Gate with Security Cabin", icon: "Shield" },
      { name: "Children's Play Area", icon: "Smile" },
      { name: "Landscaped Garden", icon: "Leaf" },
      { name: "Jogging Track", icon: "Compass" }
    ],
    pricingTable: [
      { plotNo: "Plot-1", area: "1,000 Sq Ft", price: "On Request", status: "Available" },
      { plotNo: "Plot-2", area: "1,200 Sq Ft", price: "On Request", status: "Available" }
    ],
    landmarks: [
      { name: "A.S. Club", distance: "Nearby" },
      { name: "Nagar Pune Highway", distance: "Connected" },
      { name: "Waluj Mahanagar", distance: "Within Area" }
    ],
    videoUrl: "",
    mapEmbedUrl: "https://maps.google.com/maps?q=Tisgaon,%20Waluj%20Mahanagar,%20Chhatrapati%20Sambhajinagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }
];
