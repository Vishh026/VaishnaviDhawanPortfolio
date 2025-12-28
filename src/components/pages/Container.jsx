import React from "react";

const Container = () => {
  // const tags =  ["React" , "Full-Stack Development" ,"UI/UX Design" , "SEO Optimization"]
  return (
    // <div className="px-10 py-20 bg-red-300 flex items-center flex-col">
    //   <div className='border-rounded rounded-full bg-amber-300 h-26 w-26 px-5 py-5 my-5'>fhbvhfb</div>
    //   <div className="headline-text google-sans-flex text-center ">
    //     <div className="flex"><h1>I’m Vaishnavi ,Build Smart, Modern &  High-Impact </h1>
    //     <h2></h2></div>
    //     <span>websites That Drive Results </span> {" "}
    //   </div>
    //   <div className="google-sans-flex text-center sub-head flex items-center gap-5">
    //     {tags.map(tag => (<h1>{tag} </h1>))}
    //   </div>
    // </div>
   <div className="py-16 capitalize relative">
     <div className="flex items-center justify-center flex-col text-[#ffffff]">
      <button className="btn-head px-4 py-2 rounded-4xl my-5">Design in detail</button>
      <div className="headline text-center">
        <h1>Crafted <span className="span-h1">Websites</span></h1> 
    <h1><span>Lasting</span> Impressions</h1></div>
    <h1 className="text-[1.4rem] Google Sans Flex py-3 text-[#a0a0a0] ">Premium websites crafted for bold brands.</h1>
    
    </div>
    <div className="py-10 flex justify-center items-center gap-5 capitalize">
        <div className="btn2-head rounded-4xl px-7 py-1.5 bg-white text-black">Get in touch</div>
        <div className="btn2-head rounded-4xl px-7 py-1.5 bg-[#333333] text-white">See our work</div>
    </div>

    <div className="hero bg-red-300 aboslute">
      
    </div>
   </div>
  );
};

export default Container;
