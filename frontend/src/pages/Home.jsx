//import React from 'react'

import { Link } from "react-router-dom";
import {
  default as faqImg,
  default as heroImg01,
} from "../assets/images/doctor-1.jpg";
import heroImg02 from "../assets/images/doctor-2.jpg";
import heroImg03 from "../assets/images/doctor-3.jpg";
import {
  default as avatarIcon,
  default as featureImg,
} from "../assets/images/doctor.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import About from "../components/About/About";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import ServiceList from "../components/Services/ServiceList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ============== hero section ============== */}

      <section className="hero_section pt-[60px] 2xl:h-screen">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ============== hero content ============== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Your Health, Our Priority{" "}
                </h1>
                <br />
                <p className="text__para">
                  We are dedicated to providing exceptional medical care with a
                  compassionate touch. Our team of experienced healthcare
                  professionals is committed to promoting wellness and offering
                  cutting-edge treatments to help you achieve optimal health.
                  With state-of-the-art facilities and a patient-centered
                  approach, we ensure a comfortable and supportive environment
                  for all your healthcare needs. Whether it's preventive care,
                  advanced diagnostics, or specialized treatments, we are here
                  to support you on your journey to a healthier, happier life.
                </p>

                <button className="btn">Request an Appoinment</button>
              </div>
              {/* ============== hero counter ============== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    25+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-300 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experiance</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    99.9%
                  </h2>
                  <span className="w-[100px] h-2 bg-blue-300 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    12+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
              </div>
            </div>

            {/* ============== hero content ============== */}
            <div className="flex gap-[30px] justify-end align-middle items-center">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== hero section end ============== */}
      <section className="bg-gradient-to-r from-blue-100 via-green-100 to-teal-100 pb-10">
        <br />
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Delivering Excellence in Healthcare
            </h2>
            <br />
            <p className="text__para text-center">
              Experience exceptional healthcare with our team of highly skilled
              professionals. Our state-of-the-art facilities and innovative
              treatments ensure that you receive the highest standard of care,
              tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Get your appointment scheduled with a experienced doctor.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional healthcare for all. Our health system provides
                  unparalleled expertise and compassionate care, from advanced
                  laboratory diagnostics to comprehensive clinical services
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appoinment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Exceptional healthcare for all. Our health system provides
                  unparalleled expertise and compassionate care, from advanced
                  laboratory diagnostics to comprehensive clinical services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== About section Start ============== */}

      <About />

      {/* ============== Service section ============== */}
      <section className="pt-40 pb-24 bg-gradient-to-r from-blue-100 via-green-100 to-teal-100">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center mb-4"> Our medical Services </h2>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* ============== Service section end ============== */}

      {/* ============== Feature section ============== */}
      <section className="pb-20 bg-gradient-to-r from-blue-100 via-green-100 to-teal-100">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ============== Feature content ============== */}
            <div className="xl:w-[670px]">
              <h2 className="heading  m-6">
                Get virtual treatment <br /> Anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para mb-3">
                  1. Schedule the appoinment directly.
                </li>
                <li className="text__para mb-3">
                  2. Search your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View your physician who are accepting new patients, use the
                  online scheduling tool to select an appoinment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn ml-3">Learn More</button>
              </Link>
            </div>

            {/* ============== Feature img ============== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div
                className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
              md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-300
                  rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"
                  >
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-8px
                leading-[8px] lg:text-[12px] lg:leading-4 text-[#246BCE] font-[500] mt-2 lg:mt-4 rounded-full"
                >
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============== Feature section end ============== */}
      {/* ============== Our great doctors ============== */}
      <section className="py-20 bg-gradient-to-r from-blue-100 via-green-100 to-teal-100">
        <div className="container">
          <div className="xl:w-[770px] mx-auto">
            <h2 className="heading text-center"> Our Great Doctors </h2>
            <p className="text-center mb-4">
              Our team of exceptional doctors is the cornerstone of our
              outstanding care. With years of experience and a deep commitment
              to patient well-being, each physician brings a unique blend of
              expertise, compassion, and innovation to their practice.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* ============== Our great doctors end ============== */}

      {/* ============== faq section  ================ */}
      <section className="bg-gradient-to-r from-blue-100 via-green-100 to-teal-100">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-120px">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Frequently Asked Questions by Our Beloved Patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ============== faq section end  ============== */}

      {/* ============== testimonial  ============== */}
      <section className="py-28 bg-gradient-to-r from-blue-100 via-green-100 to-teal-100">
        <div className="container">
          <div className="xl:w-[770px] mx-auto">
            <h2 className="heading text-center "> What our patient say</h2>
            <p className="text__para text-center mb-4">
              We understand that navigating healthcare can raise many questions.
              To assist you, we've compiled a list of the most frequently asked
              questions by our patients.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* ============== testimonial end ============== */}
    </>
  );
};

export default Home;
