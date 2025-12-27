// src/components/Footer.tsx
const footerConfig = {
  company: "StarX Innovation and IT Solution",
  textSize: { default: "[0.7rem]", md: "xs" },
  tracking: "[0.18em]",
  colors: {
    background: "#141827",
    border: "#F0E7D5",
    text: "#F0E7D5",
  },
  layout: {
    marginTop: "16",
    padding: { 
      px: { default: "6", md: "10", lg: "16" }, 
      py: "5" 
    },
    maxWidth: "6xl",
  },
};

export default function Footer({ config = footerConfig }) {
  return (
    <footer className={`mt-${config.layout.marginTop} border-t border-[${config.colors.border}]/15 bg-[${config.colors.background}]/95`}>
      <div className={`max-w-${config.layout.maxWidth} mx-auto px-${config.layout.padding.px.default} md:px-${config.layout.padding.px.md} lg:px-${config.layout.padding.px.lg} py-${config.layout.padding.py}`}>
        <p className={`text-${config.textSize.default} md:text-${config.textSize.md} tracking-[${config.tracking}] uppercase text-[${config.colors.text}]/60 text-center`}>
          © {config.company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
