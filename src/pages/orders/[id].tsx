import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

import { Product } from "~/types";
import { api } from "~/api";

type ProductPageProps = {
  product: Product;
};

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.nameClient}</title>
        <meta name="description" content={product.nameClient} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className="text-4xl font-bold text-slate-800">{product.title}</h1>
        <img
          className="h-full w-full object-contain"
          src={product.image}
          alt={product.nameClient}
        />
        <p>
          Клиент: {product.nameClient}
        </p>
        <p>
          Описание: {product.description}
        </p>
        <p>
          Пожелания: {product.requirement}
        </p>
        <p>
          Цена: {product.price}
        </p>
        <p>
          Способ связи: {product.typeСonnection}
        </p>
      </section>
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  ctx,
) => {
  const { params } = ctx;

  const id = params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const numberId = parseInt(id);

  if (Number.isNaN(numberId)) {
    return {
      notFound: true,
    };
  }

  const response = await api.products.getProductById(numberId);

  return { props: { product: response.data } };
};
