import React, { useEffect, useState } from "react";

function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://alibaraka.pythonanywhere.com/api/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, []);
  return (
    <div className="blog">
      <h2>
        Blog component
        dfsdfafgjfgaksdfgvbjdfsgvjsdfjgvdsfjbvdsfbgvjdsfjvdsfjvdsfvndfvnjdsfvjkdsfvjkdsfjvdfvdsfvdfvd
      </h2>
      <div>
        <p>ajSBDJVHSDVJHDFSVJSAJVDFJVSADVJBDVJKDFVJKD</p>
        <h3>
          SDVSDVDSVHSDVUSDVSDVJSDVUJSDVCUSDCUSDCSDCSDCSDCHSDisdvdfvmndfvjdsvjsdv
          hsdvsdbvhsdv usgvsdjvsd zcugsadv sdv ucsd vc sdcvusadfc sdchsadc usdv
          sdciu zssdcbsx sguscsgucsdcvucdsc sc nschsacvcbsc cschgf ns cguwfbjdsc
          scgsc uwsn dcsbn
        </h3>
      </div>
      {blog?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt="img" />
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
