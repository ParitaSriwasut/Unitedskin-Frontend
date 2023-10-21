import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const ggetProductIds = async targetUserId => {
  const relationship = await prisma.product.findMany({
    where: {
      OR: [{ receiverId: targetUserId }, { requesterId: targetUserId }],
      status: STATUS_ACCEPTED
    }
  });
exports.ProductDetails = async (req, res, next) => {
  try {
    const productIds = await getProductIds(req.user.id); // [6, 12, 7]
    // SELECT * FROM posts WHERE userId in (6, 12, 7)
    const posts = await prisma.post.findMany({
      where: {
        userId: {
          in: [...productIds, req.user.id]
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            profileImage: true
          }
        },
        likes: {
          select: {
            userId: true
          }
        }
      }
    });
    res.status(200).json({ posts });
  } catch (err) {
    next(err);
  }
};

  return (
    <>
      <div className="mt-20 bg-gray-200">
        <div className="container mx-auto p-4">
          <div className="md:w-12/12">
            <section className="bg-white rounded-lg shadow-md">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12">
                  <div className="pro-img-details">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.productName}
                    />
                  </div>
                </div>
                <div className="w-full md:w-6/12 p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedProduct.productName}
                  </h2>
                  <p className="text-md font-semibold text-gray-800 mb-2 leading-loose">
                    {selectedProduct.shortDescription}
                  </p>
                  <p className="text-gray-600 text-md mb-2 leading-loose">
                    {selectedProduct.guide}
                  </p>
                  <div className="mt-4 text-gray-600">
                    <strong>Category: {selectedProduct.categoryName}</strong>
                  </div>
                  <div className="mt-4">
                    <strong>Price: ${selectedProduct.productPrice}</strong>
                  </div>
                  <div className="mt-4">
                    <label>Quantity</label>
                    <input
                      type="number"
                      placeholder="1"
                      className="border border-gray-300 p-2 w-20"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <button className="bg-red-500 text-white py-2 px-6 rounded-full">
                      <i
                        className="far fa-shopping-cart"
                        style={{ color: "#050505" }}
                      ></i>{" "}
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
