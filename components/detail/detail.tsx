import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/sdk/queries/products";

export default async function Detail() {
  const { products: categoryOneProducts } = await getProducts({
    variables: {
      categoryId: "Ms6yZLc0Wd-jpRY-OYUlH",
    },
  });

  const { products: categoryTwoProducts } = await getProducts({
    variables: {
      categoryId: "H2UJkAIiYKSE7atTF_Pbk",
    },
  });

  return (
    <div className="py-8 mt-2 w-full px-4">
      <h1 className="text-center mb-2 text-3xl font-semibold">
        Small Updates, Big Style
      </h1>
      <h4 className="text-center mb-8 text-gray-500">
        Bringing the Best of Everywhere to You.
      </h4>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          ...categoryOneProducts.slice(0, 1),
          ...categoryTwoProducts.slice(0, 1),
        ].map((product) => (
          <div
            key={product._id}
            className="rounded-2xl overflow-hidden shadow-md max-w-sm w-full flex flex-col min-h-full"
          >
            {product.attachment?.url ? (
              <Image
                src={product.attachment.url}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
            ) : (
              <div className="w-full h-60 bg-gray-200 flex justify-center items-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
            <div className="flex-1 p-4 bg-gray-100 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                This is a short description for {product.name}.
              </p>
              <p className="text-lg sm:text-xl font-semibold mb-3">
                {product.unitPrice}₮
              </p>
              <Link
                href={`/product/${product._id}`}
                className="inline-block bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                Одоо үзэх
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
