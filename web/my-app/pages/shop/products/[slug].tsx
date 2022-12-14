import { GetStaticProps } from "next";
import { sanityClient } from "../../../libs/sanity";
import { Product } from "../../../components/Products/product-type";
import ProductOverview from "../../../components/Products/ProductOverview";

const SingleProductPage = ({ product }: { product: Product[] }) => {

    return (
        <div>
            <ProductOverview product={product.at(0)!} />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug;
    const productQuery = `*[_type == 'product' && slug.current == '${slug}'] {
        price,
        _id,
        description,
        slug,
        image,
        Name,
      }`;

    const product = await sanityClient.fetch(productQuery);
    return { props: { product }, revalidate: 120 }
}

export const getStaticPaths = async () => {
    const paths = await sanityClient.fetch(
        `*[_type == 'product' && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    );

    return {
        paths,
        fallback: 'blocking'
    };
}

export default SingleProductPage;