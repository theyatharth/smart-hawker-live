const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-bold">SmartHawker</span>
        </div>
        
        <p className="text-background/80 mb-2">
          The trusted companion for India's hawkers and small traders
        </p>
        
        <p className="text-sm text-background/60">
          © 2025 SmartHawker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
