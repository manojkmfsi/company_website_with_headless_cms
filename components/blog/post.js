import Image from "next/image";
export default function Post({ post }) {
  return (
    <div
      key={post.documentId}
      className=""
    >
      <Image
        src={
          post.image?.url
            ? process.env.NEXT_PUBLIC_STRAPI_API_URL + post.image.url
            : "https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image"
        }
        alt={post.title || ""}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        height={500}
        width={500}
        className="max-w-5xl mx-auto"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="mr-3">
            <a href={`/member/${post.author?.documentId}`}>
              {post.author?.name || "Anonymous"}
            </a>
          </span>
          &bull;
          <span className="ml-3">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}
