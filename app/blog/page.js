import Posts from "@/components/post/posts";

export default async function blogPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Blogs
          </h1>
        </div>
        <Posts></Posts>
      </div>
    </section>
  );
}
