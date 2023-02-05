import Image, { ImageProps } from "next/image";

export interface FigureProps {
  children: React.ReactNode;
}

export function Figure(props: FigureProps) {
  return <figure className="Figure">{props.children}</figure>;
}

Figure.Image = function FigureImage(props: Pick<ImageProps, "src" | "alt">) {
  return <Image src={props.src} alt={props.alt} placeholder="blur" className="Figure__Image" />;
};

Figure.Caption = function FigureCaption(props: { children: React.ReactNode }) {
  return <figcaption className="Figure__Caption">{props.children}</figcaption>;
};
