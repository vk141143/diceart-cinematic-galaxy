import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type LegalDialogProps = {
  activeTab: "terms" | "privacy" | "refunds";
};

export function LegalDialog({ activeTab }: LegalDialogProps) {
  const [currentTab, setCurrentTab] = useState<"terms" | "privacy" | "refunds">(activeTab);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  // Create a handler function with the correct type signature
  const handleTabChange = (value: string) => {
    // Cast the string value to our specific union type
    setCurrentTab(value as "terms" | "privacy" | "refunds");
  };

  return (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">Legal Information</DialogTitle>
      </DialogHeader>
      
      <Tabs 
        defaultValue={currentTab} 
        value={currentTab} 
        onValueChange={handleTabChange}
        className="mt-6"
      >
        <div className="flex justify-center mb-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="refunds">Cancellation & Refunds</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="terms" className="space-y-6">
          <motion.div
            key="terms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="text-muted-foreground mb-4">Last Updated: May 15, 2025</p>
            
            <div className="space-y-4">
              <section>
                <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
                <p>
                  Welcome to Diceart Films. By accessing or using our website, services, or products, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">2. Services Description</h3>
                <p>
                  Diceart Films provides digital content creation, filmmaking, video editing, and related services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">3. User Responsibilities</h3>
                <p>
                  Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Users agree not to use our services for any illegal or unauthorized purpose.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">4. Intellectual Property Rights</h3>
                <p>
                  All content, including text, graphics, logos, and software, is the property of Diceart Films and is protected by copyright and other intellectual property laws. Users may not reproduce, modify, or distribute our content without permission.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">5. Limitation of Liability</h3>
                <p>
                  Diceart Films shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or in connection with these Terms and Conditions.
                </p>
              </section>
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-6">
          <motion.div
            key="privacy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">Last Updated: May 15, 2025</p>
            
            <div className="space-y-4">
              <section>
                <h3 className="text-xl font-semibold mb-2">1. Information Collection</h3>
                <p>
                  We collect personal information such as name, email address, phone number, and payment information when you use our services. We also collect non-personal information such as browser type, IP address, and device information.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">2. Use of Information</h3>
                <p>
                  We use collected information to provide and improve our services, process payments, communicate with you, and comply with legal obligations. We may also use your information for marketing purposes with your consent.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">3. Information Sharing</h3>
                <p>
                  We do not sell your personal information to third parties. We may share your information with service providers, partners, and affiliates who help us provide our services. We may also disclose information if required by law.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">5. Your Rights</h3>
                <p>
                  You have the right to access, correct, delete, or restrict the processing of your personal information. You may also withdraw your consent or object to the processing of your information at any time.
                </p>
              </section>
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="refunds" className="space-y-6">
          <motion.div
            key="refunds"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Cancellation & Refunds Policy</h2>
            <p className="text-muted-foreground mb-4">Last Updated: May 15, 2025</p>
            
            <div className="space-y-4">
              <section>
                <h3 className="text-xl font-semibold mb-2">1. Project Cancellations</h3>
                <p>
                  Clients may cancel a project at any time by providing written notice. However, cancellation fees may apply depending on the stage of the project and resources already allocated.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">2. Cancellation Fees</h3>
                <p>
                  <strong>Pre-Production Phase:</strong> 25% of the total project cost.<br />
                  <strong>Production Phase:</strong> 50% of the total project cost.<br />
                  <strong>Post-Production Phase:</strong> 75% of the total project cost.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">3. Refund Policy</h3>
                <p>
                  Refunds are issued on a case-by-case basis. If Diceart Films fails to deliver the agreed-upon services, a partial or full refund may be issued at our discretion. All refund requests must be submitted in writing within 30 days of project completion.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">4. Payment Disputes</h3>
                <p>
                  In case of payment disputes, clients are encouraged to contact our customer service team first. If no resolution is reached, the dispute will be handled according to the laws of the jurisdiction where Diceart Films operates.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold mb-2">5. Force Majeure</h3>
                <p>
                  Diceart Films is not liable for any delay or failure to perform due to causes beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemics, or government restrictions.
                </p>
              </section>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}
