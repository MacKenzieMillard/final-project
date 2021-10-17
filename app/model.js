var MODEL = (function(){
    var homeContent = `<div class="home">
    <section class="hero">
      <div class="callout">
        <h1>Header goes here</h1>
        <h4>Less important text goes here</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          aliquid minus nemo sed est.
        </p>
        <div class="readMore">READ MORE</div>
      </div>
    </section>
    <section class="quote">
      <div class="homeQuote">
        <p>
          “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam rem aperiam eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Iste natus error sit voluptatem accusantium
          doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo”
        </p>
        <h4>John Smith</h4>
        <h5>Corporation CEO, books author.</h5>
      </div>
    </section>
    <section class="events">
      <h1>UPCOMING EVENTS:</h1>
      <div class="upcomingEvents">
        <div class="event">
          <div class="eventDate">
            <h2>06</h2>
            <h3>JUN</h3>
          </div>
          <div class="eventDescription">
            <h4>Sed et persipiatis unde omnis iste natus</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
        <div class="event">
          <div class="eventDate">
            <h2>30</h2>
            <h3>JUL</h3>
          </div>
          <div class="eventDescription">
            <h4>Sed et persipiatis unde omnis iste natus</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
        <div class="event">
          <div class="eventDate">
            <h2>30</h2>
            <h3>AUG</h3>
          </div>
          <div class="eventDescription">
            <h4>Sed et persipiatis unde omnis iste natus</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
        <div class="event">
          <div class="eventDate">
            <h2>23</h2>
            <h3>NOV</h3>
          </div>
          <div class="eventDescription">
            <h4>Sed et persipiatis unde omnis iste natus</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
        <div class="event">
          <div class="eventDate">
            <h2>23</h2>
            <h3>DEC</h3>
          </div>
          <div class="eventDescription">
            <h4>Sed et persipiatis unde omnis iste natus</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>`;
    var aboutContent = `<div class="about">
    <div class="aboutHero"></div>
    <div class="aboutHistory">
      <h2>OUR HISTORY:</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>`;
    var galleryContent = `<div class="gallery">
    <h1>GALLERY:</h1>
    <div class="galleryImages">
      <div class="topImages">
        <a id="firstGallery" class="firstGallery" href="1stGallery.html"></a>
        <a id="secondGallery" class="secondGallery" href="2ndGallery.html"></a>
        <a id="thirdGallery" class="thirdGallery" href="3rdGallery.html"></a>
      </div>
      <div class="bottomImages">
        <a id="fourthGallery" class="fourthGallery" href="4thGallery.html"></a>
        <a id="fifthGallery" class="fifthGallery" href="5thGallery.html"></a>
      </div>
    </div>
  </div>`;
    var firstGalleryContent = `<div id="firstGallery" class="galleryDetails">
    <div class="galleryDetailHero">
      <div class="firstGalleryHero">
        <div class="galleryDetailCallout">
          <h1>1.</h1>
          <h2>food festival</h2>
        </div>
      </div>
    </div>
    <div class="galleryDetailDescription">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>`;
    var secondGalleryContent = `<div id="secondGallery" class="galleryDetails">
    <div class="galleryDetailHero">
      <div class="secondGalleryHero">
        <div class="galleryDetailCallout">
          <h1>2.</h1>
          <h2>dee-jay</h2>
        </div>
      </div>
    </div>
    <div class="galleryDetailDescription">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>`;
    var thirdGalleryContent = `<div id="thirdGallery" class="galleryDetails">
    <div class="galleryDetailHero">
      <div class="thirdGalleryHero">
        <div class="galleryDetailCallout">
          <h1>3.</h1>
          <h2>speech</h2>
        </div>
      </div>
    </div>
    <div class="galleryDetailDescription">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>`;
    var fourthGalleryContent = `<div id="fourthGallery" class="galleryDetails">
    <div class="galleryDetailHero">
      <div class="fourthGalleryHero">
        <div class="galleryDetailCallout">
          <h1>4.</h1>
          <h2>open foodfest</h2>
        </div>
      </div>
    </div>
    <div class="galleryDetailDescription">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>`;
    var fifthGalleryContent = `<div id="fifthGallery" class="galleryDetails">
        <div class="galleryDetailHero">
          <div class="fifthGalleryHero">
            <div class="galleryDetailCallout">
              <h1>5.</h1>
              <h2>international</h2>
            </div>
          </div>
        </div>
        <div class="galleryDetailDescription">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>`;
    var blogContent = `<div class="blog">
    <h3>BLOG:</h3>
    <div class="blogSnippets">
      <div class="individualBlog">
        <div class="blogDate">
          <h1>06</h1>
          <h2>JUN</h2>
        </div>
        <div class="blogDescription">
          <a id="blogImage" href="blog1st.html">
            <img src="images/blog.jpg" alt="blog image" />
          </a>
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div class="individualBlog">
        <div class="blogDate">
          <h1>30</h1>
          <h2>JUL</h2>
        </div>
        <div class="blogDescription">
          <a id="blogImage" href="blog2nd.html">
            <img src="images/blog.jpg" alt="blog image" />
          </a>
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div class="individualBlog">
        <div class="blogDate">
          <h1>30</h1>
          <h2>AUG</h2>
        </div>
        <div class="blogDescription">
          <a id="blogImage" href="blog3rd.html">
            <img src="images/blog.jpg" alt="blog image" />
          </a>
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div class="individualBlog">
        <div class="blogDate">
          <h1>23</h1>
          <h2>NOV</h2>
        </div>
        <div class="blogDescription">
          <a id="blogImage" href="blog4th.html">
            <img src="images/blog.jpg" alt="blog image" />
          </a>
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div class="individualBlog">
        <div class="blogDate">
          <h1>23</h1>
          <h2>DEC</h2>
        </div>
        <div class="blogDescription">
          <a id="blogImage" href="blog5th.html">
            <img src="images/blog.jpg" alt="blog image" />
          </a>
          <h4>Sed et persipiatis unde omnis iste natus</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </div>`;
    var firstBlogContent = `<div class="blogDetails">
    <div class="blogDetailHero">
      <div class="firstBlogHero">
        <div class="blogHeroCallout">
          <h1>06</h1>
          <h2>JUN</h2>
        </div>
      </div>
    </div>
    <div class="blogDetailDescription">
      <div class="descriptions">
        <h6>Header #1:</h6>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="descriptions">
        <h6>Header #2:</h6>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </div>`;
    var secondBlogContent = `<div class="blogDetails">
    <div class="blogDetailHero">
      <div class="firstBlogHero">
        <div class="blogHeroCallout">
          <h1>30</h1>
          <h2>JUL</h2>
        </div>
      </div>
    </div>
    <div class="blogDetailDescription">
      <div class="descriptions">
        <h6>Header #1:</h6>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="descriptions">
        <h6>Header #2:</h6>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </div>`;
    var thirdBlogContent = `<div class="blogDetails">
    <div class="blogDetailHero">
      <div class="firstBlogHero">
        <div class="blogHeroCallout">
          <h1>30</h1>
          <h2>AUG</h2>
        </div>
      </div>
    </div>
    <div class="blogDetailDescription">
      <div class="descriptions">
        <h6>Header #1:</h6>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="descriptions">
        <h6>Header #2:</h6>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </div>`;
    var fourthBlogContent = `<div class="blogDetails">
    <div class="blogDetailHero">
      <div class="firstBlogHero">
        <div class="blogHeroCallout">
          <h1>23</h1>
          <h2>NOV</h2>
        </div>
      </div>
    </div>
    <div class="blogDetailDescription">
      <div class="descriptions">
        <h6>Header #1:</h6>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="descriptions">
        <h6>Header #2:</h6>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </div>`;
    var fifthBlogContent = `<div class="blogDetails">
    <div class="blogDetailHero">
      <div class="firstBlogHero">
        <div class="blogHeroCallout">
          <h1>23</h1>
          <h2>DEC</h2>
        </div>
      </div>
    </div>
    <div class="blogDetailDescription">
      <div class="descriptions">
        <h6>Header #1:</h6>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div class="descriptions">
        <h6>Header #2:</h6>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  </div>`;
    var contactContent = `<div class="contact">
    <h1>CONTACT US:</h1>
    <div class="contactForm">
      <div class="inputs">
        <div class="textInput">
          <input type="text" placeholder="Your name..." />
        </div>
        <div class="textInput">
          <input type="text" placeholder="Email Address..." />
        </div>
        <div class="textInput">
          <input type="text" placeholder="Company" />
        </div>
        <div class="messageInput">
          <input type="text" placeholder="Message..." />
        </div>
      </div>
      <div class="map">
        <img src="images/map.jpg" alt="map" />
      </div>
    </div>
    <div class="sendBtn">SEND MESSAGE</div>
  </div>`;

    var _changePageContent = function(pageName){
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));

        if(pageName == "home"){
            $("#navHolder").removeClass("otherBorder");
            $("#logo").removeClass("otherLogo");
            $("#links").removeClass("otherLinks");

        }
        else{
            $("#navHolder").addClass("otherBorder");
            $("#logo").addClass("otherLogo");
            $("#links").addClass("otherLinks");
        }
    };

    return{
        changePageContent: _changePageContent,
    };
})();