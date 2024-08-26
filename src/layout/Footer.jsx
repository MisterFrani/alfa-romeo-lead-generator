const Footer = () => {
  const footerLinks = [
    { text: "Politique de confidentialité ", href: "#" },
    { text: "Condition générale d'utilisation", href: "#" },
    { text: "Réglementation - LOI-AGEC", href: "#" },
    { text: "Cookie", href: "#" },
    { text: "Droit d'auteur", href: "#" },
  ];

  return (
    <footer className=" text-gray-300 py-3 px-4   ">
      <div className="container mx-auto">
        <nav className="flex flex-col space-y-4 text-xs lg:flex-row lg:space-y-0 lg:space-x-4 lg:justify-between">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-white transition-colors duration-200 uppercase"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
