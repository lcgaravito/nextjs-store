"use client";
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";

const PLACEHOLDER_IMAGE =
  "data:image/webp;base64,UklGRpoNAABXRUJQVlA4WAoAAAAgAAAANgMANgMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggrAsAAHDAAJ0BKjcDNwM+bTaZSaQioqEgCACADYlpbt+jPgo2Z//9b1HttnI/28G5S8/4+egX//cIr/bSY9zPkAT2Ae+2TkPfbJyHvtk5D32ych77ZOQ99xeg4VwJrqA69DOKCcVRvi4++i6N6ihD51HOvGF6DebNcAiti3j+aL+RNbLGFvKhGJ865uIANOtXS732kiYu9ATwGYWCYoek/dJ+6iYZnWcWB6Pw1nau83ieFkK8nInQcMn/C/YQ+LQJMkTigx/ys2rc4fbuyoWGG9F+V6DfW+UVdjriCFPz/OulH1fazy0yQ+o+Msg/lyoIsI9WOtK0X9r9Jug4f8T69+PIpL2VXoIV5PS7N9PhkXCJkNzQQshLmRcPcTVYNQ/fobvN9acL8Ry+3tiyjCcXNh25EZhxyiq0xtB1TYKW9o69AwtRiq+H3oIA5RwJ6zx4AKPDHWseGlNCEDm5qn7selEeNeiK8Osm2vfKoAdnw5WRIcXwYyWExJvpWbLWQrKfqbMqAjrJtzalaHOUBDy0yfBBgAvlboyzF13nqLxdNsXd42Yyp+89BHq0KeTWURE2otOtzqS07NiHeIdZNtlBtO+08nPEm2wJW6LQmoEMisIfRHTZzt0jn9WPJCgX7mSEOaIliOsm2wFV4aIiHexqj3nmU6LzSv2BI+4k/Tjh4/vWf0R1k2baIRERPtF+6q6vLssKoisP0R6ssqLR+iOsm2wFWUzrIiGRUlzleeqN7vke90Lc4zQLa4zg0oaKkhm0fojrJYP8RDIiKIMPOc4vCJZOGxbYWshVBluisBa756iqATS8uzjEMiIiIm01dROrJBPOcri32qwIYPnv6J9xJ+iOsm2mSCIiGRERPNWzH70LOx75RM1QjqqEPXfPkuHnQnRstXChcCREREMiIihugyw/QEumy4k28pxFYPFoY54QJ+ptRU/eeWkIiIiIhkRFX3Gya9zlgKQvz14SZOOfJ5GHvUUWYYb/OREREQyIiInE+juM53ZafXQpZCsq1CHWTNmca9RS7QhERERDIiIiIdfmNEaPw1rWxRMV19th9cCeljrprR8SIiIZERERDIiInGbSHXVsyKVlZwQe/ex598dZR2hkREREMiIiIhkRERNJQ1ov48SaYxAq8+yfBCtiIiIZERERDIiIiIZEUCRT8JnG+NiyYeKTHKNO+bIiIZERERDIiIiIZERE4kRQO10wVGdBDI7GuIiIiGREREQyIiIiGRET0REUNduvZg5+QK+iKzQ2xoiGREREQyIiIiGRERES2REMpSXqiuvGFIweQ/6dUhEREREMiIiIhkREREMpNEMiKRFdWUGgnDT5YiIZERERDIiIiIZERETSREQyLezOJERRc2BYZiIZT2ntk5D32yYylyzaUpiFTJ8lVcRd+D3wFeJRWS7Xi5OQ96gZ1xyckAyos+1quMceWMUlgsl2vFych61REmwXahfddMYa4dQe+GyISuEF2lQLJdrOoiTYLuGvt9cyFpc/ekrCA6Ke09snIe+2TGUuWbUL4vBOqyYccKybJYnap+ntk5D32ycL5Df+qMJDL33nVKmD137ooAtiIiGREREQyIiIiGU7qBmst9T1ptLnhnAKpxmH2gzych77ZOQ3/p1CCsNLJiT8tk148tk4CQffUu14uTkPfauE2C7xMP7CQALvBEU+YIxVAKfkntPbJyHvtkxit1d6aAlk2h3Zy1niqgFblAQ3NrxcnIe+s35rfGIdZNsunrEIiPJPAK3L9XQgHvtk5D32ycf+Qv0FqzgmzV02Sl6Yq5Ca8OcdMZHD/nk5D32xznjcOdxvd+vRzNXBrfZhkeOWHPYX0u14uTkPfWb6WJSRLlZNcd2iV1Zw1foooK8nIe+2TGvPm2IJvOPR0kVdUgpfPp9JukxXYXLoiIhkRETy5akcIuJxQTigd0Doh5I8p5EMown0fMi0qBZMCNy1qZYrIKYn0GvYErMt77pQBYwkiKILtKgoQXanEBiH3Sfuk6mkoXMpDB7yRRripBdpUDAN75mnZXoH14RAh8YL6lHkrrpSmAzS1N4uTkP3qcJf8AD++LT8ys9uazNpVkYHoxBdjTZv9OXBTTWHDxWOllCWaoMsaXydhBBwNO9IdjPJ9sgYABZVRvR9zy1r7u7gvZmgj/IhFPiyZHP9XMRo1ZwN9gyNUzPOzSzroiy+QKnJSwC3sPBpK99hAAXCTv/N87fZ7VwseyA7hugA6DsMyBc2iQ8OmAfk8n/I4xeFDO6Esk6+QHCMvT4pv7qUCY7I9st7gkLquMuJ8DA7pwqynmht4DDCrSGdNWp3+oboWICuS+EG/SaaRgAl/jK/ND0heGY5P+QvCQL28zbEqOxpMEUfHQAPMmsiJyQ3BCdjiHrmvmw7ryTHD0KeNwFdwAWe0sMFqKjwYwZUeXOvzwi13FO7NMp5s9ATcn7fb20xbcv1Q/dNRoLAY8Ba4KQ8uXNcF03eEJCCYODoHNBfuXkOubWxgqdfL3ryX7y0avS5FTpwTljw4WF+vgx29DO2+5Kp5tige7PBqcEeRiQpl6gfmOm7vnLjFByUChBwarz5X/O7r+IflgfZrksDqPHuwSrFkUb7y0zifBZXZpKJyru1Nuo6ZEoAG3YJNrs3k3BmUG2yExzIvHjWVJNIHVIJ/Rs26JZuCPzXSks4KNxXp9ZF974m2ybBioX8WI3UWl5/6qDCOvoOfUFQa6WTPX6rvHulQhyodt5WkqnwUbMRjx0rjiLzlkZbQmowuF7dAAMHInlVkQ2d/f89e1nLYmYOi+gBQU8zEWhVgpjmk1SeHD+w1M72dkz0XB9TallMrWRN4zieTUFq8WBuercs9OwxrPBqJu542kRLQdCHE4ikQJJpjU4QsXsJJiJa/UjcmsS4kARkav2nb/8keY9bw5oJlrMhY8CsMQeMbQvEOcq6qFGrQdfJ0gFAfr0139fe7O8KwmbzscXmJWmd4AcOBQZ4TBaG1SVLQ1RQ+vVX0yutjXbkygqXZM9FDF8+xKSIOx4XPtfMwKqclkFLQLdIbZMuKDr74p+rTDmmqX3egwAGxbvz+xHpSzzoNVJwScrTF01xXfyRuSoOsRTD2YOGMAaXE7C6rhsFlBYgvbbp5PIqjLy1iPlR+AAZwU0MyyqcR0fKzW6y4rSrPsRGJHIzHO8wIwRTkcQWUaquVCeYTeAM+DFl+v44wh36k8tNtGKtIMYcEntgpoPJeCSKK8YAADybpN1G7keuJOAj6qgDSld5yfRGAACpeX5ajIJYK4IaywKYw9leOJqgABiThkfoVeCX8B1DrCQTTfTRAgAAFS6lBTVFl3vsE0AAATiIfb5M44AAAAGFbcBTCAAZ+asOtOPXfbImmAAApORpYceEAAAABCFENOIXQGPeAAAABYzuozgB6pV22EDt6QAAAAnc79gYsuADEK/K2pWgwEAAAPuQAoNpcT3LJoTl3DcdrP8SbwAAABuHw8FuvyY+YC12tjUNP4FhK4m9v9OLoAAAEEV2nMFMrZp8+txOWBYaER6WMlS0JsXhABkr2Rfv9nrT6BsBiWHZOrGnKkICAAA1H/cxi1YsxY468/RDqcTxB5dZUwAAPpe22TkcSyBJ5mkmlx26c+6R3QflPR66zG4AODeqjPTzBHdpM7f6bQTfENfkeKU9xGC5FB7JcLvq10tlgAODetlJ069mATtUio/nZ7cIUbXyhoMdMQjn0QBQldShmr0l36fp5iSfsIFrO0HJznB2Vb30b1RPQABeBuu5TfLY8s0AbA3g6fWVkOCBuhW1gAncVrK1IBke2BwVpqka2eO7ob7kq4OHHf6NAATvuXMHFVBFpmY5sP1/C77LBn+ysIK9eTZNHrDh3z4vVus76XZ1cg4ZSnmnEWfHwz5RPxfEewIei8XUlhvSZMEDiHr+ROCxRHyzG82wARWxNsQIqoB9iUmiRelPZiekZ4WZHniECWkKeyzvZxZMD8RhDXCpQGbPOAAAAA==";

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder((prev) => !prev);

  const cx = classNames.bind(styles);

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  console.log(buttonStyles);

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world
          of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
