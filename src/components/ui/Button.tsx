import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type Variant = "primary" | "secondary" | "ghost";

interface CommonProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", icon, children, className } = props;
  const classes = ["btn", `btn-${variant}`, className].filter(Boolean).join(" ");

  if (props.as === "a") {
    const { as, variant: _v, icon: _i, children: _c, className: _cn, ...anchorRest } = props;
    void as;
    void _v;
    void _i;
    void _c;
    void _cn;
    return (
      <a className={classes} {...anchorRest}>
        <span>{children}</span>
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  const { as, variant: _v2, icon: _i2, children: _c2, className: _cn2, ...buttonRest } = props;
  void as;
  void _v2;
  void _i2;
  void _c2;
  void _cn2;
  return (
    <button className={classes} {...buttonRest}>
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
