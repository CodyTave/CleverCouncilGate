interface props {
  src: string;
}
function Svg({ src }: props) {
  return <object type="image/svg+xml" data={src}></object>;
}

export default Svg;
