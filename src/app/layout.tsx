import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Leadster',
  description: 'Leadster: Chatbot de Marketing para Aumentar Geração de Leads',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
