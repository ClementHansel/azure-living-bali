// src/pages/cookies.tsx
"use client";

import Head from "next/head";

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookie Policy | NEO THE AGENCY</title>
        <meta
          name="description"
          content="Cookie Policy of NEO THE AGENCY. Learn how we use cookies and tracking technologies on our website."
        />
      </Head>

      <main className="w-full bg-white text-black py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: 21/11/2025</p>

          <p>
            This Cookie Policy explains how we use cookies and tracking
            technologies on our website.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help improve your browsing experience and enable
              certain functionality.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. Types of Cookies We Use
            </h2>

            <h3 className="font-semibold mt-2">2.1 Essential Cookies</h3>
            <p>Required for the website to function properly, such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Security and authentication</li>
              <li>Page navigation</li>
              <li>Form submissions</li>
            </ul>
            <p>These cannot be disabled.</p>

            <h3 className="font-semibold mt-2">
              2.2 Performance & Analytics Cookies
            </h3>
            <p>Used to understand how visitors use our website, such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Page views</li>
              <li>Traffic sources</li>
              <li>Visitor behavior patterns</li>
            </ul>
            <p>Examples: Google Analytics, Meta Pixel</p>

            <h3 className="font-semibold mt-2">2.3 Functional Cookies</h3>
            <p>Help remember your preferences, such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Language settings</li>
              <li>Cookie preferences</li>
              <li>Saved form inputs</li>
            </ul>

            <h3 className="font-semibold mt-2">
              2.4 Marketing & Advertising Cookies
            </h3>
            <p>
              Used to deliver relevant advertisements and track conversions.
            </p>
            <p>Examples:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Google Ads</li>
              <li>Facebook Pixel</li>
              <li>TikTok Pixel</li>
            </ul>
            <p>
              We only use these cookies with your consent (where required by
              law).
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Cookie Consent</h2>
            <p>
              When you first visit our website, you will see a cookie banner
              that allows you to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize preferences</li>
            </ul>
            <p>
              You can change your preferences anytime by clicking “Cookie
              Settings” at the footer.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Managing Cookies</h2>
            <p>Most browsers allow you to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Block cookies</li>
              <li>Delete cookies</li>
              <li>Set restrictions for certain websites</li>
            </ul>
            <p>Check your browser settings for more details.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Updates to This Cookie Policy
            </h2>
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
