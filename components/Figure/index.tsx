export interface FigureProps {
  alt: string;
  loading?: "eager" | "lazy";
  src: string;
  title: string;
}

export function Figure(props: FigureProps) {
  return (
    <figure className="Figure">
      <img className="Figure__Img" loading="lazy" {...props} />

      <figcaption className="Figure__Caption">{props.title}</figcaption>
    </figure>
  );
}
