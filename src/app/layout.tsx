'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyle from './theme/globalStyles';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <GlobalStyle />
      <body className={jakarta.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
