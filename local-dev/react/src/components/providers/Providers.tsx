import { ThemeProvider } from "@customerexperience/foundation";

export function Providers({ children }: ProvidersProps) {
  return (
        <ThemeProvider>
          {children}
        </ThemeProvider>
  );
}

export type ProvidersProps = { children: React.ReactNode };
