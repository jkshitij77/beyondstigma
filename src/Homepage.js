import React from 'react';
import './Homepage.css';
import Collapsible from 'react-collapsible';

function Homepage() {
    return(
        <div>
            <div class="cont-for-top">
            <div>
                <h1 class="mental">MENTAL ILLNESSES</h1>
                <h3 class="mental-cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim voluptates porro illum tenetur voluptatem esse deleniti ipsam rerum ducimus, 
                et corrupti minima eum modi eius asperiores quidem autem obcaecati!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates perspiciatis deleniti quo nisi itaque doloribus officiis, cumque tempore exercitationem maxime, repellendus veritatis at velit provident id. Expedita, exercitationem possimus!    
                </h3>
            </div>
            </div>

            <div class="cont-for-top">
            <div>
                <h1 class="mental">MORE MENTAL ILLNESSES</h1>
                <h3 class="mental-cont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim voluptates porro illum tenetur voluptatem esse deleniti ipsam rerum ducimus, 
                et corrupti minima eum modi eius asperiores quidem autem obcaecati!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates perspiciatis deleniti quo nisi itaque doloribus officiis, cumque tempore exercitationem maxime, repellendus veritatis at velit provident id. Expedita, exercitationem possimus!    
                </h3>
            </div>
            </div>

            <h1 class="mental-type-heading">ARTICLES ON MENTAL ILLNESSES</h1>
            
            <div class="dabba">
                <div class="chotadabba">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem? Architecto repellendus eveniet assumenda quas aliquam placeat repellat, reiciendis debitis earum magnam iste? Sit reiciendis nam doloremque dolorem ipsum. Accusamus.
                    <br /> <br /> 
                    <button class="read">
                        Read more
                    </button>
                </div>

                <div class="chotadabba">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem? Architecto repellendus eveniet assumenda quas aliquam placeat repellat, reiciendis debitis earum magnam iste? Sit reiciendis nam doloremque dolorem ipsum. Accusamus.
                    <br /> <br /> 
                    <button>
                        Read more
                    </button>
                </div>

                <div class="chotadabba">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem? Architecto repellendus eveniet assumenda quas aliquam placeat repellat, reiciendis debitis earum magnam iste? Sit reiciendis nam doloremque dolorem ipsum. Accusamus.
                    <br /> <br /> 
                    <button>
                        Read more
                    </button>
                </div>


            </div>
            <h1 class="mental-type-heading">REVIEWS</h1>
            <div class="dabba">
                <div class="chotadabba">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem? Architecto repellendus eveniet assumenda quas aliquam placeat repellat, reiciendis debitis earum magnam iste? Sit reiciendis nam doloremque dolorem ipsum. Accusamus.
                    <br /> <br /> 
                    <button class="read">
                        Read more
                    </button>
                </div>

                <div class="chotadabba">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem? Architecto repellendus eveniet assumenda quas aliquam placeat repellat, reiciendis debitis earum magnam iste? Sit reiciendis nam doloremque dolorem ipsum. Accusamus.
                    <br /> <br /> 
                    <button>
                        Read more
                    </button>
                </div>

                <div class="chotadabba">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolorem? Architecto repellendus eveniet assumenda quas aliquam placeat repellat, reiciendis debitis earum magnam iste? Sit reiciendis nam doloremque dolorem ipsum. Accusamus.
                    <br /> <br /> 
                    <button>
                        Read more
                    </button>
                </div>


            </div>

            <h1 class="mental-type-heading-FAQ">FREQUENTLY ASKED QUESTIONS</h1>
            
            <Collapsible trigger="Why am I asking a generic question? which is also to be quite long ">
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non ipsum minus quidem nulla quia perspiciatis exercitationem. Nihil nemo facere magni architecto, amet commodi! Delectus fugiat quod debitis voluptate dolore?</p>
                </div>
            </Collapsible>
            <Collapsible trigger="Why am I asking a generic question?">
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non ipsum minus quidem nulla quia perspiciatis exercitationem. Nihil nemo facere magni architecto, amet commodi! Delectus fugiat quod debitis voluptate dolore?</p>
                </div>
            </Collapsible>
            <Collapsible trigger="Why am I asking a generic question?">
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non ipsum minus quidem nulla quia perspiciatis exercitationem. Nihil nemo facere magni architecto, amet commodi! Delectus fugiat quod debitis voluptate dolore?</p>
                </div>
            </Collapsible>
            <Collapsible trigger="Why am I asking a generic question?">
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non ipsum minus quidem nulla quia perspiciatis exercitationem. Nihil nemo facere magni architecto, amet commodi! Delectus fugiat quod debitis voluptate dolore?</p>
                </div>
            </Collapsible>
            <Collapsible trigger="Why am I asking a generic question?">
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non ipsum minus quidem nulla quia perspiciatis exercitationem. Nihil nemo facere magni architecto, amet commodi! Delectus fugiat quod debitis voluptate dolore?</p>
                </div>
            </Collapsible>
            <Collapsible trigger="Why am I asking a generic question?">
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A non ipsum minus quidem nulla quia perspiciatis exercitationem. Nihil nemo facere magni architecto, amet commodi! Delectus fugiat quod debitis voluptate dolore?</p>
                </div>
            </Collapsible>

            <br />
            <br />
        </div>

    );
    
};

export default Homepage;