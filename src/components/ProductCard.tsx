/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";

import { Product } from "~/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  console.log(product);
  console.log('-----------------------------------------');
  console.log(product.nameClient);
  return (
    <Link href={`/orders/${product.id}`}>
      <div className="flex flex-col gap-3">
        <h1>{product.title}</h1>
        <div className="flex h-96 items-center justify-center bg-white p-4">
          <img
            className="h-full w-full object-contain"
            src={product.image}
            alt={product.nameClient}
          />
        </div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {product.nameClient}
        </p>
        <p>
          {product.description}
        </p>
        <p>
          Цена: {product.price}
        </p>
      </div>
    </Link>
  );
};
