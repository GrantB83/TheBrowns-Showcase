import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface MobileQuickActionsContextType {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const MobileQuickActionsContext = createContext<MobileQuickActionsContextType | undefined>(undefined);

export function MobileQuickActionsProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <MobileQuickActionsContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </MobileQuickActionsContext.Provider>
  );
}

export function useMobileQuickActions() {
  const context = useContext(MobileQuickActionsContext);
  if (context === undefined) {
    throw new Error('useMobileQuickActions must be used within a MobileQuickActionsProvider');
  }
  return context;
}

// Hook to register mobile quick actions presence
export function useMobileQuickActionsRegistry() {
  const { setIsActive } = useMobileQuickActions();

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, [setIsActive]);
}