export const LeftArrow = ({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 13"
      className={`w-8 h-auto ${className}`}
      {...props}>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.656 0c-1.263 0-.381 1.417 0 1.837l10.216 10.848c.382.42 1 .42 1.382 0a1.155 1.155 0 0 0 0-1.522l-8.55-9.01h45.32c.539 0 .976-.483.976-1.077S49.563 0 49.023 0H.656"
        clipRule="evenodd"
        opacity="0.5"
      />
    </svg>
  );
};
