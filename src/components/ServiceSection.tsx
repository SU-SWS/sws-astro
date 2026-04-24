interface ServiceSectionProps {
  title: string;
  body: string;
  items: string[];
}

export function ServiceSection({ title, body, items }: ServiceSectionProps) {
  return (
    <section className="border-t border-black-60/55 pt-[38px] first:border-t-0 first:pt-0">
      <div className="grid gap-[61px] lg:grid-cols-[minmax(0,1fr)_200px]">
        <div>
          <h3 className="font-serif text-[29px] leading-[1.3] text-white md:text-[33px] lg:text-[36px]">{title}</h3>
          <p className="max-w-[540px] pt-[38px] text-[19px] leading-[1.5] text-white md:text-[21px]">{body}</p>
        </div>
        <ul className="pt-[38px] text-black-50">
          {items.map((item, index) => (
            <li key={item} className={index === 0 ? "" : "pt-[13px]"}>
              <span className="text-[21px] leading-[1.3]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
