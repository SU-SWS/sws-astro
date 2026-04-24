interface ServiceSectionProps {
  title: string;
  body: string;
  items: string[];
}

export function ServiceSection({ title, body, items }: ServiceSectionProps) {
  return (
    <section className="border-t border-black-60/55 rs-pt-2 first:border-t-0 first:pt-0">
      <div className="grid gap-38 lg:grid-cols-[minmax(0,1fr)_200px]">
        <div>
          <h3 className="font-serif text-[1.8947em] leading-[1.3] text-white md:text-[2em] 4xl:text-[2.01em]">{title}</h3>
          <p className="rs-mt-2 max-w-[540px] basefont-21 leading-[1.5] text-white">{body}</p>
        </div>
        <ul className="rs-pt-2 text-black-50">
          {items.map((item, index) => (
            <li key={item} className={index === 0 ? "" : "mt-13"}>
              <span className="basefont-21 leading-[1.3]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
