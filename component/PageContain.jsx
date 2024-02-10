import Image from 'next/image';
import React from 'react';
import Step1 from '@/app/images/step1.jpg';
import Step2 from '@/app/images/step2.jpg';

const PageContain = () => {
    return (
        <div>
            <section className="oggq7a-7 kACDjV">
                <div itemScope="" itemType="https://schema.org/HowTo" className="sc-1ibx895-0 bYWQJC">
                    <div color="black" className="yk6pkc-0 dhvFex oggq7a-4 hqXzRu">
                        <h3>How to convert YouTube videos to MP4 in Wave.video:<br /> Step-by-step guide</h3>
                    </div>
                    <ul className="sc-1sbn9nh-0 ejWKKN">
                        <li itemScope="" itemType="https://schema.org/HowToStep" className="oggq7a-6 dgcRev">
                            <div className="oggq7a-5 cogzrn">
                                <div className="oggq7a-3 guwape">
                                    <div className="mig0x4-0 kaTQda animated active">
                                        <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0' }}>
                                            <div className="stepsImgDiv" style={{ display: 'block', boxSizing: 'border-box', paddingTop: '5%' }}></div>
                                            <Image className="steps1Img" itemProp="image" alt="Step 1. Copy the URL" src={Step1} />
                                        </div>
                                    </div>
                                </div>
                                <div className="oggq7a-1 jhGbCI">
                                    <div className="mig0x4-0 kDuhCX animated active">
                                        <div color="black" className="yk6pkc-0 dhvFex oggq7a-0 edIUli">
                                            <h4>Step 1. Copy the URL</h4>
                                        </div>
                                        <div itemProp="text" color="black" className="yk6pkc-0 dhvFex oggq7a-0 edIUli">
                                            <p className="yk6pkc-1 TgzXT">First, open the video that you want to download on YouTube and copy its URL.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li itemScope="" itemType="https://schema.org/HowToStep" className="oggq7a-6 dgcRev">
                            <div className="oggq7a-5 cogzrn">
                                <div className="oggq7a-3 guwape">
                                    <div className="mig0x4-0 kDuhCX animated">
                                        <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0' }}>
                                            <div style={{ display: 'block', boxSizing: 'border-box', paddingTop: '5%' }}></div>
                                            <Image className="steps2Img" itemProp="image" alt="Step 2. Paste the URL" src={Step2} />
                                        </div>
                                    </div>
                                </div>
                                <div className="oggq7a-1 jhGbCI">
                                    <div className="mig0x4-0 kaTQda animated">
                                        <div color="black" className="yk6pkc-0 dhvFex oggq7a-0 edIUli">
                                            <h4>Step 2. Paste the URL</h4>
                                        </div>
                                        <div itemProp="text" color="black" className="yk6pkc-0 dhvFex oggq7a-0 edIUli">
                                            <p className="yk6pkc-1 TgzXT">Paste the YouTube URL into the box on the top of this page and click the “Download MP4” button. If you want to save the video to your Wave.video account and customize, host, or stream it, click on the “Save and edit video” button.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li itemScope="" itemType="https://schema.org/HowToStep" className="oggq7a-6 dgcRev">
                            <div className="oggq7a-5 cogzrn">
                                <div className="oggq7a-3 guwape">
                                    <div className="mig0x4-0 kaTQda animated">
                                        <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0' }}>
                                            <div className="stepsImgDiv" style={{ display: 'block', boxSizing: 'border-box', paddingTop: '5%' }}></div>
                                            <Image className="steps3Img" itemProp="image" width={800} height={100} alt="Step 3. Download the video" src="https://assets.animatron.com/static/images/data/convert/youtube-to-mp4/step3.webp?auto=format&amp;fit=max&amp;w=3840" decoding="async" style={{ minHeight: '20vh', maxHeight: '54vh' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="oggq7a-1 jhGbCI">
                                    <div className="mig0x4-0 kDuhCX animated">
                                        <div color="black" className="yk6pkc-0 dhvFex oggq7a-0 edIUli">
                                            <h4>Step 3. Download the video</h4>
                                        </div>
                                        <div itemProp="text" color="black" className="yk6pkc-0 dhvFex oggq7a-0 edIUli">
                                            <p className="yk6pkc-1 TgzXT">Now, the video will be automatically converted to MP4 format and saved to your device for you to use. Enjoy!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <div className="jqggro-0 cSrHjg">
                        <div className="oggq7a-2 cqwOyg"> </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PageContain;
