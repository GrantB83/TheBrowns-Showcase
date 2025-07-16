import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Privacy() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-primary mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: March 2024
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-primary mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Browns Luxury Guest Suites & Cottage ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website, book our accommodation, or use our services.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may collect personal information that you voluntarily provide when booking accommodation, 
                      contacting us, or subscribing to our services, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                      <li>Name and contact information</li>
                      <li>Email address and phone number</li>
                      <li>Booking and payment information</li>
                      <li>Special requests and preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you visit our website, we may automatically collect certain information about your device 
                      and usage patterns through cookies and similar technologies.
                    </p>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Processing and managing your bookings</li>
                  <li>Providing customer service and support</li>
                  <li>Sending booking confirmations and important updates</li>
                  <li>Improving our services and website functionality</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except as 
                  described in this policy. We may share your information with:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                  <li>Our booking platform provider (Nightsbridge) for reservation processing</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized 
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                  or electronic storage is 100% secure.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies to enhance your browsing experience, analyze website traffic, and provide 
                  personalized content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Marketing Communications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With your explicit consent, we may send you marketing communications about our services, special offers, 
                  and local events. You can unsubscribe at any time using the link provided in our emails.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="text-muted-foreground">
                  <p><strong>The Browns Luxury Guest Suites & Cottage</strong></p>
                  <p>279 Blue Crane Drive, Dullstroom 1110, Mpumalanga</p>
                  <p>Email: info@thebrowns.co.za</p>
                  <p>Phone: +27 00 000 0000</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-primary mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
                  an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}