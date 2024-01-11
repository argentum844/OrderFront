import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

import { Product } from "~/types";
import { ProductCard, Filters } from "~/components";
import { useProducts } from "~/hooks";
import { api } from "~/api";
import { Page} from "~/types/Page"

type HomeProps = {
  products: Page<Product[]>;
};

const Home: FC<HomeProps> = ({ products: initialProducts }) => {
  const { products, isLoading, refetch } = useProducts(initialProducts);
  //console.log('------------------------------------------------------------------')
  //console.log(products);
  //console.log('------------------------------------------------------------------')
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Главная" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="rounded-lg bg-slate-200 p-4">
        <Filters onFiltersChange={refetch} />
      </section>
      <section className="mt-4 grid grid-cols-1 justify-between gap-10 rounded-lg bg-slate-200 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {!isLoading &&
          products.content.map((p) => <ProductCard key={p.id} product={p} />)}
      </section>
      <section className="mt-4 rounded-lg bg-slate-200 p-4">Pagination</section>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await api.products.getProducts();

  return { props: { products: response.data } };
};
