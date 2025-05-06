
export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-screen-md py-12 px-4">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Terms of Service</h1>
      <div className="prose prose-invert max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <p>Welcome to Gardariki! These Terms of Service ("Terms") govern your access to and use of the Gardariki game, website, and related services (collectively, the "Service"), provided by Clockwork Drakkar ("we," "us," or "our").</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, do not use the Service.</p>

        <h2>2. Your Account</h2>
        <p>You may need to register for an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

        <h2>3. License to Use the Service</h2>
        <p>We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial entertainment purposes, subject to these Terms.</p>

        <h2>4. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
          <li>Harass, threaten, demean, embarrass, or otherwise harm other users.</li>
          <li>Transmit or post any content that is infringing, libelous, defamatory, obscene, pornographic, abusive, or otherwise objectionable.</li>
          <li>Use cheats, exploits, automation software, bots, hacks, mods, or any unauthorized third-party software designed to modify or interfere with the Service.</li>
          <li>Disrupt or interfere with the security of, or otherwise abuse, the Service, or any system resources, accounts, servers, or networks connected to or accessible through the Service.</li>
          <li>Attempt to gain unauthorized access to the Service or portions of the Service that are restricted from general access.</li>
        </ul>

         <h2>5. Intellectual Property</h2>
         <p>The Service, including all content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by Clockwork Drakkar, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

         <h2>6. Disclaimers</h2>
         <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

         <h2>7. Limitation of Liability</h2>
         <p>IN NO EVENT WILL CLOCKWORK DRAKKAR, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>

        <h2>8. Termination</h2>
        <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of [Jurisdiction, e.g., Russia], without regard to its conflict of law provisions.</p>

        <h2>10. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on the Service. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at [contact email, e.g., legal@clockworkdrakkar.example.com].</p>
      </div>
    </div>
  );
}

