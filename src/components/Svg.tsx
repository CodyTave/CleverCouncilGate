interface props {
  src: string;
  ClassStyle: string;
}
function Svg({ src, ClassStyle }: props) {
  return (
    <object className={ClassStyle} type="image/svg+xml" data={src}></object>
  );
}

export default Svg;
