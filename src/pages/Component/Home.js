

const Home = () => {
    return (


        <>
            <div class="ss container" data-container>
                <div className="sss row">
                    <form class="form">
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Search Services"
                            autocomplete="off"
                            data-form-input
                        />
                        <button class="form__btn" data-form-button>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </form>
                    <div class="tile"></div>

                    <script
                        type="module"
                        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
                    ></script>
                    <script
                        nomodule
                        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                    ></script>
                </div>


            </div>
            <div className=" container">
                <div className=" car row">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class=" imagediv col-md-4">
                                <img className="imagess" src="https://ae01.alicdn.com/kf/H3a3ecd0a1ab94552bbf902072a771c9br/Basketball-shoes-sports-shoes-breathable-shoes-4444-gfdgds-fcxz-cgrf-fdg.jpg" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    <button>Best Deals</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aa">
                <div>
                    sss
                </div>
            </div>
        </>


    )
}

export default Home
