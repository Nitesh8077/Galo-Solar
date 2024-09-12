import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Home/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="p-10">
        <h1 className="text-6xl font-bold text-center" data-aos="fade-up">Privacy Policy</h1>
        
        {/* Who we are */}
        <section className="mt-10" data-aos="fade-up">
          <h2 className="text-4xl font-semibold">Who we are</h2>
          <p className="mt-2 text-xl">
            Our website address is: <a href="https://galosolar.com" className="text-blue-600 hover:underline">https://galosolar.com</a>
          </p>
        </section>

        {/* What Personal Data We Collect and Why */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-4xl font-semibold">What Personal Data We Collect and Why We Collect It</h2>

          <div className="mt-4">
            <h3 className="text-3xl font-semibold">Comments</h3>
            <p className="text-gray-700 mt-2 text-xl">
              When visitors leave comments on the site, we collect the data shown in the comments form, the visitor's IP address, and browser user agent string.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-3xl font-semibold">Media</h3>
            <p className="text-gray-700 mt-2 text-xl">
              If you upload images to the website, avoid uploading images with embedded location data (EXIF GPS) included. Visitors can download and extract location data from images.
            </p>
          </div>
        </section>

        {/* Contact Forms */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Contact Forms</h2>
          <p className="text-gray-700 mt-2 text-xl">
            We store your name, email address, and website in cookies if you leave a comment. This saves time when leaving another comment. Cookies last for one year.
          </p>
        </section>

        {/* Embedded content from other websites */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Embedded content from other websites</h2>
          <p className="text-gray-700 mt-2 text-xl">
            Articles on this site may include embedded content (e.g., videos, images, etc.). Embedded content from other websites behaves the same way as if you visit that website.
          </p>
        </section>

        {/* Personal Identification Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Personal Identification Information</h2>
          <p className="text-gray-700 mt-2 text-xl">
            We collect personal information from users in various ways, such as when users visit the site, register, or place an order. We collect this information only if you voluntarily provide it.
          </p>
        </section>

        {/* Non-Personal Identification Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Non-Personal Identification Information</h2>
          <p className="text-gray-700 mt-2 text-xl">
            We may collect non-personal information about users whenever they interact with our site. This includes browser name, operating system, and Internet service provider.
          </p>
        </section>

        {/* How We Use Collected Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">How We Use Collected Information</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700 text-xl">
            <li>To improve customer service and process transactions.</li>
            <li>To send periodic emails about order status and other updates.</li>
          </ul>
        </section>

        {/* How We Protect Your Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">How We Protect Your Information</h2>
          <p className="text-gray-700 mt-2 text-xl">
            We adopt appropriate data collection, storage, and security practices to protect your personal information.
          </p>
        </section>

        {/* Sharing Your Personal Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Sharing Your Personal Information</h2>
          <p className="text-gray-700 mt-2 text-xl">
            We do not sell users' personal identification information. We may share information with trusted partners for business operations.
          </p>
        </section>

        {/* Google AdSense */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Google AdSense</h2>
          <p className="text-gray-700 mt-2 text-xl">
            Some ads may be served by Google using DART cookies, which serve ads to users based on their visits to this and other sites.
          </p>
        </section>

        {/* Children's Online Privacy Protection Act */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Children's Online Privacy Protection Act</h2>
          <p className="text-gray-700 mt-2 text-xl">
            Protecting the privacy of children is important. We do not collect any information from anyone under 13.
          </p>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Changes to this Privacy Policy</h2>
          <p className="text-gray-700 mt-2 text-xl">
            Upsinvertor.com has the discretion to update this privacy policy at any time. You acknowledge that it is your responsibility to review this privacy policy periodically.
          </p>
        </section>

        {/* How Long We Retain Your Data */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">How Long We Retain Your Data</h2>
          <p className="text-gray-700 mt-2 text-xl">
            If you leave a comment, the comment and its metadata are retained indefinitely.
          </p>
        </section>

        {/* What Rights You Have Over Your Data */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">What Rights You Have Over Your Data</h2>
          <p className="text-gray-700 mt-2 text-xl">
            If you have an account on this site, you can request to receive an exported file of the personal data we hold.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-xl">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address className="mt-2 text-gray-700 text-xl">
            Galo Solar Private Limited, D-21, Pocket C, Okhla, New Delhi, 110020 <br />
            Email: <a href="mailto:Online@galosolar.com" className="text-blue-600 hover:underline">Online@galosolar.com</a>
          </address>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
