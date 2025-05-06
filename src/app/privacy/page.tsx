
export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-screen-md py-12 px-4">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
       <div className="prose prose-invert max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>

        <p>Clockwork Drakkar ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Gardariki game, website, and related services (collectively, the "Service"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect via the Service includes:</p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, username, password, and demographic information (like age or country), that you voluntarily give to us when you register for the Service or when you choose to participate in various activities related to the Service.</li>
          <li><strong>Gameplay Data:</strong> Information related to your progress in the game, characters, achievements, playtime, interactions with other players, and preferences.</li>
          <li><strong>Device Information:</strong> Information about your computer or mobile device, such as your IP address, browser type, operating system, device identifiers, and mobile network information.</li>
          <li><strong>Usage Data:</strong> Information about how you use the Service, such as access times, pages viewed, features used, and crash reports.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Service to help customize the Service and improve your experience.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Provide and operate the Service.</li>
          <li>Improve the Service and develop new features.</li>
          <li>Personalize your experience.</li>
          <li>Communicate with you, including sending technical notices, updates, security alerts, and support messages.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Service.</li>
          <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          <li>Enforce our Terms of Service.</li>
          <li>Respond to legal requests and prevent harm.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul>
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
          <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
        </ul>
         <p>We do not sell your personal information to third parties.</p>

         <h2>4. Security of Your Information</h2>
         <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

         <h2>5. Your Privacy Choices</h2>
         <ul>
            <li><strong>Account Information:</strong> You may at any time review or change the information in your account or terminate your account by logging into your account settings or contacting us using the contact information provided below.</li>
            <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of the Service.</li>
            <li><strong>Communications:</strong> You may opt out of receiving promotional emails from us by following the instructions in those emails or by contacting us. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.</li>
         </ul>

        <h2>6. Children's Privacy</h2>
        <p>The Service is not intended for children under the age of 13 (or other age as required by local law), and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.</p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on the Service. You are advised to review this Privacy Policy periodically for any changes.</p>

        <h2>8. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: [contact email, e.g., privacy@clockworkdrakkar.example.com]</p>
      </div>
    </div>
  );
}
