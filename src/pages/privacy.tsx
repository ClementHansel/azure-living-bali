// src/pages/privacy.tsx
"use client";

import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | NEO THE AGENCY</title>
        <meta
          name="description"
          content="Privacy Policy of NEO THE AGENCY. Learn how we collect, use, store, and protect your personal information."
        />
      </Head>

      <main className="w-full bg-white text-black py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: 11/21/25</p>

          <p>
            This Privacy Policy describes how <strong>NEO THE AGENCY</strong>{" "}
            (“we”, “us”, or “our”) collects, uses, stores, and protects your
            personal information when you visit our website{" "}
            <a
              href="https://neotheagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              neotheagency.com
            </a>{" "}
            or interact with our services. By using our website, you agree to
            the practices described in this Privacy Policy.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>

            <h3 className="font-semibold mt-2">1.1 Information You Provide</h3>
            <p>
              When you submit forms, request information, or contact us, we may
              collect:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number / WhatsApp number</li>
              <li>Message or inquiry details</li>
              <li>Any additional information you choose to provide</li>
            </ul>

            <h3 className="font-semibold mt-2">
              1.2 Automatically Collected Information
            </h3>
            <p>When you browse our website, we may automatically collect:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP address</li>
              <li>Device information</li>
              <li>Browser type</li>
              <li>Cookies and tracking data</li>
              <li>Pages visited and time spent on the site</li>
            </ul>
            <p>
              This data helps us understand site performance, improve user
              experience, and ensure security.
            </p>

            <h3 className="font-semibold mt-2">1.3 Third-Party Data</h3>
            <p>
              If you interact with embedded tools or services (e.g., calendars,
              CRM forms, analytics, Google Maps), those third parties may
              collect data according to their own policies.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Manage appointments and bookings</li>
              <li>Update CRM records</li>
              <li>Personalize website content</li>
              <li>Analytics and website optimization</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do <strong>not</strong> sell your personal data.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. How Your Information Is Shared
            </h2>

            <h3 className="font-semibold mt-2">
              3.1 Service Providers (Processors)
            </h3>
            <p>Including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>CRM platforms (e.g., GoHighLevel)</li>
              <li>Email service providers</li>
              <li>Analytics tools</li>
              <li>Web hosting providers</li>
            </ul>
            <p>
              They only receive the information necessary to perform their
              services.
            </p>

            <h3 className="font-semibold mt-2">3.2 Legal Compliance</h3>
            <p>We may disclose information if required to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Comply with applicable laws</li>
              <li>Respond to court orders or government requests</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Retention</h2>
            <p>
              We keep your information only for as long as necessary to fulfill
              the purposes described in this policy or as required by law.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              information. However, no method of transmission over the internet
              is 100% secure.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access the personal data we hold</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent</li>
              <li>Object to processing</li>
              <li>Request a copy of your data</li>
            </ul>
            <p>
              You can exercise these rights by contacting us at{" "}
              <strong>hello@neotheagency.com</strong>.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the privacy practices of those websites.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Cookies & Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies to improve functionality,
              analyze usage, and offer personalized experiences. See our Cookie
              Policy for more information.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              9. Children’s Privacy
            </h2>
            <p>
              Our website is not intended for children under 13, and we do not
              knowingly collect their data.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy at any time. The latest version
              will always be posted on this page with the updated date.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your rights, contact us at:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Email:</strong> hello@neotheagency.com
              </li>
              <li>
                <strong>Address:</strong> Jl. Veteran No.90,
                Buduk–Mengwi–Kabupatan–Bali, Indonesia
              </li>
              <li>
                <strong>Phone:</strong> +1 4917623296439
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
