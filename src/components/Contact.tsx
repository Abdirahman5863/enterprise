import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="contact-title">CONTACT US</h2>
        <p className="contact-text">
          We ensure fresh and safe delivery of your perishable goods with reliability and efficiency.
          Reach out to us for all your refrigerated logistics needs!
        </p>
        <div className="space-y-4">
          <p className="text-white">📞 Phone: 0723434643</p>
          <p className="text-white">📧 Email: smirenja4@gmail.com</p>

          <p className="text-white">📧 Sales: <a href="mailto:Sales@enterprise.com" className="underline">sales@kisanjienterprise.com </a></p>
          <p className="text-white">📧 Salome: <a href="mailto:Sales@enterprise.com" className="underline"> Salome@kisanjienterprise.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
