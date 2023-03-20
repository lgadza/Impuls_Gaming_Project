import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
import "../styling/scrollableHrizontalImages.css";

const HorizontalImageScroll = ({ root }) => {
  const scrollRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      direction: "horizontal",
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true,
      },
      smartphone: {
        smooth: true,
      },
    });
    const container = scrollRef.current;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });

    imagesRef.current.forEach((image) => {
      image.addEventListener("click", () => {
        image.classList.add("-clicked");
        hideImages();
      });
    });

    showImages();
    return async () => {
      await container.removeEventListener("wheel", handleWheel);
      scroll.destroy();
    };
  }, []);

  const init = () => {
    imagesRef.current = [...scrollRef.current.querySelectorAll(".image")];
  };

  const showImages = () => {
    imagesRef.current.forEach((image) => {
      image.classList.remove("-clicked");
      image.classList.add("-active");
    });
  };

  const hideImages = () => {
    imagesRef.current.forEach((image) => {
      image.classList.remove("-active");
    });

    setTimeout(showImages, 2000);
  };

  return (
    <div
      className="scroll-animations"
      ref={scrollRef}
      onLoad={init}
      data-scroll-container
    >
      <div className="scrollsection" data-scroll-section>
        <div className="item -normal" data-scroll data-scroll-speed="2">
          <img
            className="image"
            src="https://www.pickeronline.com/uploads/category/147305939157cd1a3fd9555.jpg"
            alt="image"
          />
        </div>
        <div className="item -big" data-scroll data-scroll-speed="1">
          <img
            className="image"
            src="https://lh5.googleusercontent.com/p/AF1QipPsjGgmAQpFr-v-Avgfwv9Tm9Uq2dtsGRJRuu3D=w1080-k-no"
            alt="image"
          />
        </div>
        <div
          className="item -small -horizontal"
          data-scroll
          data-scroll-speed="4"
        >
          <img
            className="image"
            src="https://media-cdn.tripadvisor.com/media/photo-s/1a/c4/86/f1/the-gaming-cafe-is-located.jpg"
            alt="image"
          />
        </div>
        <div className="item -normal" data-scroll data-scroll-speed="3">
          <img
            className="image"
            src="https://live-production.wcms.abc-cdn.net.au/18e630a83413eb1f52b6d7c8dcc329be?impolicy=wcms_crop_resize&cropH=1126&cropW=2000&xPos=0&yPos=102&width=862&height=485"
            alt="image"
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="2"
        >
          <img
            className="image"
            src="https://i.pinimg.com/236x/40/62/fe/4062fe1fd810cdc5f6859b296816c564.jpg"
            alt="image"
          />
        </div>
        <div
          className="item -big -horizontal"
          data-scroll
          data-scroll-speed="4"
        >
          <img
            className="image"
            src="https://pbs.twimg.com/media/EL-qiTuXUAASbId.jpg"
            alt="image"
          />
        </div>
        <div className="item -small" data-scroll data-scroll-speed="2">
          <img
            className="image"
            src="https://cdn-www.bluestacks.com/bs-images/koIab6AthBRe4iwMmAn78wEHxxYxFXMuUld_ziuq4sa2akUAWZYZ0jGyR8zT4JSUeEjU.png"
            alt="image"
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="1"
        >
          <img
            className="image"
            src="https://today.uconn.edu/wp-content/uploads/2016/12/video-games-shutterstock_278969585-1200px.jpg"
            alt="image"
          />
        </div>
        <div
          className="item -small -horizontal"
          data-scroll
          data-scroll-speed="3"
        >
          <img
            className="image"
            src="https://store-images.s-microsoft.com/image/apps.17589.14623499563372448.0b460acf-188b-4cc2-96a4-b6f58dfdb2ec.de86206e-8fd0-4e12-aacb-26dfcb56789b?mode=scale&q=90&h=225&w=150&format=jpg"
            alt="image"
          />
        </div>
        <div className="item -big" data-scroll data-scroll-speed="1">
          <img
            className="image"
            src="https://cdn1.vox-cdn.com/uploads/chorus_asset/file/4000896/2.0.jpg"
            alt="image"
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="2"
        >
          <img
            className="image"
            src="https://cdn.tutsplus.com/cdn-cgi/image/width=640/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/22.jpg"
            alt="image"
          />
        </div>
        <div
          className="item -normal -horizontal"
          data-scroll
          data-scroll-speed="1"
        >
          <img
            className="image"
            src="https://images.cdn.circlesix.co/image/1/640/0/uploads/posts/2016/11/52e227c79aba0e7093c8a5d2a1cbd3b3.jpg"
            alt="image"
          />
        </div>
        <div class="item -big" data-scroll data-scroll-speed="3">
          <img
            class="image"
            src="https://a.espncdn.com/photo/2021/0709/r878390_864x1296_2-3.jpg"
          />
        </div>
        <div class="item -normal -horizontal" data-scroll data-scroll-speed="2">
          <img
            class="image"
            src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg"
          />
        </div>
        <div class="item -small -horizontal" data-scroll data-scroll-speed="4">
          <img
            class="image"
            src="https://deseret.brightspotcdn.com/dims4/default/af9f846/2147483647/strip/false/crop/1024x576+0+54/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FYafMh0112XmoHRTaEy5A490QOyw%3D%2F0x0%3A1024x683%2F1024x683%2Ffilters%3Afocal%28766x223%3A767x224%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22852711%2FAP21234826545432.jpg"
          />
        </div>
        <div class="item -big" data-scroll data-scroll-speed="2">
          <img
            class="image"
            src="https://assets.reedpopcdn.com/fifa-main.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/fifa-main.jpg"
          />
        </div>
        <div class="item -normal -horizontal" data-scroll data-scroll-speed="1">
          <img
            class="image"
            src="https://image.api.playstation.com/vulcan/img/rnd/202008/1900/lTSvbByTYMqy6R22teoybKCg.png"
          />
        </div>
        <div class="item -small -horizontal" data-scroll data-scroll-speed="3">
          <img
            class="image"
            src="https://i.ytimg.com/vi/S21mTj2uh08/hqdefault.jpg"
          />
        </div>
        <div class="item -normal" data-scroll data-scroll-speed="1">
          <img
            class="image"
            src="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/KOCH-MEDIA/Call-of-Duty-Modern-Warfare-II/zrzut-ekranu-z-gry-call-of-duty-modern-warfare-ii-01.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default HorizontalImageScroll;
