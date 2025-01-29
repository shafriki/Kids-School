import bannerImg from '../../assets/hero-kids.png';

const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-3 md:mx-auto gap-5 md:gap-0 flex flex-col-reverse md:flex-row justify-between items-center my-9">
            {/* text content */}
            <div className="flex flex-col items-start space-y-3">
            <h1 className="text-3xl md:text-5xl quicksand font-bold w-5/6 md:w-3/5"><span className="text-[#FEA301]">Empowering</span><br />
            students from small age <span className="text-[#01ACFD]">towards vision</span></h1>
            <h3 className="text-base md:text-lg text-justify md:w-3/5 quicksand">With the courage, Confidence, Creativity and Compassion to make their Unique Contribution in a Diverse and Dynamic World.</h3>
            <button className="btn bg-black rounded-lg hover:bg-[#FEA301] text-white">Enroll Now</button>
            </div>

            {/* image content */}
            <div>
                <img src={bannerImg} alt="banner-img" className='w-[14rem] md:w-full'/>
            </div>
        </div>
    );
};

export default Banner;