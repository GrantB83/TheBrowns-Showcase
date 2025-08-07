import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  MapPin, 
  Users, 
  Award, 
  Heart, 
  Star, 
  Coffee, 
  Wifi, 
  Car,
  TreePine,
  Mountain,
  Fish,
  Camera,
  ExternalLink,
  ChevronDown
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes The Browns different from other Dullstroom accommodation?",
    answer: "The Browns offers boutique luxury with personalized service in an intimate setting. Our suites feature premium amenities like Nespresso machines, Netflix, and luxury Charlotte Rhys toiletries. We provide both modern luxury suites and charming cottage accommodation, catering to different preferences while maintaining exceptional standards.",
    category: "About Us"
  },
  {
    question: "How close are you to Dullstroom's best fly-fishing spots?",
    answer: "We're perfectly positioned just 3km from Dullstroom Dam Nature Reserve, South Africa's premier trout fishing destination. Many fishing spots are within walking distance, and we can arrange guided fishing excursions with local experts who know the best spots for brown and rainbow trout.",
    category: "Activities"
  },
  {
    question: "What is your cancellation policy for direct bookings?",
    answer: "Direct bookings enjoy free cancellation up to 48 hours before arrival. We offer flexible booking terms because we understand travel plans can change. This is one of the exclusive benefits of booking directly with us rather than through third-party platforms.",
    category: "Booking"
  },
  {
    question: "Do you cater to families with children?",
    answer: "Absolutely! Our Loft Family Suite and Master Suite are perfect for families. We provide cots with linen, high chairs, microwaves for baby feeding, and extra mattresses. The cottage suites offer cozy fireplaces that children love, and we're close to family-friendly activities.",
    category: "Families"
  },
  {
    question: "What dining options are available nearby?",
    answer: "Dullstroom village is within walking distance and offers excellent restaurants, cafes, and pubs. We also provide Nespresso machines and tea facilities in all suites. For groups, our Self Catering House has full kitchen facilities and BBQ areas.",
    category: "Dining"
  },
  {
    question: "How do I access the Panorama Route from your location?",
    answer: "We're ideally located for Panorama Route day trips. God's Window is 45 minutes away, Blyde River Canyon is 50 minutes, and Bourke's Luck Potholes are nearby. We can provide detailed directions and recommend the best route for your interests.",
    category: "Activities"
  },
  {
    question: "What COVID-19 safety measures do you have in place?",
    answer: "We follow all health protocols with enhanced cleaning procedures, contactless check-in options, and sanitization between guests. Our spacious suites and private entrances naturally provide social distancing, and we can accommodate specific health requirements.",
    category: "Health & Safety"
  },
  {
    question: "Do you offer any special packages or deals?",
    answer: "Yes! Direct bookers receive our best rates plus exclusive perks worth R300+ including welcome drinks, late checkout, and free WiFi. We also offer seasonal packages combining accommodation with activities like spa treatments, fishing guides, and Panorama Route tours.",
    category: "Booking"
  }
];

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];
  
  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about staying at The Browns and exploring Dullstroom's highlands
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="text-xs">
                      {faq.category}
                    </Badge>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pl-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Have more questions? Our local team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <a href="tel:+27000000000">
              Call +27 00 000 0000
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://wa.me/27000000000?text=Hi! I have some questions about staying at The Browns.">
              WhatsApp Us
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:info@thebrowns.co.za">
              Email Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}