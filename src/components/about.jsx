import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");

    elements.forEach((el) => {
      const fromDirection = el.classList.contains("from-left")
        ? { x: -100 }
        : el.classList.contains("from-right")
        ? { x: 100 }
        : { y: 50 };

      gsap.fromTo(
        el,
        { opacity: 0, ...fromDirection },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      data-scroll data-scroll-section data-scroll-speed='-.6'
      ref={sectionRef}
      className="bg-gradient-to-br from-black to-cyan-950 text-white pb-10 lg:pb-30 pt-30 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto" id="about">
        <p className="text-lg md:text-xl font-semibold leading-loose animate-on-scroll from-left">
          Our mission is to assist in creating a safer, more reliable digital environment where trust isn’t compromised. Whether you’re moderating user content or safeguarding public communications,  <span className="text-cyan-400 font-semibold">GenReal.ai</span> is here to help you lead with confidence.

        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-12 animate-on-scroll from-right">
          <div className="min-w-[120px] min-h-[120px] border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 font-bold text-center">
            What We Do
          </div>
          <div className="border-2 border-cyan-400 rounded-xl p-4 leading-relaxed max-w-xl">
            We offer a robust suite of tools, including real-time APIs, batch processing systems, and a full-featured platform tailored to industries like fintech, media, law enforcement, and social media. Our solutions detect visual and audio manipulation using cutting-edge deep learning, enabling high-speed and high-accuracy verification of user-generated and public content.
          </div>
        </div>

        <h2 className="text-center text-[10vw] md:text-5xl font-bold text-cyan-100 mt-18 mb-6 animate-on-scroll">
          See beyond the surface. Spot Deepfakes easily.
        </h2>

        <div className="flex flex-col md:flex-row-reverse mt-20 items-center md:mr-10 gap-6 animate-on-scroll from-left">
          <div className="min-w-[120px] min-h-[120px] border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 font-bold text-center">
            What Makes <br /> Us Unique
          </div>
          <div className="border-2 border-cyan-400 rounded-xl p-4 leading-relaxed max-w-xl">
            The algorithms, accuracy and the real-time detection at scale makes our services ideal for detecting the reliability of live video streams, social media moderation, and virtual conferencing tools.  Beyond tech, we’re also committed to fighting misinformation and helping the public be more educated on deepfake technology.

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;