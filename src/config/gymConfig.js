/*
 =====================================================================
  CUSTOMIZE YOUR GYM HERE
  This is the ONLY file you need to edit for text, contact details,
  colors, programs, trainers, pricing and FAQs.
  Images go in the /public/images folder (see CUSTOMIZATION_GUIDE.md).
 =====================================================================
*/

export const gymConfig = {
  // ---- Basic info ----
  gymName: "YASH FITNESS",
  logo: "/images/gym-logo.svg",
  tagline: "Premium strength and conditioning studio.",
  description:
    "Premium strength and conditioning facility in Bengaluru. Personal training, group classes and expert coaching.",

  // ---- Contact ----
  phone: "+917820874950",
  whatsapp: "7820874950", // country code + number, no + or spaces
  whatsappMessage: "Hi, I would like to know more about your gym membership.",
  email: "hello@ironforgefitness.com",
  address: "SHRI NAGAR ",
  mapEmbedUrl:
    "gahttps://www.google.com/maps/place/Dudgaon,+Maharashtra/@19.9840109,73.6239256,14z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3bddd290b09914b3:0xcb07845d9d28215c!2sNashik,+Maharashtra!3b1!8m2!3d19.9993217!4d73.7900188!16zL20vMDM3dmtr!3m5!1s0x3bddf284c9a73433:0xf200ccbf60352a0b!8m2!3d19.9737144!4d73.6506776!16s%2Fg%2F12hpl78f6?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3Dluru&output=embed",

  // ---- Social ----
  instagram: "https://instagram.com/ironforgefitness",
  facebook: "https://facebook.com/ironforgefitness",

  // ---- Colors (hex) ----
  colors: {
    primary: "#98e639",
    secondary: "#0A0A0A",
    surface: "#141414",
    muted: "#A1A1A1",
  },

  // ---- Hero ----
  hero: {
    title: "SKSKJJFJK.",
    subtitle: "Train with purpose. Transform your body. Change your life.",
    primaryCta: "START YOUR JOURNEY",
    secondaryCta: "VIEW PROGRAMS",
    image: "/images/strong-man-training-gym.jpg",
  },

  // ---- Stats ----
  stats: [
    { number: "10+", label: "Years Experience" },
    { number: "5K+", label: "Members" },
    { number: "20+", label: "Expert Trainers" },
    { number: "4.9", label: "Google Rating" },
  ],

  // ---- Programs (icon: Dumbbell, User, Flame, Activity, Users, HeartPulse) ----
  programs: [
    { title: "Strength Training", description: "Build strength, muscle and confidence.", icon: "Dumbbell", image: "/images/strength.svg" },
    { title: "Personal Training", description: "One-on-one coaching designed around your goals.", icon: "User", image: "/images/personal-training.svg" },
    { title: "Weight Loss", description: "Structured training and guidance to help you transform.", icon: "Flame", image: "/images/cardio.svg" },
    { title: "Functional Training", description: "Move better. Perform better. Live better.", icon: "Activity", image: "/images/training.svg" },
    { title: "Group Training", description: "Train with energy, motivation and community.", icon: "Users", image: "/images/group-training.svg" },
    { title: "Cardio & Conditioning", description: "Improve endurance and overall fitness.", icon: "HeartPulse", image: "/images/cardio.svg" },
  ],

  // ---- Membership plans ----
  membership: [
    { name: "BASIC", price: "₹1,499", period: "/month", popular: false, features: ["Gym Access", "Cardio Area", "Locker Access"] },
    { name: "PRO", price: "₹2,499", period: "/month", popular: true, features: ["Everything in Basic", "Group Training", "Fitness Assessment"] },
    { name: "ELITE", price: "₹4,999", period: "/month", popular: false, features: ["Everything in Pro", "Personal Training", "Nutrition Guidance"] },
  ],

  // ---- Trainers (demo names: replace with real staff) ----
  trainers: [
    { name: "Rahul Sharma", role: "Head Strength Coach", specialty: "Strength & Conditioning", experience: "8+ Years", image: "/images/trainer-01.svg", instagram: "https://instagram.com/ironforgefitness" },
    { name: "Priya Nair", role: "Functional Trainer", specialty: "Mobility & Functional Training", experience: "6+ Years", image: "/images/trainer-02.svg", instagram: "https://instagram.com/ironforgefitness" },
    { name: "Arjun Rao", role: "Personal Trainer", specialty: "Weight Loss & Nutrition", experience: "5+ Years", image: "/images/trainer-03.svg", instagram: "https://instagram.com/ironforgefitness" },
  ],

  // ---- FAQ ----
  faqs: [
    { q: "What are your membership plans?", a: "We offer Basic, Pro and Elite plans. See the Membership section for details." },
    { q: "Do you offer personal training?", a: "Yes. Personal training is included in the Elite plan and available as an add-on." },
    { q: "Is there a trial session?", a: "Yes, book a free trial session by contacting us on WhatsApp or phone." },
    { q: "Do you provide diet plans?", a: "Nutrition guidance is included in the Elite plan." },
    { q: "What are your opening hours?", a: "Monday to Saturday, 5:00 AM to 10:00 PM. Sunday, 7:00 AM to 12:00 PM." },
    { q: "Is parking available?", a: "Yes, free parking is available for members." },
    { q: "Can beginners join?", a: "Absolutely. Our trainers create programs for every fitness level." },
  ],
};
