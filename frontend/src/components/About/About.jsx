import React from "react";
import { Link } from "react-router-dom";
import aboutCardImg from "../../assets/images/about-card.png";
import aboutImg from "../../assets/images/doctor-2.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-green-100 to-teal-100 pb-20 pt-20">
      <div className="container">
        <div className="flex justify-between gap-[100px] lg:gap-[130px] xl:gap-[100px] flex-col lg:flex-row">
          {/* ================= About img ================== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* ================= About Content ================== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to Be Among the Nation's Best</h2>
            <br />
            <p className="text__para">
              For 30 consecutive years, U.S. News & World Report has recognized
              us as one of the top public hospitals in the nation, and we
              proudly stand as #1 in Sri Lanka.
            </p>

            <p className="text__para mt-[30px]">
              Our dedication to excellence is unwavering. Each day, we focus on
              not just what we've achieved, but on how we can continuously
              enhance the care we provide. Our commitment is to deliver the
              highest quality care, always looking forward to what we can
              accomplish tomorrow.
            </p>

            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
