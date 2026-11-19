type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ className = "", children }: Props) => (
  <div className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>
    {children}
  </div>
);
