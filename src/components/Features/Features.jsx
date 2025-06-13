import React from 'react';
import A from '../../assets/A.png';
import I from '../../assets/I.png';
import P from '../../assets/P.png';
import analysis from '../../assets/analysis.png';
import insights from '../../assets/insights.png';
import portfolio from '../../assets/portfolio.png';

const Features = () => {
    return (
        <section className="w-full px-6 py-20 md:px-10 lg:px-20 flex flex-col items-center gap-10 ">
            {/* Header Section */}
            <div className="max-w-[630px] text-center flex flex-col items-center gap-5">
                <h2 className="font-lexend font-semibold text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.02em] text-[#181818]">
                    Powerful Features
                </h2>
                <p className="font-lexend font-normal text-[16px] md:text-[20px] text-[#707070] leading-[26px]">
                    Our AI-powered platform provides everything you need to <br className="hidden md:block" /> succeed in today's financial markets.
                </p>
            </div>

            {/* Cards Section */}
            <div className="w-full flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8">
                {/* Card 1 */}
                <div className="w-full max-w-[400px] h-auto p-5 gap-5 rounded-[12px] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] flex flex-col items-start">
                    <img src={A} alt="analysis" />
                    <h5 className="font-lexend font-medium text-[18px] md:text-[20px] text-[#181818] leading-[28px]">
                        Real-time AI Analysis
                    </h5>
                    <p className="font-lexend font-normal text-base text-[#707070] leading-[28px]">
                        Our advanced algorithms analyze market <br className="hidden md:block" /> data in real-time, identifying patterns and <br className="hidden md:block" /> trends that humans might miss.
                    </p>
                    <img src={analysis} alt="analysis image" />
                </div>

                {/* Card 2 */}
                <div className="w-full max-w-[400px] h-auto p-5 gap-5 rounded-[12px] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] flex flex-col items-start">
                    <img src={P} alt="portfolio" />
                    <h5 className="font-lexend font-medium text-[18px] md:text-[20px] text-[#181818] leading-[28px]">
                        Smart Portfolio Management
                    </h5>
                    <p className="font-lexend font-normal text-base text-[#707070] leading-[28px]">
                        Automatically optimize your portfolio based <br className="hidden md:block" /> on your risk tolerance, investment goals, and <br className="hidden md:block" /> market conditions.
                    </p>
                    <img src={portfolio} alt="portfolio image" />
                </div>

                {/* Card 3 */}
                <div className="w-full max-w-[400px] h-auto p-5 gap-5 rounded-[12px] bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] flex flex-col items-start">
                    <img src={I} alt="insights" />
                    <h5 className="font-lexend font-medium text-[18px] md:text-[20px] text-[#181818] leading-[28px]">
                        Market Insights & Predictions
                    </h5>
                    <p className="font-lexend font-normal text-base text-[#707070] leading-[28px]">
                        Get actionable insights and predictions about <br className="hidden md:block" /> market movements before they happen, <br className="hidden md:block" /> giving you the edge.
                    </p>
                    <img src={insights} alt="insights image" />
                </div>
            </div>
        </section>
    );
};

export default Features;
