// Import your images as variables
import a from "../assets/image/a.jpeg";
import bb from "../assets/image/bb.jpeg";
import b from "../assets/image/b.jpeg";
import c from "../assets/image/c.png";
import s from "../assets/image/s.jpeg";
import g from "../assets/image/g.jpeg";
import j from "../assets/image/j.jpeg";
import l from "../assets/image/l.jpeg";
import m from "../assets/image/m.jpeg";
import n from "../assets/image/n.jpeg";
import o from "../assets/image/o.jpeg";
import p from "../assets/image/p.jpeg";
import pp from "../assets/image/pp.jpeg";
import q from "../assets/image/q.jpeg";
import r from "../assets/image/r.jpeg";
import e from "../assets/image/e.jpeg";

const Gallery = () => {
  return (
    <div className="p-7 sm:p-8">
      <div className="text-center mb-9 border-b-2 pb-4">
        <h1 className="text-2xl font-mono font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Here is our products
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
        <img src={a} alt="Skincare pics" className="mt-8" />
        <img src={bb} alt="Skincare pics" className="mt-8" />
        <img src={b} alt="Skincare pics" className="mt-8" />
        <img src={c} alt="Skincare pics" className="mt-8" />
        <img src={l} alt="Skincare pics" className="mt-8" />
        <img src={g} alt="Skincare pics" className="mt-8" />
        <img src={j} alt="Skincare pics" className="mt-8" />
        <img src={m} alt="Skincare pics" className="mt-8" />
        <img src={n} alt="Skincare pics" className="mt-8" />
        <img src={o} alt="Skincare pics" className="mt-8" />
        <img src={p} alt="Skincare pics" className="mt-8" />
        <img src={q} alt="Skincare pics" className="mt-8" />
        <img src={r} alt="Skincare pics" className="mt-8" />
        <img src={s} alt="Skincare pics" className="mt-8" />
        <img src={pp} alt="Skincare pics" className="mt-8" />
        <img src={e} alt="Skincare pics" className="mt-8" />
      </div>
    </div>
  );
};

export default Gallery;
