
export function Button({ children, className = "", asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-indigo-600 hover:bg-indigo-700 text-white ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
