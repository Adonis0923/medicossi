import Navbar from './landing/navbar'
import Footer from './landing/footer'

function IndexContainer({children}){
    return (
        <>
            <Navbar />
            <section>{children}</section>

            <script src="js/jquery.min.js"></script>
            <script src="js/popper.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.smoove.js"></script>
            <script src="js/autonav.js"></script>
            <script src="js/counter.js"></script>
            <script src="js/wow.min.js"></script>
            <script src="js/jquery.countTo.js"></script>
            <script src="js/jquery.inview.min.js"></script>
            <script src="js/typed.min.js"></script>
            <script>
                {/* var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: true,
                    live: true,
                    callback: function(box) {},
                    scrollContainer: null
                });
                wow.init(); */}
            </script>
            <script src="js/main.js"></script>
            
            <Footer />
        </>
    ) 
}

export default IndexContainer