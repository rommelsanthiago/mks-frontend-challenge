import Head from './head';
import StyledComponentsRegistry from './lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};
