"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, HelpCircle, MessageSquare, Target, Trophy, Zap } from "lucide-react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Skills", id: "feature" },
            { name: "Achievements", id: "product" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="F1 Candidate"
          button={{
            text: "Download CV",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Future F1 Champion"
          description="Dedicated racing driver with proven track record and championship aspirations"
          tag="Professional Driver"
          tagIcon={Zap}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472042692-82025sdr.jpg",
              imageAlt: "F1 racing action"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472043989-5xu5af78.jpg",
              imageAlt: "Driver in cockpit"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472045248-65fv4p4o.jpg",
              imageAlt: "Podium celebration"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472046138-ftmmj3ga.jpg",
              imageAlt: "Racing circuit"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472047622-m877fgfw.jpg",
              imageAlt: "Pit stop action"
            }
          ]}
          buttons={[
            { text: "View Portfolio", href: "product" },
            { text: "Get In Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Me"
          description="Passionate Formula 1 driver candidate with extensive racing experience across multiple categories. From karting championships to single-seater excellence, I bring dedication, speed, and strategic thinking to every race. My journey through motorsport has prepared me for the ultimate challenge of Formula 1 competition."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Core Competencies"
          description="Essential skills that make a championship-caliber Formula 1 driver"
          tag="Skills"
          tagIcon={Target}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Racing Excellence",
              description: "Proven ability to extract maximum performance from racing machines under pressure",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472050437-ivczkth8.jpg",
              imageAlt: "Racing skills demonstration"
            },
            {
              id: "02",
              title: "Technical Knowledge",
              description: "Deep understanding of vehicle dynamics, setup optimization, and aerodynamic principles",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472051589-de45t425.jpg",
              imageAlt: "Technical expertise"
            },
            {
              id: "03",
              title: "Mental Fortitude",
              description: "Exceptional concentration and decision-making abilities at 300+ km/h",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472052997-s6as1kqv.jpg",
              imageAlt: "Mental focus training"
            },
            {
              id: "04",
              title: "Physical Conditioning",
              description: "Peak physical fitness required for G-force endurance and precision control",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472054122-2aj2qphr.jpg",
              imageAlt: "Physical conditioning"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Career Achievements"
          description="Major victories and accomplishments throughout my racing career"
          tag="Achievements"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              name: "Championship Winner",
              price: "2023",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472055254-cdqen3ag.jpg",
              imageAlt: "Championship trophy"
            },
            {
              id: "2",
              name: "Podium Finisher",
              price: "15x",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472056278-x0bm4rf2.jpg",
              imageAlt: "Podium medal"
            },
            {
              id: "3",
              name: "Racing License",
              price: "FIA",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472057122-r4prkyvh.jpg",
              imageAlt: "Racing certification"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Professional Endorsements"
          description="What racing professionals say about my potential"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Marcus Thompson",
              role: "Team Principal",
              company: "Racing Academy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472058440-4ph1xlir.jpg",
              imageAlt: "Marcus Thompson portrait"
            },
            {
              id: "2",
              name: "Elena Rodriguez",
              role: "Racing Coach",
              company: "Elite Motorsport",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472060167-iwzz472m.jpg",
              imageAlt: "Elena Rodriguez portrait"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Technical Director",
              company: "Pro Racing Team",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472061513-nzf0w48s.jpg",
              imageAlt: "James Wilson portrait"
            },
            {
              id: "4",
              name: "Sophie Chen",
              role: "Academy Director",
              company: "Future Champions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472063852-pcn55kv1.jpg",
              imageAlt: "Sophie Chen portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Recognized by F1 Teams"
          description="Endorsed and scouted by leading Formula 1 organizations"
          tag="Recognition"
          tagIcon={Trophy}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472064910-xqdla0z7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472066049-yt3n107e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472067439-8d7z4r98.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472068765-1kyx1379.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472069643-7n3pj49d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472071020-qszdg10l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1763472072474-q2xghy7n.jpg"
          ]
          speed={45}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about my F1 candidacy and racing background"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What racing categories have you competed in?",
              content: "I have extensive experience across karting, Formula 4, Formula 3, and GT racing series, providing a comprehensive foundation for Formula 1."
            },
            {
              id: "2",
              title: "Do you have an FIA Super License?",
              content: "I am currently working toward accumulating the necessary Super License points through competitive racing in FIA-sanctioned championships."
            },
            {
              id: "3",
              title: "What makes you F1-ready?",
              content: "My combination of raw speed, technical understanding, physical conditioning, and mental resilience positions me as an ideal Formula 1 candidate."
            },
            {
              id: "4",
              title: "Are you available for testing opportunities?",
              content: "Yes, I am fully available for simulator work, private testing sessions, and any evaluation opportunities with F1 teams."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Talk Racing"
          description="Ready to discuss opportunities in Formula 1? Get in touch with me directly."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "team", type: "text", placeholder: "Team/Organization", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about the opportunity...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="F1 Candidate"
          columns={[
            {
              items: [
                { label: "About", href: "about" },
                { label: "Skills", href: "feature" },
                { label: "Achievements", href: "product" }
              ]
            },
            {
              items: [
                { label: "Testimonials", href: "testimonial" },
                { label: "Contact", href: "contact" },
                { label: "Download CV", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}