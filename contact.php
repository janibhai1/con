<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    if (isset($_POST['send'])) {
        require 'PHPMailer/Exception.php';
        require 'PHPMailer/PHPMailer.php';
        require 'PHPMailer/SMTP.php';

        $mail = new PHPMailer(true);

        // Initialize variables
        $name = isset($_POST['name']) ? $_POST['name'] : '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $message = isset($_POST['message']) ? $_POST['message'] : '';
        $number = isset($_POST['phone']) ? $_POST['phone'] : '';
        $services = isset($_POST['service']) ? implode(", ", $_POST['service']) : '';



        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'vffdudesmailer@gmail.com';
            $mail->Password = 'ginf eqqb bvxm utig';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;

            $mail->setFrom('vffdudesmailer@gmail.com', 'vfxdudes');
            $mail->addAddress('vfxdudesdata@gmail.com', 'User');

            // $services = implode(", ", $_POST['service']);
            $mail->isHTML(true);
            $mail->Subject = 'Contact Form Submission';
            $mail->Body = "Sender Name - $name <br> Sender Email - $email <br> message - $message <br> number - $number<br> services - $services" ;

?>

    <div id="main-wrap">
        <?php
        $mail->send();
        echo "<div id='thank-you-section'>
        <div class='ty-text'>

            <h2>Appreciate your message! <br>  We'll get back to you shortly.</h2>
        </div>
        </div>";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
        <nav>
            <div class="nav-t-elems">
                <div class="nav-logo cursorSmall"><a href="about.html">
                        <img src="https://vfxdudes.com/wp-content/uploads/2023/10/Logo_Test-5.png" alt="">
                    </a></div>
                <div class="toggle-btn">
                    <button class="burger cursorSmall" onclick="this.classList.toggle('active');">
                        <div class="nav-line"></div>
                    </button>
                </div>
            </div>
            <div class="overlay">
                <div class="overlay-menu">
                    <div class="menu-item"><div class="menu-item-name cursorMask"><p id="active"><a href="#">HOME</a></p></div></div>
                    <div class="menu-item"><div class="menu-item-name cursorMask"><p><a href="about.html">ABOUT</a></p></div></div>
                    <div class="menu-item"><div class="menu-item-name cursorMask"><p><a href="#">WORK</a></p></div></div>
                    <div class="menu-item"><div class="menu-item-name cursorMask"><p><a href="#">CONTACT</a></p></div></div>
                    <div class="menu-item"><div class="menu-item-name cursorMask"><p><a href="#">CAREERS</a></p></div></div>
                </div>
            </div>
        </nav>

        <div class="contact-wrap">
            <div class="contact-wrap-heading">
                <h2>Hey! We'd love to<br>hear all about it!</h2>
            </div>
            <div id="contact-btns">
                <div class="contact-services-heading"><h2>I'm interested in...</h2></div>
                <form class="form contact-form" action="" method="post">
                    <label class="vfx-selected-btn-cta">
                        <input type="checkbox" name="service[]" value="Viral CGI / Mixed Reality">
                        <span class="vfx-selected-btn-cta-border"></span>
                        <span class="vfx-selected-btn-cta-ripple"><span></span></span>
                        <span class="vfx-selected-btn-cta-title"><span data-text="Viral CGI / Mixed Reality">Viral CGI / Mixed Reality</span></span>
                    </label>
                    <label class="vfx-selected-btn-cta">
                        <input type="checkbox" name="service[]" value="3D Animation">
                        <span class="vfx-selected-btn-cta-border"></span>
                        <span class="vfx-selected-btn-cta-ripple"><span></span></span>
                        <span class="vfx-selected-btn-cta-title"><span data-text="3D Animation">3D Animation</span></span>
                    </label>
                    <label class="vfx-selected-btn-cta">
                        <input type="checkbox" name="service[]" value="Filming">
                        <span class="vfx-selected-btn-cta-border"></span>
                        <span class="vfx-selected-btn-cta-ripple"><span></span></span>
                        <span class="vfx-selected-btn-cta-title"><span data-text="Filming">Filming</span></span>
                    </label>
                    <label class="vfx-selected-btn-cta">
                        <input type="checkbox" name="service[]" value="Visual Effects">
                        <span class="vfx-selected-btn-cta-border"></span>
                        <span class="vfx-selected-btn-cta-ripple"><span></span></span>
                        <span class="vfx-selected-btn-cta-title"><span data-text="Visual Effects">Visual Effects</span></span>
                    </label>
                    <label class="vfx-selected-btn-cta">
                        <input type="checkbox" name="service[]" value="Content Creation">
                        <span class="vfx-selected-btn-cta-border"></span>
                        <span class="vfx-selected-btn-cta-ripple"><span></span></span>
                        <span class="vfx-selected-btn-cta-title"><span data-text="Content Creation">Content Creation</span></span>
                    </label>
                    <input type="text" id="name" name="name" placeholder="Your name" required><br>
                    <input type="email" id="email" name="email" placeholder="Your email" required><br>
                    <input type="tel" id="phone" name="phone" placeholder="Your number" required><br>
                    <textarea id="message" name="message" placeholder="Tell us about your project" required></textarea><br>
                    <button type="submit" id="submit" name="send" class="vfx-btn-cta">
                        <span class="vfx-btn-cta-border"></span>
                        <span class="vfx-btn-cta-ripple"><span></span></span>
                        <span class="vfx-btn-cta-title"><span data-text="Send request">Send request</span></span>
                    </button>
                </form>
            </div>
        </div>

        <div class="social-media-links-wrap">
            <div class="sm-ts"></div>
            <div id="sm-canvas"><canvas></canvas></div>
            <div class="sm-heading"><span>CONNECT WITH US</span></div>
            <div class="sm-links-wrap">
                <div class="sm-link"><div class="sm-link-mask"></div><a href="#">INSTAGRAM</a></div>
                <div class="sm-link"><div class="sm-link-mask"></div><a href="#">FACEBOOK</a></div>
                <div class="sm-link"><div class="sm-link-mask"></div><a href="#">YOUTUBE</a></div>
                <div class="sm-link"><div class="sm-link-mask"></div><a href="#">LINKEDIN</a></div>
                <div class="sm-link"><div class="sm-link-mask"></div><a href="#">DRIBBBLE</a></div>
            </div>
            <div class="sm-bs"></div>
        </div>

        <div class="blogs-section-wrapper">
            <div class="blogs-s-heading"><h2>Explore <br> Hidden Tales</h2></div>
            <div class="blogs-s-elems-wrapper">
                <a href="#" class="blogs-s-iso">
                    <div class="blogs-siso-details">
                        <div class="blogs-siso-name"><span>blog</span></div>
                        <div class="blogs-siso-date"><span>FEB 19, 2024</span></div>
                    </div>
                    <div class="blogs-siso-image">
                        <img src="https://vfxdudes.com/wp-content/uploads/2024/02/wepik-export-20240219115249UXTW.jpeg" alt="">
                        <div class="blogs-siso-title"><h2>The Artistry of Animation Spotlight on Pakistan's Thriving</h2></div>
                    </div>
                </a>
                <a href="#" class="blogs-s-iso">
                    <div class="blogs-siso-details">
                        <div class="blogs-siso-name"><span>blog</span></div>
                        <div class="blogs-siso-date"><span>DEC 10, 2023</span></div>
                    </div>
                    <div class="blogs-siso-image">
                        <img src="https://vfxdudes.com/wp-content/uploads/2023/10/maxresdefault-3.jpg" alt="">
                        <div class="blogs-siso-title"><h2>Unveiling the Rise of VFX Studios in Pakistan:</h2></div>
                    </div>
                </a>
            </div>
        </div>

        <footer>
            <div class="footer-wrap">
                <div class="footer-detail-wrapper">
                    <div class="footer-contact">
                        <div class="footer-contact-heading"><h3>GET IN TOUCH</h3></div>
                        <div class="footer-contact-details">
                            <a href="tel:+923428173692">+92 342 817 3692</a>
                            <a href="tel:+971588939479">+971 58 893 9479</a>
                            <a href="mailto:info@vfxdudes.com">info@vfxdudes.com</a>
                            <a href="#">Dubai, United Arab Emirates</a>
                            <a href="#">Commercial Area Phase II, D.H.A, Karachi, Pakistan</a>
                        </div>
                    </div>
                    <div class="footer-learn">
                        <div class="footer-learn-heading"><h3>LEARN MORE</h3></div>
                        <div class="footer-learn-links">
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms and Conditions</a>
                            <a href="#">FAQ</a>
                            <a href="#">BLOGS</a>
                            <a href="#">WORK</a>
                        </div>
                    </div>
                </div>
                <div class="footer-vfx"><span>VFX DUDES</span></div>
            </div>
        </footer>
    </div>

    <script src="https://unpkg.com/lenis@1.1.2/dist/lenis.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/gsap@3/dist/CSSRulePlugin.min.js"></script>
    <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
    <script src="https://unpkg.com/split-type"></script>
    <script src="script.js"></script>

</body>
</html>
