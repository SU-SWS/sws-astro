interface ServiceSectionProps {
  title: string;
  body: string;
  items: string[];
}

export function ServiceSection({ title, body, items }: ServiceSectionProps) {
  return (
    <section className="border-t border-black-60/55 pt-38 first:border-t-0 first:pt-0">
      <div className="grid gap-61 lg:grid-cols-[minmax(0,1fr)_200px]">
        <div>
          <h3 className="font-serif text-29 leading-snug text-white md:text-33 lg:text-36">{title}</h3>
          <p className="max-w-540 pt-38 text-19 leading-normal text-white md:text-21">{body}</p>
        </div>
        <ul className="pt-38 text-black-50">
          {items.map((item, index) => (
            <li key={item} className={index === 0 ? "" : "pt-13"}>
              <span className="text-21 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
