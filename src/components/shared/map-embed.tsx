export function MapEmbed() {
    return (
      <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154445.8239922441!2d-1.636830505116252!3d52.91239169992683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f379a7647863%3A0x58c7a6e1d529f79d!2sDerby%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
  