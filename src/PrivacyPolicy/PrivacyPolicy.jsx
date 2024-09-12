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
      <div className="p-16">
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
            <h3 className="text-gray-700 mt-2 text-xl font-bold">Comments</h3>
            <p className="text-gray-700 mt-2 text-xl">
            When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
            </p>
            <p className="text-gray-700 mt-2 text-xl">An anonym zed string created from your email address (also called a hash) may be provided to UTL Solar to see if you are using it. The UTL Solar privacy policy is available here: Galo.co.in After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
          </div>

          <div className="mt-4">
            <h3 className="text-gray-700 mt-2 text-xl font-bold">Media</h3>
            <p className="text-gray-700 mt-2 text-xl">
            If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            </p>
          </div>
        </section>

        {/* Contact Forms */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Contact Forms</h2>
          <div className="text-gray-700 mt-2 text-xl font-bold" >Cookies</div>
          <p className="text-gray-700 mt-2 text-xl">
          If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

          </p>
          <p className="text-gray-700 mt-2 text-xl">If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
          <p className="text-gray-700 mt-2 text-xl">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
          <p className="text-gray-700 mt-2 text-xl">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
          <div className="text-gray-700 mt-2 text-xl font-bold" >Embedded content from other websites</div>
          <p className="text-gray-700 mt-2 text-xl">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
          </p>
          <p className="text-gray-700 mt-2 text-xl">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
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
          We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
          </p>
        </section>

        {/* Non-Personal Identification Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Non-Personal Identification Information</h2>
          <p className="text-gray-700 mt-2 text-xl">
          We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers’ utilized and other similar information.
          </p>
        </section>

        {/* How We Use Collected Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">How We Use Collected Information</h2>
          <div className="pt-5 pb-5 text-xl">UTL Solar may collect and use Users personal information for the following purposes:</div>
          <ul className="list-disc ml-6 mt-2 text-gray-700 text-xl">
            <li>To improve customer service – Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
            <li>To personalize user experience – We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
            <li>To improve our Site – We may use the feedback you provide to improve our products and services.</li>
            <li>To process payments – We may use the information Users provide about them when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
            <li>To run a promotion, contest, survey or other Site feature – To send Users information they agreed to receive about topics we think will be of interest to them.</li>
            <li>To send periodic emails – We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</li>
          </ul>
        </section>

        {/* How We Protect Your Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">How We Protect Your Information</h2>
          <p className="text-gray-700 mt-2 text-xl">
          We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
          <div>Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures. Our Site is also in compliance with PCI vulnerability standards in order to create as secure of an environment as possible for Users.</div>
          </p>
        </section>

        {/* Sharing Your Personal Information */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Sharing Your Personal Information</h2>
          <p className="text-gray-700 mt-2 text-xl">
          We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission
          </p>
        </section>

        {/* Google AdSense */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Google AdSense</h2>
          <p className="text-gray-700 mt-2 text-xl">
          Some of the ads may be served by Google. Google’s use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses “non personally identifiable information” and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at  <a href="https://galosolar.com" className="text-blue-600 hover:underline">galosolar.com</a>.
          </p>
        </section>

        {/* Children's Online Privacy Protection Act */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">CONFORMANCE WITH CHILDREN’S ONLINE PRIVACY PROTECTION ACT</h2>
          <p className="text-gray-700 mt-2 text-xl">
          Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.
          </p>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Changes to this Privacy Policy</h2>
          <p className="text-gray-700 mt-2 text-xl">
          Upsinverter.com have the discretion to update this privacy policy at any time. When we do, we will send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
          </p>
        </section>

        {/* How Long We Retain Your Data */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">How Long We Retain Your Data</h2>
          <p className="text-gray-700 mt-2 text-xl">
          If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

<div>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</div>
          </p>
        </section>

        {/* What Rights You Have Over Your Data */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">What Rights You Have Over Your Data</h2>
          <p className="text-gray-700 mt-2 text-xl">
          If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mt-8" data-aos="fade-up">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-xl">
          If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
          </p>
          <address className="mt-2 text-gray-700 text-xl">
           <span className="font-bold">Address : </span> Galo Solar Private Limited, D 121, Pocket C, Okhla 1, Okhla Industrial Estate, New Delhi, Delhi 110020 <br />
            Email: <a href="mailto:Online@galosolar.com" className="text-blue-600 hover:underline">Online@galosolar.com</a>
          </address>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
