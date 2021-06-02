import Head from "next/head";
import Footer from "../components/footer";

const categories = [
  { name: "HTML", imageURL: "/images/html.png", userPercentage: 0.1 },
  { name: "CSS", imageURL: "/images/css.png", userPercentage: 0.2 },
  { name: "JS", imageURL: "/images/js.png", userPercentage: 0.7 },
  { name: "Figma", imageURL: "/images/figma.png", userPercentage: 0.5 },
  { name: "UX", imageURL: "/images/ux.png", userPercentage: 0 },
];

function CircleProgressBar({ id, radio, percentage, src }) {
  const strokeDasharray = 2 * Math.PI * radio;
  return (
    <svg className="max-w-full max-h-full">
      <defs>
        <pattern
          id={`image-${id}`}
          x="0%"
          y="0%"
          height="100%"
          width="100%"
          viewBox="0 0 512 512"
        >
          <image x="56" y="56" width="400" height="400" xlinkHref={src}></image>
        </pattern>
      </defs>
      <circle
        r={radio}
        cx="50%"
        cy="50%"
        fill={`url(#image-${id})`}
        strokeDasharray={strokeDasharray}
        stroke="#DDD"
        strokeDashoffset="0"
        style={{ strokeWidth: "0.5em" }}
      ></circle>
      <circle
        r={radio}
        cx="50%"
        cy="50%"
        fill="transparent"
        strokeDasharray={strokeDasharray}
        stroke="#2CB67D"
        style={{
          strokeDashoffset: strokeDasharray * (1 - percentage),
          strokeWidth: "0.5em",
          transformOrigin: "center",
          transform: "rotate(90deg)",
        }}
      ></circle>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-base">
      <Head>
        <title>Daily Bits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center bg-gray-900 text-white pt-12">
        <span className="mb-8 text-lg">
          Practica tus conocimientos en la categoría que prefieras.
        </span>
        <div className="grid grid-cols-2 gap-8 items-center">
          {categories.map((category, index) => (
            <div
              key={`${index}-${category.name}`}
              className={
                categories.length % 2 === 1 && index === 0 ? "col-span-2" : ""
              }
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-1">
                <CircleProgressBar
                  id={category.name}
                  radio={43}
                  percentage={category.userPercentage}
                  src={category.imageURL}
                />
              </div>
              {category.name}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
