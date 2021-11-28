import Image, { ImageProps } from "next/image";

export interface FigureProps {
  alt: string;
  src: ImageProps["src"];
  title: string;
}

export function Figure(props: FigureProps) {
  return (
    <figure className="Figure">
      <Image src={props.src} alt={props.alt} title={props.title} placeholder="blur" />

      <figcaption className="Figure__Caption">{props.title}</figcaption>
    </figure>
  );
}
