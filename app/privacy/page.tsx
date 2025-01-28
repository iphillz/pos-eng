import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Marketing ROI Strategy',
  description: 'Privacy Policy for Marketing ROI Strategy Lead Form',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-gray-500 mb-4">Last Updated: March 3, 2024</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy describes how we collect, use, and handle your personal information when you use our lead form for the Marketing ROI Strategy presentation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect the following information when you submit our form:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>First Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Send you access details for the Marketing ROI Strategy presentation</li>
              <li>Provide updates about the presentation</li>
              <li>Contact you regarding related marketing services</li>
              <li>Improve our services and user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Protection and Retention</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-600 mb-4">
              Our data retention policy is as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>We retain your personal information for a maximum of 30 days after collection</li>
              <li>After 30 days, your data is automatically deleted from our systems</li>
              <li>You can request earlier deletion of your data at any time</li>
              <li>We maintain secure backup systems during the retention period</li>
              <li>Any analytical or aggregated data that doesn't identify you personally may be retained for longer periods</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We use industry-standard encryption and security protocols to ensure your data remains protected throughout its retention period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Processing</h2>
            <p className="text-gray-600 mb-4">
              During the retention period, your data may be processed for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Delivering the requested Marketing ROI Strategy presentation</li>
              <li>Following up on your interest in our services</li>
              <li>Addressing any questions or concerns you may have</li>
            </ul>
            <p className="text-gray-600 mb-4">
              After the 30-day retention period, we ensure complete deletion of your personal information from our active systems and backups.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: [Your Contact Email]
              <br />
              Phone: [Your Contact Phone]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 