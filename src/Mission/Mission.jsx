import React from 'react';

const Mission = () => {
    return (
        <section className="w-full py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2">
                {/* Card 1 */}
                <div className="w-full pt-10 pr-10 pb-40 pl-10 gap-6 rounded-[12px] border border-[#18181866] flex flex-col items-start">
                    <h5 className="w-fit min-w-[208px] h-[40px] pt-2 pr-4 pb-2 pl-4 gap-[10px] rounded-[36px] border border-[#181818] font-lexend font-normal text-base leading-6 text-[#181818]">
                        AI Market Analysis
                    </h5>
                    <p className="font-lexend font-normal text-base leading-6 text-[#707070]">
                        Our AI continuously analyzes global markets, news, and trends to <br className="hidden sm:block" /> identify opportunities.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-full pt-10 pr-10 pb-40 pl-10 gap-6 rounded-[12px] border border-[#18181866] flex flex-col items-start">
                    <h5 className="w-fit min-w-[208px] sm:min-w-[332px] h-[55px] lg:h-[40px] pt-2 pr-4 pb-2 pl-4 gap-[10px] rounded-[36px] border border-[#181818] font-lexend font-normal text-base leading-6 text-[#181818] whitespace-break-spaces lg:whitespace-nowrap">
                        Personalized Recommendations
                    </h5>
                    <p className="font-lexend font-normal text-base leading-6 text-[#707070]">
                        Receive tailored trading recommendations based on your preferences <br className="hidden sm:block" /> and goals.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="w-full pt-10 pr-10 pb-40 pl-10 gap-6 rounded-[12px] border border-[#18181866] flex flex-col items-start">
                    <h5 className="w-fit min-w-[208px] h-[40px] pt-2 pr-4 pb-2 pl-4 gap-[10px] rounded-[36px] border border-[#181818] font-lexend font-normal text-base leading-6 text-[#181818]">
                        Trade Execution
                    </h5>
                    <p className="font-lexend font-normal text-base leading-6 text-[#707070]">
                        Execute trades manually or set up automated trading based on AI <br className="hidden sm:block" /> recommendations.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="w-full pt-10 pr-10 pb-40 pl-10 gap-6 rounded-[12px] border border-[#18181866] flex flex-col items-start">
                    <h5 className="w-fit min-w-[208px] h-[40px] pt-2 pr-4 pb-2 pl-4 gap-[10px] rounded-[36px] border border-[#181818] font-lexend font-normal text-base leading-6 text-[#181818]">
                        Performance Tracking
                    </h5>
                    <p className="font-lexend font-normal text-base leading-6 text-[#707070]">
                        Monitor your portfolio performance with detailed analytics and insights.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
