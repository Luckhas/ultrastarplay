import React from "react";
import { Parallax, Background } from "react-parallax";
import Faq from "react-faq-component";
import TestItem from "../../components/carouselItem";


function Download() {
    return (
        <div id="middleContent" className="container-fluid p-0">
            <section id="channels" className="container-fluid">
                <div className="container">
                    <div className="mb-4">
                        <h2>Disponível para os seguintes dispositivos</h2>
                        <h1>Baixe agora</h1>
                    </div>
                    <div className="downloads">
                        <div className="row mb-5">
                            <div className="col">
                                <div className="text-center">
                                    <div className="my-3 my-md-0">
                                        <div>
                                            <img className="icon-download" src="/assets/images/telephone-android.svg" />
                                        </div>
                                        <div className="text-center">
                                            Celulares<br />
                                            <div className="description-download">
                                                Dispositivos Android
                                            </div>
                                            <a href="https://oss.vmfc.io/mfc/mobile/1050199/MFC_Mobile_151_prod.apk" className="btn btn-download">
                                                Download
                                            </a>
                                            <div className="note">
                                                * Android 5.1 ou superior
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="text-center">
                                    <div className="my-3 my-md-0">
                                        <div>
                                            <img className="icon-download" src="/assets/images/smart-tv.svg" />
                                        </div>
                                        <div className="text-center">
                                            Smart TV Android<br />
                                            <div className="description-download">
                                                Haier, JVC, Semp, Sony e TCL
                                            </div>
                                            <a href="https://oss.vmfc.io/mfc/20001/mfc_stb_genericft_201.apk" className="btn btn-download">
                                                Download
                                            </a>
                                            <div className="note">
                                                * Android 4.2 ou superior
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="text-center">
                                    <div className="my-3 my-md-0">
                                        <div>
                                            <img className="icon-download" src="/assets/images/fire-tv-stick.png" />
                                        </div>
                                        <div className="text-center">
                                            Fire TV Stick<br />
                                            <div className="description-download">
                                                Amazon
                                            </div>
                                            <a href="https://www.youtube.com/watch?v=mSbmbjjF7Uk&ab_channel=MyFamilyCinema" target="_blank" className="btn btn-download">
                                                Download
                                            </a>
                                            <div className="note">
                                                * Android 4.2 ou superior
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="text-center">
                                    <div className="my-3 my-md-0">
                                        <div>
                                            <img className="icon-download" src="/assets/images/tv-box.svg" />
                                        </div>
                                        <div className="text-center">
                                            TV box<br />
                                            <div className="description-download">
                                                Xiaomi e TV box Android
                                            </div>
                                            <a href="https://oss.vmfc.io/mfc/20001/mfc_stb_genericft_201.apk" className="btn btn-download">
                                                Download
                                            </a>
                                            <div className="note">
                                                * Android 4.2 ou superior
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="text-center">
                                    <div className="my-3 my-md-0">
                                        <div>
                                            <img className="icon-download" src="/assets/images/tablet.png" />
                                        </div>
                                        <div className="text-center">
                                            Tablet<br />
                                            <div className="description-download">
                                                Samsung e Lenovo
                                            </div>
                                            <a href="https://oss.vmfc.io/mfc/mobile/1050199/MFC_Mobile_151_prod.apk" className="btn btn-download">
                                                Download
                                            </a>
                                            <div className="note">
                                                * Android 5.1 ou superior
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Download;