type StatProps = {
  stat: string;
  label: string;
}

export const Stat = ({ stat, label }: StatProps) => {
  return (
    <li className="flex flex-col mb-0">
      <span className="font-serif fluid-type-7 font-normal leading-snug text-dark-primary">{stat}</span>
      <span className="card-paragraph leading-snug text-black-30">{label}</span>
    </li>
  );
};
