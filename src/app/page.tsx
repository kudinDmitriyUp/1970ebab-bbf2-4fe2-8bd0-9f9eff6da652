"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Sparkles, Hotel, Gift, Heart, Handshake, HelpCircle, BookOpen, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="animatedGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Amenities", id: "amenities" },
            { name: "Rooms", id: "rooms" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          brandName="Grand Haven Hotel"
          button={{
            text: "Book Now",
            href: "booking"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury & Comfort"
          description="Discover exceptional hospitality at Grand Haven Hotel, where every stay becomes an unforgettable experience with world-class amenities and personalized service"
          tag="Premium Hospitality"
          tagIcon={Crown}
          buttons={[
            { text: "Book Your Stay", href: "booking" },
            { text: "Explore Amenities", href: "amenities" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414301431-4ad0338z.jpg"
          imageAlt="Luxury hotel lobby with elegant interior design"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="Grand Haven Hotel embodies the pinnacle of luxury hospitality, where timeless elegance meets modern comfort. Since 1925, we have been creating extraordinary experiences for discerning travelers from around the world."
          buttons={[
            { text: "Our Story", href: "history" },
            { text: "Awards & Recognition", href: "awards" }
          ]}
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardSeven
          title="World-Class Amenities"
          description="Experience unparalleled luxury with our comprehensive range of premium amenities designed to exceed your expectations"
          tag="Premium Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Luxury Spa & Wellness Center",
              description: "Rejuvenate your body and mind at our award-winning spa featuring world-class treatments, therapeutic massages, and state-of-the-art wellness facilities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414302441-4qu59mx4.jpg"
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by renowned chefs using the finest ingredients, complemented by an extensive wine collection and elegant ambiance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414303018-0l6r0ej3.jpg"
            },
            {
              id: 3,
              title: "Rooftop Pool & Lounge",
              description: "Enjoy breathtaking city views from our infinity pool and sophisticated lounge area, perfect for relaxation and socializing",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414303634-sjne4xn2.jpg"
            },
            {
              id: 4,
              title: "State-of-the-Art Fitness Center",
              description: "Maintain your fitness routine with our fully equipped gym featuring the latest exercise equipment and personal training services",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414304362-2kpdfdan.jpg"
            },
            {
              id: 5,
              title: "Business Center & Meeting Rooms",
              description: "Conduct business seamlessly with our modern business facilities, high-speed internet, and professional meeting spaces",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414305144-oxpfl6cr.jpg"
            },
            {
              id: 6,
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special arrangements",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414305668-a2rq5v48.jpg"
            }
          ]}
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and sophistication"
          tag="Room Categories"
          tagIcon={Hotel}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          products={[
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "From $350/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414306161-5z5thstl.jpg",
              imageAlt: "Elegant deluxe king room with city view"
            },
            {
              id: "suite",
              name: "Executive Suite",
              price: "From $750/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414306722-pr7s98zc.jpg",
              imageAlt: "Spacious executive suite with premium amenities"
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "From $1,200/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414307665-ax2ixld1.jpg",
              imageAlt: "Luxurious presidential suite with panoramic views"
            }
          ]}
        />
      </div>
      
      <div id="packages" data-section="packages">
        <PricingCardThree
          title="Special Packages"
          description="Enhance your stay with our carefully curated packages designed to create unforgettable experiences"
          tag="Exclusive Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="blur-reveal"
          plans={[
            {
              id: "romantic",
              price: "$299",
              name: "Romantic Getaway",
              features: [
                "Champagne & chocolate on arrival",
                "Couples spa treatment",
                "Late checkout until 2 PM",
                "Romantic dinner for two"
              ],
              buttons: [
                { text: "Book Package", href: "booking" },
                { text: "Learn More", href: "romantic" }
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Briefcase,
              price: "$199",
              name: "Business Traveler",
              features: [
                "Complimentary WiFi upgrade",
                "Executive lounge access",
                "Business center privileges",
                "Express laundry service",
                "Airport transfer included"
              ],
              buttons: [
                { text: "Book Package", href: "booking" },
                { text: "Learn More", href: "business" }
              ]
            },
            {
              id: "family",
              price: "$399",
              name: "Family Adventure",
              features: [
                "Connecting rooms available",
                "Kids club activities",
                "Family dining discounts",
                "Swimming pool access",
                "City tour tickets included"
              ],
              buttons: [
                { text: "Book Package", href: "booking" },
                { text: "Learn More", href: "family" }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Haven Hotel for their most important stays"
          tag="Guest Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Wellington",
              role: "CEO, Global Enterprises",
              testimonial: "Grand Haven Hotel exceeded all my expectations. The attention to detail, impeccable service, and luxurious amenities made my business trip truly memorable. I wouldn't stay anywhere else in the city.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414308374-fvvrflss.png",
              imageAlt: "Portrait of Sarah Wellington"
            },
            {
              id: "2",
              name: "Michael Harrison",
              role: "Travel Journalist",
              testimonial: "Having stayed at luxury hotels worldwide, I can confidently say Grand Haven ranks among the finest. The concierge team went above and beyond to make our anniversary celebration perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414309046-89z2ysw8.jpg",
              imageAlt: "Portrait of Michael Harrison"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Event Planner",
              testimonial: "The professionalism and elegance of Grand Haven Hotel made our corporate event a resounding success. The venues are stunning and the staff is incredibly accommodating.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414309625-9u2ticvp.jpg",
              imageAlt: "Portrait of Elena Rodriguez"
            },
            {
              id: "4",
              name: "James Mitchell",
              role: "International Consultant",
              testimonial: "From the moment I arrived, every detail was perfect. The spa treatments were divine, the restaurant exceeded my culinary expectations, and the room was a sanctuary of comfort.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414310298-umlacsj4.jpg",
              imageAlt: "Portrait of James Mitchell"
            }
          ]}
        />
      </div>
      
      <div id="partners" data-section="partners">
        <SocialProofTwo
          title="Trusted Partnerships"
          description="We collaborate with leading hospitality brands and organizations to ensure exceptional experiences"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414310789-uvc92ox1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414311286-f7wg527s.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414311821-yhx82y04.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414312341-lpidtn98.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414312824-xf3ivlih.jpg"
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our hotel services, amenities, and booking policies"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service. Please contact our concierge team at least 24 hours in advance to arrange pickup."
            },
            {
              id: "3",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets up to 25 pounds with a refundable pet deposit. Please inform us during booking to ensure pet-friendly accommodations."
            },
            {
              id: "4",
              title: "What dining options are available?",
              content: "Our hotel features a fine dining restaurant, casual café, rooftop bar, and 24-hour room service. We also accommodate special dietary requirements."
            },
            {
              id: "5",
              title: "Is there complimentary WiFi throughout the hotel?",
              content: "Yes, high-speed WiFi is complimentary for all guests throughout the hotel, including guest rooms, public areas, and business facilities."
            },
            {
              id: "6",
              title: "What are your cancellation policies?",
              content: "Cancellations must be made 48 hours prior to arrival to avoid charges. Special packages and group bookings may have different cancellation terms."
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel Journal"
          description="Discover insider tips, local attractions, and hospitality insights from our expert team"
          tag="Latest Articles"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Travel Guide",
              title: "Top 10 Must-Visit Attractions Near Grand Haven",
              excerpt: "Explore the best cultural landmarks, dining experiences, and hidden gems within walking distance of our luxury hotel",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414314293-r32fd72f.jpg",
              imageAlt: "City attractions guide",
              authorName: "Amanda Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414317169-xpnwszts.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Culinary",
              title: "Farm-to-Table: Our Restaurant's Seasonal Menu",
              excerpt: "Discover how our executive chef creates extraordinary dishes using locally sourced ingredients and innovative culinary techniques",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414315046-zfxjwbym.jpg",
              imageAlt: "Fine dining restaurant experience",
              authorName: "Chef Marcus Rivera",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414317907-2pvios5q.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Business Travel",
              title: "Essential Tips for the Modern Business Traveler",
              excerpt: "Maximize your productivity and comfort during business trips with expert advice from our hospitality professionals",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414315759-ufuuqaqr.jpg",
              imageAlt: "Business travel tips",
              authorName: "David Thompson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T5izMxldBWO3pvAnJwuKTzxAr/uploaded-1763414318392-taauxr9t.jpg",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>
      
      <div id="booking" data-section="booking">
        <ContactCenterForm
          title="Book Your Perfect Stay"
          description="Reserve your luxury accommodation at Grand Haven Hotel and experience unparalleled hospitality. Our team is ready to make your stay extraordinary."
          buttonText="Complete Booking"
          inputs={[
            { name: "fullName", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "checkIn", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkOut", type: "date", placeholder: "Check-out Date", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "specialRequests",
            placeholder: "Special requests or preferences (room type, dietary requirements, etc.)",
            rows: 4,
            required: false
          }}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Haven Hotel"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Amenities", href: "amenities" },
                { label: "Room Categories", href: "rooms" },
                { label: "Special Packages", href: "packages" }
              ]
            },
            {
              items: [
                { label: "Book Now", href: "booking" },
                { label: "Guest Services", href: "services" },
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Directions", href: "directions" },
                { label: "Careers", href: "careers" },
                { label: "Press & Media", href: "press" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}