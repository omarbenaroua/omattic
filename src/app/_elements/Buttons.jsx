"use client";

export const Button = (props) => {
  return (
    <div>
      <a
        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
        href={props.href}
        target={props.target}
      >
        <p className="block rounded bg-primary px-12 py-3 transition-transform active:border-white active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
          {props.name}
        </p>
      </a>
    </div>
  );
};

export const ButtonSecondary = (props) => {
  return (
    <div>
      <a
        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-red-500"
        href={props.href}
        target={props.target}
      >
        <p className="block rounded bg-secondary px-12 py-3 transition-transform active:border-white active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
          {props.name}
        </p>
      </a>
    </div>
  );
};
