export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-6 text-center text-[12px] text-fg-dim md:px-8">
      © {new Date().getFullYear()} Mauro Perelda · Built with Vite + React · Hosted on Vercel
    </footer>
  );
}