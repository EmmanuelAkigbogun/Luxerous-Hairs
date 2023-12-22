import files from "../assets/files";

export let SectionCChild = ({ heading, data }) => {
  return (
    <>
      <section className="column gap40">
        <section className="space_between align_center c_child">
          <h2 className="heading heading2">{heading}</h2>
          <section className="gap16 row">
            <img src={files.instagram} alt="instagram" />
            <img src={files.tikTok} alt="tik-tok" />
          </section>
        </section>
        <section className="row gap30 grid">
          {data[0][heading].map((a) => {
            return (
              <section className="cards" key={a.image + heading}>
                <section className="card_top">
                  <section className="gap8 row">
                    <section className="relative j_center align_center">
                      <img
                        src={files.iconRing}
                        alt="icon ring"
                        className="absolute"
                      />
                      <img
                        src={files.ringImage}
                        alt="ring_image"
                        className=" zindex"
                      />
                    </section>
                    <section>
                      <p className="small_bold3 small">Ruffles</p>
                      <p className="small_bold4 small">Sponsored</p>
                    </section>
                  </section>
                  <section>
                    <img src={files.trippleDots} alt="tripple-dots" />
                  </section>
                </section>
                <section className="zindex align_end card_child card_child_c">
                  <img
                    src={a.image}
                    alt={a.image}
                    key={a.image}
                    className="card_image"
                  />
                </section>
                <section className="card_icons">
                  <section className="gap8 row">
                    <img src={files.heart} alt="heart" />
                    <img src={files.comment} alt="comment" />
                    <img src={files.share} alt="share" />
                  </section>
                  <section>
                    <img src={files.icon} alt="icon" />
                  </section>
                </section>
                <section className="texts_c gap4 column">
                  <p className="small small_bold2" key={a.likes}>
                    {a.likes}
                    <span className="small small_bold2">Likes</span>
                  </p>
                  <p className="small small_bold1" key={a.userName}>
                    {a.userName}
                    <span className="small small1" key={a.post}>
                      {a.post}
                    </span>
                    <span className="small2 small">more..</span>
                  </p>
                  <p className="small2 small">
                    View All
                    <span key={a.comment}>{a.comment}</span>
                  </p>
                  <section className="comment_section">
                    <section className="row gap4">
                      <img src={a.avatar} alt={a.avatar} key={a.avatar} />
                      <p className="small2 small">Add a comment...</p>
                    </section>
                    <section className="row gap10">
                      <img src={files.love} alt="love" />
                      <img src={files.hands} alt="hands" />
                      <img src={files.addReactionsButton} alt="add" />
                    </section>
                  </section>
                  <p className="small2 small" key={a.time}>
                    {a.time}
                  </p>
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};
