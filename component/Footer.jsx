import React from 'react'
import Logo2 from '@/app/images/logo2.png'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    return (

        <footer className="footer-sec">
            <div className="main">


                <div className="logo row">
                    <div className="footer-header">
                        <Image src={Logo2} className="manik" alt="" height={20} width={20} />
                    </div>
                    <div className="logo-des">
                        <p>This Website provides the tool to download any videos or convert video to mp3 , you can download the YOUTUBE , INSTAGRAM REELS , FACEBOOK , TWITTER videos directly to your local system, just copy and paste</p>

                        <a href="#" className="btn-know">Know More</a>
                    </div>


                </div>



                <div className="office row">
                    <div className="footer-header">
                        <h3 className="footer-header-title">Developer</h3>
                    </div>
                    <div className="office-des">
                        <p>Hello users,<br /> its Sanket Rathod , Developer of this site,<br />you can contact me from any queries</p>

                        <a href="#">sanketrathod7420@gmail.com</a>

                        <p className="num">+91-9999999999</p>
                    </div>
                </div>


                <div className="link row">
                    <div className="footer-header">
                        <h3 className="footer-header-title">Other Download Options</h3>
                    </div>

                    <div className="link-des">
                        <a href="" className="footer-links">Home</a>
                        <a href="instagram" className="footer-links">Instagram</a>
                        <a href="#" className="footer-links">Facebook</a>
                        <a href="#" className="footer-links">Twitter</a>
                        <a href="#" className="footer-links">Tik Tok</a>
                    </div>

                </div>


                <div className="newsletter row">
                    <div className="footer-header">
                        <h3 className="footer-header-title">Newsletter</h3>
                    </div>
                    <div className="newsletter-des">
                        <div className="subcribe"><i className="sub-icon ri-mail-check-fill"></i>
                            <input type="mail" placeholder="Enter Email ID" required />
                            <i className="sub-icon ri-arrow-right-line"></i>
                        </div>
                        <div className="icons">
                            <a href="https://www.instagram.com/mr.sanket.r/" target="_blank"><InstagramIcon/></a>
                            <a href="https://www.linkedin.com/in/sanketrathod757/" target="_blank"><LinkedInIcon/></a>
                            <a href="https://www.youtube.com/@sanketrathodyt" target='_blank'><YouTubeIcon/></a>
                            <a href="https://www.whatsapp.com/channel/0029VaJg4DBAe5Vhgm3LwI2w" target="_blank"><WhatsAppIcon/></a>
                            <a href="https://github.com/sanketrathod07" target="_blank"><GitHubIcon/></a>

                        </div>
                    </div>
                </div>


            </div>
            <div className="copyright">
                <hr />

                <p>©Copyright 2023  VORTEX.</p>
            </div>
        </footer>
    )
}

export default Footer
