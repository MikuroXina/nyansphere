import { FC, useEffect, useState } from "react";

export const DotsAnimation: FC = () => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const timer = setInterval(() => setDots(advanceDots), 300);
    return () => clearInterval(timer);
  }, []);
  return <span>{dots}</span>;
};

function advanceDots(text: string) {
  return text.length === 3 ? "" : `${text}.`;
}
