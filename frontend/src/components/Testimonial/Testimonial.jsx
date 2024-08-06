import React from "react";
import { HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import patientAvatar from "../../assets/images/patient.png";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img width={"32px"} height={"32px"} src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                  Sarah Johnson
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Dr. Smith has been incredible throughout my treatment. Her
              compassion and expertise have made all the difference. I felt
              truly cared for and supported every step of the way. Highly
              recommend!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img width={"32px"} height={"32px"} src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                  Michael Lee
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I've had a wonderful experience with Dr. Brown. He took the time
              to explain my condition in detail and answered all my questions
              patiently. The level of care and professionalism is unmatched. I’m
              grateful for his dedication."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img width={"32px"} height={"32px"} src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                  Emily Davis
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Dr. Patel is a top-notch physician. Her attention to detail and
              genuine concern for my well-being made my visits very reassuring.
              She made sure I understood my treatment options and was always
              there to offer support. Excellent care!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img width={"32px"} height={"32px"} src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                  James Thompson
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I can't thank Dr. Garcia enough for her exceptional care. She
              provided thorough explanations and was always available to address
              any concerns I had. Her approach to patient care is both
              professional and compassionate."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img width={"32px"} height={"32px"} src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-black">
                  Garvit Bhatia
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                  <HiStar className="text-[#e2ca42] w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "Doctor's attention to detail and genuine concern for my
              well-being made my visits very reassuring."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
