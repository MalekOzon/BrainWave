import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({className , href , onClick,children ,
    px , white}) => {
  const classes =`button relative inline-flex
  items-center justify-cneter h-11 transition-color
  hover:text-color-4 ${px || 'px-7'}
  ${white ? "text-n-8" : "text-n-1"}
    ${className || ""}`;

  const spanCalsses ="relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanCalsses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
const renderLink = () => (
  <a href={href} className={classes}>
    <span className={spanCalsses}>{children}</span>
    {ButtonSvg(white)}
  </a>
);

return href ? renderLink() : renderButton();

};

export default Button