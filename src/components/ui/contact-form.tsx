import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      });
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card>
      <CardHeader className="pb-4 sm:pb-6">
        <CardTitle className="fluid-subheading">Send us a Message</CardTitle>
        <p className="text-xs sm:text-sm text-muted-foreground">
          We'll respond within 24 hours during business days.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                className={`min-h-[44px] ${errors.name ? "border-destructive focus:border-destructive" : ""}`}
                autoComplete="name"
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1 flex items-center">
                  <span className="sr-only">Error:</span>
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                className={`min-h-[44px] ${errors.email ? "border-destructive focus:border-destructive" : ""}`}
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1 flex items-center">
                  <span className="sr-only">Error:</span>
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+27 83 XXX XXXX"
              className="min-h-[44px]"
              autoComplete="tel"
            />
            <p className="text-xs text-muted-foreground">Optional - for faster response</p>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">Subject *</Label>
            <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
              <SelectTrigger 
                className={`min-h-[44px] ${errors.subject ? "border-destructive focus:border-destructive" : ""}`}
                aria-label="Select inquiry subject"
              >
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent className="z-50">
                <SelectItem value="booking">Booking Inquiry</SelectItem>
                <SelectItem value="rates">Rates & Availability</SelectItem>
                <SelectItem value="facilities">Facilities & Amenities</SelectItem>
                <SelectItem value="events">Special Events</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.subject && (
              <p className="text-xs text-destructive mt-1 flex items-center">
                <span className="sr-only">Error:</span>
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your inquiry..."
              rows={5}
              maxLength={500}
              className={`min-h-[120px] resize-none ${errors.message ? "border-destructive focus:border-destructive" : ""}`}
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1 flex items-center">
                <span className="sr-only">Error:</span>
                {errors.message}
              </p>
            )}
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                Minimum 10 characters required
              </p>
              <p className="text-xs text-muted-foreground">
                {formData.message.length}/500
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-muted/50 rounded-lg">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
              className="mt-0.5 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Label 
                htmlFor="newsletter" 
                className="text-xs sm:text-sm leading-relaxed cursor-pointer"
              >
                Subscribe to our newsletter for special offers and updates about The Browns
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full min-h-[44px] touch-manipulation text-sm sm:text-base" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </Button>

          {/* Form Help Text */}
          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground">
              For urgent inquiries, call us at{" "}
              <a 
                href="tel:+27000000000" 
                className="text-primary hover:underline touch-manipulation"
              >
                +27 00 000 0000
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}