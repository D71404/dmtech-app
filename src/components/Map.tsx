import React from 'react';

interface MapProps {
  address: {
    street: string;
    city: string;
  };
}

export default function Map({ address }: MapProps) {
  return (
    <div className="p-6">
      <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8943150147247!2d-0.11553242392959837!3d51.51624597181433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b352d14b6e3%3A0x6d5f0ad63fd37c04!2s1%20Quality%20Ct%2C%20London%20WC2A%201HR%2C%20UK!5e0!3m2!1sen!2s!4v1709913145439!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale hover:grayscale-0 transition-all duration-300"
          title="DM TECHS Office Location"
        />
      </div>

      <div className="mt-4 text-center">
        <p className="text-gray-300/70">
          {address.street}, {address.city}
        </p>
      </div>
    </div>
  );
}