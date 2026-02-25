import React from "react";
import speaker from "../assets/landing page/speaker.png";
import earphones from "../assets/landing page/earphones.png";
import headphones from "../assets/landing page/headphones.png";
import { ChevronRight } from "lucide-react";

export default function Menu({}) {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 w-full max-w-82">
        <ProductCard
          image={headphones}
          shadow={shadow}
          ChevronRight={ChevronRight}
        />
        <ProductCard
          image={speaker}
          shadow={shadow}
          ChevronRight={ChevronRight}
        />
        <ProductCard
          image={earphones}
          shadow={shadow}
          ChevronRight={ChevronRight}
        />
      </div>
    </div>
  );
}
