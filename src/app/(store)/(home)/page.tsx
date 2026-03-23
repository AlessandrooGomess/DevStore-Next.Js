import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeatureProducts(): Promise<Product[]> {
  const response = await api("/products/featured");

  const products = await response.json();

  return products;
}

export default async function Home() {
  const [highLightedProduct, ...otherProducts] = await getFeatureProducts();

  return (
    <div className="grid grid-cols-9 grid-rows-6 gap-6 h-full min-h-215">
      <Link
        href={"/product/${highlightedproduct.slug}"}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src={highLightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-300 cursor-default"
          width={860}
          height={860}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 rigth-28 h-12 flex items-center gap-2 max-w-70 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highLightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highLightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={"/product/${product.slug}"}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500 cursor-default"
              width={480}
              height={480}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-12 flex items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 whitespace-nowrap">
              <span className="text-sm truncate max-w-37.5">
                {product.title}
              </span>

              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
