import React from "react";
import SectionTitle from "../global/SectionTitle";

function Blog() {
  // In the future, parse actual markdown or CMS posts here.
  const posts = [];

  return (
    <div id="blog" className="flex flex-col text-left justify-between pt-6 relative">
      <SectionTitle title="Blog & Notes" />
      
      {posts.length === 0 ? (
        <div className="w-full text-center py-10 border-2 border-dashed border-fun-pink/30 rounded-xl bg-bg/50">
          <h3 className="text-xl font-bold text-fun-pink mb-2">Coming Soon</h3>
          <p className="text-fun-gray max-w-md mx-auto">
            I'm currently writing up some of my experiences around distributed systems, 
            engineering leadership, and the journey from single to multi-tenant scaling. 
            Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
           {/* Fallback code for future maps */}
        </div>
      )}
    </div>
  );
}

export default Blog;
